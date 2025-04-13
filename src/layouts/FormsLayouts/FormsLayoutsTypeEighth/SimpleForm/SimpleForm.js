// import React from "react";
// import {Form} from "react-bootstrap";
// import {Col} from "reactstrap";
// import {EmailIcon, UserIcon, Lock} from "../../../../components/Icons/Icons";
// import Button from "../../../../components/Button/Button";
// import 'antd/dist/antd.css';
// import { Checkbox } from 'antd';
// import classes from "./SimpleForm.module.css"
// import CustomInput from "../../../../components/CustomInput/CustomInput";

// const SimpleForm = (props) => {
//     return (
//         <React.Fragment>
//             <Form className={classes.form}>
//                 <Form.Row>
                
//                     <CustomInput
//                         classes={`col-12 ${classes.p15} ${classes.item} ${props.classes}`}
//                         controlId="FormInputUserPassword"
//                         dark={(props.dark === true) ?  true : null}
//                         placeholder="Email"
//                         name="name"
//                         simple={false}
//                         leftIcon={true}
//                         icon={<EmailIcon/>}
//                         type="email"
//                     />
//                 </Form.Row>
//                 <Form.Row>
//                     <CustomInput
//                         classes={`col-lg-6 col-md-6 col-sm-6 ${classes.p15} ${classes.item} ${props.classes}`}
//                         controlId="FormInputUserPassword"
//                         name="name"
//                         dark={(props.dark === true) ?  true : null}
//                         placeholder="Password"
//                         simple={false}
//                         leftIcon={true}
//                         icon={<Lock/>}
//                         type="password"
//                     />
//                     <CustomInput
//                         classes={`col-lg-6 col-md-6 col-sm-6 ${classes.p15} ${classes.item} ${props.classes}`}
//                         controlId="FormInputUserPasswordConfirm"
//                         name="name"
//                         dark={(props.dark === true) ?  true : null}
//                         placeholder="Confirm"
//                         simple={false}
//                         leftIcon={true}
//                         icon={<Lock/>}
//                         type="password"
//                     />
//                 </Form.Row>
//                 <Form.Row>
//                     <Col className={classes.p20}>
//                         <Checkbox>By creating an account, you agree to the Terms and Conditions and Privacy Policy</Checkbox>
//                     </Col>
//                 </Form.Row>
//                 <Form.Row>
//                     <Col className={`col-12 ${classes.p20}`}>
//                         <Button
//                             type={"submit"}
//                             classes={"primary large simple w-100"}
//                             value={"Create an account"}
//                         />
//                     </Col>
//                 </Form.Row>
//             </Form>
//         </React.Fragment>
//     )
// }

// export default SimpleForm


import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Col } from "reactstrap";
import { EmailIcon, Lock } from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import classes from "./SimpleForm.module.css";
import CustomInput from "../../../../components/CustomInput/CustomInput";

const SimpleForm = (props) => {

    // Step 1: Manage state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Step 2: Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("https://flare-449c4e616892.herokuapp.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                alert("Account created successfully!");
            } else {
                alert(data.message || "Signup failed.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong.");
        }
    };

    // Step 3: Render form
    return (
        <React.Fragment>
            <Form className={classes.form} onSubmit={handleSubmit}>
                <Form.Row>
                    <CustomInput
                        classes={`col-12 ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputUserEmail"
                        dark={props.dark ? true : null}
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        simple={false}
                        leftIcon={true}
                        icon={<EmailIcon />}
                        type="email"
                    />
                </Form.Row>
                <Form.Row>
                    <CustomInput
                        classes={`col-lg-6 col-md-6 col-sm-6 ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputUserPassword"
                        name="password"
                        dark={props.dark ? true : null}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        simple={false}
                        leftIcon={true}
                        icon={<Lock />}
                        type="password"
                    />
                    <CustomInput
                        classes={`col-lg-6 col-md-6 col-sm-6 ${classes.p15} ${classes.item} ${props.classes}`}
                        controlId="FormInputUserPasswordConfirm"
                        name="confirmPassword"
                        dark={props.dark ? true : null}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        simple={false}
                        leftIcon={true}
                        icon={<Lock />}
                        type="password"
                    />
                </Form.Row>
                <Form.Row>
                    <Col className={classes.p20}>
                        <Checkbox>
                            By creating an account, you agree to the Terms and Conditions and Privacy Policy
                        </Checkbox>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col className={`col-12 ${classes.p20}`}>
                        <Button
                            type={"submit"}
                            classes={"primary large simple w-100"}
                            value={"Create an account"}
                        />
                    </Col>
                </Form.Row>
            </Form>
        </React.Fragment>
    );
};

export default SimpleForm;
