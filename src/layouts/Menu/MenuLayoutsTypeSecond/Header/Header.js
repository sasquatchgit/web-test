import React from "react";
import classes from "./Header.module.css"
import {Navbar} from "react-bootstrap";
import {MethodLogotype, FavoriteBorder, User, Cart, Menu } from "../../../../components/Icons/Icons";

import { Badge } from 'antd';

const Header = (props) => {
    return (
        <section className={`${classes.header} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
            <Navbar collapseOnSelect expand="lg" className="p-0">
                <a onClick={props.triggerMenu}>
                    <Menu/>
                </a>
                <div className={classes.wrapper}>
                        <Navbar.Brand href="#home">
                            <MethodLogotype/>
                        </Navbar.Brand>
                    <div className={classes.search}>
                        <a onClick={props.triggerCart}>
                            <Badge dot={props.subtotal > 0}>
                                <Cart/>
                            </Badge>
                        </a>
                    </div>
                </div>
                    <Navbar>
                        <div className={classes.active}>
                            <a href="/">
                                <FavoriteBorder/>
                            </a>
                            <a href="/">
                                <User/>
                            </a>
                            <a onClick={props.triggerCart} href="/">
                                <Badge dot={props.subtotal > 0}>
                                    <Cart/>
                                </Badge>
                            </a>
                        </div>
                    </Navbar>
            </Navbar>
        </section>
    )
}

export default Header
