import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logout } = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    }
    return (
        <>
            <Navbar bg="white" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bold text-info'>CarShop</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end fw-bolder">
                        <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/home">HOME</NavLink>
                        <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/explore">HAVE-A-LOOK</NavLink>
                        {
                            user?.email ? <div>
                                <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/dashboard">CONTROL-PANEL</NavLink>

                                <NavLink to="/"><button onClick={logout} className="btn btn-warning rounded-0 mx-2">LOG OUT</button></NavLink>
                            </div>
                                :
                                <NavLink activeStyle={activeStyle} className='mx-2 text-decoration-none' to="/login">LOGIN</NavLink>
                        }
                        <Navbar.Text>
                            USER : <small className='fw-bold text-dark'>{user?.displayName}</small>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;