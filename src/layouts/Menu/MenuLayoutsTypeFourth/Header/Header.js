import React from "react";
import classes from "./Header.module.css"
import {Nav, Navbar, Form, FormControl} from "react-bootstrap";
import {MethodLogotype} from "../../../../components/Icons/Icons";
import Button from "../../../../components/Button/Button";
import Socials from "../Socials/Socials";
import { Input } from 'antd';
const { Search } = Input;

const Header = (props) => {
    return (
        <section className={`${classes.header} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <Navbar collapseOnSelect expand="lg" className="p-0">
                <div className={classes.wrapper}>
                        <Navbar.Brand href="#home">
                            <MethodLogotype/>
                        </Navbar.Brand>
                    <div className={classes.search}>
                        <Search
                            onSearch={value => console.log(value)}
                            style={{ width: 150 }}
                        />
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
                </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#work">Work Process</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#contacts">Contacts</Nav.Link>
                            <Nav.Link href="#contacts">SignIn</Nav.Link>
                            <Nav.Link href="#contacts">Login</Nav.Link>
                        </Nav>
                        <Button
                            link={true}
                            href={"#"}
                            classes={"neutral outline simple small"}
                            value={"Sign In"}
                        />
                        <Button
                            link={true}
                            href={"#"}
                            classes={"primary simple small "}
                            value={"Sign up"}
                        />
                        <div className={classes.hiddenElements}>
                            <Form className="form">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </Form>
                            <Socials/>
                        </div>
                    </Navbar.Collapse>
            </Navbar>
        </section>
    )
}

export default Header