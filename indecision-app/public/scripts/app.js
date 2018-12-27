'use strict';

console.log('App.js is running');
var app = {
    title: 'Indecision App',
    subtitle: 'IDK',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option && !app.options.includes(option)) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderApp();
};
var onRemove = function onRemove(e) {
    var optionsAux = app.options;
    app.options = [];
    optionsAux.forEach(function (o) {
        if (o != e.target.value) app.options.push(o);
    });
    renderApp();
};
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
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
        React.createElement(
            'p',
            null,
            app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length < 2, onClick: onMakeDecision },
            'What Should I Do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return option ? React.createElement(
                    'li',
                    { key: option },
                    option,
                    ' ',
                    React.createElement(
                        'button',
                        { onClick: onRemove, key: option, value: option },
                        'Remove'
                    )
                ) : undefined;
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderApp();

//form validation
