import React from 'react';
import { Table,Button } from 'react-bootstrap';
import useAllClasses from '../../../../hooks/useAllClass'
import useAuth from '../../../../hooks/useAuth'


const MyClasses = () => {
    const [allClasses]= useAllClasses();
    const {user} = useAuth();
    const myClasses = allClasses.filter(cls => cls.instructor_name === user?.displayName);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th> Name</th>
                    <th>Instructor</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myClasses.map((cls,index)=><tr>
                            <th>{index+1}</th>
                            <td>
                                <img src={cls.image} height={'50px'}/>
                            </td>
                            <td>{cls.name}</td>
                            <td>{cls.instructor_name}</td>
                            <td>{cls.price}</td>
                            <td></td>


                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyClasses;