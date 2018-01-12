import React, {Component} from 'react'

import ProductList from './ProductList'

class CartView extends Component {
    render() {
        return(
            <div>
            <h1>Shopping Cart!</h1>
            <ProductList productList={this.props.productList}
            addProductToCart={this.props.addProductToCart}/>
            </div>
        )
    }
}

export default CartView