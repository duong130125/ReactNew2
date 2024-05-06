import React, { Component } from 'react'

export default class B4con extends Component {
  render() {
    const { name } = this.props; 
    return (
      <>
      <h1>Họ và tên bên Component Con: {name}</h1>
      </>
    )
  }
}
