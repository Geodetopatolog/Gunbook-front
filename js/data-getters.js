async function getPersonById(id) {

    let Url = 'http://localhost:8080/person?id_person=';

    if (id===-1) {
        Url = Url + document.getElementById("id_person").value;
    } else {
        Url = Url + id.toString();
    }

    return await httpRequestGet(Url);
    //todo popoprawiać żeby zwracało dane, a nie od razu je wpisywało
}

async function getAllPersons() {
    let Url = 'http://localhost:8080/person/all';
    let Data = await httpRequestGet(Url);
    // console.log(Data);
    return Data;
}

async function getClubById(id) {
    let Url = 'http://localhost:8080/club?id_club=';

    if (id===-1) {
        Url = Url + document.getElementById("id_club").value;
    } else {
        Url = Url + id.toString();
    }
    let Data = await httpRequestGet(Url);
    return Data;
}

async function getClubsByPersonId(id) {
    let Url = 'http://localhost:8080/person/clubs?id_person=';
    Url = Url + id.toString();
    let Data = await httpRequestGet(Url);

    //todo wykasować, jak nie bedzie potrzebne :) albo zmienić, żeby przechowywać samo id, się zobaczy
    localStorage.setItem("loggedUserClubs", JSON.stringify(Data));
     return Data;
    //todo przerobić wszystkie na wyświetlanie listy kilku klubów, imprez itp
}

async function getAllClubs() {
    let Url = 'http://localhost:8080/club/all';
    let Data = await httpRequestGet(Url);
    // console.log(Data);
    return Data;
}

async function getEventById(id) {
    let Url = 'http://localhost:8080/event?id_event=';

    if (id===-1) {
        Url = Url + document.getElementById("id_event").value;
    } else {
        Url = Url + id.toString();
    }
    let Data = await httpRequestGet(Url);
    // console.log(Data);
    return Data;
}

async function getAllEvents() {
    let Url = 'http://localhost:8080/event/all';
    let Data = await httpRequestGet(Url);
    // console.log(Data);
    return Data;
}


async function getEventsJoinedByPersonId(id) {
    let Url = 'http://localhost:8080/person/joined_events?id_person=';
    Url = Url + id.toString();

    let Data = await httpRequestGet(Url);
    let Data2 = Data.at(0);
    // console.log(Data2);

    fillEventForm(Data2);
}

async function getRangeById(id) {
    let Url = 'http://localhost:8080/range?id_range=';

    if (id===-1) {
        Url = Url + document.getElementById("id_event").value;
    } else {
        Url = Url + id.toString();
    }

    let Data = await httpRequestGet(Url);
    return Data;
}

async function getAllRanges() {
    let Url = 'http://localhost:8080/range/all';
    let Data = await httpRequestGet(Url);
    // console.log(Data);
    return Data;
}