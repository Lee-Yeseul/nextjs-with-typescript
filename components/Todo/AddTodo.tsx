import { Box, Input, IconButton } from '@mui/material';
import { useRef } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {};

  return (
    <Box>
      <Input placeholder='Add your todo list... ' onChange={handleChange} ref={inputRef} />
      <IconButton>
        <AddCircleOutlineIcon sx={{ color: '#b388ff' }} />
      </IconButton>
    </Box>
  );
};

export default AddTodo;
