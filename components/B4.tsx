import React, { Component } from 'react'
import B4con from './B4con'
interface parentComp{
  name: string
}

export default class B4 extends Component<any, parentComp> {
    constructor(props: parentComp) {
        super(props);
        this.state = {
          name: 'Nguyễn Đình Dương'
        };
      }
    render() {
        return (
        <>
        <h1>Họ và tên bên Component Cha: {this.state.name}</h1>
        <B4con name={this.state.name}/>
        </>
        )
    }
}
