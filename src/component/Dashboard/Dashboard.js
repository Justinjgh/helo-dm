
import React, { Component } from 'react';
import './Dashboard.css';


class Dashboard extends Component {
  render() {
    return (
        <div class="container">
          <form>
            <div class="input-group">
            <input type="text" class="form-control"  placeholder="Search" name="search"/>
            <div class="input-group-btn">
            <button class="btn btn-default" type="submit">
            <i class="glyphicon glyphicon-search"></i></button>
            </div>
            <div className="reset-btn">
            <button type="submit">Reset</button>
            </div>
          </div>
          </form>
          <form>
            <input className="my-posts" type="checkbox" name="posts" value="Posts"/>My Posts
            {/* <input type="submit" value="Submit"/> */}
          </form>
        </div>

      // <div>  
      //   <form class="example" action="action_page.php">
      //     <input type="text" placeholder="Search.." name="search" />
      //     <button type="submit"><i class="fa fa-search"></i></button>
      //   </form>
      // </div>
    )
  }
};

export default Dashboard;
