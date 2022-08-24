import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./style.css";
import InteractiveList from "./InteractiveList";
// import { ThemeProvider } from "@emotion/react";
import BtnSendMessage from "./BtnSendMessage";
import MessageInput from "./MessageInput";
import AuthorInput from "./AuthorInput";
import BtnChangeTheme from "./BtnChangeTheme";
import RobotMessage from "./RobotMessage";

const sentMessage = "Your message has just been sent";

export default function FormPropsTextFields(props) {
  const { id, deleteMessageList, addMessageList, chats } = props;
  const [post, setPost] = useState({});
  const [robotMessage, setRobotMessage] = useState("");

  useEffect(() => {
    const showMessageTimeout = setTimeout(() => {
      setRobotMessage(Object.keys(post).length !== 0 ? sentMessage : "");

      clearRobotMessage(3000);
    }, 1500);

    return () => {
      clearTimeout(showMessageTimeout);
      setRobotMessage("");
    };
  }, [post]);

  const clearRobotMessage = (timeout) => {
    setTimeout(() => {
      setRobotMessage("");
    }, timeout);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log("сообщение");
    // console.log(message);
    // setPost((previous) => ({
    //   ...previous,
    //   message: ,
    // }));
    // console.log(post);

    addMessageList(id, post);
    // console.log(post);
  };

  const onChangeMessage = (e) => {
    setPost({ ...post, message: e.target.value });
  };

  const onChangeAuthor = (e) => {
    setPost({ ...post, author: e.target.value });
  };

  return (
    <div className="container">
      <Box
        className="mui-form"
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
          <div>chat №{props.id}</div>
          <MessageInput value={post.message} onChange={onChangeMessage} />
          <AuthorInput value={post.author} onChange={onChangeAuthor} />
          <BtnSendMessage id={id}>Sent message</BtnSendMessage>
          <BtnChangeTheme />
          <RobotMessage robotMessage={robotMessage}></RobotMessage>
        </div>
      </Box>
      <div className="chat-list">
        <InteractiveList
          deleteMessageList={deleteMessageList}
          id={id}
          chats={chats}
        ></InteractiveList>
        {/* <MessageList
          post={post}
          addMessageList={addMessageList}
          deleteMessageList={deleteMessageList}
          chats={chats}
          id={id}
        >
          Message List:
        </MessageList> */}
      </div>
    </div>
  );
}
