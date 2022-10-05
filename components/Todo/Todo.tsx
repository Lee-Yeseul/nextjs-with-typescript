// 하나의 Todo
import { useState } from 'react';
import { Checkbox, Box, IconButton, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { TodoItem } from '../../interfaces';

const Todo = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Box
      sx={{
        width: 400,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Checkbox
        checked={checked}
        onChange={handleChange}
        sx={{ color: '#b388ff' }}
      />
      <Typography>description </Typography>
      <IconButton>
        <HighlightOffIcon sx={{ color: '#b388ff' }} />
      </IconButton>
    </Box>
  );
};

export default Todo;
