import { TextField } from "@mui/material";

export default function MessageInput(props) {
  return (
    <TextField
      className="mui-input"
      required
      onChange={props.handleChangeM}
      value={props.message}
      id="standard-basic"
      label="Message"
      variant="standard"
      placeholder="Your message must be here"
    />
  );
}
