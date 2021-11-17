import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css'
const MyOrders = () => {

    const [orders, setOrders] = useState([])
    const [deleted, setDeleted] = useState(null);

    const { user } = useAuth()

    /*send to server */
    useEffect(() => {
        fetch('https://pure-gorge-40152.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [deleted])

    // delete order
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you confirm to cancel booking?');
        if (proceed) {
            const url = `https://pure-gorge-40152.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount) {
                        setDeleted(true)
                    } else {
                        setDeleted(false)
                    }
                })
        }
    }

    return (
        <div className='main'>
            <div className='container my-4 '>
                <div className='row row-cols-1 row-cols-md-3 row-cols-lg-3 g-2 '>
                    {
                        orders?.map(order => order.email === user.email &&
                            <div key={order._id} className='col'>
                                <div className="card border border-2 border-primary bg-light rounded-0" style={{ width: "18rem" }}>
                                    <div className="card-body d-flex justify-content-center flex-column">
                                        <h5 className="card-title">Ordered : {order.name}</h5>
                                        
                                        <h6 className="card-text"> Status: <strong>{order.status}</strong></h6>
                                        <h6 className="card-title"><strong>Email:</strong> {order.email}</h6>
                                        <h6 className="card-text"> Number: {order.phone}</h6>
                                        <h6 className="card-title">Brand: {order.product}</h6>
                                        
                                        <button onClick={() => handleDeleteOrder(order._id)} className='btn btn-primary border border-1 border-dark'>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;