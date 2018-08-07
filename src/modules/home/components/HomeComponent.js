import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from 'react-bootstrap';
import Web3 from 'web3';
import{wellStyles}  from '../styles/index.css'
import WalletComponent  from "./WalletComponent"
import { baseUrl, apiKey } from "../../../config/apiurl";
import ReactFileReader from 'react-file-reader';
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import FloatingButton from "../../../components/FloatingButton";
var ethers = require('ethers');
var web3 = new Web3();
web3 = new Web3(new Web3.providers.HttpProvider(baseUrl.infura));


export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block_ids: [],
      block_hashes: [],
      curr_block: null,
      showaddbutton: false,
      showdeletebutton: true,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {
   this.setState({
     showaddbutton: true,
     showdeletebutton: false,
   });

 }
componentWillMount() {
    // console.log(web3.eth.accounts.wallet.create(2));
    this.setState({

    });
}


  render = () => {

    return (
    <main className="wrapper">
                <Navigation />
                 <WalletComponent /> :


                <Footer
                  footer={{
                    id: "footer",
                    colored: false
                  }}
                />
                <FloatingButton />
      </main>
    );
  };
}
