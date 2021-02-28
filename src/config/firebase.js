import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyAhrj_yBtazFcuPK8rVby_Y6JXlhbOXAvU",
    authDomain: "donrr-blood-bank.firebaseapp.com",
    databaseURL: "https://donrr-blood-bank-default-rtdb.firebaseio.com",
    projectId: "donrr-blood-bank",
    storageBucket: "donrr-blood-bank.appspot.com",
    messagingSenderId: "19661093153",
    appId: "1:19661093153:web:c22095ccc21014211ca660",
    measurementId: "G-RW65W7RGJK"
};
firebase.initializeApp(firebaseConfig);


export default firebase;