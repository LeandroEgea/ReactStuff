'use strict';

console.log('App.js is running');
var app = {
    title: 'Hangman',
    subtitle: ''
};
var failsLimit = 6;
var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var word = undefined;
var encWord = [];
var failsCounter = 0;
var gameStatus = false;
var endMessage = '';

////
var onWordSubmit = function onWordSubmit(e) {
    e.preventDefault();
    getWord(e);
    getEncWord();
    gameStatus = true;
    renderApp();
};

var getWord = function getWord(e) {
    var auxWord = e.target.elements.word.value;
    auxWord = auxWord.toUpperCase();
    word = auxWord.split("");
    e.target.elements.word.value = '';
};

var getEncWord = function getEncWord() {
    encWord = [];
    word.forEach(function (l) {
        return l == ' ' ? encWord.push(' ') : encWord.push('_');
    });
};
////
var onLetterSubmit = function onLetterSubmit(e) {
    searchLetter(e.target.value);
    checkGameStatus();
    e.target.disabled = true;
    renderApp();
};

var searchLetter = function searchLetter(letter) {
    var flagAssert = false;
    word.forEach(function (l, index) {
        if (l == letter) {
            encWord[index] = letter;
            flagAssert = true;
        }
    });
    flagAssert ? undefined : failsCounter++;
};

var checkGameStatus = function checkGameStatus() {
    if (failsCounter >= failsLimit) {
        gameStatus = false;
        failsCounter = 0;
        endMessage = 'Game Over';
    } else if (!encWord.includes('_')) {
        gameStatus = false;
        failsCounter = 0;
        endMessage = 'You win';
    }
};
////

var getClassName = function getClassName(l) {
    return l == ' ' ? 'encWordSpace' : 'encWordLetter';
};

var appRoot = document.getElementById('app');
var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title ? app.title : 'Title'
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        !gameStatus && React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { onSubmit: onWordSubmit },
                React.createElement(
                    'span',
                    null,
                    'Write a word '
                ),
                React.createElement('input', { type: 'password', name: 'word', pattern: '[A-Za-z ]{3,30}' }),
                React.createElement(
                    'button',
                    null,
                    'Let\'s Play'
                )
            ),
            endMessage && React.createElement(
                'p',
                null,
                endMessage
            )
        ),
        gameStatus && React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                encWord.map(function (l, index) {
                    return React.createElement(
                        'span',
                        { className: getClassName(l), key: index },
                        l
                    );
                })
            ),
            React.createElement(
                'div',
                null,
                abc.map(function (l) {
                    return React.createElement(
                        'button',
                        { onClick: onLetterSubmit, value: l, key: l },
                        l
                    );
                })
            ),
            React.createElement(
                'p',
                null,
                'Fails: ',
                failsCounter,
                ' of ',
                failsLimit
            )
        )
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
