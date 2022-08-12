// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import Clock from "./components/Clock";
// import FuncClock from "./components/FuncClock";
// import MessageComponent from "./components/message-component";
// import { useEffect } from "react";

function App() {
  const [messageList, setmessageList] = useState([]);
  const [message, setmessage] = useState("");
  const [author, setauthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messageList);
    setmessageList(messageList.concat({ message: message, author: author }));
    console.log(messageList);
  };

  const handleChangeM = (e) => {
    setmessage(e.target.value);
  };

  const handleChangeA = (e) => {
    setauthor(e.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          message:
          <br />
          <input
            className="input"
            type="text"
            onChange={handleChangeM}
            value={message}
          />
        </label>
        <br />
        <label className="label">
          author:
          <br />
          <input
            className="input name"
            type="text"
            onChange={handleChangeA}
            value={author}
          />
        </label>
        <br />
        <label>
          <button className="button" type="submit">
            Send message
          </button>
        </label>
      </form>
      <div className="list">
        Message List:
        {messageList.map(
          (message, index) => (
            console.log(message),
            (
              <div key={"message" + index} className="list-item">
                <div className="text">
                  <span className="author">
                    {index + 1}. {message.author}: &nbsp;
                  </span>
                  "{message.message}"
                </div>
              </div>
            )
          )
        )}
      </div>
    </>
  );
  // return (
  //   <div className="App container">
  //     <MessageComponent message="" author="" />
  //   </div>
  // );
}

export default App;
