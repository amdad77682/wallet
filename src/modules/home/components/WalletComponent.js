import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from 'react-bootstrap';
import Web3 from 'web3';
import{wellStyles}  from '../styles/index.css'
import { baseUrl, apiKey } from "../../../config/apiurl";
import ReactFileReader from 'react-file-reader';
var web3 = new Web3();
web3 = new Web3(new Web3.providers.HttpProvider(baseUrl.infura));

class NewComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        accout removed
        {web3.eth.accounts.wallet.clear()}
      </div>
    );
  }
}
export default class WalletComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block_ids: [],
      block_hashes: [],
      curr_block: null,
      address: null,
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {
   this.setState({
     showComponent: true,
     address:[]
   });
 }
componentWillMount() {
     var wallet=web3.eth.accounts.wallet.create(1);
     //console.log(wallet[0].address);

    this.setState({
           address:wallet[0].address
    });
}
handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
    // Use reader.result
  //  alert(reader.result)
      var decript=web3.eth.accounts.decrypt(reader.result,"Samsunnahar");
      console.log(decript);


    }
  reader.readAsText(files[0]);
}

  render = () => {

    return (
      <Container className="store-details-container">
            <Button disabled={this.state.showComponent} onClick={this._onButtonClick}>Delete Wallet</Button>
                {this.state.showComponent ?
                   <NewComponent /> :
                   null
                }
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={'all'}>
                    <button className='btn'>Add Keystore</button>
                </ReactFileReader>

            <div className="well" style={wellStyles}>

            Your wallet Address {this.state.address}
            </div>
      </Container>
    );
  };
}
