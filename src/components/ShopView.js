import React, {Component} from 'react'

import ProductList from './ProductList'

class ShopView extends Component {
    render() {
        return(
            <div>
            <h1>Shop</h1>
            <ProductList productList={this.props.productList}
            addProductToCart={this.props.addProductToCart}/>
            </div>

        )
    }
}

export default ShopView