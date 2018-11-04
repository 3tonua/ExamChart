import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "../components/Chart";

const mapStateToProps = state => ({
  results: state.results
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);
