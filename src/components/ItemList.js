import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { itemsFetchData } from '../actions/items';
import { Link } from "react-router-dom";

class ItemList extends Component {
    componentDidMount() {
        console.log('step 4: Component did mount can only happen once during initialisation')
        this.props.fetchData('http://localhost:4000/api/members');
    }

    render() {
        if (this.props.hasError) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        console.log('step 3: initial rendering')
        return (
            <div style={setMargin}>
                {this.props.items.map((item) => (
                    <div key={item.id}>
                        <ListGroup style={setDistanceBetweenItems}>
                            <ListGroupItem href={item.firstName} header={item.firstName}>
                                {item.firstName} {item.lastName} |
                                    <Link to={"/member/" + item.id}>{item.id}</Link>
                                <span> Date Joined: {item.dateJoined}</span>
                            </ListGroupItem>
                        </ListGroup> 
                    </div>
                ))}
            </div>
        );
    }
}

var setMargin = {
    padding: "0px 200px 20px 200px"
};

var setDistanceBetweenItems = {
    marginBottom: "5px"
};

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasError: state.itemsHaveError,
        isLoading: state.itemsAreLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log('step 2: mapping dispatch into store. NOT dispatching yet.')
    return {
        fetchData: (url) => {
            dispatch(itemsFetchData(url))
            console.log('step 6: dispatching... itemsFetchData')
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);