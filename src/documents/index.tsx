import React, { FC } from "react";
import { Documents } from "./types";
import { DocumentsContext, useDocuments } from "./hooks";


export const DocumentsProvider: FC<{ initialState?: Documents }> = ({ initialState, children }) => {
  const documentsContextValue = useDocuments(initialState);
  // could plug documents state to cache in session / localStorage here
  // useEffect(() => {
  //  -- persist documents state here
  // }, [documentsContextValue.documents])
  return <DocumentsContext.Provider value={documentsContextValue}>{children}</DocumentsContext.Provider>;
};