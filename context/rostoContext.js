import React, { createContext, useState, useEffect } from "react";
import data from "../api/data";

const RostoContext = createContext();

const RostoContextProvider = (props) => {
  const [data2, setData2] = useState({});

  return (
    <RostoContext.Provider value={data}>{props.children}</RostoContext.Provider>
  );
};

export { RostoContextProvider, RostoContext };
