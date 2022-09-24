import Product from "./Product";
// import { connect } from 'react-redux';
import React, { Component } from "react";

function Products() {
  return (
    <section className="section">
      <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
      <div className="row">
          {/* { this.showProduct(products) }             */}
        <Product/>
      </div>
    </section>
  );

  // showProduct(products){
  //   var result = null;

  //   return result;
  // }
}


export default Products;
