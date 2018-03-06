import React, {Component} from "react";
import axios from "axios";
import Alert from './Alert'
class Encrypt extends Component {

  state = {
    text : '',
    key : '',
    textEncrypted: '',
    loading : false,
  }

  render() {
    const textEncrypted = this.state.textEncrypted;
    let showText = null;
    if (textEncrypted !== '') {
      showText = <Alert class="alert alert-success" text={textEncrypted} mode="encrypted"></Alert>
    }else if (this.state.loading) {
      showText = <Alert class="alert alert-warning" text="loading" mode="encrypted"></Alert>
    }
    else{
      showText = <br></br>;
    }
    return (
      <form onSubmit={this.handleSubmit} >
        <br></br>
        <div className="form-group row">
          <label>Write the text you want to encrypt</label>
          <textarea className="form-control" rows="4" id="text" name="text" onChange={this.handleTextChange}></textarea>
        </div>
        <div className="form-group row">
          <label>Write your key</label>
          <input type="text" className="form-control"  id="key" name="key" onChange={this.handleKeyChange}></input>
        </div>
        <div className="center row">
            <button type="submit" className="btn btn-primary">Encrypt</button>
        </div>
        <br></br>
        <div className="row">
          {showText}
        </div>
      </form>
    );
  }

  handleTextChange = event => {
    this.setState({text : event.target.value})
  }

  handleKeyChange = event => {
    this.setState({key: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({loading : true, textEncrypted : ''});
    const text = this.state.text;
    const key = this.state.key;
    const option = 'enc';

    axios.post(`https://encryptionapi.azurewebsites.net/api/data`,{text, key, option})
      .then(res => {
        this.setState({textEncrypted : res.data, loading : false})
        console.log(this.state.textEncrypted);
      })

  }

}

export default Encrypt;
