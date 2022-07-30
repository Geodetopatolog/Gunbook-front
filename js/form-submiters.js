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
    //todo dorobić to
    }
}

function submitClubForm() {
    let Url = 'http://localhost:8080/club';
    let Data = {
        "name": "",
        "description": "",
        "email": "",
        "cours": false,
        "sport": false,
        "fun": false
    }

    Data.name = document.getElementById("nazwa").value;
    Data.description = document.getElementById("opis").value;
    Data.email = document.getElementById("email").value;

    Data.course = document.getElementById("szkolenia").checked;
    Data.sport = document.getElementById("sport").checked;
    Data.fun = document.getElementById("rekreacja").checked;

    httpRequestPost(Url, Data);
}

async function submitEventForm() {
    let Url = 'http://localhost:8080/event';
    let Data = {
        "name": "",
        "description": "",
        "range": "",
        "dateOfStart": "",
        "dateOfEnd": false,
        "hourOfStart": false,
        "hourOfEnd": false,
        "membersOnly": false,
        "openEntry": false,
        "isCompetition": false,
        "isPractice": false,
        "isCourse": false,
        "entryFee": 0
    }

    Data.name = document.getElementById("nazwa").value;
    Data.description = document.getElementById("opis").value;
    Data.entryFee = document.getElementById("oplata").value;
    Data.range = document.getElementById("strzelnica").value;

    Data.dateOfStart = document.getElementById("dziens").value;
    Data.dateOfEnd = document.getElementById("dzienk").value;
    Data.hourOfStart = document.getElementById("godzinas").value;
    Data.hourOfEnd = document.getElementById("godzinak").value;

    Data.isCompetition = document.getElementById("zawody").checked;
    Data.isPractice = document.getElementById("rekreacja").checked;
    Data.isCourse = document.getElementById("szkolenie").checked;
    Data.openEntry = document.getElementById("zapisy").checked;
    Data.membersOnly = document.getElementById("czlonkowie").checked;

    await httpRequestPost(Url, Data);

}

async function submitRangeForm() {
    let Url = 'http://localhost:8080/range';
    let Data = {
        "name": "",
        "description": "",
        "adress": ""
    }
    Data.name = document.getElementById("nazwa").value;
    Data.description = document.getElementById("opis").value;
    Data.adress = document.getElementById("adres").value;

    await httpRequestPost(Url, Data);
}

