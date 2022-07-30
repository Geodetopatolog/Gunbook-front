async function fillPersonForm(Data) {
    Data.then((person) => {
        document.getElementById("imie").value = person.name;
        document.getElementById("nazwisko").value = person.surname;
        document.getElementById("nick").value = person.nick;
        document.getElementById("opis").value = person.description;
        document.getElementById("email").value = person.email;

        let clubHtml = "";
        for (let i = 0; i < Object.keys(person.clubs_name).length; i++) {
            clubHtml = clubHtml + "<li><a href=\"#\" id=\"klub" + i + "\">" + person.clubs_name[i] + "</a></li>"
        }
        document.getElementById("kluby").innerHTML = clubHtml;
    });
}

async function fillAllPersonsTable(Data) {
    Data.then((persons) => {
        $(document).ready(function () {
            let table = $('#persons_table').DataTable({
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
            $('#persons_table tbody').on('click', 'tr', function () {
                load_person_form(-1);
                fillPersonForm(getPersonById(table.row(this).data().id_person));
            });
        });
    });
}

async function fillClubForm(Data) {

    Data.then((club) => {
        document.getElementById("nazwa").value =  club.name;
        document.getElementById("opis").value = club.description;
        document.getElementById("email").value = club.email;

        if (club.sport === true)
            (document.getElementById("sport").checked = true)

        if (club.fun === true)
            (document.getElementById("szkolenia").checked = true)

        if (club.course === true)
            (document.getElementById("rekreacja").checked = true)
    });
}

function fillClubFormByLocalDataIndex(index) {
    let Data = JSON.parse(localStorage.getItem("loggedUserClubs"));
    let clubData = Data[index];
     fillClubForm(clubData);
}

async function fillAllClubsTable(Data) {
    Data.then((clubs) => {
        $(document).ready(function () {
            let table = $('#clubs_table').DataTable({
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
                ],
            });
            $('#clubs_table tbody').on('click', 'tr', function () {
                load_club_form(-1);
                fillClubForm(getClubById(table.row(this).data().id_club));
            });
        });
    });
}

async function fillEventForm(Data) {
    Data.then((event) => {
        document.getElementById("nazwa").value = event.name;
        document.getElementById("opis").value = event.description;
        document.getElementById("oplata").value = event.entryFee;
        document.getElementById("strzelnica").value = event.range;
        document.getElementById("dziens").value = event.dateOfStart;
        document.getElementById("dzienk").value = event.dateOfEnd;
        document.getElementById("godzinas").value = event.hourOfStart;
        document.getElementById("godzinak").value = event.hourOfEnd;

        if (event.isCompetition === true) (document.getElementById("zawody").checked = true)
        if (event.isPractice === true) (document.getElementById("rekreacja").checked = true)
        if (event.isCourse === true) (document.getElementById("szkolenie").checked = true)
        if (event.openEntry === true) (document.getElementById("zapisy").checked = true)
        if (event.membersOnly === true) (document.getElementById("czlonkowie").checked = true)
    });
}

async function fillAllEventTable(Data) {
    Data.then((events) => {
        $(document).ready(function () {
            let table = $('#events_table').DataTable({
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
                    { "data": "range" },
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
            $('#events_table tbody').on('click', 'tr', function () {
                load_event_form(-1);
                fillEventForm(getEventById(table.row(this).data().id_event));
            });
        });
    })
}

async function fillRangeForm(Data) {
    Data.then((range) => {
        document.getElementById("nazwa").value = range.name;
        document.getElementById("opis").value = range.description;
        document.getElementById("adres").value = range.adress;
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
                load_range_form(-1);
                fillRangeForm(getRangeById(table.row(this).data().id_shootingrange));
            });
        });
    })
}