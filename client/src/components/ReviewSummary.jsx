import React from 'react';
import AggregatedReviews from './AggregatedReviews';

const axios = require('axios');

// import { Platform, StyleSheet, Text, View } from 'react-native';

// StarBars => get Math.floor of total number of x stars compared to total ratings
// fill up bar to same % of gold (CSS)
// remainder/default color of bar will be grey (CSS)
// text will be x on left of bar and % will be right of bar
// x is bold
// % is normal weight

// AggregatedReviews
// AvgRating => reduce ratings rating to avg, display in AvgRating
// AvgStars => reduce ratings to avg, depending on rating
// if rating is in ranges change the number of colored stars
// ie 5 stars = full five stars
// TotalReviews => ${Review count} reviews in blue

// Snippets
// Titles bold
// search through files, find keywords and return close sentence featuring words
// if words not featured don't show the corresponding div

class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FiveStar: '',
      FourStar: '',
      ThreeStar: '',
      TwoStar: '',
      OneStar: '',
    };
  }

  getTotalRatingsPerRating() {
    axios.get(`/api/${itemId}/reviews/ratings`)
      .then((response) => {
        this.setState({
          FiveStar: '',
          FourStar: '',
          ThreeStar: '',
          TwoStar: '',
          OneStar: '',
        });
      })
      .catch((error) => {
        console.log('There was an error getting the average rating: ', error);
      });
  }

  render() {
    console.log(this.props, 'this.props');
    return (
      <div className='ReviewSummary'>
        <h2>
          Reviews Summary
        </h2>
        <div id="Bars">
          <div id="5Stars"> STAR BAR HERE </div>
        </div>
        <div id="AggregatedReviews">
          <AggregatedReviews reviews={this.props.reviews} average={this.props.average} />
        </div>
        <div id="Snippets">
          <div id="Ease"> <span className="snippetTitle"> Ease of Use </span> "So easy to use." </div>
          <div id="Value"> <span className="snippetTitle"> Value </span> "Wao great value." </div>
          <div id="DesignAndStyle"> <span className="snippetTitle"> Design and Style </span> "Such style." </div>
        </div>
      </div>
    );
  }
}

// console.log(ReviewSummary, 'reviewsummaru in rsumm');


export default ReviewSummary;

//
//
