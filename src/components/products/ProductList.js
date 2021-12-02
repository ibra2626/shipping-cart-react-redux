import React, { Component } from 'react';
import { Badge, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/productActions';
class Productlist extends Component {

    componentDidMount(){
        this.props.actions.getProducts();
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
