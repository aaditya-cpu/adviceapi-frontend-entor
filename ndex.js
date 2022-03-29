var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function apiCall() {
    console.log("Iam alive")
    fetch("https://api.adviceslip.com/advice", requestOptions)
        .then(response => response.json())
        .then(result => {
            var daa = result;
            var iD = daa.slip.id;
            var adv = daa.slip.advice;
            console.log("id: " + iD + " " + "advice: " + adv);
            aliveCheck(iD, adv)
        })
        .catch(error => console.log('error', error));

    // aliveCheck();
}

function aliveCheck(number, advice) {

    console.log("I am the data")

    let numb = document.getElementById("adviseNumber");

    let adviseText = document.getElementById("adviseText");

    numb.innerHTML = number;
    adviseText.innerHTML = advice;

    console.log("The fuction is complete check the data");

}