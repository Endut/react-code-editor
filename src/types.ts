export type Document = {
  path: string;
  url?: string;
  content: string;
};

export type Documents = {
  [path: string]: Document
};
