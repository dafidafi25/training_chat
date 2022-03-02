import Box from "@mui/material/Box";
import { deepOrange } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const Div = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  marginLeft: 5,
  borderRadius: 100,
  maxWidth: "70%",
}));

const chatText = {
  message: "wewewewewe",
  time: "12:30:30",
  date: "12/12/2020",
  custID: 1123123123,
  apiKey: "1233313223124124",
};

export default function Chats() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Typography
          sx={{ bgcolor: "white", borderRadius: 5 }}
          variant="subtitle1"
          padding={1}
          marginLeft={1}
          maxWidth={"75%"}
          paragraph
          align="justify"
        >
          {chatText.message}
          {"\nsasdas"}
        </Typography>
      </Box>
    </div>
  );
}
