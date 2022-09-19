//todo nie przechowywać tokena w pamięci lokalnej, bo go ktoś zajuma :(


function displayRadioValue() {
    document.getElementById("result").innerHTML = "";

    let radio = document.getElementById("radiob");

    let ele = radio.getElementsByTagName('input');

    for(let i = 0; i < ele.length; i++) {

        if(ele[i].type==="radio") {

            if(ele[i].checked)
                document.getElementById("result").innerHTML
                    += ele[i].name + " "
                    + ele[i].value + "<br>";
        }
    }
}

function setSameValueOnEventDate() {

    document.getElementById("dzienk").value = document.getElementById("dziens").value;
}

function httpRequestPostPatch(url, body, method) {

    // let params = {
    //     headers:{
    //         'Content-Type': "application/json",
    //         'Authorization': 'Bearer ' + localStorage.getItem("JWT"),
    //     },
    //     body: JSON.stringify(body),
    //     method: method
    // }
    // await fetch(url, params)
    //     .then(response => response.statusText)
    //     .then(() => {
    //     refreshFunction(localStorage.getItem("loggedUserId"));
    // });

    return new Promise((resolve, reject) => {
        let params = {
            headers:{
                'Content-Type': "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem("JWT"),
            },
            body: JSON.stringify(body),
            method: method
        }

        fetch(url, params).then(res => {
            if (res.status > 199 && res.status < 203) {
                resolve(true);
            } else {
                reject(false);
            }
        });
        //todo dorobić obsługę różnych błędów
    });


}

async function httpRequestPostPersonRegistrationForm(url, body) {
    let params = {
        headers:{
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body),
        method: "POST"
    }

    fetch(url, params)
        .then(response => response.statusText)
        .then(data => {
            console.log('sukces:', data)
        });
}

async function httpRequestGet(url) {

    let params = {
        headers:{
            'Content-Type': "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem("JWT"),
        },
        method: "GET"
    }
    console.log(params);
    let res = await fetch(url, params);
    console.log(res);
    return await res.json();
}

function httpRequestDelete(url) {
    // let params = {
    //     headers:{
    //         'Content-Type': "application/json",
    //         'Authorization': 'Bearer ' + localStorage.getItem("JWT"),
    //     },
    //     method: "DELETE"
    // }
    //
    // fetch(url, params)
    //  //   .then(response => response.statusText)
    //     .then(() => {
    //         fillFunction();
    //     })
    //     .then(() => {
    //     refreshFunction(localStorage.getItem("loggedUserId"));
    // });

    return new Promise((resolve, reject) => {
        let params = {
                headers:{
                    'Content-Type': "application/json",
                    'Authorization': 'Bearer ' + localStorage.getItem("JWT"),
                },
                method: "DELETE"
            }

        fetch(url, params).then(res => {
            if (res.status > 199 && res.status < 203) {
                resolve(true);
            } else {
                reject(false);
            }
        });
        //todo dorobić obsługę różnych błędów
    });
}

async function login(username, password) {
    let Url = url.LOGIN;
    let Data = {
        "username": username,
        "password": password
    }

    let Params = {
        headers:{
            'Content-Type': "application/json",
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(Data),
        method: "POST"
    }

    let res = await fetch(Url, Params);
    let status = res.status;

    if (status === 200) {
        let log = await res.json();

        localStorage.setItem("JWT", log.jwt);
        localStorage.setItem("authority", log.role);
        localStorage.setItem("loggedUserId", JSON.stringify(log.loggedUserId));
        localStorage.setItem("loggedUserClubsIds", JSON.stringify(log.loggedUserClubsIds));
        localStorage.setItem("loggedUserOwnedClubsIds", JSON.stringify(log.loggedUserOwnedClubsIds));
        localStorage.setItem("loggedUserJoinedEventsIds", JSON.stringify(log.loggedUserJoinedEventsIds));
        localStorage.setItem("loggedUserAppliedClubsIds", JSON.stringify(log.loggedUserAppliedClubsIds));
        localStorage.setItem("loggedUserAppliedEventsIds", JSON.stringify(log.loggedUserAppliedEventsIds));

        // console.log(parseJwt(log.jwt).id);
        // console.log("localStorage JWT " + localStorage.getItem("JWT"));
        // console.log("localStorage authority " + localStorage.getItem("authority"));
        // console.log("localStorage loggedUserId " + localStorage.getItem("loggedUserId"));
        // console.log("localStorage loggedUserClubsIds " + JSON.parse(localStorage.getItem("loggedUserClubsIds")));
        // console.log("localStorage loggedUserOwnedClubsIds " + JSON.parse(localStorage.getItem("loggedUserOwnedClubsIds")));
        // console.log("localStorage loggedUserJoinedEventsIds " + JSON.parse(localStorage.getItem("loggedUserJoinedEventsIds")));
        // console.log("localStorage loggedUserAppliedClubsIds " + JSON.parse(localStorage.getItem("loggedUserAppliedClubsIds")));
        // console.log("localStorage loggedUserAppliedEventsIds " + JSON.parse(localStorage.getItem("loggedUserAppliedEventsIds")));

        setCurrentState(states.USER);

        load_logged_person_form();
        $("#loginButton").hide();
        $("#logoutButton").show();
        $("#registerButton").hide();

    } else if(status === 403) {
        alert("Błędny login lub hasło");
    }

}

function logout() {

    localStorage.clear();
    localStorage.setItem("authority", "GUEST");
    load_starter_page();
    $("#loginButton").show();
    $("#logoutButton").hide();
    $("#registerButton").show();
}

function setCurrentState(state) {
    localStorage.setItem("currentState", state);
    switch(state) {
        case "GUEST": {
            $("#currentState").text("Gość");
        } break;
        case "USER": {
            $("#currentState").text("Użytkownik");
        } break;
        case "CLUB": {
            $("#currentState").text("Club");
        }
    }
}



function parseJwt (token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}




