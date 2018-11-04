import React, { Component } from "react";

import { Paper } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { Bar } from "react-chartjs-2";

import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

class Chart extends Component {
  render() {
    const { classes, results } = this.props;
    const data = {
      labels: results.map(v => v.name),
      datasets: [
        {
          label: "Biology exam results",
          data: results.map(v => v.points),
          backgroundColor: results.map(v => blue[500]),
          hoverBackgroundColor: results.map(v => blue[300])
        }
      ]
    };

    return (
      <Paper className={classes.root}>
        <Bar data={data} />
      </Paper>
    );
  }
}

export default withStyles(styles)(Chart);
