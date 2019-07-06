import React from 'react';

class ExampleComponent extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            textDef: ''
        }


    }
    
    handlerClick = () => {

        this.setState({
            textDef: this.state.text
        })
    }

    handlerOnChange = ({target: {value}}) => {
        console.log(value)
        this.setState({
            text: value
        })
    }

    render() {
        const {text, textDef} = this.state;
        return (
            <div className="App">
                <input type={text} value={text} onChange={this.handlerOnChange}/>
                <button onClick={this.handlerClick}>Click Me</button>
                <p>{textDef}</p>
            </div>
        );
    }
}

export default ExampleComponent;