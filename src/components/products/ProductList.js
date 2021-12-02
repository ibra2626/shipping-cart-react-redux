import React, { Component } from 'react';
import { Badge, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Button} from 'react-bootstrap';
import alertify from 'alertifyjs';

import * as productActions from '../../redux/actions/productActions';
import * as cartActions from '../../redux/actions/cartActions';
class Productlist extends Component {

    componentDidMount(){
        this.props.actions.getProducts();
    }
    addToCart(product){
        this.props.actions.addToCart({quantity:1,product})
        alertify.success('<span style="color:white">'+product.productName+" sepete eklendi!</span>")
    }
    render() {
        return (
            <div>
                <h3>
                <Badge bg="success">Products</Badge>
                <Badge bg="warning">{this.props.currentCategory.categoryName}</Badge>
                </h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Units In Stocks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product =>(
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>
                                        <Button size="sm" variant="success" onClick={() => this.addToCart(product)}>Ekle</Button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </Table>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : {
            getProducts : bindActionCreators(productActions.getProducts,dispatch),
            addToCart : bindActionCreators(cartActions.addToCart,dispatch)
        }
    }
}

function mapStateToProps(state){
    return {
        currentCategory : state.changeCategoryReducer,
        products : state.productListReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Productlist);
