class CreateGameForm {
    constructor(title, releaseDate, genre, publisher, imageUrl, description) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.publisher = publisher;
        this.imageUrl = imageUrl;
        this.description = description;
    }
    validateFormElement = (inputElement, errorMessage) => {
        if (inputElement.value === "") {
            if (!document.querySelector('[rel="' + inputElement.id + '"]')) {
                buildErrorMessage(inputElement, errorMessage);
            }
        }
        else {
            if (document.querySelector('[rel="' + inputElement.id + '"]')) {
                console.log("the error is erased!");
                document.querySelector('[rel="' + inputElement.id + '"]').remove();
                inputElement.classList.remove("inputError");
            }
        }
    }
    validateReleaseTimestampElement = (inputElement, errorMessage) => {
        if (isNaN(inputElement.value) && inputElement.value !== "") {
            buildErrorMessage(inputElement, errorMessage);
        }
    }
    buildErrorMessage = (inputEl, errosMsg) => {
        inputEl.classList.add("inputError");
        const errorMsgElement = document.createElement("span");
        errorMsgElement.setAttribute("rel", inputEl.id);
        errorMsgElement.classList.add("errorMsg");
        errorMsgElement.innerHTML = errosMsg;
        inputEl.after(errorMsgElement);
    }
    displayCreatedGame = (request) => {
        const gameELement = document.createElement("div");
        gameELement.setAttribute("id", `${request._id}`);
        gameELement.setAttribute('class', 'gameELement');
        gameELement.innerHTML = `<h1>${request.title}</h1> 
                            <img src="${request.imageUrl}" />
                            <p>${request.description}</p> 
                            <button class="delete-btn">Delete Game</button>
                            <button class="edit-btn">Edit Game</button>`;
        return gameELement;
    }
}




