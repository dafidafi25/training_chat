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

export default function BasicCard() {
  return (
    <Card
      sx={{
        maxWidth: 400,
        mx: "auto",
        my: "5vh",
        bgcolor: "text.secondary",
        borderRadius: 2,
      }}
    >
      <CardHeader
        sx={{ bgcolor: "success.main" }}
        subheaderTypographyProps={{ color: grey[200] }}
        subheader="Admin Dafi Gumawang priadi"
      />

      <CardContent sx={{ height: "60vh" }}>
        <Chats></Chats>
      </CardContent>
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
