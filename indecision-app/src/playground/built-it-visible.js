console.log('App.js is running');
const app = {
    title: 'Visibility Toggle',
    details: 'Some Details'
};
let hiddenDetails = true;
const onDetails = () => {
    hiddenDetails = !hiddenDetails;
    renderApp();
};


const appRoot = document.getElementById('app');
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title? app.title : 'Title'}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button onClick={onDetails}>{hiddenDetails === false ? 'Hide Details' : 'Show Details'}</button>
            {!hiddenDetails && <p>{app.details}</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderApp();