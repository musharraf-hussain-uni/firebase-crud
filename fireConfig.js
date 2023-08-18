const firebaseConfig = {
    apiKey: "AIzaSyBl_cReNlXzhQY-cA3mR83RS9_sqRaif50",
    authDomain: "fir-crud-5bc96.firebaseapp.com",
    databaseURL: "https://fir-crud-5bc96-default-rtdb.firebaseio.com",
    projectId: "fir-crud-5bc96",
    storageBucket: "fir-crud-5bc96.appspot.com",
    messagingSenderId: "358951316446",
    appId: "1:358951316446:web:47add5197df2253f428b4f",
    measurementId: "G-F4DV4HZVSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);