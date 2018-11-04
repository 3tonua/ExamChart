import React, { Component } from "react";
import { connect } from "react-redux";

import Table from "../components/Table";

import { fetchResults, savePoint } from "../actions";

const mapStateToProps = state => ({
  results: state.results
});

const mapDispatchToProps = dispatch => ({
  fetchResults: () => dispatch(fetchResults()),
  savePoint: item => dispatch(savePoint(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
