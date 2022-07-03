import React, { createContext, useState } from "react";
import data from "../api/data";

const RostoContext = createContext();

const RostoContextProvider = (props) => {
  return (
    <RostoContext.Provider value={data}>{props.children}</RostoContext.Provider>
  );
};

export { RostoContextProvider, RostoContext };
