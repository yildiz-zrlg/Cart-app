import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  
  render() {
    return (
      <div>
        <h2>
          {this.props.info.title}-{this.props.currentCategory}
        </h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.Id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerunit}</td>
                <td>{product.unitInstock}</td>
                <td> <Button onClick={()=>this.props.addToCart(product)} color="info">add</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
