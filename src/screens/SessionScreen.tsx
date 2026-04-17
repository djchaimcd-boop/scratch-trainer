import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import { SessionExercise } from '../types';
import { colors } from '../theme';
import { TOTAL_SECONDS } from '../data/exercises';

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function DifficultyDots({ level }: { level: number }) {
  return (
    <View style={styles.dots}>
      {[1, 2, 3, 4].map((i) => (
        <View key={i} style={[styles.dot, i <= level && styles.dotFilled]} />
      ))}
    </View>
  );
}

interface Props {
  totalElapsed: number;
  segmentElapsed: number;
  currentSegmentIdx: number;
  sessionPlan: SessionExercise[];
  bpm: number;
  isPaused: boolean;
  onPauseResume: () => void;
  onSkip: () => void;
  onReset: () => void;
}

export default function SessionScreen({
  totalElapsed,
  segmentElapsed,
  currentSegmentIdx,
  sessionPlan,
  bpm,
  isPaused,
  onPauseResume,
  onSkip,
  onReset,
}: Props) {
  const ex = sessionPlan[currentSegmentIdx];
  const timeLeft = TOTAL_SECONDS - totalElapsed;
  const segmentLeft = ex.assignedDuration - segmentElapsed;
  const totalProgress = totalElapsed / TOTAL_SECONDS;
  const segmentProgress = segmentElapsed / ex.assignedDuration;
  const isWarning = timeLeft <= 60;

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Timer */}
      <View style={styles.timerCard}>
        <Text style={[styles.timerText, isWarning && styles.timerWarning]}>
          {formatTime(timeLeft)}
        </Text>
        <View style={styles.progressWrap}>
          <ProgressBar progress={totalProgress} color={isWarning ? colors.accent2 : colors.accent} />
        </View>
        <View style={styles.controls}>
          <TouchableOpacity style={styles.btnSecondary} onPress={onPauseResume}>
            <Text style={styles.btnSecondaryText}>{isPaused ? '▶  המשך' : '⏸  השהה'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSecondary} onPress={onSkip}>
            <Text style={styles.btnSecondaryText}>⏭  דלג</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDanger} onPress={onReset}>
            <Text style={styles.btnDangerText}>✕  איפוס</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Exercise Card */}
      <View style={styles.exerciseCard}>
        <View style={styles.exTopBar} />
        <View style={styles.exHeader}>
          <View style={styles.exMeta}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{ex.category}  •  BPM {bpm}</Text>
            </View>
            <Text style={styles.exName}>{ex.name}</Text>
            <Text style={styles.exNameHe}>{ex.nameHe}</Text>
          </View>
          <DifficultyDots level={ex.difficulty} />
        </View>

        {/* Segment timer */}
        <View style={styles.segmentRow}>
          <Text style={styles.segmentTime}>⏱  {formatTime(segmentLeft)}</Text>
          <View style={styles.segmentBarWrap}>
            <ProgressBar progress={segmentProgress} color={colors.accent3} height={4} />
          </View>
          <Text style={styles.segmentTotal}>{ex.assignedDuration}s</Text>
        </View>

        <Text style={styles.exDesc}>{ex.description}</Text>

        <View style={styles.tipsBox}>
          <Text style={styles.tipsTitle}>טיפים</Text>
          {ex.tips.map((tip, i) => (
            <View key={i} style={styles.tipRow}>
              <Text style={styles.tipArrow}>›</Text>
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Session Plan */}
      <View style={styles.planCard}>
        <Text style={styles.planTitle}>תכנית האימון</Text>
        {sessionPlan.map((e, i) => {
          const isDone = i < currentSegmentIdx;
          const isActive = i === currentSegmentIdx;
          return (
            <View
              key={i}
              style={[
                styles.planItem,
                isActive && styles.planItemActive,
                isDone && styles.planItemDone,
              ]}
            >
              <View style={[styles.planNum, isActive && styles.planNumActive, isDone && styles.planNumDone]}>
                <Text style={styles.planNumText}>{isDone ? '✓' : i + 1}</Text>
              </View>
              <Text style={[styles.planItemName, isDone && styles.planItemDoneText, isActive && styles.planItemActiveText]}>
                {e.name}
              </Text>
              <Text style={styles.planItemDur}>{e.assignedDuration}s · {e.difficulty}/4</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  content: { padding: 16, gap: 14, paddingBottom: 40 },

  timerCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    alignItems: 'center',
    gap: 16,
  },
  timerText: {
    fontSize: 72,
    fontWeight: '900',
    color: colors.accent,
    letterSpacing: -3,
    fontVariant: ['tabular-nums'],
  },
  timerWarning: { color: colors.accent2 },
  progressWrap: { width: '100%' },
  controls: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnSecondary: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  btnSecondaryText: { color: colors.text, fontWeight: '700', fontSize: 14 },
  btnDanger: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.accent2,
  },
  btnDangerText: { color: colors.accent2, fontWeight: '700', fontSize: 14 },

  exerciseCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    padding: 20,
    gap: 14,
  },
  exTopBar: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 4,
    backgroundColor: colors.accent,
  },
  exHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  exMeta: { gap: 4, flex: 1 },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: colors.card,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tagText: { fontSize: 11, color: colors.muted, textTransform: 'uppercase', letterSpacing: 0.5 },
  exName: { fontSize: 26, fontWeight: '800', color: colors.text, marginTop: 4 },
  exNameHe: { fontSize: 14, color: colors.muted },
  dots: { flexDirection: 'row', gap: 5, marginTop: 4 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.border },
  dotFilled: { backgroundColor: colors.accent3 },

  segmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 10,
  },
  segmentTime: { fontSize: 13, color: colors.muted, minWidth: 56 },
  segmentBarWrap: { flex: 1 },
  segmentTotal: { fontSize: 12, color: colors.muted },

  exDesc: { fontSize: 15, color: '#c0c0d8', lineHeight: 22 },

  tipsBox: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 14,
    gap: 6,
  },
  tipsTitle: {
    fontSize: 11,
    color: colors.accent3,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  tipRow: { flexDirection: 'row', gap: 8 },
  tipArrow: { color: colors.accent, fontSize: 16, lineHeight: 20 },
  tipText: { fontSize: 13, color: colors.muted, flex: 1, lineHeight: 20 },

  planCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    gap: 8,
  },
  planTitle: {
    fontSize: 11,
    color: colors.muted,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  planItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  planItemActive: {
    backgroundColor: colors.card,
    borderColor: colors.accent,
  },
  planItemDone: { opacity: 0.4 },
  planNum: {
    width: 24, height: 24,
    borderRadius: 12,
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planNumActive: { backgroundColor: colors.accent },
  planNumDone: { backgroundColor: colors.accent3 },
  planNumText: { fontSize: 11, fontWeight: '700', color: '#fff' },
  planItemName: { flex: 1, fontSize: 14, color: colors.muted },
  planItemActiveText: { color: colors.text, fontWeight: '600' },
  planItemDoneText: { color: colors.muted },
  planItemDur: { fontSize: 12, color: colors.muted },
});
