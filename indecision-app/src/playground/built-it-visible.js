class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        const title = '';
        const details = 'Some Details';
        return (
        <div>
            <h1>{title? title : 'Title'}</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
            {this.state.visibility && <p>{details}</p>}
        </div>
        );
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);





// console.log('App.js is running');
// const app = {
//     title: 'Visibility Toggle',
//     details: 'Some Details'
// };
// let hiddenDetails = true;
// const onDetails = () => {
//     hiddenDetails = !hiddenDetails;
//     renderApp();
// };


// const appRoot = document.getElementById('app');
// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>{app.title? app.title : 'Title'}</h1>
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <button onClick={onDetails}>{hiddenDetails === false ? 'Hide Details' : 'Show Details'}</button>
//             {!hiddenDetails && <p>{app.details}</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };
// renderApp();