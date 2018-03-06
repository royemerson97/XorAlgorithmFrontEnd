import React, {Component} from 'react';

class About extends Component {
  render(){
    return(
      <div>
        <h2>Home</h2>
        <button className="btn btn-primary" onClick={this.handleClick} >Hello</button>
      </div>
    );
  }
}
export default About;
