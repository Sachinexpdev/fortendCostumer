import React, { Component } from "react";

  


class Like extends Component {
  state = { liked: false };
  toggle = () => {
    let localLiked = this.state.liked;
  
    // Toggle the state variable liked
    localLiked = !localLiked;
    this.setState({ liked: localLiked });
  };
  
  render() {
    return (
      <div className="container">
          <div
            className="container"
            onClick={() => this.toggle()}
          >
            {this.state.liked === false ? (
            <span class="glyphicon glyphicon-heart-empty"></span>
            //   <FontAwesomeIcon icon={faHeart} />
            ) : (
                <span class="glyphicon glyphicon-heart"></span>
            )}
          </div>
      </div>
    );
  }
}
  
export default Like;