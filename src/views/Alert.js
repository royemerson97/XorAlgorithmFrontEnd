import React, {Component} from 'react';

class Alert extends Component {
    render(){
      return(
        <div className={this.props.class} role="alert">Your text {this.props.mode} is :
            <strong> {this.props.text}</strong>
        </div>
      );
    }
}

export default Alert;
