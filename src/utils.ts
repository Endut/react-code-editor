export const getFileContent = (file: File) => {
  return new Promise<string | null>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      resolve(e.target?.result as string);
    };

    reader.onerror = (e) => {
      reject(e);
    };

    reader.readAsText(file);
  });
};
