import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './ProductBook.css'

const ProductBook = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://pure-gorge-40152.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();

    /* send to server order */
    const onSubmit = data => {
        axios.post('https://pure-gorge-40152.herokuapp.com/orders', data, data.status = 'pending')
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")
                    reset();
                }
            })
    };

    return (
        <div>
            <Header></Header>
            <h2 className='text-center text-white my-3 fw-bolder'>Please Fill Up The Form</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2 d-flex align-items-center flex-column'>
                <div className='col'>
                    <div className='text-center my-4 mx-auto'>
                        {products.map(product => product._id == id ?
                            <form key={product._id} onSubmit={handleSubmit(onSubmit)}>

                                <input  {...register("name")}
                                    value={user.displayName}
                                    placeholder="Name"
                                    className='p-2 m-1 w-100' required />
                                <br />

                                <input  {...register("email")}
                                    value={user.email}
                                    placeholder="email"
                                    className='p-2 m-1 w-100' />
                                <br />

                                <input  {...register("product")}
                                    value={product.name}
                                    placeholder="tour-place"
                                    className='p-2 m-1 w-100' />

                                <br />

                                <input  {...register("address")}
                                    placeholder="Present Address"
                                    className='p-2 m-1 w-100' required
                                />
                                <br />
                                <input  {...register("phone")}
                                    placeholder="Phone number"
                                    className='p-2 m-1 w-100' required
                                />

                                <br />
                                <input  {...register("date")}
                                    type='date'
                                    placeholder="Date"
                                    className='p-2 m-1 w-100' required
                                />

                                <br />

                                <input type="submit" className='btn btn-primary w-100 mt-2 me-o' />

                            </form> : <div></div>)}
                    </div>
                </div>
                <div className='col'>
                    <div>
                        {products.map(product => product._id == id ?

                            <div className="card mx-auto mb-3 w-100 rounded-0">
                                <img src={product.img} className="img-fluid" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{product.description}</p>
                                </div>
                            </div>

                            : <div></div>)}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductBook;