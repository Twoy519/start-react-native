import React from "react";
import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

import { FlexibleCard as Card, StyleGuide, cards } from "../../components";

interface Layout {
  id: string;
  name: string;
  layout: {
    container: ViewStyle;
    child?: ImageStyle;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleGuide.palette.background,
  },
});

const { width } = Dimensions.get("window");

const column: Layout = {
  id: "column",
  name: "Column",
  layout: {
    container: {},
  },
};

const row: Layout = {
  id: "row",
  name: "Row",
  layout: {
    container: {
      flexDirection: "row",
    },
  },
};

const wrap: Layout = {
  id: "wrap",
  name: "Wrap",
  layout: {
    container: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
    },
    child: {
      // flex 0 so the width is taken into account?
      flex: 0,
      width: width / 2 - StyleGuide.spacing * 2,
    },
  },
};

const currentLayout = wrap.layout;

const Transitions = () => {
  return (
    <View style={[styles.container, currentLayout.container]}>
      {cards.map((card) => (
        <Card key={card.id} style={currentLayout.child} {...{ card }} />
      ))}
    </View>
  );
};

export default Transitions;
