var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function revive() {
    let x = Math.floor((Math.random() * 223) + 1);
    let requrl = "https://api.adviceslip.com/advice/" + x;
    console.log("requrl : " + requrl);
    apiCall(requrl);
}

function apiCall(requrl) {
    console.log("ET go home-...")

    fetch(requrl, requestOptions)
        .then(response => response.json())
        .then(result => {

            var daa = result;
            var iD = daa.slip.id;
            var adv = daa.slip.advice;
            console.log("id: " + iD + " " + "advice: " + adv);
            console.log("I am the data")
            let numb = document.getElementById("adviseNumber");

            let adviseText = document.getElementById("adviseText");

            numb.innerHTML = iD;
            adviseText.innerHTML = adv;
            console.log("The fuction is complete check the data");
            // aliveCheck(iD, adv)
        })
        .catch(error => console.log('error', error));

    // aliveCheck();
}

// function aliveCheck(number, advice) {

//     console.log("I am the data")


//     console.log("The fuction is complete check the data");

// }