import React, { useState } from "react";
import Customer from "./customer/Customer";
import Admin from "./admin/Admin";

export default function Chats(Props) {
  const CustomerComponent = <Customer chatText={Props.chatText}></Customer>;
  const AdminComponent = <Admin chatText={Props.chatText}></Admin>;

  return "custID" in Props.chatText ? CustomerComponent : AdminComponent;
}
