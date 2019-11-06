import React, {Fragment} from "react";
import { withRouter, Route, Link } from "react-router-dom";
import api from "../dataStore/stubAPI"; // NEW
import MoviePublic from "../components/moviePublic/";
import MoviePrivate from "../components/moviePrivate/";

const MoviePage = props => {
  const { id } = props.match.params;
  const movie = api.find(id);
  return (
    <Fragment>
      {movie ? (
        <Fragment>
          <MoviePublic movie={movie} /> 
           {!props.history.location.pathname.endsWith("/private") && (
            <Link class="btn btn-primary active" to={`/movies/${id}/private`}>See Private Data</Link>
          )}
          <Route path={`/movies/:id/private`} 
              render={ (props) => <MoviePrivate {...props} movie={movie} /> } />

        </Fragment>
      ) : (
        <p>Waiting for contact details</p>
      )}
    </Fragment>
  );
};

export default withRouter(MoviePage);