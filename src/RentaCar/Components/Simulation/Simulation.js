import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Title from "../Title/Title";
import {Form, Col, Alert} from "react-bootstrap";
import {createEmail, getMenuTop, getPadding, getSubMenuTop} from "../../Utils";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import { format } from 'date-fns'
import axios from 'axios';
import { Rabbit as Button } from 'react-button-loaders'
import {translate} from "../../../Languages/Language_Handler";
import './Simulation.css';

class Simulation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            car_types: [],
            message: '',
            start_date: null,
            end_date: null,
            show: false,
            color: 'success',
            alert: '',
            sendState: ''
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
        let new_car_type = evt.target.value;
        let car_types = this.state.car_types;
        if(car_types.includes(new_car_type)){
            const index = car_types.indexOf(new_car_type);
            car_types.splice(index, 1);
        } else {
            car_types.push(new_car_type)
        }
        this.setState({ car_types: car_types });
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

    checkForms() {
        if(!this.state.name.trim()){
            return false;
        }
        if(!this.state.email.trim()){
            return false;
        }
        if(this.state.car_types.length === 0){
            return false;
        }
        if(this.state.start_date == null){
            return false;
        }
        if(this.state.end_date == null){
            return false;
        }
        return true;
    }

    createError(errorMessage){
        this.setState({sendState: ''});

        let new_color = 'danger';
        this.setState({ show: !this.state.show, color: new_color, alert: errorMessage });

        this.timeoutId = setTimeout(function () {
            this.setState({show: false});
            this.setState({sendState: ''});
        }.bind(this), 5000);

    }

    createSuccess(){
        this.setState({sendState: ''});

        let new_color = 'success';
        let new_alert = translate("simulation.success_alert");
        this.setState({ show: !this.state.show, color: new_color, alert: new_alert });

        this.timeoutId = setTimeout(function () {
            this.setState({show: false});
        }.bind(this), 5000);
    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.checkForms()){
            // Start loading
            this.setState({sendState: 'loading'});

            const formatted_start_date = format(this.state.start_date, 'dd-MM-yyyy');
            const formatted_end_date = format(this.state.end_date, 'dd-MM-yyyy');

            this.setState({start_date: null});
            this.setState({end_date: null});

            const email = createEmail(this.state.email, this.state.name, this.state.car_types, formatted_start_date, formatted_end_date, this.state.message);
            axios
                .post('https://rentacar-backoffice.herokuapp.com/rentacar/email', email)
                .then((result) => {
                    this.createSuccess();
                    event.target.reset();
                })
                .catch(err => {
                    this.createError(translate("simulation.bad_alert"));
                });
        } else {
            this.createError(translate("simulation.required_alert"));
        }


    }

    render() {


        return (
            <div>
                <Title name={translate("simulation.title")}/>
                <Form className="menu_simulation" onSubmit={this.handleSubmit}>
                    <h3 className="subTitle_simulation"> {translate("simulation.title2")} </h3>
                    <Form.Group controlId="formBasicText">
                        <Form.Control className="form_simulation" size="lg" type="text" onChange={this.handleNameChange} />
                        <Form.Text className="formLegend_simulation">
                            {translate("simulation.name")}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className="form_simulation" size="lg" type="email" onChange={this.handleEmailChange} />
                        <Form.Text className="formLegend_simulation">
                            {translate("simulation.email")}
                        </Form.Text>
                    </Form.Group>
                    <h3 className="subTitle_simulation"> {translate("simulation.title3")} </h3>
                    <Form.Group onChange={this.handleCarTypeChange} className="ratio_simulation">
                        <Col sm={10} className="simulation_left">
                            <Form.Check
                                type="checkbox"
                                label={translate("simulation.type1")}
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                value="1"
                            />
                            <Form.Check
                                type="checkbox"
                                label={translate("simulation.type2")}
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                value="2"
                            />
                            <Form.Check
                                type="checkbox"
                                label={translate("simulation.type3")}
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                value="3"
                            />
                        </Col>
                        <Col sm={10} className="simulation_right">
                            <Form.Check
                                type="checkbox"
                                label={translate("simulation.type4")}
                                name="formHorizontalRadios"
                                id="formHorizontalRadios4"
                                value="4"
                            />
                            <Form.Check
                                type="checkbox"
                                label={translate("simulation.type5")}
                                name="formHorizontalRadios"
                                id="formHorizontalRadios5"
                                value="5"
                            />
                        </Col>
                    </Form.Group>

                    <h3 className="subTitle_simulation"> {translate("simulation.title4")} </h3>

                    <div >
                        <DatePicker
                            selected={this.state.start_date}
                            dateFormat="dd/MM/yyyy"
                            onChange={this.handleStartDateChange}
                            placeholderText="DD/MM/YYYY"
                        />
                        <p className="dateBet_simulation">—</p>
                        <DatePicker
                            selected={this.state.end_date}
                            dateFormat="dd/MM/yyyy"
                            onChange={this.handleEndDateChange}
                            placeholderText="DD/MM/YYYY"
                        />
                    </div>
                    <h3 className="subTitle_simulation"> {translate("simulation.title5")} </h3>

                    <Form.Group>
                        <Form.Control as="textarea" rows="4" onChange={this.handleMessageChange} />
                    </Form.Group>

                    <p className="infoObri_simulation">{translate("simulation.required")}</p>

                    <Button className="submitBtn_simulation" type="submit" state={this.state.sendState}>
                        {translate("simulation.submit")}
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
