import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ 
           term: event.target.value
        });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ 
            term: '' 
        });
    }

    render() {
        var styles = {
            marginTop: '15px'
        };

        var spanStyles = {
            color: 'rgb(0,191,255)'
        }

        return (
            <nav className="navbar navbar-light bg-faded">
                <a className="navbar-brand" href="#">
                   <h2 style={styles}>Weather<span style={spanStyles}>Techie</span></h2>
                </a>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        placeholder="Get a five-day forecast in your favorite cities"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </nav>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
