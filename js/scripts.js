// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//todo nie przechowywać tokena w pamięci lokalnej, bo go ktoś zajuma :(
// let JWT = localStorage.getItem("JWT");
// let authority = localStorage.getItem("authority");
//
// let loggedUserId = localStorage.getItem("loggedUserId");
//





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

async function httpRequestPost(Url, Body) {
    let Params = {
        headers:{
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem("JWT"),
        },
        body: JSON.stringify(Body),
        method: "POST"
    }

    fetch(Url, Params)
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

    // JWT = ""
    // JWT = log.jwt;

    //todo przerobić zmienne na trzymane tylko w pamięci lokalnej

    // authority = "";
    // authority = parseJwt(JWT).grantedAuthority;
    // loggedUserId = 0;
    // loggedUserId = parseJwt(JWT).loggedUserId;

    localStorage.setItem("JWT", log.jwt);
    localStorage.setItem("authority", parseJwt(log.jwt).grantedAuthority);
    localStorage.setItem("loggedUserId", parseJwt(log.jwt).loggedUserId);



    // console.log(JWT);
    // console.log(parseJwt(JWT));
    // console.log(authority);
    // console.log(loggedUserId)
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

function submitPersonForm() {

    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;

    if (pass1===pass2) {
        let Url = 'http://localhost:8080/person';
        let Data = {
            "name": "",
            "surname": "",
            "nick": "",
            "description": "",
            "email": "",
            "login": "",
            "username":"",
            "password": ""
        }

        Data.name = document.getElementById("imie").value;
        Data.surname = document.getElementById("nazwisko").value;
        Data.nick = document.getElementById("nick").value;
        Data.description = document.getElementById("opis").value;
        Data.email = document.getElementById("email").value;
        Data.username = document.getElementById("login").value;
        Data.password = pass1;

        httpRequestPost(Url, Data);

    } else {

    }
}

async function findPersonById(id) {

    let Url = 'http://localhost:8080/person?id_person=';

    if (id===0) {
        Url = Url + document.getElementById("id_person").value;
    } else {
        Url = Url + id.toString();
    }


    let Data = await httpRequestGet(Url);
    console.log(Data);

     document.getElementById("imie").value = Data.name;
     document.getElementById("nazwisko").value = Data.surname;
     document.getElementById("nick").value = Data.nick;
     document.getElementById("opis").value = Data.description;
     document.getElementById("email").value = Data.email;

    let clubHtml = "";
     for (let i=0; i < Object.keys(Data.clubs_name).length; i++) {
         clubHtml = clubHtml + "<li><a href=\"#\" id=\"klub" + i +"\">" + Data.clubs_name[i] + "</a></li>"
     }

     document.getElementById("kluby").innerHTML = clubHtml;
}

// function submitClubForm() {
//     let Url = 'http://localhost:8080/club';
//     let Data = {
//         "name": "",
//         "description": "",
//         "email": "",
//         "cours": false,
//         "sport": false,
//         "fun": false
//     }
//
//     Data.name = document.getElementById("nazwa").value;
//     Data.description = document.getElementById("opis").value;
//     Data.email = document.getElementById("email").value;
//
//     Data.course = document.getElementById("szkolenia").checked;
//     Data.sport = document.getElementById("sport").checked;
//     Data.fun = document.getElementById("rekreacja").checked;
//
//     httpRequestPost(Url, Data);
// }
//
// async function findClubById() {
//     let Url = 'http://localhost:8080/club?id_club=';
//
//     Url = Url + document.getElementById("id_club").value;
//
//     let Data = await httpRequestGet(Url);
//     console.log(Data);
//
//     document.getElementById("nazwa").value = Data.name;
//     document.getElementById("opis").value = Data.description;
//     document.getElementById("email").value = Data.email;
//
//     if (Data.sport === true)
//     (document.getElementById("sport").checked = true)
//
//     if (Data.fun === true)
//     (document.getElementById("szkolenia").checked = true)
//
//     if (Data.course === true)
//     (document.getElementById("rekreacja").checked = true)
//
// }
//
// async function submitEventForm() {
//     let Url = 'http://localhost:8080/event';
//     let Data = {
//         "name": "",
//         "description": "",
//         "range": "",
//         "dateOfStart": "",
//         "dateOfEnd": false,
//         "hourOfStart": false,
//         "hourOfEnd": false,
//         "membersOnly": false,
//         "openEntry": false,
//         "isCompetition": false,
//         "isPractice": false,
//         "isCourse": false,
//         "entryFee": 0
//     }
//
//     Data.name = document.getElementById("nazwa").value;
//     Data.description = document.getElementById("opis").value;
//     Data.entryFee = document.getElementById("oplata").value;
//     Data.range = document.getElementById("strzelnica").value;
//
//     Data.dateOfStart = document.getElementById("dziens").value;
//     Data.dateOfEnd = document.getElementById("dzienk").value;
//     Data.hourOfStart = document.getElementById("godzinas").value;
//     Data.hourOfEnd = document.getElementById("godzinak").value;
//
//     Data.isCompetition = document.getElementById("zawody").checked;
//     Data.isPractice = document.getElementById("rekreacja").checked;
//     Data.isCourse = document.getElementById("szkolenie").checked;
//     Data.openEntry = document.getElementById("zapisy").checked;
//     Data.membersOnly = document.getElementById("czlonkowie").checked;
//
//     await httpRequestPost(Url, Data);
//
// }
//
// async function findEventById() {
//     let Url = 'http://localhost:8080/event?id_event=';
//
//     Url = Url + document.getElementById("id_event").value;
//
//     let Data = await httpRequestGet(Url);
//     console.log(Data);
//
//      document.getElementById("nazwa").value = Data.name;
//      document.getElementById("opis").value = Data.description;
//      document.getElementById("oplata").value = Data.entryFee;
//      document.getElementById("strzelnica").value = Data.range;
//      document.getElementById("dziens").value = Data.dateOfStart;
//      document.getElementById("dzienk").value = Data.dateOfEnd;
//      document.getElementById("godzinas").value = Data.hourOfStart;
//      document.getElementById("godzinak").value = Data.hourOfEnd;
//
//     if (Data.isCompetition === true) (document.getElementById("zawody").checked = true)
//     if (Data.isPractice === true) (document.getElementById("rekreacja").checked = true)
//     if (Data.isCourse === true) (document.getElementById("szkolenie").checked = true)
//     if (Data.openEntry === true) (document.getElementById("zapisy").checked = true)
//     if (Data.membersOnly === true) (document.getElementById("czlonkowie").checked = true)
//
// }
//
// async function submitRangeForm() {
//     let Url = 'http://localhost:8080/range';
//     let Data = {
//         "name": "",
//         "description": "",
//         "adress": ""
//     }
//     Data.name = document.getElementById("nazwa").value;
//     Data.description = document.getElementById("opis").value;
//     Data.adress = document.getElementById("adres").value;
//
//     await httpRequestPost(Url, Data);
// }
//
// async function findRangeById() {
//     let Url = 'http://localhost:8080/range?id_range=';
//
//     Url = Url + document.getElementById("id_range").value;
//
//     let Data = await httpRequestGet(Url);
//
//     document.getElementById("nazwa").value = Data.name;
//     document.getElementById("opis").value = Data.description;
//     document.getElementById("adres").value = Data.adress;
// }
