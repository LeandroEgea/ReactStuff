class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    componentDidMount() {
        console.log('b');
    }
    componentDidUpdate() {
        console.log('c');
    }
    componentWillUnmount() {
        console.log('a');
    }
    handleDeleteOptions() {
        this.setState(() => ({options: [] }));
    }
    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((o) => (o != option))
        }));
    }
    handlePick() {
        const randomNum = (Math.floor(Math.random() * this.state.options.length));
        const option = this.state.options[randomNum];
        console.log(option);
    }
    handleAddOption(option) {
        if(!option) {
            return 'Enter a valid value to Add Option';
        }
        else if(this.state.options.includes(option)) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 1} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What Should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>RemoveAll</button>
            {props.options.map((option) => (
                <Option 
                key={option} 
                option={option}
                handleDeleteOption={props.handleDeleteOption}
                />
            ))}
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.option);
                }}
            >
                Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));// same as error: error   
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));