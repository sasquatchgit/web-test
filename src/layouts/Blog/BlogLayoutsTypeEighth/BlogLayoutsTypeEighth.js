import { Row, Col, Container } from "reactstrap";
import React, { Component } from "react";
import placeholder from "../../../img/placeholder-gray.png";
import classes from "./BlogLayoutsTypeEighth.module.css"
import { Fade } from "react-awesome-reveal";
import SocialsLinks from "../../../components/Socials/Socials";
import {Google, LinkedIn, Twitter} from "../../../components/Icons/Icons";
import Oval from "../../../components/Frame/Frame";

class BlogLayoutsTypeEighth extends Component {

    render() {
        const d = new Date("2015-03-25").toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

        return (
            <div>
                <section className={`section  ${classes.blog} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Row style={{alignItems: 'stretch'}}>
                                <Col lg="3" sm="10" className="mx-auto">
                                    <div className={classes.sticky}>
                                        <SocialsLinks>
                                            <a href="/">
                                                <Oval
                                                  variant="normal"
                                                >
                                                    <Twitter/>
                                                </Oval>
                                            </a>
                                            <a href="/">
                                                <Oval
                                                  variant="normal"
                                                >
                                                    <LinkedIn/>
                                                </Oval>
                                            </a>
                                            <a href="/">
                                                <Oval
                                                  variant="normal"
                                                >
                                                    <Google/>
                                                </Oval>
                                            </a>
                                        </SocialsLinks>
                                    </div>
                                </Col>
                                <Col lg="8" sm="10" className="mx-auto">
                                    <Fade down triggerOnce={true}>
                                        <div className={classes.header}>
                                            <span>Product</span>
                                            <span>4 min read</span>
                                            <span>{d}</span>
                                        </div>
                                        <h1 className={classes.title}>
                                            Using 6 Google Analytics Features to Improve User Experience
                                        </h1>
                                        <p className={classes.subtitle}>
                                            Take a look at the behavior flow is a great way to analyze the current user journey to optimize further.
                                        </p>
                                        <img className={classes.cover} src={placeholder} alt=""/>

                                        <div>
                                            <h3>Behavior Flow</h3>
                                            <p>Behavior flow in Google Analytics identifies pages, volume of traffic, and paths of traffic, such as the most common routes visitors take to get in and out of specific pages. You can get a great view of the overall flow of traffic surrounding a specific page, customer journey, or funnel. When you compare the behavior flow against the time spent on your site, you can quickly identify pages that are bridges and areas of the site, which are conversion hubs.</p>
                                            <h3>Looking at User Behavior with Analytics</h3>
                                            <p>When you compare the behavior flow against the time spent on your site, you can quickly identify pages that are bridges and areas of the site, which are conversion hubs.</p>
                                            <ul>
                                                <li>Which pages do visitors land on?</li>
                                                <li> Where do they exit the site?</li>
                                                <li>Whether or not they converted?</li>
                                            </ul>
                                        </div>
                                        <div className={classes.bottom}>
                                            <SocialsLinks  dark={this.props.dark ? true : false}>
                                                <a href="/">
                                                    <Twitter/>
                                                </a>
                                                <a href="/">
                                                    <LinkedIn/>
                                                </a>
                                                <a href="/">
                                                    <Google/>
                                                </a>
                                            </SocialsLinks>
                                        </div>
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        )
    }
}

export default BlogLayoutsTypeEighth
