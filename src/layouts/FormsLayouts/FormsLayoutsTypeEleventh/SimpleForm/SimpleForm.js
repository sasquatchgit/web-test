import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Col } from "reactstrap";
import { EmailIcon, Lock } from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import 'antd/dist/antd.css';
import classes from "./SimpleForm.module.css";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../components/Context/Firebase"; 

const SimpleForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Logged in user:", userCredential.user);
            alert("Login successful!");
        } catch (error) {
            console.error("Login error:", error.message);
            alert(error.message);
        }
    };

    return (
        <React.Fragment>
            <Form className={classes.form} onSubmit={handleLogin}>
                <Form.Row>
                    <CustomInput
                        classes={`col-12 ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputUserEmail"
                        dark={props.dark === true ? true : null}
                        placeholder="Email"
                        name="email"
                        simple={false}
                        leftIcon={true}
                        icon={<EmailIcon />}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <CustomInput
                        classes={`col-12 ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputUserPassword"
                        name="password"
                        dark={props.dark === true ? true : null}
                        placeholder="Password"
                        simple={false}
                        leftIcon={true}
                        icon={<Lock />}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Row>

                <Form.Row>
                    <Col className={classes.p20}>
                        <button 
                            type="button" 
                            className={`text-right ${classes.loginLink} bg-transparent border-0 p-0`}
                            onClick={() => {/* Add password reset functionality here */}}
                        >
                            Lost your password?
                        </button>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col className={classes.p20}>
                        <Button
                            type={"submit"}
                            classes={"primary large simple w-100"}
                            value={"Login"}
                        />
                    </Col>
                </Form.Row>
            </Form>
        </React.Fragment>
    );
};

export default SimpleForm;
