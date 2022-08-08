import logo from "./logo.svg";
import "./App.css";
import { MessageComponent } from "./components/message-component";

function App() {
  return (
    <div className="App">
      <MessageComponent text="Your message must be here.." />
    </div>
  );
}

export default App;
