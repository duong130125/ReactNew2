import React, { Component } from 'react'
import B7con from './B7con'

interface PostData {
    id: number;
    title: string;
    content: string;
    author: string;
}

interface ListPostState {
    posts: PostData[];
}

export default class B7 extends Component<any, ListPostState> {
    constructor(props: ListPostState) {
        super(props);
        this.state = {
          posts: [
            {
              id: 1,
              title: 'Con Chim',
              content: 'Vươn tới bầu trời xanh',
              author: 'Dương',
            },
            {
              id: 2,
              title: 'Biển cả',
              content: 'Biển rộng xanh bát ngát bao la',
              author: 'Nam',
            },
          ],
        };
      }
  render() {
    return (
      <>
        <B7con posts={this.state.posts}/>
      </>
    )
  }
}
