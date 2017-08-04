import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar'

const AppContainer = ({ name, search }) => {
    return (
        <div className="header-div">
            <Title name={name} /> <br />

            <SearchBar search={search} />
        </div>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
    search: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        name: state.name,
        search: state.search
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
