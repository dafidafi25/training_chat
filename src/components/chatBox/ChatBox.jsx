import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { grey } from "@mui/material/colors";
import Chats from "../chats/Chats";

const chatText = [
  {
    message: "chat 1",
    time: "12:30",
    date: "12/12/2020",
    custID: "N",
    apiKey: "1233313223124124",
  },
  {
    message: "chat 2",
    time: "12:33",
    date: "12/12/2020",
    apiKey: "1233313223124124",
  },
  {
    message: "chat 3",
    time: "12:40",
    date: "12/12/2020",
    custID: "N",
    apiKey: "1233313223124124",
  },
];

export default function BasicCard() {
  const loadChat = chatText.map((chat, index) => {
    return <Chats key={index} chatText={chat}></Chats>;
  });

  return (
    <Card
      sx={{
        maxWidth: 400,
        mx: "auto",
        my: "5vh",
        bgcolor: grey[200],
        borderRadius: 2,
      }}
    >
      <CardHeader
        sx={{ bgcolor: "success.main" }}
        subheaderTypographyProps={{ color: grey[200] }}
        subheader="Admin Dafi Gumawang priadi"
      />

      <CardContent sx={{ height: "60vh" }}>{loadChat}</CardContent>
      <CardActions
        sx={{
          borderRadius: 2,
          border: 1,
          bgcolor: "white",
          borderColor: "white",
        }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>
          <TextField
            variant="standard"
            color="success"
            placeholder="Message"
            fullWidth
            size="small"
          />
          <IconButton>
            <SendIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
