import React, { createContext, useState } from "react";

export const UserContext = createContext({
  userEmail: "",
  setUserEmail: (userEmail: string) => {}
})