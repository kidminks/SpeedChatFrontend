import React from "react";
import { StyleSheet } from "react-native";
import { Icon, Header, Left, Button, Body, Text, Right } from "native-base";
import PropTypes from "prop-types";

export default function HeaderComponent({ text, right }) {
  return (
    <Header style={styles.header}>
      <Left style={styles.left}>
        <Button transparent>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body style={styles.body}>
        <Text>{text}</Text>
      </Body>
      <Right style={styles.right}>{right}</Right>
    </Header>
  );
}

HeaderComponent.prototype = {
  text: PropTypes.string.isRequired,
  right: PropTypes.any
};

HeaderComponent.defaultProps = {
  right: null
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red"
  },
  left: {
    flex: 1
  },
  body: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  right: {
    flex: 1
  }
});
