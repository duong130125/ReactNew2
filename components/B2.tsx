import React, { Component } from 'react'
interface Exercise02State {
    id: number;
    name: string;
    birthdate: string;
    address: string;
}

export default class B2 extends Component<any, Exercise02State> {
    constructor(props: Exercise02State){
        super(props)
        this.state = {
            id: 1,
            name: "Nguyễn Đình Dương",
            birthdate: "13/01/2005",
            address: "Long Thành, Nghệ An"
        }
    }
  render() {
    return (
      <>
      <h1>Thông tin cá nhân</h1>
      <p>id: {this.state.id}</p>
      <p>Tên: {this.state.name}</p>
      <p>Ngày sinh: {this.state.birthdate}</p>
      <p>Địa chỉ: {this.state.address}</p>
      </>
    )
  }
}
