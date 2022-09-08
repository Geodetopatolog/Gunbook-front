function load_starter_page() {
    if (localStorage.getItem("authority") === "GUEST") {
        $("#main").load("form/starter-page.html");
    } else {
        load_logged_person_form();
    }

}

function load_person_form(type) {
    switch (type) {
        case "create":
        {
            if (true) {
                $("#main").load("form/person-form.html", function () {
                    setCreatePerson();
                });
            }
        }
            break;

        case "readonly":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/person-form.html", function () {
                    setReadOnlyPerson();
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
        && localStorage.getItem("loggedUserId") !== null) {

        $("#main").load("form/person-form.html", function () {
            setReadPerson();
        });

        fillPersonForm(getPersonById(localStorage.getItem("loggedUserId")));
    }
}

function load_all_persons_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/all-persons-list.html");
        fillAllPersonsTable(getAllPersons());
    }
}

function load_club_form(type) {

    switch (type) {
        case "create":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/club-form.html", function () {
                    initializeClubForm();
                    setCreateClub();
                });
            }
        }
            break;

        case "readmember":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/club-form.html", function () {
                    initializeClubForm();
                    setReadMemberClub();
                });
            }
        }
            break;

        case "readowner":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/club-form.html", function () {
                    initializeClubForm();
                    setReadOwnerClub();
                });
            }
        }
            break;

        case "readonly":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/club-form.html", function () {
                    initializeClubForm();
                    setReadOnlyClub();
                });
            }
        }


    }
}

function load_logged_person_clubs_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)
        && localStorage.getItem("loggedUserId") !== "-1") {

        $("#main").load("form/person-clubs-list.html", function () {
            initializePersonClubsForm();
            fillAllClubsTable(getClubsByPersonId(localStorage.getItem("loggedUserId")), '#joined_clubs');
            fillAllClubsTable(getClubsOwnedByPersonId(localStorage.getItem("loggedUserId")), '#owned_clubs');
        });
    }
}


function load_all_clubs_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/all-clubs-list.html");
        fillAllClubsTable(getAllClubs(), '#clubs_table');
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

        case "readjoined":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/event-form.html", function () {
                    setReadJoinedEvent();
                });
            }
        }
        break;

        case "readrequested":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/event-form.html", function () {
                    setReadRequestedEvent();
                });
            }
        }
            break;

        case "readonly":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/event-form.html", function () {
                    setReadOnlyEvent();
                });
            }
        }
    }
}

function load_logged_person_events_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)
        && localStorage.getItem("loggedUserId") !== null) {

        $("#main").load("form/person-events-form.html");
        fillAllEventTable(getEventsJoinedByPersonId(localStorage.getItem("loggedUserId")));
    }
}

function load_all_events_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/all-events-list.html");
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
        $("#main").load("form/all-ranges-list.html");
        fillAllRangesTable(getAllRanges());
    }
}

function load_login_form() {
    // if (hasPermission(authority, actions.VIEW_PERSON))
    {
        $("#main").load("form/login-form.html");
    }
}