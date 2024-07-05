import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, fetchAllUsers} from "../action/actions";

const TableUser = (props) => {

    const dispatch = useDispatch();

    const listUsers = useSelector((state) => state.user.listUsers);
    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);

    const handleDeleteUser = async (user) => {
        dispatch(deleteUser(user.id));
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
                    {
                        isError === true ?
                            <>
                                <tr><td colSpan={4}>Something wrongs, please try again...</td></tr>
                            </>
                            :
                            <>
                            {
                                isLoading === true ?
                                    <>
                                        <tr><td colSpan={4}>Loading...</td></tr>
                                    </>
                                    :
                                    <>
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
                                    </>
                            }
                            </>
                    }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default TableUser;