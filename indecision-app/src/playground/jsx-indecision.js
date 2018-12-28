console.log('App.js is running');
const app = {
    title: 'Indecision App',
    subtitle: 'IDK',
    options: []
};
const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option && !app.options.includes(option)){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};
const onRemoveAll = () =>{
    app.options = [];
    renderApp();
};
const onRemove = (e) =>{
    app.options.splice(e.target.value,1);
    renderApp();
};
const onMakeDecision = () =>{
    const randomNum = (Math.floor(Math.random() * app.options.length));
    const option = app.options[randomNum];
    alert(option);
};
const appRoot = document.getElementById('app');
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title? app.title : 'Title'}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length < 2} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option,index) => option ? <li key={index}>{option} <button onClick={onRemove} value={index}>Remove</button></li> : undefined)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>

                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderApp();


//form validation