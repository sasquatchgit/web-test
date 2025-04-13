import React, {Component} from "react";
import {Container} from "reactstrap";

import classes from "./MenuLayoutsTypeFourth.module.css"
import Header from "./Header/Header";

class  MenuLayoutsTypeFourth extends Component {

    render() {

        return (
            <React.Fragment>
                <section className={`${classes.menu} ${(this.props.dark) ? `dark ${classes.dark}` : ''}`}>
                    <div className={classes.gridWrapper}>
                        <Container>
                            <Header
                                dark={this.props.dark ? true : false}
                            />
                        </Container>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default MenuLayoutsTypeFourth
