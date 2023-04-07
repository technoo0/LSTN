import React from 'react'
import Animated, { useAnimatedProps, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { SvgXml, Circle, Svg } from 'react-native-svg';






const AnimatedCircle = Animated.createAnimatedComponent(Circle);
export default function EllipeSvg() {
    const rim = useSharedValue(180);
    const animatedProps = useAnimatedProps(() => {
        return {
            r: withRepeat(
                withSequence(
                    withTiming(120, { duration: 1000 }),
                    withTiming(180, { duration: 1000 })),
                -1, true),
        };
    });
    return (
        <Svg width="370" height="370" viewBox="0 0 370 370" fill="none" >
            <AnimatedCircle animatedProps={animatedProps} cx="185" cy="185" r="200" fill="#D9962A" />
        </Svg>
    )
}    