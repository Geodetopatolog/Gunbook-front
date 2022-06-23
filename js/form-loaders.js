function load_person_registration_form() {
    $("#main").load("form/person-registration-form.html");
}

function load_person_form() {
    $("#main").load("form/person-form.html");
}

function load_club_registration_form() {
    $("#main").load("form/club-registration-form.html");
}

function load_club_form() {
    $("#main").load("form/club-form.html");
}

async function load_event_registration_form() {

    $("#main").load("form/event-registration-form.html");

    let Url = 'http://localhost:8080/rangesnames';

    let rangesNames = await httpRequestGet(Url);

    let rangesListHtml = "";

    for (let i=0;i<rangesNames.length;i++)
    {
        rangesListHtml = rangesListHtml + "<option value=\"" + rangesNames[i].name + "\">" + rangesNames[i].name + "</option>"
    }
    document.getElementById("strzelnica").innerHTML = rangesListHtml;
}

function load_event_form() {
    $("#main").load("form/event-form.html");
}

function load_range_registration_form() {
    $("#main").load("form/range-registration-form.html");
}

function load_range_form() {
    $("#main").load("form/range-form.html");
}