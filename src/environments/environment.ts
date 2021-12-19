// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";



export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAxN-_CBnCmvnjcZnF5doUXspjHGEavFWw",
    authDomain: "trading-app-demo-ba0a7.firebaseapp.com",
    projectId: "trading-app-demo-ba0a7",
    storageBucket: "trading-app-demo-ba0a7.appspot.com",
    messagingSenderId: "739646221736",
    appId: "1:739646221736:web:378205f202a2f37dc1419d"
  },
  
};


//export const= initializeApp;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
