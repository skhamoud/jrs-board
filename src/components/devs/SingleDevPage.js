import React from "react";
// Single Developer Profile Page

const SingleDevPage = ({ match }) =>
  <h2>
    Developer with id : {match.params.id} 's Profile page
  </h2>;

export default SingleDevPage;
