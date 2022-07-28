
const actions = {
    MODIFY_PERSON: "MODIFY_PERSON",
    VIEW_PERSON: "VIEW_PERSON",
    DELETE_PERSON: "DELETE_PERSON",
    CREATE_PERSON: "CREATE_PERSON"
};

const roles = {
    ADMIN: "ADMIN",
    USER: "USER",
    GOD: "GOD",
    GUEST: "GUEST"
};

let mappings = new Map();

mappings.set(actions.MODIFY_PERSON, [roles.ADMIN, roles.GOD]);
mappings.set(actions.VIEW_PERSON, [roles.USER, roles.ADMIN, roles.GOD]);
mappings.set(actions.DELETE_PERSON, [roles.ADMIN, roles.GOD]);
mappings.set(actions.CREATE_PERSON, [roles.GUEST, roles.USER, roles.ADMIN, roles.GOD]);

function hasPermission(authority, action) {
    // if (!file?.accessLevel) {
    //     return false;
    // }
console.log(mappings);
    if (mappings.has(action)) {
        console.log(mappings.get(action).includes(authority));
        return mappings.get(action).includes(authority);
    } else {
        return false;
    }

}

