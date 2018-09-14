
import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { updateUserData } from '../../ducks/reducer';


function Nav(props) {
  console.log(props, 'mmaaah prroooppss!!!')
  return (
    <div>
      <Link to="/dashboard">
        <button>Home</button>
      </Link>
      <Link to="/post/:postid">
        <button>New Post</button>
      </Link>
      <Link to="/">
         <button>Logout</button>
      </Link>
    </div>
  )
};

// function mapStateToProps(state) {
//   const { name, image } = state.user;

//   return {
//     name,
//     image,
//   }
// };

export default connect(null, {updateUserData})(Nav);
