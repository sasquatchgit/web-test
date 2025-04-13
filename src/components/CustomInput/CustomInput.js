import React from "react";
import './CustomInput.css';
import { Form, InputGroup } from "react-bootstrap";

const CustomInput = (props) => {
    const type = props.type || "text";
    const simple = props.simple + '' || "false";

    return (
        <Form.Group className={`CustomInput ${props.classes} ${props.size} ${props.dark ? `dark` : ''}`}
                    controlId={props.controlId}>
            {props.label &&
                <Form.Label>
                    {props.label}
                </Form.Label>
            }

            {props.leftIcon &&
                <InputGroup className="leftIcon">
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            {props.icon}
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type={type}
                        placeholder={props.placeholder}
                        name={props.name}
                        value={props.value}         
                        onChange={props.onChange}   
                        required={true}
                    />
                </InputGroup>
            }

            {props.rightIcon &&
                <InputGroup className="rightIcon">
                    <Form.Control
                        type={type}
                        placeholder={props.placeholder}
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                        required={true}
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            {props.icon}
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                </InputGroup>
            }

            {(!props.leftIcon && !props.rightIcon && simple === 'false' && !props.textarea) &&
                <Form.Control
                    type={type}
                    placeholder={props.placeholder}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    required={true}
                />
            }

            {props.textarea &&
                <Form.Control
                    as="textarea"
                    rows={props.rows}
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            }
        </Form.Group>
    );
}

export default CustomInput;
