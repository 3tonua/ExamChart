import React, { Component } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  TextField
} from "@material-ui/core";
import { Edit, Check } from "@material-ui/icons";

import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

class ResultTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPoint: {}
    };
  }

  componentDidMount() {
    this.props.fetchResults();
  }

  handleChange = () => e => {
    if (e.target.value.length >= 4) return null;
    this.setState({
      editpoint: Object.assign(this.state.editPoint, { points: e.target.value })
    });
  };

  handleEditPoint = item => e => {
    this.setState({
      editPoint: item
    });
  };

  handleSavePoint = () => {
    let editPoint = this.state.editPoint;
    if (editPoint.points === "") editPoint.points = 0;
    this.setState({ editPoint: {} });
    return this.props.savePoint(editPoint);
  };

  render() {
    const { classes, results } = this.props;
    const { editPoint } = this.state;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Student name</TableCell>
              <TableCell>Exam name</TableCell>
              <TableCell className={classes.cell5}>Points</TableCell>
              <TableCell className={classes.cell5}>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result, i) => {
              return (
                <TableRow key={result.id} hover>
                  <TableCell component="th" scope="row">
                    {result.name}
                  </TableCell>
                  <TableCell>{result.exam}</TableCell>
                  <TableCell>
                    {result.id === editPoint.id ? (
                      <TextField
                        id="points"
                        type="number"
                        className={classes.pointField}
                        value={editPoint.points}
                        onChange={this.handleChange()}
                        margin="normal"
                        maxLength="2"
                        InputProps={{
                          classes: {
                            input: classes.pointField
                          }
                        }}
                      />
                    ) : (
                      result.points
                    )}
                  </TableCell>
                  <TableCell>
                    <Tooltip
                      title={
                        result.id === editPoint.id
                          ? `Save`
                          : `Edit ${result.name} points`
                      }
                      placement="top"
                    >
                      {result.id === editPoint.id ? (
                        <Check
                          className={classes.saveBtn}
                          onClick={this.handleSavePoint}
                        />
                      ) : (
                        <Edit
                          className={classes.editBtn}
                          onClick={this.handleEditPoint(result)}
                        />
                      )}
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(ResultTable);
