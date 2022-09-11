async function submitPersonForm(method) {

    switch (method) {
        case "POST": {
            if ($("#pass1").val()===$("#pass2").val()) {
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

                person.id_person = $("#id_person").val();
                person.name = $("#imie").val();
                person.surname = $("#nazwisko").val();
                person.nick = $("#nick").val();
                person.description = $("#opis").val();
                person.email = $("#email").val();
                person.username = $("#login").val();
                person.password = $("#pass1").val();

                await httpRequestPostPersonRegistrationForm(url.PERSON, person);

            } else {
                alert("Hasła nie są identyczne!");
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
            person.id_person = $("#id_person").val();
            person.name = $("#imie").val();
            person.surname = $("#nazwisko").val();
            person.nick = $("#nick").val();
            person.description = $("#opis").val();
            person.email = $("#email").val();
            await httpRequestPostPatch(url.PERSON, person, method, refreshNothing);
        }
        break;

        case "DELETE": {
            let id_person = $("#id_person").val();
            let u = url.PERSON + '?id_person=' + id_person.toString();

            await httpRequestDelete(u, load_all_persons_form, refreshNothing);
        }
    }
}

//---- Person - Club ----
async function submitClubLeaveByMemberForm() {
    let id_club = $("#id_club").val();
    let id_person =  localStorage.getItem("loggedUserId");
    let u = url.PERSON_JOINED_CLUBS + '?id_person=' + id_person.toString() + '&id_club=' + id_club.toString();

    await httpRequestDelete(u, load_logged_person_clubs_form, refreshLoggedUserAllClubs);
}

async function submitClubMembershipRequestByPersonForm() {
    let id_club = $("#id_club").val();
    let id_person =  localStorage.getItem("loggedUserId");
    let u = url.PERSON_REQUESTED_CLUBS + '?id_person=' + id_person.toString() + '&id_club=' + id_club.toString();

    await httpRequestPostPatch(u, "", "PATCH", refreshLoggedUserAllClubs);
}

async function submitDeleteClubMembershipRequestByPersonForm() {
    let id_club = $("#id_club").val();
    let id_person =  localStorage.getItem("loggedUserId");
    let u = url.PERSON_REQUESTED_CLUBS + '?id_person=' + id_person.toString() + '&id_club=' + id_club.toString();

    await httpRequestDelete(u, load_logged_person_clubs_form, refreshLoggedUserAllClubs);
}

//---- Person - Event ----
async function submitEventLeaveByParticipantForm() {
    let id_event = $("#id_event").val();
    let id_person =  localStorage.getItem("loggedUserId");
    let u = url.PERSON_JOINED_EVENTS + '?id_person=' + id_person.toString() + '&id_event=' + id_event.toString();

    await httpRequestDelete(u, load_logged_person_events_form, refreshLoggedUserAllEvents);
}

async function submitEventRequestByParticipantForm() {
    let id_event = $("#id_event").val();
    let id_person =  localStorage.getItem("loggedUserId");
    let u = url.PERSON_JOINED_EVENTS_REQUESTS + '?id_person=' + id_person.toString() + '&id_event=' + id_event.toString();

    await httpRequestPostPatch(u, "", "PATCH", refreshLoggedUserAllEvents);
}

async function submitEventRequestByParticipantDeleteForm() {
    let id_event = $("#id_event").val();
    let id_person =  localStorage.getItem("loggedUserId");
    let u = url.PERSON_JOINED_EVENTS_REQUESTS + '?id_person=' + id_person.toString() + '&id_event=' + id_event.toString();

    await httpRequestDelete(u, load_logged_person_events_form, refreshLoggedUserAllEvents);
}

//---- CLUB -  ----
async function submitClubForm(method) {

    if(method==="POST" || method ==="PATCH") {
        let club = {
            "name": "",
            "id_club": -1,
            "logoURL": "",
            "description": "",
            "email": "",
            "cours": false,
            "sport": false,
            "fun": false,
            "id_person": -1
        }

        if ( $("#id_club").val() !== null) {
            club.id_club = $("#id_club").val();
        }
        club.name = $("#nazwa").val();
        club.logoURL = $("#logo_klubu").val();
        club.description = $("#opis").val();
        club.email = $("#email").val();
        club.id_person = localStorage.getItem("loggedUserId");

        club.cours = $("#szkolenia").checked;
        club.sport = $("#sport").checked;
        club.fun = $("#rekreacja").checked;

    console.log(club);
            await httpRequestPostPatch(url.CLUB, club, method, refreshLoggedUserAllClubs)


    } else if (method==="DELETE") {

        let id_club = $("#id_club").val();
        let u = url.CLUB + '?id_club=' + id_club.toString();

        await httpRequestDelete(u, load_all_clubs_form, refreshLoggedUserAllClubs);
    }
}


//---- CLUB - Person ----

async function submitAcceptMembershipRequestByPersonForm() {
    let id_club = localStorage.getItem("currentClubId");
    let id_person =  $("#id_person").val();
    let u = url.CLUB_MEMBERSHIP_REQUESTS + '?id_club=' + id_club.toString() + '&id_person=' + id_person.toString();

    await httpRequestPostPatch(u, "", "PATCH", refreshNothing)
    load_current_club_form(id_club);

}

//todo ogarnąć tą zasraną koleność wykonywania funkcji
//---- CLUB - Event ----


//---- CLUB ----

async function submitEventForm(method) {

    if(method === "POST" || method === "PATCH") {

        let event = {
            "name": "",
            "id_event": -1,
            "id_club": -1,
            "description": "",
            "rangeName": "",
            "dateOfStart": "",
            "dateOfEnd": false,
            "hourOfStart": false,
            "hourOfEnd": false,
            "membersOnly": false,
            "openEntry": false,
            "competition": false,
            "practice": false,
            "course": false,
            "entryFee": 0
        }

        event.name = $("#nazwa").val();
        event.description = $("#opis").val();
        event.entryFee = $("#oplata").val();
        event.rangeName = $("#strzelnica").val();

        event.dateOfStart = $("#dziens").val();
        event.dateOfEnd = $("#dzienk").val();
        event.hourOfStart = $("#godzinas").val();
        event.hourOfEnd = $("#godzinak").val();

        event.competition = $("#zawody").checked;
        event.practice = $("#rekreacja").checked;
        event.course = $("#szkolenia").checked;
        event.openEntry = $("#zapisy").checked;
        event.membersOnly = $("#czlonkowie").checked;

        if (method === "POST") {
            event.id_club = localStorage.getItem("eventOrganizerClubId");
        }
        if (method === "PATCH") {
            event.id_event = $("#id_event").val();
        }

        await httpRequestPostPatch(url.EVENT, event, method, refreshLoggedUserAllEvents);

    } else if (method==="DELETE") {

        let id_event = $("#id_event").val();
        let u = url.EVENT + '?id_event=' + id_event.toString();

        await httpRequestDelete(u, load_all_events_form, refreshLoggedUserAllEvents);
    }

    // let id_person = localStorage.getItem("loggedUserId");
    // await refreshLoggedUserAllEvents(id_person);
}



//todo dorobienie akceptacji chętnego


//---- ShootingRange ----
async function submitRangeForm(method) {

    if(method==="POST" || method ==="PATCH") {

        let range = {
            "name": "",
            "id_shootingrange": -1,
            "description": "",
            "adress": ""
        }
        range.id_shootingrange = $("#id_shootingrange").val();
        range.name = $("#nazwa").val();
        range.description = $("#opis").val();
        range.adress = $("#adres").val();

        console.log(range);

        await httpRequestPostPatch(url.RANGE, range, method, refreshNothing);

    } else if (method==="DELETE") {

        let id_shootingrange = $("#id_shootingrange").val();
        let u = url.RANGE + '?id_range=' + id_shootingrange.toString();

        await httpRequestDelete(u, load_all_ranges_form, refreshNothing);
    }
}



//---- Login ----
function submitLoginForm() {
    login(document.getElementById("login").value, document.getElementById("pass1").value);

}

