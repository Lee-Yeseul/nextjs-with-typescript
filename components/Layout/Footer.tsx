import { Box, Pagination } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: 1,
        padding: 1,
      }}
    >
      <Pagination count={10} />
    </Box>
  );
};

export default Footer;
