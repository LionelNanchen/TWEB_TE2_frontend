require('dotenv/config');
import React, { Component } from "react";
import withStyles from "@material-ui/core/styles";
import Header from "../components/Header";
import Poster from "../components/Poster";

const baseUrl = "https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=${process.env.API_KEY}";
const imgUrl = "https://image.tmdb.org/t/p/w500/";

const styles = {
  background: {
    backgroundColor: "#F0F0F0",
    width: "100%",
    position: "relative",
    marginTop: "70px"
  },

  content: {
    position: "relative",
    width: "90%",
    top: "0px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  library: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

/**
  * fetch the comming soon movies on TMDb
*/
function fetchCommingSoon() {
  return fetch(`${baseUrl}`).then(res => res.json());
}

/**
* get the comming soon movies
* return an array with all movies
*/
function getPopular() {
  return Promise.all([fetchCommingSoon()])
  .then(([movies]) => {
    createPosters(movies);
  })
  .catch(err => {
    console.error('Error ! cannot fetch data', err);
  });
}

/**
* create the Poster components
* return an array with all Posters to display
*/
function createPosters(movies) {
  let posters = [];
  for (let i = 0; i < movies.length; ++i) {
    let posterPath = imgUrl + movies[i].poster_path;
    posters.push(<Poster src={posterPath} alt={movies[i].title} />)
  }
  return posters;
}

export default class CommingSoonPage extends Component {
  renderPosters() {
    let posters;
    getPopular().then(p => {
      posters = p;
    });
    return posters;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header/>
        <div style={styles.background}>
          <div style={styles.content}>
            <div style={styles.library}>
              {this.renderPosters()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default withStyles(styles)(MoviesPage);
