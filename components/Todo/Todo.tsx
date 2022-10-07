import { useState, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { Checkbox, Box, Typography, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { TodoItem } from "../../interfaces";
import FormDialog from "../common/FormDialog";

type Props = {
  todo: TodoItem;
  setTodolist: Dispatch<SetStateAction<TodoItem[]>>;
};

const Todo = ({ todo, setTodolist }: Props) => {
  const [checked, setChecked] = useState<boolean>(todo.isSuccess);
  const dev = process.env.NEXT_PUBLIC_DEV;

  const handleChange = async () => {
    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_URL}/list/${todo._id}`
    );
    const data = res.data.result.isSuccess;
    console.log(data);

    setChecked(data);
  };

  const handleClick = async () => {
    console.log(todo._id);
    await axios.delete(`http://15.164.50.182/api/list/${todo._id}`);
    const res = await axios.get("http://15.164.50.182/api/list");
    const data = res.data;
    setTodolist(data);
  };

  return (
    <Box
      sx={{
        width: 360,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 1.5,
        paddingBottom: 1,
        borderBottom: 1,
        borderColor: "white",
      }}
    >
      <Checkbox
        checked={checked}
        onChange={handleChange}
        sx={{ color: "white", "&.Mui-checked": { color: "white" } }}
      />
      <Typography color="white">{todo.description} </Typography>

      {dev ? (
        <IconButton onClick={handleClick}>
          <HighlightOffIcon sx={{ color: "white" }} />
        </IconButton>
      ) : (
        <FormDialog id={todo._id} setTodolist={setTodolist} />
      )}
    </Box>
  );
};

export default Todo;
