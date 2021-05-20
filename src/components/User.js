import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// import context
import GithubContext from "../context/github/githubContext";

const User = (props) => {
  // initContext

  const githubContext = useContext(GithubContext);

  // use

  const { getUser, user } = githubContext;

  // fetch the current user details from the prop function passed

  useEffect(() => {
    getUser(props.match.params.login);
    // eslint-disable-next-line
  }, []);

  // empty array means only update once like componentDidMount only
  const {
    login,
    avatar_url,
    bio,
    followers,
    following,
    html_url,
    public_repos,
    public_gists,
    name,
    location,
  } = user;

  return (
    <div className="container mt-auto">
      <Link to="/">Back to Search</Link>
      <div className="jumbotron">
        <div className="text-center">
          <img
            src={avatar_url}
            className="rounded"
            alt="github profile pic"
            style={{ width: "12rem" }}
          />
        </div>
        <h1 className="display-4">{name}</h1>
        <p className="lead">{bio}</p>
        <hr className="my-4" />
        <p>Username {login}</p>
        {location && <p>Location {location}</p>}
        <p className="lead">
          <a className="btn btn-secondary btn-lg" href={html_url} role="button">
            Github
          </a>
        </p>
        <span className="badge badge-primary ml-2">Followers {followers}</span>
        <span className="badge badge-warning ml-2">Following {following}</span>
        <span className="badge badge-success ml-2">
          Public Repos {public_repos}
        </span>
        <span className="badge badge-danger ml-2">
          Public Gists {public_gists}
        </span>
      </div>
    </div>
  );
};

export default User;
