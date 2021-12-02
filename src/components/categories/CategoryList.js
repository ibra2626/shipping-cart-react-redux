import React, { Component } from 'react';
import { Badge, ListGroup, ListGroupItem } from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../redux/actions/categoryActions';
import * as productActions from '../../redux/actions/productActions';

class Categorylist extends Component {
    componentDidMount(){
        this.props.actions.getCategories()
    }
    selectCategory = (category)=>{
        this.props.actions.changeCategory(category)
        this.props.actions.getProductByCategory(category.id)
    }
    render() {
        return (
            <div>
                <h3>
                    <Badge bg="warning">Categories</Badge>
                </h3>
                <ListGroup >
                    {
                        this.props.categories.map(category => (
                            <ListGroupItem key={category.id} active={category.id === this.props.currentCategory.id} onClick={() => this.selectCategory(category)}>
                                {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
                    
                </ListGroup>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        currentCategory : state.changeCategoryReducer,
        categories : state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions : {
            getCategories : bindActionCreators(categoryActions.getCategories,dispatch),
            changeCategory : bindActionCreators(categoryActions.changeCategory,dispatch),
            getProductByCategory : bindActionCreators(productActions.getProducts,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Categorylist);
// export default Categorylist
