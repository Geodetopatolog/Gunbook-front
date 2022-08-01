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

        httpRequestPostPatchDelete(Url, Data, "POST");

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

    httpRequestPostPatchDelete(Url, Data, "POST");
}

async function submitEventForm(method) {
    let url = 'http://localhost:8080/event';
    let event = {
        "name": "",
        "id_event": -1,
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

    event.name = document.getElementById("nazwa").value;
    event.id_event = document.getElementById("id_event").value;
    event.description = document.getElementById("opis").value;
    event.entryFee = document.getElementById("oplata").value;
    event.range = document.getElementById("strzelnica").value;

    event.dateOfStart = document.getElementById("dziens").value;
    event.dateOfEnd = document.getElementById("dzienk").value;
    event.hourOfStart = document.getElementById("godzinas").value;
    event.hourOfEnd = document.getElementById("godzinak").value;

    event.isCompetition = document.getElementById("zawody").checked;
    event.isPractice = document.getElementById("rekreacja").checked;
    event.isCourse = document.getElementById("szkolenie").checked;
    event.openEntry = document.getElementById("zapisy").checked;
    event.membersOnly = document.getElementById("czlonkowie").checked;

    console.log(event);
    await httpRequestPostPatchDelete(url, event, method);
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

    await httpRequestPostPatchDelete(Url, Data);
}

