import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSpecies, addSighting } from '../actions';
import { FormGroup, FormControl, Button, Form, ControlLabel, Col, Row } from 'react-bootstrap';

class Adder extends Component {
    state = { 
        species: "",
        count: "",
        description: "",
    }

    componentWillMount() {
        this.props.fetchSpecies();
    }

    getValidationState(fieldName) {
        switch (fieldName) {
            case "species":
            const name = this.state.species;
            const { species } = this.props;
            if (name.length === 0) {
                return null;
            } else if (species.find((e) => {
                return e.name.toLowerCase() === name.toLowerCase();
            })) {
                return 'success';
            } else {
                return 'error';
            }
            case "number":
            if (this.state.count > 0)
                return 'success';
            else if (this.state.count < 0)
                return 'error'
            else 
                return null;
            case "description":
            if (this.state.description.length > 0)
                return 'success'
            else 
                return null;
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { description, } = this.state;
        let species = this.state.species.toLowerCase();
        let count = parseInt(this.state.count);
        let dateTime = new Date().toISOString();
        this.props.addSighting(species, description, dateTime, count);
        this.setState({ 
            species: "",
            count: 0,
            description: "",
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { species } = this.props;
        const options = species.map(specimen => <option value={specimen.name}/>);
        return (
            <Row>
            
            <Form inline onSubmit={this.handleSubmit}>
            <Col xs={3} md={3}>
                <FormGroup
                validationState={this.getValidationState("species")}>
                <FormControl bsSize="small" list="species" name="species" placeholder="Select name" value={this.state.species} onChange={this.handleChange}/>
                <datalist id="species">
                    {options}
                </datalist>
                <FormControl.Feedback/>
                </FormGroup>
                </Col>
                <Col xs={3} md={3}>
                <FormGroup
                validationState={this.getValidationState("number")}>
                <FormControl bsSize="small" type="number" name="count" placeholder="Number of ducks" onfocus="this.type='number';" value={this.state.count} onChange={this.handleChange}/>
                <FormControl.Feedback/>
                </FormGroup>
                </Col>            
                <Col xs={3} md={3} >
                    
                <FormGroup
                validationState={this.getValidationState("description")}>
                <FormControl bsSize="small" type="text" name="description" placeholder="Describe something" value={this.state.description} onChange={this.handleChange}/>
                <FormControl.Feedback/>
                </FormGroup>
                </Col>    
                <Col xs={3} md={2.5} mdOffset={0.5}>
                        
                <Button bsStyle="primary" type="submit" name="submit" disabled={!this.state.species || (this.state.count < 1) || !this.state.description}>Add sighting</Button>
                </Col>    
                
            </Form>
            </Row>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        species: state.species,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        fetchSpecies: fetchSpecies,
        addSighting: addSighting,
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Adder);