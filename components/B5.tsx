import React, { Component } from 'react'
import B5con from './B5con'

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface ParentComponentState {
product: Product;
}

export default class B5 extends Component<any, ParentComponentState> {
    constructor(props: ParentComponentState) {
        super(props);
        this.state = {
          product: {
            id: 1,
            name: 'Nguyễn Đình Dương',
            price: 29.99,
            quantity: 10
          }
        };
    }
  render() {
    return (
      <>
      <B5con product={this.state.product}/>
      </>
    )
  }
}
