import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const SimpleAppBar = classes => (
  <div>
    <AppBar className={classes.root} position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Biology exam results
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
