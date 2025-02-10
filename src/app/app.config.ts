import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"danotes-8ad28","appId":"1:505655947299:web:796c20ae15fd0c7b550196","storageBucket":"danotes-8ad28.firebasestorage.app","apiKey":"AIzaSyBKbPiUlbvA7D64Ca0WmpdpdQbV2YVQHOM","authDomain":"danotes-8ad28.firebaseapp.com","messagingSenderId":"505655947299"})), provideFirestore(() => getFirestore())]
};
