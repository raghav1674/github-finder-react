// function based using Hooks

import React, { useContext } from "react";

// import context

import GithubContext from "../context/github/githubContext";

import AlertContext from "../context/alert/alertContext";


import { useState } from "react";
// now no need to getting all these from the props
// const Search = ({ clearUser, setAlert, searchUser, showBtn }) => {

const Search = () => {
  // initialize the githubContext

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  // use it

  const { clearUser, searchUsers, users } = githubContext;

  const {setAlert} = alertContext;

  const [text, setText] = useState("");

  const onChange = (event) => setText(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    if (text === "") {
      setAlert("Type the user to search", "warning");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              name="text"
              value={text}
              className="form-control"
              placeholder="Search"
              onChange={onChange}
            />
          </div>
          {users.length > 0 && (
            <button
              type="button"
              className="mt-3 btn btn-secondary btn-sm btn-block"
              onClick={clearUser}
            >
              Clear
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Search;

// using class based

// import React from "react";

// class Search extends React.Component {
//   state = {
//     text: "",
//   };

//   onChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value, // in this way we need not to create different handlers
//     });
//   };

//   onSubmit = (event) => {
//     event.preventDefault();

//     if (this.state.text === "") {
//       this.props.setAlert("Type the user to search", "warning");
//     } else {
//       this.props.searchUser(this.state.text);
//       this.setState({ text: "" });
//     }
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-row">
//             <div className="col">
//               <input
//                 type="text"
//                 name="text"
//                 value={this.state.text}
//                 className="form-control"
//                 placeholder="Search"
//                 onChange={this.onChange}
//               />
//             </div>
//             {this.props.showBtn && (
//               <button
//                 type="button"
//                 className="mt-3 btn btn-secondary btn-sm btn-block"
//                 onClick={this.props.clearUser}
//               >
//                 Clear
//               </button>
//             )}
//           </div>
//         </form>
//       </>
//     );
//   }
// }

// export default Search;
