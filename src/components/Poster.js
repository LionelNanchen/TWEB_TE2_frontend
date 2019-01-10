import React, { Component } from "react";
import withStyles from "@material-ui/core/styles";

const styles = {
  link: {
    margin: "10px",
    display: "inline-block",
    position: "relative"
  },

  image: {
    width: "200px",
    height: "300px",

  }
};

export default class Poster extends Component {
  constructor(props) {
    super(props);
    this.src = props.src;
  }

  render() {
    const { classes } = this.props;
    return (
      <a href="#" style={styles.link}>
        <img src={this.src} alt={this.alt} style={styles.image}></img>
      </a>
    );
  }
}


// export default withStyles(styles)(Poster);
