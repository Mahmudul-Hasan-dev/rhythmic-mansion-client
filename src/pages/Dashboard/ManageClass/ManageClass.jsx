import React from 'react';
import { Table } from 'react-bootstrap';
import useAllClass from '../../../hooks/useAllClass';
import useInstructor from '../../../hooks/useInstructor';

const ManageClass = () => {
    const [classes] =useAllClass();
    
   
    return (
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Class</th>
          <th> Instructor</th>
          <th>Available Seats</th>
          <th>Price</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        classes.map((cls, index) => 
            <tr key={cls._id}>
                <td>{index+1}</td>
                <td>
                    <img src={cls.image} width={'50px'}/>
                </td>
                <td>{cls.name}</td>
                <td>{cls.instructor_name} </td>
                <td>{cls.seats} </td>
                <td>{cls.price} </td>
                <td> </td>
                <td></td>
            </tr>
            
            )
       }
        
      </tbody>
    </Table>
        </div>
    );
};

export default ManageClass;