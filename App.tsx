import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { EXERCISES, TOTAL_SECONDS, generateSessionPlan } from './src/data/exercises';
import CompleteScreen from './src/screens/CompleteScreen';
import IdleScreen from './src/screens/IdleScreen';
import SessionScreen from './src/screens/SessionScreen';
import { colors } from './src/theme';
import { AppPhase, SessionExercise } from './src/types';

export default function App() {
  useKeepAwake();

  const [phase, setPhase] = useState<AppPhase>('idle');
  const [totalElapsed, setTotalElapsed] = useState(0);
  const [segmentElapsed, setSegmentElapsed] = useState(0);
  const [currentSegmentIdx, setCurrentSegmentIdx] = useState(0);
  const [sessionPlan, setSessionPlan] = useState<SessionExercise[]>([]);
  const [bpm, setBpm] = useState<75 | 90 | 100 | 120>(90);
  const [completedCount, setCompletedCount] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const endSession = useCallback((idx: number, plan: SessionExercise[]) => {
    stopTimer();
    setCompletedCount(Math.min(idx + 1, plan.length));
    setPhase('complete');
  }, [stopTimer]);

  useEffect(() => {
    if (phase !== 'running') return;

    intervalRef.current = setInterval(() => {
      setTotalElapsed((te) => {
        const nextTotal = te + 1;
        if (nextTotal >= TOTAL_SECONDS) {
          setCurrentSegmentIdx((idx) => {
            endSession(idx, sessionPlan);
            return idx;
          });
          return nextTotal;
        }

        setSegmentElapsed((se) => {
          const nextSeg = se + 1;
          setCurrentSegmentIdx((idx) => {
            if (nextSeg >= sessionPlan[idx]?.assignedDuration) {
              const nextIdx = idx + 1;
              if (nextIdx >= sessionPlan.length) {
                endSession(idx, sessionPlan);
                return idx;
              }
              return nextIdx;
            }
            return idx;
          });
          return nextSeg;
        });

        return nextTotal;
      });
    }, 1000);

    return stopTimer;
  }, [phase, sessionPlan, stopTimer, endSession]);

  // Reset segmentElapsed when segment changes
  const prevSegmentIdx = useRef(currentSegmentIdx);
  useEffect(() => {
    if (currentSegmentIdx !== prevSegmentIdx.current) {
      setSegmentElapsed(0);
      prevSegmentIdx.current = currentSegmentIdx;
    }
  }, [currentSegmentIdx]);

  const handleStart = useCallback(() => {
    const plan = generateSessionPlan(EXERCISES);
    setSessionPlan(plan);
    setTotalElapsed(0);
    setSegmentElapsed(0);
    setCurrentSegmentIdx(0);
    prevSegmentIdx.current = 0;
    setPhase('running');
  }, []);

  const handlePauseResume = useCallback(() => {
    setPhase((p) => (p === 'running' ? 'paused' : 'running'));
  }, []);

  const handleSkip = useCallback(() => {
    setCurrentSegmentIdx((idx) => {
      const next = idx + 1;
      if (next >= sessionPlan.length) {
        endSession(idx, sessionPlan);
        return idx;
      }
      setSegmentElapsed(0);
      prevSegmentIdx.current = next;
      return next;
    });
  }, [sessionPlan, endSession]);

  const handleReset = useCallback(() => {
    stopTimer();
    setPhase('idle');
    setTotalElapsed(0);
    setSegmentElapsed(0);
    setCurrentSegmentIdx(0);
    prevSegmentIdx.current = 0;
  }, [stopTimer]);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎛 Scratch Trainer</Text>
      </View>

      {phase === 'idle' && (
        <IdleScreen bpm={bpm} onBpmChange={setBpm} onStart={handleStart} />
      )}

      {(phase === 'running' || phase === 'paused') && sessionPlan.length > 0 && (
        <SessionScreen
          totalElapsed={totalElapsed}
          segmentElapsed={segmentElapsed}
          currentSegmentIdx={currentSegmentIdx}
          sessionPlan={sessionPlan}
          bpm={bpm}
          isPaused={phase === 'paused'}
          onPauseResume={handlePauseResume}
          onSkip={handleSkip}
          onReset={handleReset}
        />
      )}

      {phase === 'complete' && (
        <CompleteScreen
          completedCount={completedCount}
          bpm={bpm}
          onNewSession={handleStart}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
  },
});
