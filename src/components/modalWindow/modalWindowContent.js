function modalWindowContent(playerCorrect, playerAll, computerCorrect, computerAll){

    //GAME OVER DIV
    const gameOver = document.createElement("div");
    gameOver.className = "game-over";

    const title = document.createElement("h1");
    title.className = "game-over";
    title.innerHTML = "GAME OVER";
    gameOver.appendChild(title);

    const text = document.createElement("p");
    text.className = "game-over";
    text.innerHTML = `The force is strong in you young Padawan! During 1 minute you have answered ${playerCorrect} / ${playerAll} questions. And Google quessed ${computerCorrect} / ${computerAll}.`
    gameOver.appendChild(text);


    //RESULTS TABLE DIV
    const results = document.createElement("div");
    results.className = "results";

    const resultTitle = document.createElement("h2");
    resultTitle.innerHTML = "Detailed answers"
    results.appendChild(resultTitle);

    const resultsList = document.createElement("div");
    results.appendChild(resultsList);
    const table = document.createElement('table');
    table.appendChild(resultsList);


    //YODA PICTURE DIV
    const yoda = document.createElement("img");
    yoda.className = "yoda";
    const src = "../../../static/assets/ui/MasterYodaLeft.png";
    yoda.setAttribute('src', src);


    // STUPID NOT WORKING DIV WITH FORM INPUT AND A BUTTON
    const inputTry = document.createElement("form");
    const labelTry = document.createElement("label");
    inputTry.id = "inputTry";
    const player = document.createElement("input");
    player.type = "text";
    player.minLength = "3";
    player.maxLength = "20";
    player.id = "player-input"
    player.required = "required";
    labelTry.appendChild(player);
    labelTry.htmlFor = "player-input";
    const fillName = document.createElement("div");
    fillName.innerHTML = "Please fill your name in order to receive eternal glory in the whole Galaxy!";
    labelTry.appendChild(fillName);
    inputTry.appendChild(labelTry);



    const forceBtn = document.createElement("div");
    forceBtn.className = "force-button";
    const btn = document.createElement("input");
    btn.innerHTML = "MAY THE FORCE BE WITH YOU";
    btn.type = "submit";
    inputTry.appendChild(btn);
    // btn.form = "inputTry";

    const objReturn = () =>  {
        let yourInput = document.getElementById('player-input');
        let input = yourInput.value;
        let obj = new Object();
        
        if (input.length >= 3) {
            obj.nick = input;
            obj.playerCorrect = playerCorrect;
            obj.playerAll = playerAll;
        } else {
            throw "Please enter a correct value!"
        }

        console.log(obj);
        return obj;
    }

    const returnToMainPage = () => {
        location.replace("../../../index.html");
    }


    btn.addEventListener('click', (e) => {
        e.preventDefault();
        objReturn();
        // returnToMainPage();
    })
    
    const superDiv = document.createElement("div");
    superDiv.className = "superDiv";
    superDiv.appendChild(gameOver);
    superDiv.appendChild(results);
    superDiv.appendChild(yoda);
    superDiv.appendChild(inputTry);
    superDiv.appendChild(forceBtn);
    return superDiv;

}

// const modalContent = document.body.appendChild(modalWindowContent(1, 5, 6, 7));
export default modalWindowContent;