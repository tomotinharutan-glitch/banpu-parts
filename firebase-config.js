// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaseFlVKoIoQenVtDEWUfdfvGiE8ZNcRg",
  authDomain: "tsurumipump-parts-app.firebaseapp.com",
  projectId: "tsurumipump-parts-app",
  storageBucket: "tsurumipump-parts-app.firebasestorage.app",
  messagingSenderId: "294036643949",
  appId: "1:294036643949:web:226b57a466be7dc61adf64"
};

// Initialize Firebase App and Auth immediately
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Lazy initialization proxies for Firestore and Storage to prevent top-level module crash on Safari
let _db = null;
function getDatabaseInstance() {
  if (!_db) {
    try {
      _db = getFirestore(app);
    } catch (e) {
      console.error("Firestore init error:", e);
      alert("データベース(Firestore)の初期化に失敗しました。ブラウザの設定をご確認ください: " + e.message);
      throw e;
    }
  }
  return _db;
}

const db = new Proxy({}, {
  get(target, prop) {
    const instance = getDatabaseInstance();
    const val = instance[prop];
    return typeof val === 'function' ? val.bind(instance) : val;
  }
});

let _storage = null;
function getStorageInstance() {
  if (!_storage) {
    try {
      _storage = getStorage(app);
    } catch (e) {
      console.error("Storage init error:", e);
      alert("ストレージの初期化に失敗しました。ブラウザの設定をご確認ください: " + e.message);
      throw e;
    }
  }
  return _storage;
}

const storage = new Proxy({}, {
  get(target, prop) {
    const instance = getStorageInstance();
    const val = instance[prop];
    return typeof val === 'function' ? val.bind(instance) : val;
  }
});

export {
  app,
  auth,
  db,
  storage,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
  query,
  ref,
  uploadString,
  getDownloadURL
};
