import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme';

const BPM_OPTIONS = [75, 90, 100, 120] as const;

interface Props {
  bpm: number;
  onBpmChange: (bpm: 75 | 90 | 100 | 120) => void;
  onStart: () => void;
}

export default function IdleScreen({ bpm, onBpmChange, onStart }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🎛</Text>
      <Text style={styles.title}>Scratch Trainer</Text>
      <Text style={styles.subtitle}>אימון סקראצינג יומי — 10 דקות</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>5 תרגילים רנדומליים • רמות מעורבות</Text>

        <View style={styles.bpmRow}>
          <Text style={styles.bpmLabel}>BPM:</Text>
          {BPM_OPTIONS.map((b) => (
            <TouchableOpacity
              key={b}
              style={[styles.bpmBtn, bpm === b && styles.bpmBtnActive]}
              onPress={() => onBpmChange(b)}
            >
              <Text style={[styles.bpmBtnText, bpm === b && styles.bpmBtnTextActive]}>{b}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.startBtn} onPress={onStart} activeOpacity={0.85}>
        <Text style={styles.startBtnText}>▶  התחל אימון</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 16,
  },
  icon: { fontSize: 56 },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.text,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 15,
    color: colors.muted,
    marginTop: -8,
  },
  card: {
    width: '100%',
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    marginTop: 8,
    gap: 16,
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: 13,
    color: colors.muted,
    textAlign: 'center',
  },
  bpmRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bpmLabel: {
    fontSize: 14,
    color: colors.muted,
    marginRight: 4,
  },
  bpmBtn: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  bpmBtnActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  bpmBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.muted,
  },
  bpmBtnTextActive: {
    color: '#fff',
  },
  startBtn: {
    backgroundColor: colors.accent,
    paddingHorizontal: 48,
    paddingVertical: 18,
    borderRadius: 16,
    marginTop: 8,
  },
  startBtnText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
  },
});
