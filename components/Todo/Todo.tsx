// 하나의 Todo
import { useState } from "react";
import { Checkbox, Box, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Todo = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = () => {};

  return (
    <Box sx={{ width: 500, justifyContent: "space-between" }}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        sx={{ color: "#b388ff" }}
      />
      description
      <IconButton>
        <HighlightOffIcon sx={{ color: "#b388ff" }} />
      </IconButton>
    </Box>
  );
};

export default Todo;
