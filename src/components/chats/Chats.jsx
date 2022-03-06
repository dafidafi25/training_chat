import Box from "@mui/material/Box";
import { deepOrange } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import Customer from "./customer/Customer";

export default function Chats(Props) {
  const [hover, setHover] = useState(false);

  const loadChat = () => {
    if ("custID" in Props.chatText) {
      return <Customer></Customer>;
    }
  };

  return <React.Fragment>{loadChat}</React.Fragment>;
}
