import React, { useEffect, useState } from "react";
import {KeyboardAvoidingView, StatusBar, StyleSheet} from "react-native";
import { Container, Text } from "native-base";

import HeaderComponent from "../components/header";
import ChatComponent from "../components/chat";

export default function ChatScreen() {
  const [time, setTime] = useState(1000);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <Container style={styles.container}>
      <HeaderComponent text={"Chat it out"} right={<Text>{time}</Text>} />
      <ChatComponent/>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={StatusBar.currentHeight}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});
