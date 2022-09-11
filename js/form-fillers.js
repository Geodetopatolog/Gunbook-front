async function fillPersonForm(Data) {
    Data.then((person) => {
        $("#id_person").val(person.id_person);
        $("#imie").val(person.name);
        $("#nazwisko").val(person.surname);
        $("#nick").val(person.nick);
        $("#opis").val(person.description);
        $("#email").val(person.email);

        let clubHtml = "";
        for (let i = 0; i < Object.keys(person.clubs_name).length; i++) {
            clubHtml = clubHtml + "<li><a href=\"#\" id=\"klub" + i + "\">" + person.clubs_name[i] + "</a></li>"
        }
        $("#kluby").innerHTML = clubHtml;
    });
}

async function fillAllPersonsTable(Data, tableId, loadType) {
    Data.then((persons) => {
        console.log(persons);
        $(document).ready(function () {
            let table = $(tableId).DataTable({
                scrollX:        true,
                scrollCollapse: true,
                fixedColumns: {
                    left: 1
                },
                data: persons,
                columns: [
                    { "data": "name" },
                    { "data": "surname" },
                    { "data": "nick" },
                    { "data": "description" },
                    { "data": "email" },
                ],
            });
            $(tableId + ' tbody').on('click', 'tr', function () {
                // let loggedPersonId = localStorage.getItem("loggedUserId");
                // if (loggedPersonId === table.row(this).data().id_person) {
                //     load_person_form(loadType.READ);
                // } else {
                //     load_person_form(loadType.READ_ONLY);
                // }
                load_person_form(loadType);
                fillPersonForm(getPersonById(table.row(this).data().id_person));
            });
        });
    });
}

async function fillClubForm(Data) {

    Data.then((club) => {
        $("#nazwa").val(club.name);
        $("#id_club").val(club.id_club);
        $("#logo_klubu").val(club.logoURL);
        $("#opis").val(club.description);
        $("#email").val(club.email);

        if (club.sport === true)
        $("#sport").prop("checked",true);

        if (club.fun === true)
        $("#szkolenia").prop("checked",true);
        if (club.course === true)
        $("#rekreacja").prop("checked",true);

            $("#czlonkowie").val(club.members_count);
            fillAllPersonsTable(getAllClubMembersByClubId(club.id_club), '#members_table', loadType.READ); //todo zronić na read member
            fillAllPersonsTable(getAllClubRequestsByClubId(club.id_club), '#requests_table', loadType.READ_REQUESTED);
            fillAllEventTable(getAllEventsByClubId(club.id_club), '#events_table');
            fillAllRangesTable(getAllRangesByClubId(club.id_club));
    });

}

// function fillClubFormByLocalDataIndex(index) {
//     let Data = JSON.parse(localStorage.getItem("loggedUserClubs"));
//     let clubData = Data[index];
//      fillClubForm(clubData);
// }

async function fillAllClubsTable(Data, tableId) {
   //  let tableId = '#clubs_table';

    Data.then((clubs) => {
        $(document).ready(function () {
            let table = $(tableId).DataTable({
                scrollX:        true,
                scrollCollapse: true,
                fixedColumns: {
                    left: 1
                },
                data: clubs,
                columns: [
                    { "data": "name" },
                    { "data": "description" },
                    { "data": "email" },
                    { "data": "sport" },
                    { "data": "cours" },
                    { "data": "fun" },
                    { "data": "members_count" },
                ],
            });
            $(tableId + ' tbody').on('click', 'tr', function () {
                let loggedUserAppliedClubsIds = JSON.parse(localStorage.getItem("loggedUserAppliedClubsIds"));
                let loggedUserClubsIds = JSON.parse(localStorage.getItem("loggedUserClubsIds"));
                let loggedUserOwnedClubsIds = JSON.parse(localStorage.getItem("loggedUserOwnedClubsIds"));
                let id_club = table.row(this).data().id_club;
                localStorage.setItem("currentClubId", JSON.stringify(id_club));

                if (loggedUserOwnedClubsIds.includes(id_club)) {
                    load_club_form(loadType.READ_OWNER);
                } else if (loggedUserClubsIds.includes(id_club)) {
                    load_club_form(loadType.READ_MEMBER);
                } else if (loggedUserAppliedClubsIds.includes(id_club)) {
                    load_club_form(loadType.READ_REQUESTED);
                } else {
                    load_club_form(loadType.READ_ONLY);
                }

                fillClubForm(getClubById(id_club));
            });
        });
    });
}

async function fillEventForm(Data) {
    Data.then((event) => {
        $("#nazwa").val(event.name);
        $("#id_event").val(event.id_event);
        $("#opis").val(event.description);
        $("#oplata").val(event.entryFee);
        $("#strzelnica").val(event.rangeName);
        $("#dziens").val(event.dateOfStart);
        $("#dzienk").val(event.dateOfEnd);
        $("#godzinas").val(event.hourOfStart);
        $("#godzinak").val(event.hourOfEnd);

        if (event.competition === true) {
            $("#zawody").prop("checked", true);
        }
        if (event.practice === true) {
            $("#rekreacja").prop("checked", true);
        }
        if (event.course === true) {
            $("#szkolenia").prop("checked", true);
        }
        if (event.openEntry === true) {
            $("#zapisy").prop("checked", true);
        }
        if (event.membersOnly === true) {
            $("#czlonkowie").prop("checked", true);
        }
    });
}

async function fillAllEventTable(Data, tableId) {
    console.log(tableId);
    Data.then((events) => {
        $(document).ready(function () {
            let table = $(tableId).DataTable({
                scrollX:        true,
                scrollCollapse: true,
                fixedColumns: {
                    left: 1
                },
                data: events,
                columns: [
                    { "data": "name" },
                    { "data": "description" },
                    { "data": "entryFee" },
                    { "data": "rangeName" },
                    { "data": "participantsCount" },
                    { "data": "dateOfStart" },
                    { "data": "dateOfEnd" },
                    { "data": "hourOfStart" },
                    { "data": "hourOfEnd" },
                    { "data": "competition" },
                    { "data": "practice" },
                    { "data": "course" },
                    { "data": "openEntry" },
                    { "data": "membersOnly" },
                ],
            });
            $(tableId + ' tbody').on('click', 'tr', function () {
                load_event_form(loadType.READ);

                let loggedUserJoinedEventsIds = JSON.parse(localStorage.getItem("loggedUserJoinedEventsIds"));
                let loggedUserAppliedEventsIds = JSON.parse(localStorage.getItem("loggedUserAppliedEventsIds"));
                console.log(loggedUserJoinedEventsIds);
                console.log(loggedUserAppliedEventsIds);

                if (loggedUserJoinedEventsIds.includes(table.row(this).data().id_event)) {
                    load_event_form(loadType.READ_JOINED);
                } else if (loggedUserAppliedEventsIds.includes(table.row(this).data().id_event)) {
                    load_event_form(loadType.READ_REQUESTED);
                } else {
                    load_event_form(loadType.READ_ONLY);
                }

                fillEventForm(getEventById(table.row(this).data().id_event));


            });
        });
    })
}

async function fillRangeForm(Data) {
    Data.then((range) => {
        $("#nazwa").val(range.name);
        $("#id_shootingrange").val(range.id_shootingrange);
        $("#opis").val(range.description);
        $("#adres").val(range.adress);
    });
}

async function fillAllRangesTable(Data) {
    Data.then((ranges) => {
        $(document).ready(function () {
            let table = $('#ranges_table').DataTable({
                // scrollX:        true,
                // scrollCollapse: true,
                // fixedColumns: {
                //     left: 1
                // },
                data: ranges,
                columns: [
                    { "data": "name" },
                    { "data": "description" },
                    { "data": "adress" },
                ],
            });
            $('#ranges_table tbody').on('click', 'tr', function () {
                load_range_form(loadType.READ);
                fillRangeForm(getRangeById(table.row(this).data().id_shootingrange));
            });
        });
    })
}

async function fillRangesNamesToEventRegistrationForm(rangesNames) {
    rangesNames.then((rangesNamesData) => {
        let rangesListHtml = "";
        for (let i = 0; i < rangesNamesData.length; i++) {
            rangesListHtml = rangesListHtml + "<option value=\"" + rangesNamesData[i].name + "\">" + rangesNamesData[i].name + "</option>"
        }
        $("#strzelnica").html(rangesListHtml);
    })

}