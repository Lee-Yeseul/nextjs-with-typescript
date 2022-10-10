import Link from 'next/link';

import { Typography, AppBar, Toolbar } from '@mui/material';
import RuleIcon from '@mui/icons-material/Rule';

const NavBar = () => {
  const bgColor = '#b388ff';

  return (
    <AppBar
      color='transparent'
      elevation={1}
      sx={{ alignItems: 'center', backgroundColor: bgColor }}
      position='sticky'
    >
      <Toolbar>
        <RuleIcon sx={{ color: '#fff', fontSize: 40, mr: 3 }} />
        <Link href='/'>
          <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: 28 }}>
            Todo List
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
