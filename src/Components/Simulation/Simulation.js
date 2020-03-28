import React, { Component } from 'react';
import './Simulation.css';
import Title from "../Title/Title";
import {Form, Button, Col} from "react-bootstrap";

class Simulation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            car_type: '',
            message: '',
            start_date: null,
            end_date: null,
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCarTypeChange = this.handleCarTypeChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange (evt) {
        this.setState({ name: evt.target.value });
    }

    handleEmailChange (evt) {
        this.setState({ email: evt.target.value });
    }

    handleCarTypeChange (evt) {
        this.setState({ car_type: evt.target.value });
    }

    handleMessageChange (evt) {
        this.setState({ message: evt.target.value });
    }

    handleStartDateChange (evt) {
        this.setState({ start_date: evt.target.value });
    }

    handleEndDateChange (evt) {
        this.setState({ end_date: evt.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        /*
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.car_type);
        console.log(this.state.message);
        */

        var elasticemail = require('elasticemail');
        var client = elasticemail.createClient({
            username: 'veriwa9198@itiomail.com',
            apiKey: '9E1130144C1314C06B344AF3DE45D049DF2D'
        });

        var msg = {
            from: 'veriwa9198@itiomail.com',
            from_name: 'Luis Agante',
            to: 'lmagoncalo@gmail.com',
            subject: 'Hello',
            body_text: 'Hello World!'
        };

        client.mailer.send(msg, function(err, result) {
            if (err) {
                return console.error(err);
            }

            console.log(result);
        });
    }

    render() {
        return (
            <div>
                <Title name={"Pedir simulação"}/>
                <Form onSubmit={this.handleSubmit}>
                    <h3>informação de contacto</h3>
                    <Form.Group controlId="formBasicText">
                        <Form.Control size="lg" type="text" onChange={this.handleNameChange} />
                        <Form.Text className="text-muted">
                            nome próprio e apelido
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control size="lg" type="email" onChange={this.handleEmailChange} />
                        <Form.Text className="text-muted">
                            email
                        </Form.Text>
                    </Form.Group>

                    <h3>informação de contacto</h3>
                    <Form.Group>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="first radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="second radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="third radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                        </Col>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="fourth radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios4"
                            />
                            <Form.Check
                                type="radio"
                                label="fifth radio"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios5"
                            />
                        </Col>
                    </Form.Group>

                    <h3>data pretendida</h3>

                    <h3>mensagem</h3>
                    <Form.Group>
                        <Form.Control as="textarea" rows="4" onChange={this.handleMessageChange} />
                    </Form.Group>

                    <Button variant="outline-dark" type="submit">
                        submeter pedido
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Simulation;
