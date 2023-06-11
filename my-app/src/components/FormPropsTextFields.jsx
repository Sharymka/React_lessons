import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import "./style.css";
import InteractiveList from "./InteractiveList";
// import { ThemeProvider } from "@emotion/react";
import BtnSendMessage from "./BtnSendMessage";
import MessageInput from "./MessageInput";
import AuthorInput from "./AuthorInput";
import BtnChangeTheme from "./BtnChangeTheme";
import RobotMessage from "./RobotMessage";
import MessageList from "./MessageList";

const sentMessage = "Your message has just been sent";

export default function FormPropsTextFields() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [robotMessage, setRobotMessage] = useState("");

  useEffect(() => {
    const showMessageTimeout = setTimeout(() => {
      setRobotMessage(messageList.length ? sentMessage : "");

      clearRobotMessage(3000);
    }, 1500);

    return () => {
      clearTimeout(showMessageTimeout);
      setRobotMessage("");
    };
  }, [messageList]);

  const clearRobotMessage = (timeout) => {
    setTimeout(() => {
      setRobotMessage("");
    }, timeout);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messageList);
    setMessageList(messageList.concat({ message: message, author: author }));
    console.log(messageList);
  };

  const handleChangeM = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  const handleChangeA = (e) => {
    setAuthor(e.target.value);
    console.log(author);
  };

  return (
    <div className="container">
      <Box
        className="mui-form "
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "25ch",
            display: "flex",
          },
          "& label.Mui-focused": {
            color: "white",
            borderColor: "transparent",
          },
          "& label": {
            color: "white",
          },

          "& .MuiInput-underline:before": {
            borderBottomColor: "white",
          },

          "& .MuiInput-underline:after": {
            borderBottomColor: "white",
          },

          "& .MuiInput-root:hover": {
            borderBottomColor: "white",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <MessageInput
            message={message}
            handleChangeM={handleChangeM}
          ></MessageInput>
          <AuthorInput
            message={author}
            handleChangeA={handleChangeA}
          ></AuthorInput>
          <BtnSendMessage>Sent message</BtnSendMessage>
          <BtnChangeTheme></BtnChangeTheme>
          <RobotMessage robotMessage={robotMessage}></RobotMessage>
        </div>
      </Box>
      <div className="chat-list">
        <InteractiveList messageList={messageList}></InteractiveList>
        <MessageList messageList={messageList}>Message List:</MessageList>
      </div>
    </div>
  );
}
