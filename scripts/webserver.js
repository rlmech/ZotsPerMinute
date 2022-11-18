var userName = "Back";
var userEmail = "";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, onValue, ref, set } from "firebase/database";

function handleCredentialResponse(response) {
    const userInfo = jwt_decode(response.credential);
    // console.log("Encoded JWT ID token: " + decodeJwtResponse(response.credential));
    userName = userInfo.name;
    userEmail = userInfo.email;
    console.log('Name: ' + userInfo.name);
    console.log('Email: ' + userInfo.email);
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", type: "standard", shape: "circular" }  // customization attributes
    );

}


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBTBV-plZsDP6cuOS7DybglX6NiX228hU",
  authDomain: "webjam2023-b9ca1.firebaseapp.com",
  projectId: "webjam2023-b9ca1",
  storageBucket: "webjam2023-b9ca1.appspot.com",
  messagingSenderId: "20210455251",
  appId: "1:20210455251:web:2b3984fe19f555fa71fa26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

function writeUserData(text, one, oT, two, tT, three, thT) {
    //const db = getDatabase();
    // writeUserData("zot", "Brian", 50, "Camille", 60, "Wongma", 70);

   
    const innerRef1 = ref(db, `leaderboard/${text}/${1}/`);
    set(innerRef1, {
        name: one,
        time: oT
    });

    const innerRef2 = ref(db, `leaderboard/${text}/${2}/`);
    set(innerRef2, {
        name: two,
        time: tT
    });


    const innerRef3 = ref(db, `leaderboard/${text}/${3}/`);
    set(innerRef3, {
        name: three,
        time: thT
    });


    
}
//writeUserData("zot", "Brian", "Camille", "Wongma");

function updatePodium(text, place, n, t) {
    const innerRef = ref(db, `leaderboard/${text}/${place}/`);
    set(innerRef, {
        name: n,
        time: t
    });

}

function getTop(text, speed) {
    const dataRef = ref(db, `leaderboard/${text}`);
    //Should return Promise
    var data;
    onValue(dataRef, (snapshot) => {
        data = snapshot.val();
        console.log(data[1].name);
        let name1 = data[1].name;
        let time1 = data[1].time;
        let name2 = data[2].name;
        let time2 = data[2].time;
        let name3 = data[3].name;
        let time3 = data[3].time;
        console.log(name1, time1, name2, time2, name3, time3);

        if (speed < time3) {
            console.log("3", name1, time1, name2, time2, name3, time3);
            name3 = userName;
            time3 = speed;
            if (speed < time2) {
                console.log("2", name1, time1, name2, time2, name3, time3);
    
                let tempTime = time2;
                let tempName = name2;
                name2 = name3;
                time2 = time3;
    
                name3 = tempTime;
                time3 = tempName;
                if (speed < time1) {
                    console.log("1", name1, time1, name2, time2, name3, time3);
        
                    let tempTime = time1;
                    let tempName = name1;
                    name1 = name2;
                    time1 = time2;
        
                    name2 = tempName;
                    time2 = tempTime;  
                }
            }
        }
        
        
        console.log(name1, time1, name2, time2, name3, time3);
        writeUserData(text, name1, time1, name2, time2, name3, time3);
        

        // var count = 3;
        // for (let i = 3; i > 0; i--) {
        //     console.log(data[i]);
        //     if (data[i]["time"] > speed) {
            //     console.log("Is Higher");
            //     console.log(i);
            //     console.log(data[i]["name"]);
            //     if (i != 3) {
                    
            //         updatePodium(text, count, data[i]["name"], data[i]["time"]);
            //     }
            //     updatePodium(text, i, userName, speed);
            //     count -= 1;

            // }
            // else {
            //     break;
            // }

        // }

    });

}
