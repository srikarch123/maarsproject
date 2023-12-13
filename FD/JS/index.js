// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set } from 'firebase/database';
// import { getAuth } from 'firebase/auth';
// const firebase = require('firebase/app');
// require('firebase/auth');
//import {getFirestore,collection,getDocs} from 'firebase/firestore'

const firebaseApp = firebase.initializeApp({ 
        apiKey: "AIzaSyBtCXwZ8rGVnHpMNS0_t7Pyu29huihy0U8",
        authDomain: "maars-a5622.firebaseapp.com",
        projectId: "maars-a5622",
        databaseURL:"https://maars-a5622-default-rtdb.firebaseio.com/",
        storageBucket: "maars-a5622.appspot.com",
        messagingSenderId: "632830127984",
        appId: "1:632830127984:web:c08ca7355fe94b10b029b5",
 });

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();



const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
   
    auth.createUserWithEmailAndPassword(email,password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        console.log(err.code)
        console.log(err.message)
    })
}

const login = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
   
    auth.signInWithEmailAndPassword(email,password)
    .then((res) => {
        console.log(res.user);
        message.innerHTML = 'Login successful! Redirecting...';

    // Redirect to login2.html after a short delay (e.g., 2 seconds)
    setTimeout(function() {
        window.location.href = 'maps3.2.html';
    }, 1000)});
}






var firebaseRef = firebase.database().ref("Boundaries2");
//console.log(firebaseRef);
console.log("HI");
firebaseRef.on('value',gotData,errData);

function gotData(data)
{
    var temp=data.val();
    var keys=Object.keys(data.val());
    console.log("Keys:",keys);

    for(let i=0;i<keys.length;i++)
    {

        console.log(temp[keys[i]]);
        var field=temp[keys[i]].Coordinates;
        console.log("coord",field);
        for(let j=0;j<field.length;j++)
        {
            console.log("lat : ",field[j].lat ,"lng : ",field[j].lng  );
        }
       // console.log(temp[keys[i]]);
    }
//     console.log("Hello");
//     var data= snapshot.val();
  
//    console.log(data.email1);
}


function errData(err)
{
    
    console.log("Error");
}

//     //init services
// const dbdata = getFirestore()

// //collection ref
// const colRef = collection(dbdata, 'coordinates')

// //get collection data
// getDocs(colRef)
//     .then((snapshot) => {
//         let coordinates = []
//         snapshot.docs.forEach((doc) =>{
//             coordinates.push({ ...doc.data(), id: doc.id })
//         })
//         console.log(coordinates)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })
        
//     })
//     .catch((err) => {
//         alert(err.messgae)
//         console.log(err.code)
//         console.log(err.message)
//     })

    
// }

// //init services
// const dbdata = getFirestore()

// //collection ref
// const colRef = collection(dbdata, 'coordinates')

// //get collection data
// getDocs(colRef)
//     .then((snapshot) => {
//         let coordinates = []
//         snapshot.docs.forEach((doc) =>{
//             coordinates.push({ ...doc.data(), id: doc.id })
//         })
//         console.log(coordinates)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })



