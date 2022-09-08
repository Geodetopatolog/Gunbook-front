const methods = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

const loadType = {
    "CREATE": "create",
    "UPDATE": "update",
    "READ": "read",
    "READ_REQUESTED": "readrequested",
    "READ_JOINED": "readjoined",
    "READ_MEMBER": "readmember",
    "READ_OWNER": "readowner",
    "READ_ONLY": "readonly",
    "DELETE": "delete"
}

const URL_PREFIX = 'http://localhost:8080/';
// const URL_PREFIX = 'http://64.227.125.106:8080/';

const url = {
    PERSON: URL_PREFIX + "person",
    PERSONS: URL_PREFIX + "person/all/basic",
    PERSON_JOINED_EVENTS: URL_PREFIX + "person/joined_events",
    PERSON_JOINED_EVENTS_REQUESTS: URL_PREFIX + "person/joined_events/requests",
    PERSON_JOINED_CLUBS: URL_PREFIX + "person/clubs",
    PERSON_OWNED_CLUBS: URL_PREFIX + "person/owned_clubs",

    CLUB: URL_PREFIX + "club",
    CLUBS: URL_PREFIX + "club/all",
    CLUB_MEMBERS: URL_PREFIX + "club/members",
    CLUB_EVENTS: URL_PREFIX + "club/events_organized",
    CLUB_RANGES: URL_PREFIX + "club/ranges",


    EVENT: URL_PREFIX + "event",
    EVENTS: URL_PREFIX + "event/all",


    RANGE: URL_PREFIX + "range",
    RANGES: URL_PREFIX + "range/all",
    RANGES_NAMES: URL_PREFIX + "range/ranges_names",

    LOGIN: URL_PREFIX + "authenticate",
    // : URL_PREFIX + "",
}

