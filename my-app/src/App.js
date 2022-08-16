// import logo from "./logo.svg";
import React from "react";
// import { useEffect, useState } from "react";
import "./App.css";
import FormPropsTextFields from "./components/mui-form";
// import Clock from "./components/Clock";
// import FuncClock from "./components/FuncClock";
// import MessageComponent from "./components/message-component";
// import { useEffect } from "react";

// const sentMessage = "Your message has just been sent";

function App() {
  // const [messageList, setMessageList] = useState([]);
  // const [message, setMessage] = useState("");
  // const [author, setAuthor] = useState("");
  // const [robotMessage, setRobotMessage] = useState("");

  // useEffect(() => {
  //   const showMessageTimeout = setTimeout(() => {
  //     setRobotMessage(messageList.length ? sentMessage : "");

  //     clearRobotMessage(3000);
  //   }, 1500);

  //   return () => {
  //     clearTimeout(showMessageTimeout);
  //     setRobotMessage("");
  //   };
  // }, [messageList]);

  // const clearRobotMessage = (timeout) => {
  //   setTimeout(() => {
  //     setRobotMessage("");
  //   }, timeout);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(messageList);
  //   setMessageList(messageList.concat({ message: message, author: author }));
  //   console.log(messageList);
  // };

  // const handleChangeM = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleChangeA = (e) => {
  //   setAuthor(e.target.value);
  // };

  return (
    <FormPropsTextFields />
    // <>
    //   <form className="form" onSubmit={handleSubmit}>
    //     <label className="label">
    //       message:
    //       <br />
    //       <input
    //         className="input"
    //         type="text"
    //         onChange={handleChangeM}
    //         value={message}
    //       />
    //     </label>
    //     <br />
    //     <label className="label">
    //       author:
    //       <br />
    //       <input
    //         className="input name"
    //         type="text"
    //         onChange={handleChangeA}
    //         value={author}
    //       />
    //     </label>
    //     <br />
    //     <label>
    //       <button className="button" type="submit">
    //         Send message
    //       </button>
    //     </label>
    //     <div>{robotMessage}</div>
    //   </form>
    //   <div className="list">
    //     Message List:
    //     {messageList.map(
    //       (message, index) => (
    //         console.log(message),
    //         (
    //           <div key={"message" + index} className="list-item">
    //             <div className="text">
    //               <span className="author">
    //                 {index + 1}. {message.author}: &nbsp;
    //               </span>
    //               "{message.message}"
    //             </div>
    //           </div>
    //         )
    //       )
    //     )}
    //   </div>
    // </>
  );
}

export default App;
