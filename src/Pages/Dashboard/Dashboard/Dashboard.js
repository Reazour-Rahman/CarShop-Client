import React from 'react';
import DashboardHome from '../DashboardHome/DashboardHome';
import './Dashboard.css'

import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Reviews from '../Reviews/Reviews';
import Pay from '../Pay/Pay';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';

const Dashboard = () => {
    const { user, logout, admin } = useAuth()
    const { path, url } = useRouteMatch();

    return (
        <div className="bg-white">
            <div className="sidenav">
                <Link to={`${url}`}><p className='text-primary fw-bolder'>Dashboard</p></Link>

                { 
                    admin ? <div>
                        <Link to={`${url}/makeAdmin`}><small> MAKE ADMIN</small></Link>
                        <Link to={`${url}/addProduct`}><small>POST SINGLE PRODUCT</small></Link>
                        <Link to={`${url}/manageProducts`}><small>MANAGE PRODUCTS</small></Link>
                        <Link to={`${url}/manageAllOrders`}><small>MANAGE ORDERS</small></Link>
                    </div>

                        : <div>
                           
                            <Link to={`${url}/myorders`}> My Orders</Link>
                            <Link to={`${url}/pay`}>Payment</Link>
                            <Link to={`${url}/review`}> Add Review</Link>
                            <Link to='/'> Home</Link>
                        </div>
                }
              
                {
                    user.email && <NavLink to="/"><button onClick={logout} className="btn-outline-primary rounded-0 mt-5">Log out</button></NavLink>
                }

            </div>
            <div>
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Reviews></Reviews>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;