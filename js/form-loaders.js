function load_person_registration_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.CREATE_PERSON)) {
        $("#main").load("form/person-registration-form.html");
    }
}

function load_person_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/person-form.html");
    }
}

function load_logged_person_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)
        && localStorage.getItem("loggedUserId") !== "0") {

        $("#main").load("form/person-form.html");
        fillPersonForm(getPersonById(localStorage.getItem("loggedUserId")));
    }
}

function load_all_persons_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/all_persons_list.html");
        fillAllPersonsTable(getAllPersons());
    }
}


function load_club_registration_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/club-registration-form.html");
    }
}

function load_club_form(index) {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
       $("#main").load("form/club-form.html");
        if (index!==-1) {
            fillClubFormByLocalDataIndex(index);
        }
    }
}

async function load_logged_person_club_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)
        && localStorage.getItem("loggedUserId") !== "0") {

        $("#main").load("form/person-clubs-list.html");
        let Clubs = await getClubsByPersonId(localStorage.getItem("loggedUserId"));
        let clubHtml = "";
        console.log(Clubs.length);
        for (let i=0; i < Object.keys(Clubs).length; i++) {
            clubHtml = clubHtml +   "<li><input type = \"button\" value = \"" + Clubs[i].name + "\" onclick = \"load_club_form(" + i + ")\"></li>";
        }

        document.getElementById("clubslist").innerHTML = clubHtml;
    }
}

function load_all_clubs_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/all_clubs_list.html");
        fillAllClubsTable(getAllClubs());
    }
}

async function load_event_registration_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/event-registration-form.html");
        let Url = 'http://localhost:8080/range/ranges_names';

        let rangesNames = await httpRequestGet(Url);

        let rangesListHtml = "";

        for (let i = 0; i < rangesNames.length; i++) {
            rangesListHtml = rangesListHtml + "<option value=\"" + rangesNames[i].name + "\">" + rangesNames[i].name + "</option>"
        }
        document.getElementById("strzelnica").innerHTML = rangesListHtml;
    }
}

function load_event_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/event-form.html");
    }
}

function load_logged_person_joined_event_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)
        && localStorage.getItem("loggedUserId") !== "0") {

        $("#main").load("form/event-form.html");
        getEventsJoinedByPersonId(localStorage.getItem("loggedUserId"));
    }
}

function load_all_events_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/all_events_list.html");
        fillAllEventTable(getAllEvents());
    }
}

function load_range_registration_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/range-registration-form.html");
    }
}

function load_range_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/range-form.html");
    }
}

function load_all_ranges_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/all_ranges_list.html");
        fillAllRangesTable(getAllRanges());
    }
}


function load_login_form() {
    // if (hasPermission(authority, actions.VIEW_PERSON))
    {
        $("#main").load("form/login-form.html");
    }
}