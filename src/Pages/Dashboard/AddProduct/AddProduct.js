import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    /* take input and send to server */
    const onSubmit = data => {
        //console.log(data)
        axios.post('https://pure-gorge-40152.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")
                    reset();
                }
            })
    };
    // add new product by admin
    return (
        <div className='main' style={{height:"100vh"}}>
            <div className='login-container py-5'>
                <h2 className='text-center text-white fw-bolder'>Implement Your New Car</h2>
                <div id="formation" className='text-center mx-auto p-4'>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input  {...register("img")}
                            placeholder="Image Url"
                            className='p-2 m-1' required />
                        <br />

                        <input  {...register("name")}
                            placeholder="Car Name"
                            className='p-2 m-1' required />
                        <br />

                        <input  {...register("price")}
                            placeholder="Car Price"
                            className='p-2 m-1' required />
                        <br />

                        <input  {...register("description")}
                            placeholder="Description"
                            className='p-2 m-1' required
                        />

                        <br />
                        <input type="submit" className='btn btn-primary p-2 px-5 mt-2 rounded-0' />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;