import React, { Component } from 'react'

export default class BoxClass extends Component {
  componentWillUnmount() {
    // 종료 될때 사용
    console.log("bye~!!✋");
  }

  render() {
    return (
        <div>
            Box{this.props.num}    
        </div>
    )
  }
}
 