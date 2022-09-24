import Product from "./Product";
import { connect } from 'react-redux';
import React, { Component } from "react";

class Products extends Component {
  constructor(props){
    super(props)
  }
  render(){
    debugger
    var products = this.props.products;
    console.log("sjkhds" + products);
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          { this.showProduct(products) }            
          {/* <Product/> */}
        </div>
      </section>
    );
  }
  showProduct(products){
    var result = null;
    if(products.length > 0){
      result = products.map((product, index)=>{
        return <Product key = {index} product={product}/>
      })
    }
    return result;
  }
}
const mapStateToProps =  state => {
  return {
    products : state.products
  }
}

export default connect(mapStateToProps,null)(Products);
