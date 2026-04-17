import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme';

interface Props {
  completedCount: number;
  bpm: number;
  onNewSession: () => void;
}

export default function CompleteScreen({ completedCount, bpm, onNewSession }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>🔥</Text>
        <Text style={styles.title}>כל הכבוד!</Text>
        <Text style={styles.subtitle}>סיימת את אימון הסקראצינג היומי שלך</Text>

        <View style={styles.stats}>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>{completedCount}</Text>
            <Text style={styles.statLabel}>תרגילים</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>10</Text>
            <Text style={styles.statLabel}>דקות</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>{bpm}</Text>
            <Text style={styles.statLabel}>BPM</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.btn} onPress={onNewSession} activeOpacity={0.85}>
          <Text style={styles.btnText}>▶  אימון חדש</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    backgroundColor: colors.surface,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.accent3,
    padding: 32,
    alignItems: 'center',
    gap: 12,
  },
  icon: { fontSize: 56 },
  title: { fontSize: 28, fontWeight: '900', color: colors.text },
  subtitle: { fontSize: 14, color: colors.muted, textAlign: 'center' },
  stats: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 8,
  },
  statBox: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    minWidth: 80,
  },
  statVal: { fontSize: 28, fontWeight: '800', color: colors.accent3 },
  statLabel: { fontSize: 12, color: colors.muted, marginTop: 2 },
  btn: {
    backgroundColor: colors.accent,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 14,
    marginTop: 8,
  },
  btnText: { fontSize: 17, fontWeight: '800', color: '#fff' },
});
