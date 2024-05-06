import React, { Component } from 'react'
import B6con from './B6con'

interface User {
    id: number;
    name: string;
    address: string;
    email: string;
}

interface ParentComponentState {
    users: User[];
}

export default class B6 extends Component<any, ParentComponentState> {
    constructor(props: ParentComponentState) {
        super(props);
        this.state = {
          users: [
            {
              id: 1,
              name: 'Nguyễn Đình Dương',
              address: 'Long thành, Nghệ An',
              email: 'duong@example.com',
            },
            {
              id: 2,
              name: 'Nguyễn Văn Hiếu',
              address: 'Rú Đất, Yên THành',
              email: 'hieu@example.com',
            },
          ],
        };
      }
  render() {
    return (
      <>
      <B6con users={this.state.users}/>
      </>
    )
  }
}
