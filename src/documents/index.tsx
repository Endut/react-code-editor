import React, { FC } from "react";
import { Documents } from "./types";
import { DocumentsContext, useDocuments } from "./hooks";

export const DocumentsProvider: FC<{ initialState?: Documents }> = ({ initialState, children }) => {
  const documentsContextValue = useDocuments(initialState);
  return <DocumentsContext.Provider value={documentsContextValue}>{children}</DocumentsContext.Provider>;
};