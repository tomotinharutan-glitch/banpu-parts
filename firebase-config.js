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

// Lazy initialization for Firestore and Storage (returning real SDK instances)
let _db = null;
export function getDb() {
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

let _storage = null;
export function getStorageInstance() {
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

export {
  app,
  auth,
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
