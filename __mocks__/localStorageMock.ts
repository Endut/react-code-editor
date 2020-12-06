class LocalStorageMock implements Storage {
  store: { [key: string]: any };
  length: number;
  key: (index: number) => string;
  
  constructor() {
    this.store = {};
    this.length = 0;
    this.key = () => ''
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: any) {
    this.store[key] = JSON.stringify(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

Object.assign(window, 'localStorage', new LocalStorageMock());
export {};