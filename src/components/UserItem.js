import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';


const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div>
      <div className="card m-2" style={{ width: "10rem" }}>
        <img src={avatar_url} className="card-img-top" alt={login} />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <p className="card-text">
            <Link to={`/user/${login}`} className="btn btn-primary">
              Github
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
