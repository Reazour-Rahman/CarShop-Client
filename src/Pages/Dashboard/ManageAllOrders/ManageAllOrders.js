import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';



const ManageAllOrders = () => {

    const [orders, setOrders] = useState([])
    const [deleted, setDeleted] = useState(null);


    /* take input and send to server */
    useEffect(() => {
        fetch('https://pure-gorge-40152.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [deleted])

    // delete order by user
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

    // handle order status
    const handleStatus = (id) => {
        const object = { status: 'shipped' }
        fetch(`https://pure-gorge-40152.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(object)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    window.location.reload()
                }
            })
    }

    // order delete and status update by admin
    return (
        <div className='main'>
            <div className='container my-4'>
                <div className='row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 g-2'>
                    {
                        orders?.map(order => <div key={order._id} className='col'>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body bg-light border border-primary">
                                    <h5 className="card-title">Ordered: {order.name}</h5>
                                    <h6 className="card-title"><strong>Email:</strong> {order.email}</h6>
                                    
                                    <h6 className="card-text"> Mobile: {order.phone}</h6>
                                    <h6 className="card-title">Car: {order.product}</h6>
                                    <h6 className="card-text"> Status: <strong>{order.status}</strong></h6>
                                    <div className='d-flex  justify-content-between'>
                                        <button onClick={() => handleDeleteOrder(order._id)} className='btn btn-warning rounded-0 text-white'>Cancel</button>
                                        {order.status == "pending" ?<button onClick={() => handleStatus(order._id)} className='btn btn-success rounded-0 text-white'>Approve</button>:
                                        <button onClick={() => handleStatus(order._id)} className='btn btn-primary rounded-0 text-white'>Approved</button>}
                                    </div>
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

export default ManageAllOrders;