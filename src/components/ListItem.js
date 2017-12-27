import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {

    ListItem.propTypes = {
        species: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired, 
    } 

    return (
    <tr>
        <td>{props.species}</td>
        <td>{props.count}</td>
        <td>{props.description}</td>
        <td>{props.date}</td>
    </tr> );
}

export default ListItem;