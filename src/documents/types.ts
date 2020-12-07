export type Document = {
  path: string;
  url?: string;
  content: string;
};

export type Documents = {
  [path: string]: Document
};

export type DocumentsApi = {
  updateDocument: (document: Document) => void;
  getDocument: (path: string) => Document;
  getPaths: () => string[];
  deleteDocument: (path: string) => void;
  documents: Documents;
  addDocuments: (addedDocs: Document[]) => void;
}; 