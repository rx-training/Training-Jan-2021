import React from 'react'

class Counter extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="container">
                <div className="my-4">
                    <h1>{this.props.counter}</h1>
                    <button onClick={this.props.increment} className="btn btn-success mx-4">+</button>
                    <button onClick={this.props.decrement} className="btn btn-danger">-</button>
                </div>

                <div className="row">
                    <div className="col col-2">
                        <p>Celcius:</p>
                        <input type="text" className="form-control" onChange={(e) => this.props.changeTemp(e.target.value, 'c')} value={this.props.celcius} />
                    </div>
                    <div className="col col-2">
                        <p>Fahrenheit:</p>
                        <input type="text" className="form-control" onChange={(e) => this.props.changeTemp(e.target.value, 'f')} value={this.props.fahrenheit} />
                    </div>
                </div>
                
            </div>
        )
    }


}

export default Counter