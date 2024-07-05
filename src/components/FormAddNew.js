import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../action/actions";

const FormAddNew = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const dispatch = useDispatch();
    const isCreating = useSelector((state) => state.user.isCreating);

    const handleCreateUser = () => {
        dispatch(createUser(email, password, username));
        setEmail("");
        setPassword("");
        setUsername("");
    }

    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button
                        variant="primary"
                        onClick={() => handleCreateUser()}
                        disabled={isCreating}
                    >
                        Create
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default FormAddNew;