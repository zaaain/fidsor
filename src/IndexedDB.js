import { openDB } from 'idb';

const dbName = 'firsorTestDB';
const storeName = 'TaskBoard';

export const openDatabase = () => {
  return openDB(dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const addData = async (data) => {
  const db = await openDatabase();
  const tx = db.transaction(storeName, 'readwrite');
  const store = tx.objectStore(storeName);
  await store.add(data);
  await tx.done;
};

export const getAllData = async () => {
  const db = await openDatabase();
  const tx = db.transaction(storeName, 'readonly');
  const store = tx.objectStore(storeName);
  return store.getAll();
};

export const deleteData = async (id) => {
    const db = await openDatabase();
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    await store.delete(id);
    await tx.done;
};

export const updateData = async (id, updatedData) => {
    const db = await openDatabase();
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const existingItem = await store.get(id); 
    if (existingItem) {
      Object.assign(existingItem, updatedData);
      await store.put(existingItem);
    }  
    await tx.done;
  };