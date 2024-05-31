import React from 'react';
import useCart from '../../../../hooks/useCart'
import { Table,Button } from 'react-bootstrap';
const SelectedClass = () => {
    const [cart,refetch]= useCart();
    return (
        <div>
            <div className='d-flex justify-content-between mb-3'>
                <h1>Selected Classes: {cart.length}</h1>
                
                <Button variant='warning'>Pay</Button>
            </div>
             <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th> Name</th>
                    <th>Instructor</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                            cart.map((cls, index) =>
                            <tr key={cls._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <img src={cls.image} height={'100px'}/>
                                </td>
                                <td>{cls.name}</td>
                                <td>{cls.instructor}</td>
                                <td>{cls.price}</td>
                                <td>
                                    <Button  >Delete</Button>
                                </td>
                                </tr>
                   ) }
                </tbody>
            </Table>
        </div>
    );
};

export default SelectedClass;