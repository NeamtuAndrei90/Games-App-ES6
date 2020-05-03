class FetchApi {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    getGamesList = () => {
        return fetch(`${this.apiUrl}` + "/games", {
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(response => response.json());
    }
    deleteGame = (gameID) => {
        return fetch(`${this.apiUrl}` + "/games/" + gameID, {
            method: "DELETE",
        }).then(r => r.text());
    }
    createGameRequest = () => {
        return fetch(`${this.apiUrl}` + "/games/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: gameObject
        }).then(response => response.json());
    }
    updateGameRequest = (gameId, updatedGameObj) => {
        return fetch(`${this.apiUrl}` + "/games/" + gameId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: updatedGameObj
        }).then(response => response.json());
    }
}




