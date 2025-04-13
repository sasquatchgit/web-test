import React from "react";
import classes from "./Header.module.css"
import {Nav, Navbar, Form, FormControl} from "react-bootstrap";
import {MethodLogotype, Cart, UserBordered} from "../../../../components/Icons/Icons";
import Socials from "../Socials/Socials";
import {Badge, Dropdown, List, Collapse} from 'antd';
import {Col, Container, Row} from "reactstrap";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import UserProfileDropdown from "../../../../components/UserProfileDropdown/UserProfileDropdown";
const { Panel } = Collapse;

/*data*/

const dataNew = [
    {
        title: "Our Favorites",
        href: "example/1"
    },
    {
        title: "New Arrivals",
        href: "example/2"
    },
    {
        title: "New Collections",
        href: "example/3"
    },
    {
        title: "At Home Comfort",
        href: "example/4"
    },
    {
        title: "Join the party",
        href: "example/5"
    },
    {
        title: "New Names at Neiman's",
        href: "example/6"
    },
    {
        title: "Luxe Essentials",
        href: "example/7"
    },
    {
        title: "Exclusives",
        href: "example/8"
    }
];

const dataClothing = [
    {
        title: "Coats",
        href: "example/1"
    },
    {
        title: "Suits & Jackets",
        href: "example/2"
    },
    {
        title: "Dresses and jumpsuits",
        href: "example/3"
    },
    {
        title: "Cardigans and sweaters",
        href: "example/4"
    },
    {
        title: "Sweatshirts",
        href: "example/5"
    },
    {
        title: "T-shirts and tops",
        href: "example/6"
    },
    {
        title: "Jumpsuits & Rompers",
        href: "example/7"
    },
    {
        title: "Pants & Shorts",
        href: "example/8"
    }
];

const dataAccessories = [
    {
        title: "Jewelry",
        href: "example/1"
    },
    {
        title: "Wallets and cases",
        href: "example/2"
    },
    {
        title: "Neckscarves",
        href: "example/3"
    },
    {
        title: "Hats and gloves",
        href: "example/4"
    },
    {
        title: "Face masks",
        href: "example/5"
    }
];

const dataOccasions = [
    {
        title: "Casual Weekend",
        href: "example/1"
    },
    {
        title: "Work From Home",
        href: "example/2"
    },
    {
        title: "Wedding Guest",
        href: "example/3"
    },
    {
        title: "Staycation",
        href: "example/4"
    },
    {
        title: "Virtual Date Night",
        href: "example/5"
    }
];

const menu = (
    <Container className={classes.menuContainer}>
        <Row>
            <Col lg={3} md={6} sm={6}>
                <List
                    header={
                        <div className={classes.listTitle}>New</div>
                    }
                    itemLayout="horizontal"
                    dataSource={dataNew}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a className={classes.listItem} href={item.href}>{item.title}</a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col lg={3} md={6} sm={6}>
                <List
                    header={
                        <div className={classes.listTitle}>Clothing</div>
                    }
                    itemLayout="horizontal"
                    dataSource={dataClothing}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a className={classes.listItem} href={item.href}>{item.title}</a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col lg={3} md={6} sm={6}>
                <List
                    header={
                        <div className={classes.listTitle}>Accessories</div>
                    }
                    itemLayout="horizontal"
                    dataSource={dataAccessories}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a className={classes.listItem} href={item.href}>{item.title}</a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col lg={3} md={6} sm={6}>
                <List
                    header={
                        <div className={classes.listTitle}>Accessories</div>
                    }
                    itemLayout="horizontal"
                    dataSource={dataOccasions}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a className={classes.listItem} href={item.href}>{item.title}</a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    </Container>
);

/*end data*/

const Header = (props) => {
    return (
        <React.Fragment>
            <section className={`section ${classes.header} ${(props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.wrapper}>
                    <Container>
                        <Row>
                            <Col>
                                <Navbar expand="lg" className={classes.navbar}>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className={classes.navbarToggler}/>
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav>
                                            <Nav.Link href="#about">About</Nav.Link>
                                            <Nav.Link href="#work">Work</Nav.Link>
                                            <Nav.Link href="#services">Services</Nav.Link>
                                        </Nav>
                                        <Navbar.Brand href="#home">
                                            <MethodLogotype/>
                                        </Navbar.Brand>
                                        <div className={classes.active}>
                                            <Dropdown overlay={menu} overlayClassName={`${classes.dropdown}  ${(props.dark) ? `${classes.dark}` : ''}`}>
                                                <a className={classes.link} onClick={e => e.preventDefault()}  href="/">
                                                    Shop
                                                </a>
                                            </Dropdown>
                                            <UserProfileDropdown dark={props.dark} />
                                            <a className={classes.link} onClick={props.trigger}  href="/">
                                                Cart ({props.count})
                                            </a>
                                        </div>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Header
