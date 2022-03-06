import Box from "@mui/material/Box";
import { deepOrange } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import React, { useState } from "react";

export default function Customer(Props) {
  const [hover, setHover] = useState(false);

  const isHovered = () => {
    if (hover) {
      return (
        <Typography
          marginLeft={1}
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
      <Box sx={{ display: "flex" }}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>
          {Props.chatText.custID}
        </Avatar>
        <Typography
          sx={{ bgcolor: "white", borderRadius: 5 }}
          variant="subtitle1"
          padding={1}
          marginLeft={1}
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
