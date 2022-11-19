

  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";

import { getDatabase, onValue, ref, set } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";


//If you are reading this, please do not use these configs. I am abroke college student.
const firebaseConfig = {
    apiKey: "AIzaSyBBTBV-plZsDP6cuOS7DybglX6NiX228hU",
    authDomain: "webjam2023-b9ca1.firebaseapp.com",
    projectId: "webjam2023-b9ca1",
    storageBucket: "webjam2023-b9ca1.appspot.com",
    messagingSenderId: "20210455251",
    appId: "1:20210455251:web:2b3984fe19f555fa71fa26"
};

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writeUserData(text, one, oT, two, tT, three, thT) {
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


function updatePodium(text, place, n, t) {
    
    const innerRef = ref(db, `leaderboard/${text}/${place}/`);
    set(innerRef, {
        name: n,
        time: t
    });

}

function getLeaderboard() {
    const dataRef = ref(db, `leaderboard/zot`);
    //Should return Promise
    var data;
    onValue(dataRef, (snapshot) => {
        data = snapshot.val();
        
        document.getElementById("person1").innerHTML = data[1].name;
        document.getElementById("person2").innerHTML = data[2].name;
        document.getElementById("person3").innerHTML = data[3].name;
        document.getElementById("person1zots").innerHTML = data[1].time;
        document.getElementById("person2zots").innerHTML = data[2].time;
        document.getElementById("person3zots").innerHTML = data[3].time;
    
    });

}


function updateLeaderboard(text, speed) {
    const dataRef = ref(db, `leaderboard/${text}`);
    //Should return Promise
    var data;
    onValue(dataRef, (snapshot) => {
        data = snapshot.val();
        var d = [];
        //d.push(data[1].name, data[1].time, data[2].name, data[2].time, data[3].name, data[3].time, "", 0);
        let name1 = data[1].name;
        let time1 = data[1].time;
        let name2 = data[2].name;
        let time2 = data[2].time;
        let name3 = data[3].name;
        let time3 = data[3].time;
        // console.log(d);
        // for (let i = 5; i >= 1; i -= 2) {
        //     console.log(i);
        //     if (data[i] < speed) {
                
        //         data[i+2] = data[i];
        //         data[i+1] = data[i-1];

        //         data[i] = speed;
        //         data[i-1] = UName;
        //         console.log(d);
                
        //     }
        // }
        // console.log("Works", d);
        // console.log(d);
        var tempTime;
        var tempName;
        if (speed > time3) {
            name3 = UName;
            time3 = speed;
            if (speed > time2) {
                tempTime = time2;
                tempName = name2;

                name2 = name3;
                time2 = time3;

                time3 = tempTime;
                name3 = tempName;
                
                if (speed > time1) {        
                    tempTime = time1;
                    tempName = name1;

                    name1 = name2;
                    time1 = time2;
        
                    name2 = tempName;
                    time2 = tempTime;  
                }
            }
        }


        writeUserData(text, name1, time1, name2, time2, name3, time3);

        // const d = [];
        // d.push(name1, time1, name2, time2, name3, time3);
        // return d;
       
    });

}
function checkLeader() {
    getLeaderboard();
    console.log(UName);
    console.log(window.totalZotCompleted);
    if (window.totalZotCompleted != 0) {
        updateLeaderboard("zot", window.totalZotCompleted);
        window.totalZotCompleted = 0;
        console.log("hello");
    }
    setTimeout(checkLeader, 5000);

}

checkLeader();
//writeUserData("zot", "Brian", 3, "Camille", 2, "Wongma", 1);

