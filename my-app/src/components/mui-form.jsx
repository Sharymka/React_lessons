import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css";

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
  };

  const handleChangeA = (e) => {
    setAuthor(e.target.value);
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
          },
          "& label": {
            color: "white",
          },

          "& .MuiInput-underline:after": {
            borderBottomColor: "white",
          },

          "&:hover fieldset": {
            borderColor: "white",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            className="mui-input"
            //   required
            onChange={handleChangeM}
            value={message}
            id="standard-basic"
            label="Message"
            variant="standard"
            placeholder="Your message must be here"
          />
          <TextField
            //   required
            className="mui-input"
            onChange={handleChangeA}
            value={author}
            id="standard-basic"
            label="Author"
            variant="standard"
            placeholder="Your name must be here"
          />
          <div>{robotMessage}</div>
          <Button
            style={{
              borderRadius: 5,
              backgroundColor: "rgb(197, 177, 216)",
              padding: "18px 36px",
              fontSize: "18px",
              marginTop: "10px",
            }}
            variant="contained"
            type="submit"
          >
            Send message
          </Button>
        </div>
      </Box>
      <div className="list">
        Message List:
        {messageList.map((message, index) => (
          <div key={"message" + index} className="list-item">
            <div className="text">
              <span className="author">
                {index + 1}. {message.author}: &nbsp;
              </span>
              "{message.message}"
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
