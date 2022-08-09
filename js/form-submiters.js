async function submitPersonForm(method) {
    let url = 'http://localhost:8080/person';

    switch (method) {
        case "POST": {
            if (document.getElementById("pass1").value===document.getElementById("pass2").value) {
                let person = {
                    "id_person": -1,
                    "name": "",
                    "surname": "",
                    "nick": "",
                    "description": "",
                    "email": "",
                    "username":"",
                    "password": ""
                }

                person.id_person = $("#id_person").val(); //todo to fajne je
                person.name = document.getElementById("imie").value;
                person.surname = document.getElementById("nazwisko").value;
                person.nick = document.getElementById("nick").value;
                person.description = document.getElementById("opis").value;
                person.email = document.getElementById("email").value;
                person.username = document.getElementById("login").value;
                person.password = $("#pass1").val();

                await httpRequestPostPatch(url, person, method);

            } else {
                //todo dorobić to
            }
        }
        break;

        case "PATCH": {
            let person = {
                "id_person": -1,
                "name": "",
                "surname": "",
                "nick": "",
                "description": "",
                "email": ""
            }
            person.id_person = document.getElementById("id_person").value;
            person.name = document.getElementById("imie").value;
            person.surname = document.getElementById("nazwisko").value;
            person.nick = document.getElementById("nick").value;
            person.description = document.getElementById("opis").value;
            person.email = document.getElementById("email").value;
            console.log(person);
            await httpRequestPostPatch(url, person, method);
        }
        break;

        case "DELETE": { //todo dorobić usuwanie z tablicy userdata po stronie backendu
            let id_person = $("#id_person").val();
            url = url + '?id_person=' + id_person.toString();

            await httpRequestDelete(url, load_all_persons_form);
        }
    }
}

async function submitClubForm(method) {

    let url = 'http://localhost:8080/club';

    if(method==="POST" || method ==="PATCH") {
        let club = {
            "name": "",
            "id_club": -1,
            "description": "",
            "email": "",
            "cours": false,
            "sport": false,
            "fun": false
        }

        club.name = document.getElementById("nazwa").value;
        club.id_club = document.getElementById("id_club").value;
        club.description = document.getElementById("opis").value;
        club.email = document.getElementById("email").value;

        club.course = document.getElementById("szkolenia").checked;
        club.sport = document.getElementById("sport").checked;
        club.fun = document.getElementById("rekreacja").checked;

        await httpRequestPostPatch(url, club, method);

    } else if (method==="DELETE") {

        let id_club = $("#id_club").val();
        url = url + '?id_club=' + id_club.toString();

        await httpRequestDelete(url, load_all_clubs_form);
    }
}

async function submitEventForm(method) {
    let url = 'http://localhost:8080/event';

    if(method==="POST" || method ==="PATCH") {

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
        event.isCourse = document.getElementById("szkolenia").checked;
        event.openEntry = document.getElementById("zapisy").checked;
        event.membersOnly = document.getElementById("czlonkowie").checked;

        console.log(event);

        await httpRequestPostPatch(url, event, method);

    } else if (method==="DELETE") {

        let id_event = $("#id_event").val();
        url = url + '?id_event=' + id_event.toString();

        await httpRequestDelete(url, load_all_events_form);
    }
}

async function submitRangeForm(method) {
    let url = 'http://localhost:8080/range';

    if(method==="POST" || method ==="PATCH") {

        let range = {
            "name": "",
            "id_shootingrange": -1,
            "description": "",
            "adress": ""
        }
        range.id_shootingrange = document.getElementById("id_shootingrange").value;
        range.name = document.getElementById("nazwa").value;
        range.description = document.getElementById("opis").value;
        range.adress = document.getElementById("adres").value;

        console.log(range);

        await httpRequestPostPatch(url, range, method);

    } else if (method==="DELETE") {

        let id_shootingrange = $("#id_shootingrange").val();
        url = url + '?id_range=' + id_shootingrange.toString();

        await httpRequestDelete(url, load_all_ranges_form);
    }
}

