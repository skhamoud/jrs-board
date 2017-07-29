// Single offer page
import React from "react";

const SingleOfferPage = ({ match }) =>
  <h2>
    Offer with id : {match.params.id} 's Profile page
  </h2>;

export default SingleOfferPage;
