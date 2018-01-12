import React, {Component} from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import CartView from './CartView'
class HomePage extends Component {

  constructor() {
    super()

    this.state = {
      itemCurrentlyOnSale: 'A Hammer',
      editSaleItem: true,
      productList: [
        {
          productName: 'Hammer',
          description: 'Itsa hammer',
          price: 12.3
        }, {
          productName: 'Nail',
          description: 'Itsa nail',
          price: 0.12
        }
      ],
      cartList: []
    }
  }

  toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem
    this.setState({editSaleItem})
  }

  handleItemCurrentlyOnSaleChange = (event) => {
    const itemCurrentlyOnSale = event.target.value
    this.setState({itemCurrentlyOnSale})
  }

  addNewProductToProductList = (newProduct) => {
    const productList = [...this.state.productList]
    productList.push(newProduct)
    this.setState({productList})
  }

  deleteProductFromProductList = (index) => {
    const productList = [...this.state.productList]
    productList.splice(index, 1)
    this.setState({productList})
  }

  addProductToCart = (index) => {
    const product = {...this.state.productList[index]}
    const cartList = [...this.state.cartList]
    cartList.push(product)
    this.setState({cartList})
  }

  // removeProductFromCart = (index) => {
  //   const cartList = [...this.state.cartList]
  //   cartList.splice(index, 1)
  //   this.setState({cartList})
  // }



  render() {
    return (
      <div>
        <h1>My Hardware Store</h1>
        <div>
          <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
          <span>
            <button onClick={this.toggleEditSaleItem}>
              {this.state.editSaleItem
                ? 'Hide'
                : 'Edit Sale Item'}
            </button>
          </span>

          {this.state.editSaleItem
            ? <div>
                <input
                  onChange={this.handleItemCurrentlyOnSaleChange}
                  value={this.state.itemCurrentlyOnSale}
                  type="text"/>
              </div>
            : null}
          
          <AdminView
            productList={this.state.productList}
            addNewProductToProductList={this.addNewProductToProductList}
            deleteProductFromProductList={this.deleteProductFromProductList}/>

          <ShopView 
            productList={this.state.productList}
            addProductToCart={this.addProductToCart}/>


          <CartView
            productList={this.state.cartList} 
            removeProductFromCart={this.removeProductFromCart}/>
        </div>
      </div>
    )
  }
}

export default HomePage