import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Title from "../Title/Title";
import {Form, Button, Col, Alert} from "react-bootstrap";
import {createEmail} from "../../Utils";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import { format } from 'date-fns'

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
            show: false,
            color: 'success',
            alert: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCarTypeChange = this.handleCarTypeChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createError = this.createError.bind(this);
        this.createSuccess = this.createSuccess.bind(this);

        registerLocale("ptBR", ptBR);
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
        // var formattedDate = format(evt, 'yyyy-MM-dd');
        this.setState({ start_date: evt });
    }

    handleEndDateChange (evt) {
        // var formattedDate = format(evt, 'yyyy-MM-dd');
        this.setState({ end_date: evt });
    }

    createError(){
        let new_color = 'alert';
        let new_alert = 'O e-mail não foi enviado!';
        this.setState({ show: !this.state.show, color: new_color, alert: new_alert });

        this.timeoutId = setTimeout(function () {
            this.setState({show: true});
        }.bind(this), 1000);
    }

    createSuccess(){
        let new_color = 'success';
        let new_alert = 'O e-mail foi enviado com sucesso.';
        this.setState({ show: !this.state.show, color: new_color, alert: new_alert });

        this.timeoutId = setTimeout(function () {
            this.setState({show: false});
        }.bind(this), 5000);
    }

    handleSubmit(event) {
        event.preventDefault();

        const formatted_start_date = format(this.state.start_date, 'yyyy-MM-dd');
        const formatted_end_date = format(this.state.end_date, 'yyyy-MM-dd');

        const email_body = createEmail(this.state.email, this.state.name, this.state.car_type, formatted_start_date, formatted_end_date, this.state.message);
        console.log(email_body);

        var elasticemail = require('elasticemail');
        var client = elasticemail.createClient({
            username: 'veriwa9198@itiomail.com',
            apiKey: '9E1130144C1314C06B344AF3DE45D049DF2D'
        });

        var msg = {
            from: 'veriwa9198@itiomail.com',
            from_name: this.state.name,
            to: 'jessica.aparente@gmail.com',
            subject: 'Pedido de simulação',
            body_text: email_body
        };

        var self = this;
        client.mailer.send(msg, function(err, result) {
            if (err) {
                self.createError();
                return console.error(err);
            } else {
                self.createSuccess();
                return console.log(result);
            }
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
                    <Form.Group onChange={this.handleCarTypeChange}>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Pequenos Utilitários"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                value="1"
                            />
                            <Form.Check
                                type="radio"
                                label="Utilitários"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                value="2"
                            />
                            <Form.Check
                                type="radio"
                                label="Utilitários Económicos"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                value="3"
                            />
                        </Col>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Carrinhas"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios4"
                                value="4"
                            />
                            <Form.Check
                                type="radio"
                                label="Monovolumes"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios5"
                                value="5"
                            />
                        </Col>
                    </Form.Group>

                    <h3>data pretendida</h3>

                    <DatePicker
                        selected={this.state.start_date}
                        dateFormat="dd/MM/yyyy"
                        onChange={this.handleStartDateChange}
                    />

                    <DatePicker
                        selected={this.state.end_date}
                        dateFormat="dd/MM/yyyy"
                        onChange={this.handleEndDateChange}
                    />

                    <h3>mensagem</h3>
                    <Form.Group>
                        <Form.Control as="textarea" rows="4" onChange={this.handleMessageChange} />
                    </Form.Group>

                    <Button variant="outline-dark" type="submit">
                        submeter pedido
                    </Button>
                    <Alert variant={this.state.color} show={this.state.show}>
                        {this.state.alert}
                    </Alert>
                </Form>
            </div>
        );
    }
}

export default Simulation;
