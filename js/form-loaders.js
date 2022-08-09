const loadType = {
    "CREATE": "create",
    "UPDATE": "update",
    "READ": "read",
    "DETELE": "delete"
}

function load_person_form(type) {
    switch (type) {
        case "create":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/person-form.html", function () {
                    setCreatePerson();
                });
            }
        }
            break;

        case "read":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/person-form.html", function () {
                    setReadPerson();
                });
            }
        }
    }
}

function load_logged_person_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)
        && localStorage.getItem("loggedUserId") !== "-1") { //todo albo null?

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

function load_club_form(type) {

    switch (type) {
        case "create":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/club-form.html", function () {
                    setCreateClub();
                });
            }
        }
            break;

        case "read":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/club-form.html", function () {
                    setReadClub();
                });
            }
        }
    }
}

function load_logged_person_club_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)
        && localStorage.getItem("loggedUserId") !== "-1") {

        $("#main").load("form/person-clubs-list.html");
        fillAllClubsTable(getClubsByPersonId(localStorage.getItem("loggedUserId")));
    }
}

function load_all_clubs_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/all_clubs_list.html");
        fillAllClubsTable(getAllClubs());
    }
}

async function load_event_form(type) {

    switch (type) {
        case "create":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/event-form.html", function () {
                    setCreateEvent();
                });
            }
        }
        break;

        case "read":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/event-form.html", function () {
                    setReadEvent();
                });
            }
        }
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

function load_range_form(type) {

    switch (type) {
        case "create":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/range-form.html", function () {
                    setCreateRange();
                });
            }
        }
            break;

        case "read":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/range-form.html", function () {
                    setReadRange();
                });
            }
        }
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