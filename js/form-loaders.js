// import hasPermission from "/js/permissions/permissions.js";
// import { actions } from "/js/permissions/constants.js";
// import authority from "/js/scripts.js";

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
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/person-form.html");
        findPersonById(localStorage.getItem("loggedUserId"));
    }
}

function load_club_registration_form() {
    if (hasPermission(authority, actions.VIEW_PERSON)) {
        $("#main").load("form/club-registration-form.html");
    }
}

function load_club_form() {
    if (hasPermission(authority, actions.VIEW_PERSON)) {
        $("#main").load("form/club-form.html");
    }
}

async function load_event_registration_form() {

    if (hasPermission(authority, actions.VIEW_PERSON)) {
        $("#main").load("form/event-registration-form.html");

        let Url = 'http://localhost:8080/rangesnames';

        let rangesNames = await httpRequestGet(Url);

        let rangesListHtml = "";

        for (let i = 0; i < rangesNames.length; i++) {
            rangesListHtml = rangesListHtml + "<option value=\"" + rangesNames[i].name + "\">" + rangesNames[i].name + "</option>"
        }
        document.getElementById("strzelnica").innerHTML = rangesListHtml;
    }
}

function load_event_form() {
    if (hasPermission(authority, actions.VIEW_PERSON)) {
        $("#main").load("form/event-form.html");
    }
}

function load_range_registration_form() {
    if (hasPermission(authority, actions.VIEW_PERSON)) {
        $("#main").load("form/range-registration-form.html");
    }
}

function load_range_form() {
    if (hasPermission(authority, actions.VIEW_PERSON)) {
        $("#main").load("form/range-form.html");
    }
}

function load_login_form() {
    // if (hasPermission(authority, actions.VIEW_PERSON))
    {
        $("#main").load("form/login-form.html");
    }
}