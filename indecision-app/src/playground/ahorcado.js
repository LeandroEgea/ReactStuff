console.log('App.js is running');
const app = {
    title: 'Hangman',
    subtitle: ''
};
const failsLimit = 6; 
const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
            'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let word = undefined;
let encWord =  [];
let failsCounter = 0;
let gameStatus = false;
let endMessage = '';

////
const onWordSubmit = (e) => {
    e.preventDefault();
    getWord(e);
    getEncWord();
    gameStatus = true;
    renderApp();
};

const getWord = (e) => {
    let auxWord = e.target.elements.word.value;
    auxWord = auxWord.toUpperCase();
    word = auxWord.split("");
    e.target.elements.word.value = '';
};

const getEncWord = () => {
    encWord = [];
    word.forEach((l) => l == ' ' ? encWord.push(' ') : encWord.push('_'));
};
////
const onLetterSubmit = (e) => {
    searchLetter(e.target.value);
    checkGameStatus();
    e.target.disabled = true;
    renderApp();
};

const searchLetter = (letter) => {
    let flagAssert = false;
    word.forEach((l, index) => {
        if(l == letter)
        {
            encWord[index] = letter;
            flagAssert = true;
        }
    });
    flagAssert ? undefined : failsCounter++;
};

const checkGameStatus = () => {
    if(failsCounter >= failsLimit)
    {
        gameStatus = false;
        failsCounter = 0;
        endMessage = 'Game Over';
    }
    else if(!encWord.includes('_'))
    {
        gameStatus = false;
        failsCounter = 0;
        endMessage = 'You win';
    }
};
////

const getClassName = (l) => l == ' ' ? 'encWordSpace' : 'encWordLetter';

const appRoot = document.getElementById('app');
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title? app.title : 'Title'}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}

            {!gameStatus && (
                <div>
                    <form onSubmit={onWordSubmit}>
                        <span>Write a word </span>
                        <input type="password" name="word" pattern="[A-Za-z ]{3,30}"/>
                        <button>Let's Play</button>
                    </form>
                    {endMessage && <p>{endMessage}</p>}
                </div>
            )}

            {gameStatus && (
                <div>
                    <h3>{encWord.map((l, index) => <span className={getClassName(l)} key={index}>{l}</span>)}</h3>
                    <div>{abc.map((l) => <button onClick={onLetterSubmit} value={l} key={l}>{l}</button>)}</div>
                    <p>Fails: {failsCounter} of {failsLimit}</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderApp();

/*
//FALTA VALIDAR LA SUBIDA DE PALABRA

//boton de restart
//que se suba tipo password con el ojito
//que al pulsar en el teclado sea como pulsar el boton de la pantalla
//pasar el proyecto a visual studio

//generar palabras automaticas con SQL(word, FK_type, FK_Language)
//en el menu se podran seleccionar por:
//-por tipo
//-random
//-en random hay pista opcional
//darle un poco de estilos con bootstrap y eso*/