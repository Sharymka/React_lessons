// import * as React from "react";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import { useState } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList(props) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [primary, setPrimary] = React.useState(false);
  const [messageList, setMessageList] = useState([
    {
      message: "sfwf",
      author: "srff",
    },
  ]);

  useEffect(() => {
    // console.log(messageList);
    setMessageList(props.messageList);
    messageList.length !== 0 ? setPrimary(true) : setPrimary(false);
  }, [props.messageList, messageList.length]);

  return (
    <Box
      sx={{
        width: "30%",
        border: "1px solid black",
        borderRadius: "5px",
        marginTop: "10px",
        padding: "5px",
      }}
    >
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Enable secondary text"
        />
      </FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Chat
          </Typography>
          <Demo>
            <List dense={dense}>
              {messageList.map((message, index) => (
                <ListItem key={"message" + index} className="list-item">
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={primary ? message.author : null}
                    secondary={secondary ? message.message : null}
                  ></ListItemText>
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
