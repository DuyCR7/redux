import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsers} from "../action/actions";

const TableUser = (props) => {

    const dispatch = useDispatch();

    const listUsers = useSelector((state) => state.user.listUsers);

    // const fetchAllUsers = async () => {
    //     const res = await axios.get("http://localhost:8080/users/all");
    //     const data = res && res.data ? res.data : [];
    //     setListUsers(data);
    // }

    useEffect(() => {
        // fetchAllUsers();

        dispatch(fetchAllUsers());
    }, []);

    const handleDeleteUser = async (user) => {
        console.log(user);
    }

    return (
        <>
            <Container>
                <hr/>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listUsers && listUsers.length > 0 &&
                    listUsers.map((user, index) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteUser(user)}
                                    >Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default TableUser;