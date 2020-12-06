const PROJECT_PREFIX = "project_";
const localStorageKey = (key: string) => `${PROJECT_PREFIX}${key}`;

const getItem = (key: string) => {
  const item = window.localStorage.getItem(localStorageKey(key));
  return item ? JSON.parse(item) : undefined
};

const setItem = (key: string, value: any) => {
  window.localStorage.setItem(localStorageKey(key), JSON.stringify(value));
};

const removeItem = (key: string) => window.localStorage.removeItem(localStorageKey(key));

export default {
  getItem, setItem, removeItem
}