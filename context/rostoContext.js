import React, { createContext } from "react";

const RostoContext = createContext();

const RostoContextProvider = (props) => {
  return <RostoContext.Provider>{props.children}</RostoContext.Provider>;
};

export { RostoContextProvider, RostoContext };
