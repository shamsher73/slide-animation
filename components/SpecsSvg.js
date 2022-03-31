import { View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, Line, Text as SvgText } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SpecsSvg = ({ expandOffset }) => {
    const bassProps = useAnimatedProps(() => {
        const value = interpolate(
        expandOffset.value,
        [0, 1],
        [100, 10],
        Extrapolate.CLAMP
        );
        return {
        cy: withTiming(value, {
            duration: 1000,
        }),
        };
    });

    const midsProps = useAnimatedProps(() => {
        const value = interpolate(
        expandOffset.value,
        [0, 1],
        [100, 70],
        Extrapolate.CLAMP
        );

        return {
        cy: withTiming(value, {
            duration: 1000,
        }),
        };
    });

    const trebalProps = useAnimatedProps(() => {
        const value = interpolate(
        expandOffset.value,
        [0, 1],
        [100, 40],
        Extrapolate.CLAMP
        );

        return {
        cy: withTiming(value, {
            duration: 1000,
        }),
        };
    });
    return (
        <View style={{ position: "relative", marginTop: -300, padding: 30 }}>
        <Svg height="100%" width="100%" viewBox="0 0 100 110">
            <AnimatedCircle
            cx="20"
            cy="50"
            r="3"
            stroke="#4a4a4a"
            strokeWidth="1"
            fill="white"
            animatedProps={bassProps}
            />
            <AnimatedCircle
            cx="50"
            cy="50"
            r="3"
            stroke="#4a4a4a"
            strokeWidth="1"
            fill="white"
            animatedProps={midsProps}
            />
            <AnimatedCircle
            cx="80"
            cy="50"
            r="3"
            stroke="#4a4a4a"
            strokeWidth="1"
            fill="white"
            animatedProps={trebalProps}
            />
            <Line x1="0" y1="0" x2="100" y2="0" stroke="white" strokeWidth="0.5" />
            <Line
            x1="0"
            y1="50"
            x2="100"
            y2="50"
            stroke="white"
            strokeWidth="0.5"
            />
            <Line
            x1="0"
            y1="100"
            x2="100"
            y2="100"
            stroke="white"
            strokeWidth="0.5"
            />
            <Line x1="20" y1="0" x2="20" y2="100" stroke="white" strokeWidth="1" />
            <Line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="1" />
            <Line x1="80" y1="0" x2="80" y2="100" stroke="white" strokeWidth="1" />

            <SvgText
            fill="white"
            stroke="none"
            fontSize="4"
            fontWeight="bold"
            x="20"
            y="110"
            textAnchor="middle"
            >
            BASS
            </SvgText>

            <SvgText
            fill="white"
            stroke="none"
            fontSize="4"
            fontWeight="bold"
            x="50"
            y="110"
            textAnchor="middle"
            >
            MIDS
            </SvgText>

            <SvgText
            fill="white"
            stroke="none"
            fontSize="4"
            fontWeight="bold"
            x="80"
            y="110"
            textAnchor="middle"
            >
            TREBLE
            </SvgText>
        </Svg>
        </View>
    );
};

export default SpecsSvg;
