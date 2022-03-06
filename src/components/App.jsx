import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { grey } from "@mui/material/colors";
import Chats from "./chats/Chats";
import ChatBox from "./chatBox/ChatBox";

const chatText = {
  message: "wewewewewe",
  time: "12:30",
  date: "12/12/2020",
  custID: 1123123123,
  apiKey: "1233313223124124",
};

export default function BasicCard() {
  return <ChatBox></ChatBox>;
}
