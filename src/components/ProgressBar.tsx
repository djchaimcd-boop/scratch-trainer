import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

interface Props {
  progress: number; // 0–1
  color?: string;
  height?: number;
  animated?: boolean;
}

export default function ProgressBar({ progress, color = '#6c63ff', height = 6, animated = true }: Props) {
  const anim = useRef(new Animated.Value(progress)).current;

  useEffect(() => {
    if (animated) {
      Animated.timing(anim, { toValue: progress, duration: 800, useNativeDriver: false }).start();
    } else {
      anim.setValue(progress);
    }
  }, [progress]);

  const width = anim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] });

  return (
    <View style={[styles.track, { height }]}>
      <Animated.View style={[styles.fill, { width, backgroundColor: color, height }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    backgroundColor: '#2a2a44',
    borderRadius: 99,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: 99,
  },
});
