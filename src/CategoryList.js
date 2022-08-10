import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: []
  };

  componentDidMount(){
    this.getCategories();
  }
  getCategories=()=>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}));;
  }

  render() {
    return ( 
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
            onClick={()=>this.props.changeCategory(category)}
            key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* ctrl basılı tutup k ve c ye bas yorum satırı  */}
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
