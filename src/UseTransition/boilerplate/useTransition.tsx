import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { useTransition } from "react-native-redash";

import { Button, Card, cards, StyleGuide } from "../../components";

const { multiply, interpolate, not } = Animated;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

const transformOrigin = -1 * (width / 2 - StyleGuide.spacing * 2);

const UseTransition = () => {
  const [toggled, setToggled] = useState<0 | 1>(0);
  return (
    <View style={styles.container}>
      {cards.map((card, index) => {
        let direction = 0;
        if (index === 0) {
          direction = -1;
        } else if (index === 2) {
          direction = 1;
        }
        const rotate = direction * (toggled ? Math.PI / 6 : 0);
        return (
          <Animated.View
            key={card.id}
            style={[
              styles.overlay,
              {
                transform: [
                  { translateX: transformOrigin },
                  { rotate: `${rotate}rad` },
                  { translateX: -transformOrigin },
                ],
              },
            ]}
          >
            <Card {...{ card }} />
          </Animated.View>
        );
      })}
      <Button
        primary
        label={toggled ? "Reset" : "Start"}
        onPress={() => setToggled(toggled ^ 1)}
      />
    </View>
  );
};

export default UseTransition;
