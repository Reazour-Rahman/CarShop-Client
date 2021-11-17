import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {

    const { user } = useAuth()

    const { register, handleSubmit, reset } = useForm();

    /* post req send to server */
    const onSubmit = data => {
        axios.post('https://pure-gorge-40152.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")
                    reset();
                }
            })
    };
    return (
        <div className='main'>
            <div className='my-5'>
                <h3 className='text-center fw-bolder text-primary'>What Do You This ABout Us ?</h3>
                <h3 className='text-center fw-bolder text-primary'>Please , Write Below</h3>
                <div className='text-center mx-auto p-2 border custom-width border-0'>

                    {user && <form onSubmit={handleSubmit(onSubmit)}>

                        <input  {...register("name")}
                            value={user?.displayName}
                            placeholder="Your Name"
                            className='p-2 m-1 w-100 border border-primary' required />
                        <br />

                        <input  {...register("email")}
                            value={user?.email}
                            placeholder="Your Name"
                            className='p-2 m-1 w-100 border border-primary' required />
                        <br />

                        <input  {...register("point")}
                            placeholder="Give US Rating Out Of 5"
                            className='p-2 m-1 w-100 border border-primary' required />
                        <br />

                        <input  {...register("review")}
                            placeholder="Important Comment"
                            className='py-3 p-2 m-1 w-100 border border-primary' required
                        />

                        <br />
                        <input type="submit" className='btn btn-primary w-100 p-1 mt-2 rounded-0' />
                    </form>}
                </div>
            </div>
        </div>
    );
};

export default Reviews;