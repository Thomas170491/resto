import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers:
   [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), 
    provideIonicAngular({}), 
    provideFirebaseApp(
      () => initializeApp(
        {"projectId":"restopizza",
          "appId":"1:587393875583:web:8dafbbb859aa6a9defc94a",
          "storageBucket":"restopizza.appspot.com",
          "apiKey":"AIzaSyAKYD2RaYT6gnOLkqlFqhTq7LGaZnAXsgM",
          "authDomain":"restopizza.firebaseapp.com",
          "messagingSenderId":"587393875583"})), 
          provideFirestore(() => getFirestore()),
  ]
};
