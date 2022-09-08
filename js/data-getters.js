//zwracamy zmienną a nie wynik pobrania danych, żeby w razie czego łatwo dodać np zapisanie do pamięci
//id=-1 jest jako obsługa zapytania do bazy na podstawie wprowadzonego w pole na stronie id - zapewne do wywalenia po wprowadzeniu tablic ze wszystkimi wpisami w bazie
async function getPersonById(id) {

    let Url = url.PERSON + '?id_person=';
        Url = Url + id.toString();

    let person = await httpRequestGet(Url);
    return person;
}

async function getAllPersons() {
    let Url = url.PERSONS;
    let persons = await httpRequestGet(Url);
    return persons;
}

async function getClubById(id) {
    let Url = url.CLUB + '?id_club=';
        Url = Url + id.toString();

    let club = await httpRequestGet(Url);
    return club;
}

async function getClubsByPersonId(id) {
    let Url = url.PERSON_JOINED_CLUBS + '?id_person=';
    Url = Url + id.toString();
    let clubs = await httpRequestGet(Url);
     return clubs;
}

async function getClubsOwnedByPersonId(id) {
    let Url = url.PERSON_OWNED_CLUBS + '?id_person=';
    Url = Url + id.toString();
    let clubs = await httpRequestGet(Url);
    return clubs;
}

async function getAllClubs() {
    let Url = url.CLUBS;
    let clubs = await httpRequestGet(Url);
    return clubs;
}

async function getAllClubMembersByClubId(id) {
    let Url = url.CLUB_MEMBERS + "?id_club=";
    Url = Url + id.toString();
    let members = await httpRequestGet(Url);
    return members;
}

async function getAllEventsByClubId(id) {
    let Url = url.CLUB_EVENTS + "?id_club=";
    Url = Url + id.toString();
    let events = await httpRequestGet(Url);
    return events;
}

async function getAllRangesByClubId(id) {
    let Url = url.CLUB_RANGES + "?id_club=";
    Url = Url + id.toString();
    let ranges = await httpRequestGet(Url);
    return ranges;
}


async function getEventById(id) {
    let Url = url.EVENT + '?id_event=';
        Url = Url + id.toString();

    let event = await httpRequestGet(Url);
    return event;
}

async function getAllEvents() {
    let Url = url.EVENTS;
    let events = await httpRequestGet(Url);
    return events;
}

async function getEventsJoinedByPersonId(id) {
    let Url = url.PERSON_JOINED_EVENTS + '?id_person=';
        Url = Url + id.toString();

    let events = await httpRequestGet(Url);
    return events;
}

async function getRangeById(id) {
    let Url = url.RANGE + '?id_range=';
        Url = Url + id.toString();

    let range = await httpRequestGet(Url);
    return range;
}

async function getAllRanges() {
    let Url = url.RANGES;
    let ranges = await httpRequestGet(Url);
    return ranges;
}

async function getRangesNames() {
    let Url = url.RANGES_NAMES;
    let rangesNames = await httpRequestGet(Url);
    return rangesNames;
}