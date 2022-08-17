export default function MessageList(props) {
  return (
    <div className="list">
      {props.children}
      {props.messageList.map((message, index) => (
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
  );
}
