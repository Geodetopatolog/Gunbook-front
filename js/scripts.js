// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//todo nie przechowywać tokena w pamięci lokalnej, bo go ktoś zajuma :(

// let JWT = localStorage.getItem("JWT");
// let authority = localStorage.getItem("authority");
//
// let loggedUserId = localStorage.getItem("loggedUserId");
//


const methods = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}


function displayRadioValue() {
    document.getElementById("result").innerHTML = "";

    let radio = document.getElementById("radiob");

    let ele = radio.getElementsByTagName('input');

    for(let i = 0; i < ele.length; i++) {

        if(ele[i].type==="radio") {

            if(ele[i].checked)
                document.getElementById("result").innerHTML
                    += ele[i].name + " "
                    + ele[i].value + "<br>";
        }
    }
}

function setSameValueOnEventDate() {

    document.getElementById("dzienk").value = document.getElementById("dziens").value;
}

async function httpRequestPostPatchDelete(url, body, method) {
    console.log(method);
    let params = {
        headers:{
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem("JWT"),
        },
        body: JSON.stringify(body),
        method: method
    }

    fetch(url, params)
        .then(response => response.statusText)
        .then(data => {
            console.log('sukces:', data)
        });
}

async function httpRequestGet(Url) {

    let Params = {
        headers:{
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem("JWT"),
        },
        method: "GET"
    }
    console.log(Params);
    let res = await fetch(Url, Params);
    console.log(res);
    return await res.json();
}

async function login(username, password) {
    let Url = 'http://localhost:8080/authenticate';
    let Data = {
        "username": username,
        "password": password
    }

    let Params = {
        headers:{
            'Content-Type': "application/json",
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(Data),
        method: "POST"
    }

    let res = await fetch(Url, Params);
    let log = await res.json();


    localStorage.setItem("JWT", log.jwt);
    localStorage.setItem("authority", parseJwt(log.jwt).grantedAuthority);
    localStorage.setItem("loggedUserId", parseJwt(log.jwt).loggedUserId);

    console.log("localStorage JWT " + localStorage.getItem("JWT"));
    console.log("localStorage authority " + localStorage.getItem("authority"));
    console.log("localStorage loggedUserId " + localStorage.getItem("loggedUserId"));
}

function logout() {
    localStorage.setItem("JWT", "");
    localStorage.setItem("authority", "GUEST");
    localStorage.setItem("loggedUserId", "");
}

function submitLoginForm() {

    login(document.getElementById("login").value, document.getElementById("pass1").value);

}

function parseJwt (token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

