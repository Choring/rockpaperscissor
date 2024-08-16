import React, { Component } from 'react'
import BoxClass from './component/BoxClass';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter2: 0,
            num:1,
            value:0
        };
    }

    increase = () => {
        this.setState({
            counter2: this.state.counter2 + 1,
            value: this.state.value + 1
        })
        console.log("increase function", this.state);
    }

    componentDidMount() {
        // api 콜
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate", this.state);
    }

    render() {
        return (
            <div>
                <div>state:{this.state.counter2}</div>
                <button onClick={this.increase}>버튼</button>
                {
                    this.state.counter2 < 3 && <BoxClass num={this.state.value} />       
                }
            </div>
        )
  }
}
