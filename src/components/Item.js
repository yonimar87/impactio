import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { itemsFetchData } from '../actions/items';

class Item extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:4000/api/member/' + this.props.match.params.id);
    }

    render() {
        if (this.props.hasError) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            // <div style={setMargin}>
            <div>
                    {JSON.stringify(this.props.match.params.id)}
                    <div key={this.props.items.id}>
                        {/* <ListGroup style={setDistanceBetweenItems}> */}
                            <ListGroup>
                                <ListGroupItem href={this.props.items.firstName} header={this.props.items.firstName}>
                                    {this.props.items.firstName} {this.props.items.lastName} |
                                    <span className="pull-xs-right"> Date Joined: {this.props.items.dateJoined}</span>
                                </ListGroupItem>
                            </ListGroup>
                    </div>
            </div>
        );
    }
}

// var setMargin = {
//     padding: "0px 200px 20px 200px"
// };

// var setDistanceBetweenItems = {
//     marginBottom: "5px"
// };

Item.propTypes = {
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
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
