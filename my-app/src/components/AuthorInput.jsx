import { TextField } from "@mui/material";

export default function AuthorInput(props) {
  return (
    <TextField
      required
      className="mui-input"
      onChange={props.handleChangeA}
      value={props.author}
      id="standard-basic"
      label="Author"
      variant="standard"
      placeholder="Your name must be here"
    />
  );
}
