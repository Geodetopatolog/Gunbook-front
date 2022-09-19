function load_starter_page() {

    $("#main").load("form/starter-page.html");
    if (localStorage.getItem("authority") === "GUEST") {
        $("#currentState").text("Gość");
        setCurrentState(states.GUEST);
    } else {
        if (localStorage.getItem("authority") === "USER") {
            $("#currentState").text("Użytkownik");
            setCurrentState(states.USER);
        } else if (localStorage.getItem("authority") === "ADMIN") {
            $("#currentState").text("Administrator");
            setCurrentState(states.ADMIN);
        } else if (localStorage.getItem("authority") === "GOD") {
            $("#currentState").text("BÓG!1!!");
            setCurrentState(states.GOD);
        }

        // load_logged_person_form();
        $("#loginButton").hide();
        $("#logoutButton").show();
        $("#registerButton").hide();

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
            break;

        case "readrequested":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/person-form.html", function () {
                    setReadClubApplierPerson();
                });
            }
        }
            break;

        case "readmember":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/person-form.html", function () {
                    setReadClubMemberPerson();
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
        setCurrentState(states.USER);
    }
}

function load_all_persons_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/all-persons-list.html");
        fillAllPersonsTable(getAllPersons(), '#persons_table', loadType.READ);
    }
}

function load_club_form(type) {

    switch (type) {
        case "create":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/club-form.html", function () {
                    // initializeClubForm();
                    setCreateClub();
                });
            }
        }
            break;

        case "readrequested":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/club-form.html", function () {
                    // initializeClubForm();
                    setReadAplierClub();
                });
            }
        }
            break;

        case "readmember":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/club-form.html", function () {
                    // initializeClubForm();
                    setReadMemberClub();
                });
            }
        }
            break;

        case "readowner":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/club-form.html", function () {
                    // initializeClubForm();
                    setReadOwnerClub();
                    if (localStorage.getItem("currentState") === "CLUB") {
                        setControlClubBack();
                    }

                });
            }
        }
            break;

        case "readonly":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/club-form.html", function () {
                    // initializeClubForm();
                    setReadOnlyClub();
                });
            }
        }
    }
}

function load_current_club_form() {
    load_club_form(loadType.READ_OWNER);
    let id_club = localStorage.getItem("currentClubId")
    fillClubForm(getClubById(id_club));
    //localStorage.removeItem("currentClubId");
}

function load_logged_person_clubs_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)
        && localStorage.getItem("loggedUserId") !== "-1") {

        $("#main").load("form/person-clubs-list.html", function () {
            initializePersonClubsForm().finally(() => {
                fillAllClubsTable(getClubsByPersonId(localStorage.getItem("loggedUserId")), '#joined_clubs');
                fillAllClubsTable(getRequestedClubsByPersonId(localStorage.getItem("loggedUserId")), '#applied_clubs');
                fillAllClubsTable(getClubsOwnedByPersonId(localStorage.getItem("loggedUserId")), '#owned_clubs');
            });
        });
    }
}


function load_all_clubs_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/all-clubs-list.html");
        fillAllClubsTable(getAllClubs(), '#clubs_table');
    }
}

function load_event_form(type) {
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

        case "readonly":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                console.log("jestem w readonly");
                $("#main").load("form/event-form.html", function () {
                    setReadOnlyEvent();
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

        case "readjoined":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/event-form.html", function () {
                    setReadJoinedEvent();
                });
            }
        }
        break;

        case "readowner":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/event-form.html", function () {
                    setReadOwnerEvent();
                });
            }
        }
    }

}

function load_logged_person_events_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)
        && localStorage.getItem("loggedUserId") !== null) {

        $("#main").load("form/person-events-form.html", function () {
            initializePersonEventsForm();
            fillAllEventTable(getEventsJoinedByPersonId(localStorage.getItem("loggedUserId")), '#joined_events');
            fillAllEventTable(getEventsAppliedByPersonId(localStorage.getItem("loggedUserId")), '#applied_events');

        });

    }
}



function load_all_events_form() {
    if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
        $("#main").load("form/all-events-list.html");
        fillAllEventTable(getAllEvents(), '#events_table');
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
        break;

        case "readowner":
        {
            if (hasPermission(localStorage.getItem("authority"), actions.VIEW_PERSON)) {
                $("#main").load("form/range-form.html", function () {
                    setReadOwnerRange();
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