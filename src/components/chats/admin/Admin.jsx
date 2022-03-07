import Box from "@mui/material/Box";
import { deepOrange, green } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import React, { useState } from "react";

export default function Customer(Props) {
  const [hover, setHover] = useState(false);

  const isHovered = () => {
    if (hover) {
      return (
        <Typography
          marginRight={1}
          fontSize={10}
          alignSelf={"flex-end"}
          paddingBottom={2}
        >
          {Props.chatText.time}
        </Typography>
      );
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
        <Typography
          sx={{ bgcolor: green[500], borderRadius: 5 }}
          variant="subtitle1"
          padding={1}
          marginRight={1}
          maxWidth={"75%"}
          paragraph
          align="justify"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          {Props.chatText.message}
        </Typography>
        {isHovered()}
      </Box>
    </React.Fragment>
  );
}
