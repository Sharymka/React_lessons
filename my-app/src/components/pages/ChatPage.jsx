import FormPropsTextFields from "../FormPropsTextFields";

export default function ChatsPage(props) {
  const { id, deleteMessageList, addMessageList, chats } = props;

  return (
    <FormPropsTextFields
      chats={chats}
      addMessageList={addMessageList}
      deleteMessageList={deleteMessageList}
      id={id}
    />
  );
}
