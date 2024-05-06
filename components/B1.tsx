import React, { Component } from 'react'
interface Exercises01State {
    name: string; 
  }

export default class B1 extends Component<any, Exercises01State> {
    constructor(props:Exercises01State){
        super(props)
        this.state = {
            name: "Nguyễn Đình Dương"
        }
    }
  render() {
    return (
      <>
      <h1>Họ và tên: {this.state.name}</h1>
      </>
    )
  }
}
