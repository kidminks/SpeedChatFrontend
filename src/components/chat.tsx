import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "native-base";

import { GiftedChat, Send } from "react-native-gifted-chat";

export default function ChatComponent() {
  const [messages, setMessages] = useState([]);
  return (
    <GiftedChat
      messages={messages}
      onSend={m => setMessages(GiftedChat.append(messages, m))}
      user={{
        _id: 1,
        name: "Mayank"
      }}
      alwaysShowSend
      isAnimated
      renderSend={props => {
        return (
          <Send {...props}>
            <Icon name="send" style={styles.send} />
          </Send>
        );
      }}
      renderTime={props => {
        return null;
      }}
    />
  );
}

const styles = StyleSheet.create({
  send: {
    marginBottom: 10,
    marginRight: 10
  }
});
