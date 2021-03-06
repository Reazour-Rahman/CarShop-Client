import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ManageProducts = () => {

    const [moreProducts, setMoreProducts] = useState([]);
    const [deleted, setDeleted] = useState(null);

    useEffect(() => {
        fetch('https://pure-gorge-40152.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setMoreProducts(data))
    }, [deleted])

    // delete item by admin from products collection
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you confirm to delete this item?');
        if (proceed) {
            const url = `https://pure-gorge-40152.herokuapp.com/products/${id}`
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

            <Container className='my-3'>
                <div className='my-4 text-center'>

                </div>
                <Row xs={1} md={2} lg={3} xl={4} className='g-4 py-4'>
                    {
                        moreProducts.map(product => <Col key={product._id}>
                            <Card className="border border-primary rounded-0">
                                <Card.Img className='img-fluid' variant="top" style={{height:"275px"}} src={product.img} />
                                <Card.Body>
                                    <Card.Title className='my-2'>{product.name}</Card.Title>
                                    <Card.Text className='text-secondary'>
                                        {product.description.slice(0, 150)}
                                    </Card.Text>

                                    <div className="d-flex justify-content-between">
                                        <Button onClick={() => handleDeleteOrder(product._id)} className="my-2 rounded-0" variant="primary">Remove</Button>
                                        <h4 className='p-2 fw-bold'><i className="fas fa-dollar-sign"></i>{product.price}</h4>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default ManageProducts;