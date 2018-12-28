'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: 'handleToggleVisibility',
        value: function handleToggleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = '';
            var details = 'Some Details';
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    title ? title : 'Title'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleToggleVisibility },
                    this.state.visibility ? 'Hide Details' : 'Show Details'
                ),
                this.state.visibility && React.createElement(
                    'p',
                    null,
                    details
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(VisibilityToggle, null), appRoot);

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
