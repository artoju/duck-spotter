import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';
import { fetchSightings } from '../actions';
import { Table } from 'react-bootstrap';

class SightingList extends Component {

    state = { descending: true };

    componentWillMount() {
        this.props.fetchSightings();
    }

    handleClick = (e) => {
        this.setState({ descending: !this.state.descending});
    }

    sortByDate = (arr) => {
        if (!this.state.descending) {
            return arr.sort(function(a, b) {
                return (a.dateTime < b.dateTime) ? -1 : ((a.dateTime > b.dateTime) ? 1 : 0);         
            });
        } else {
            return arr.sort(function(a, b) {
                return (a.dateTime > b.dateTime) ? -1 : ((a.dateTime < b.dateTime) ? 1 : 0);       
            });     
        }
    }

    formatDateString = (date) => {
        let dateObj = new Date(date);
        return dateObj.getDate() + "." + (dateObj.getMonth() + 1) + "." + dateObj.getFullYear();
    }

    render() {
        const { sightings } = this.props;
        const sightingsMap = this.sortByDate(sightings.slice()).map(sighting => 
            <ListItem species={sighting.species} count={sighting.count} date={this.formatDateString(sighting.dateTime)} 
             description={sighting.description}/>);
        
        return (
            <Table striped bordered condensed hover>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Description</th>
                        {this.state.descending ? <th onClick={this.handleClick}>Date &#9660;</th> : <th onClick={this.handleClick}>Date &#9650;</th>}
                    </tr>
                     {sightingsMap}
                </tbody>
            </Table>
        )
    }

}

function mapStateToProps(state) {
    return {
        sightings: state.sightings,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSightings: fetchSightings}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SightingList);