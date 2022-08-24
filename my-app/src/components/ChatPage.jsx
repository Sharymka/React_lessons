import FormPropsTextFields from "./FormPropsTextFields";

export default function ChatsPage(props) {
  const { id, deleteMessageList, addMessageList, chats } = props;

  return (
    // <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
    <FormPropsTextFields
      chats={chats}
      addMessageList={addMessageList}
      deleteMessageList={deleteMessageList}
      id={id}
    />
    // </ThemeProvider>changeTheme={changeTheme});
  );
}
