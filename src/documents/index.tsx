import React, { FC, useContext, useState } from "react";
import { Documents, DocumentsApi } from "./types";
import { DocumentsContext, useDocuments } from "./hooks";

export const DocumentsProvider: FC<{ initialState?: Documents }> = ({ initialState, children }) => {
  const documentsContextValue = useDocuments(initialState);
  return <DocumentsContext.Provider value={documentsContextValue}>{children}</DocumentsContext.Provider>;
};