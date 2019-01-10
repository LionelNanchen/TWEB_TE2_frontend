import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles";

const styles = {
  navigator: {
    borderBottom: "1px solid black",
  },

  buttonMovies: {
    marginRight: "50px",
    marginLeft: "50px",
  }
};

export default class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <nav style={styles.navigator}>
        <div>
          <Button color="primary" style={styles.buttonMovies}>
            Movies
          </Button>
          <Button color="primary">
            Suggestions
          </Button>
        </div>
      </nav>
    );
  }
}

// export default withStyles(styles)(Header);
