//zwracamy zmienną a nie wynik pobrania danych, żeby w razie czego łatwo dodać np zapisanie do pamięci
//id=-1 jest jako obsługa zapytania do bazy na podstawie wprowadzonego w pole na stronie id - zapewne do wywalenia po wprowadzeniu tablic ze wszystkimi wpisami w bazie
async function getPersonById(id) {

    let Url = 'http://localhost:8080/person?id_person=';

    if (id===-1) {
        Url = Url + document.getElementById("id_person").value;
    } else {
        Url = Url + id.toString();
    }
    let person = await httpRequestGet(Url);
    return person;
}

async function getAllPersons() {
    let Url = 'http://localhost:8080/person/all';
    // console.log(Data);
    let persons = await httpRequestGet(Url);
    return persons;
}

async function getClubById(id) {
    let Url = 'http://localhost:8080/club?id_club=';

    if (id===-1) {
        Url = Url + document.getElementById("id_club").value;
    } else {
        Url = Url + id.toString();
    }
    let club = await httpRequestGet(Url);
    return club;
}

async function getClubsByPersonId(id) {
    let Url = 'http://localhost:8080/person/clubs?id_person=';
    Url = Url + id.toString();
    let clubs = await httpRequestGet(Url);
    //todo wykasować, jak nie bedzie potrzebne :) albo zmienić, żeby przechowywać samo id, się zobaczy
    localStorage.setItem("loggedUserClubs", JSON.stringify(clubs));
     return clubs;
}

async function getAllClubs() {
    let Url = 'http://localhost:8080/club/all';
    let clubs = await httpRequestGet(Url);
    console.log(clubs);
    return clubs;
}

async function getEventById(id) {
    let Url = 'http://localhost:8080/event?id_event=';

    if (id===-1) {
        Url = Url + document.getElementById("id_event").value;
    } else {
        Url = Url + id.toString();
    }
    let event = await httpRequestGet(Url);
    // console.log(Data);
    return event;
}

async function getAllEvents() {
    let Url = 'http://localhost:8080/event/all';
    let events = await httpRequestGet(Url);
    // console.log(Data);
    return events;
}

async function getEventsJoinedByPersonId(id) {
    let Url = 'http://localhost:8080/person/joined_events?id_person=';
    Url = Url + id.toString();

    let events = await httpRequestGet(Url);
    fillEventForm(events);
}

async function getRangeById(id) {
    let Url = 'http://localhost:8080/range?id_range=';

    if (id===-1) {
        Url = Url + document.getElementById("id_event").value;
    } else {
        Url = Url + id.toString();
    }
    let range = await httpRequestGet(Url);
    return range;
}

async function getAllRanges() {
    let Url = 'http://localhost:8080/range/all';
    let ranges = await httpRequestGet(Url);
    return ranges;
}

async function getRangesNames() {
    let Url = 'http://localhost:8080/range/ranges_names';

    let rangesNames = await httpRequestGet(Url);
    return rangesNames;
}