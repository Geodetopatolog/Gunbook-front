//zwracamy zmienną a nie wynik pobrania danych, żeby w razie czego łatwo dodać np zapisanie do pamięci
//id=-1 jest jako obsługa zapytania do bazy na podstawie wprowadzonego w pole na stronie id - zapewne do wywalenia po wprowadzeniu tablic ze wszystkimi wpisami w bazie
async function getPersonById(id) {

    let Url = url.PERSON + '?id_person=';
        Url = Url + id.toString();

    return await httpRequestGet(Url);
}

async function getAllPersons() {
    let Url = url.PERSONS;
    return await httpRequestGet(Url);
}

async function getClubById(id) {
    let Url = url.CLUB + '?id_club=';
        Url = Url + id.toString();

    return await httpRequestGet(Url);
}

async function getClubsByPersonId(id) {
    let Url = url.PERSON_JOINED_CLUBS + '?id_person=';
    Url = Url + id.toString();
    return await httpRequestGet(Url);
}

async function getClubsOwnedByPersonId(id) {
    let Url = url.PERSON_OWNED_CLUBS + '?id_person=';
    Url = Url + id.toString();
    return await httpRequestGet(Url);
}

async function getRequestedClubsByPersonId(id) {
    let Url = url.PERSON_REQUESTED_CLUBS + '?id_person=';
    Url = Url + id.toString();
    return await httpRequestGet(Url);
}

async function getAllClubs() {
    let Url = url.CLUBS;
    return await httpRequestGet(Url);
}

async function getAllClubMembersByClubId(id) {
    let Url = url.CLUB_MEMBERS + "?id_club=";
    Url = Url + id.toString();
    return await httpRequestGet(Url);
}

async function getAllClubRequestsByClubId(id) {
    let Url = url.CLUB_MEMBERSHIP_REQUESTS + "?id_club=";
    Url = Url + id.toString();
    return await httpRequestGet(Url);
}

async function getAllEventsByClubId(id) {
    let Url = url.CLUB_EVENTS + "?id_club=";
    Url = Url + id.toString();
    return await httpRequestGet(Url);
}

async function getAllRangesByClubId(id) {
    let Url = url.CLUB_RANGES + "?id_club=";
    Url = Url + id.toString();
    return await httpRequestGet(Url);
}


async function getEventById(id) {
    let Url = url.EVENT + '?id_event=';
        Url = Url + id.toString();

    return await httpRequestGet(Url);
}

async function getAllEvents() {
    let Url = url.EVENTS;
    return await httpRequestGet(Url);
}

async function getEventsJoinedByPersonId(id) {
    let Url = url.PERSON_JOINED_EVENTS + '?id_person=';
        Url = Url + id.toString();

    return await httpRequestGet(Url);
}

async function getEventsAppliedByPersonId(id) {
    let Url = url.PERSON_JOINED_EVENTS_REQUESTS + '?id_person=';
    Url = Url + id.toString();

    return await httpRequestGet(Url);
}

async function getAllEventParticipantsByEventId(id) {
    let Url = url.EVENTS_PARTICIPANTS + '?id_event=';
    Url = Url + id.toString();

    return await httpRequestGet(Url);
}

async function getAllEventParticipantsRequestsByEventId(id) {
    let Url = url.EVENTS_PARTICIPANTS_REQUESTS + '?id_event=';
    Url = Url + id.toString();

    return await httpRequestGet(Url);
}



async function getRangeById(id) {
    let Url = url.RANGE + '?id_range=';
        Url = Url + id.toString();

    return await httpRequestGet(Url);
}

async function getAllRanges() {
    let Url = url.RANGES;
    return await httpRequestGet(Url);
}

async function getRangesNames() {
    let Url = url.RANGES_NAMES;
    return await httpRequestGet(Url);
}

async function refreshJoinedClubs(id) {
    let Url = url.PERSON_JOINED_CLUBS_IDS + '?id_person=';
    Url = Url + id.toString();
    let clubsIds = await httpRequestGet(Url);
    console.log(clubsIds);
    localStorage.removeItem("loggedUserClubsIds");
    localStorage.setItem("loggedUserClubsIds", JSON.stringify(clubsIds));
}

async function refreshOwnedClubs(id) {
    let Url = url.PERSON_OWNED_CLUBS_IDS + '?id_person=';
    Url = Url + id.toString();
    let ownedClubsIds = await httpRequestGet(Url)
    // console.log(ownedClubsIds);
    localStorage.removeItem("loggedUserOwnedClubsIds");
    localStorage.setItem("loggedUserOwnedClubsIds", JSON.stringify(ownedClubsIds));
}

async function refreshClubsRequests(id) {
    let Url = url.PERSON_REQUESTED_CLUBS_IDS + '?id_person=';
    Url = Url + id.toString();
    let requestedClubsIds = await httpRequestGet(Url)
    // console.log(requestedClubsIds);
    localStorage.removeItem("loggedUserAppliedClubsIds");
    localStorage.setItem("loggedUserAppliedClubsIds", JSON.stringify(requestedClubsIds));
}

async function refreshLoggedUserAllClubs(id) {
    await refreshClubsRequests(id);
    await refreshOwnedClubs(id);
    await refreshJoinedClubs(id);
}

async function refreshJoinedEvents(id) {
    let Url = url.PERSON_JOINED_EVENTS_IDS + '?id_person=';
    Url = Url + id.toString();
    let joinedEventsIds = await httpRequestGet(Url)
    // console.log(joinedEventsIds);
    localStorage.removeItem("loggedUserJoinedEventsIds");
    localStorage.setItem("loggedUserJoinedEventsIds", JSON.stringify(joinedEventsIds));
}

async function refreshEventsRequests(id) {
    let Url = url.PERSON_JOINED_EVENTS_REQUESTS_IDS + '?id_person=';
    Url = Url + id.toString();
    let requestedEventsIds = await httpRequestGet(Url)
    // console.log(requestedEventsIds);
    localStorage.removeItem("loggedUserAppliedEventsIds");
    localStorage.setItem("loggedUserAppliedEventsIds", JSON.stringify(requestedEventsIds));
}

async function refreshLoggedUserAllEvents(id) {
    await refreshJoinedEvents(id);
    await refreshEventsRequests(id);
}

async function refreshLoggedUserAllData(id) {
    await refreshLoggedUserAllClubs(id);
    await refreshLoggedUserAllEvents(id);
}

function refreshNothing() {

}