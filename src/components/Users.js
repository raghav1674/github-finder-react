import React,{useContext} from "react";

import UserItem from "./UserItem";

import { Spinner } from "./Spinner";

// import context 
import GithubContext from "../context/github/githubContext";

const Users = () => {


  // init context

  const githubContext = useContext(GithubContext);

  // use

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className="card-group container">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
};

export default Users;
