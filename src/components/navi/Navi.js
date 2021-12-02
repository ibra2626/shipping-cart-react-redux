import React, { Component } from 'react';
import {Navbar,Container,Nav,NavDropdown, Badge,} from 'react-bootstrap';
import { connect } from 'react-redux';

class Navi extends Component {
    cartTitle = () => {
        return (
            <>
                Sepetim <Badge>{this.props.cartItems.length}</Badge>
            </>
        )
    }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav >
                                <NavDropdown title={this.cartTitle()} id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        cartItems : state.cartReducer
    }

}
export default connect(mapStateToProps)(Navi);