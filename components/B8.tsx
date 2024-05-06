import React, { Component } from 'react'
import B8con from './B8con'

interface ProductData {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
  
  interface ListProductState {
    products: ProductData[];
}

export default class B8 extends Component<any, ListProductState> {
    constructor(props: {}) {
        super(props);
        this.state = {
          products: [
            {
              id: 1,
              name: 'Cam',
              price: 29.99,
              quantity: 10,
            },
            {
              id: 2,
              name: 'Bưởi',
              price: 19.99,
              quantity: 15,
            },
          ],
        };
      }
  render() {
    return (
      <>
      <B8con products={this.state.products}/>
      </>
    )
  }
}
