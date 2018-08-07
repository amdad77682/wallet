import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { Button } from 'react-bootstrap';
import logo from "../images/ekkbaz-logo-full.png";
import menu from "../images/hamburger_icon.svg.png";

import "../styles/Navigation.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
      faqs: []
    };
  }

  // componentDidMount = () => {
  // console.log("nav", this.props.location);
  // console.log("nav", window.location);
  // };

  _toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  _scrollTo = async id => {
    let value = id === "#home" ? 0 : 64;
    // console.log($(id).offset().top - value, $(document).scrollTop());
    if ($(id).offset().top - value !== $(document).scrollTop()) {
      await $("html, body").animate(
        {
          scrollTop: $(id).offset().top - value
        },
        1000
      );
    }
  };

  render = () => {
    const navigation = [
        {
          name: "Token Offer",
          routeName: "/token-offer"
        },
        {
          name: "Wallet",
          routeName: "/Wallet"
        },
        {
          name: "Business",
          routeName: "/business"
        },
        // { name: "Timeline", id: "#timeline" },
        {
          name: "Blog",
          routeName: "/blog"
        },
        { name: "About", routeName: "/about" }
      ],
      buttons = [
        {
          name: "whitepaper",
          routeName: "/token-offer/whitepaper"
        },
        { name: "whitelist", routeName: "/auth" }

      ];

    return (
      <header className="header">
        <figure id="header-logo">
          <a href="/">
            <img src={logo} alt="logo" className="header-logo-icon" />
          </a>
          <a onClick={this._toggleMenu} className="header-menu-icon-wrapper">
            <img src={menu} alt="menu" className="header-menu-icon" />
          </a>

        </figure>
        <nav className={`${this.state.menuVisible && "active"} header-nav`}>
          {navigation.map((item, index) => {
            let location = window.location.pathname,
              route = "/" + item.name.toLocaleLowerCase().replace(/ /g, "-");
             //console.log(window.location.pathname, "/" + item.name.toLocaleLowerCase());
            return (
              <Link
                key={index}
                className="header-link"
                style={
                  (item.name.toLowerCase() === "home" && location === "/") ||
                  (item.name.toLowerCase() === "business" && location.includes("/post")) ||
                  location.includes(route)
                    ? { color: "#4285f4", borderBottom: "3px solid #4285f4" }
                    : {}
                }
                onClick={() => (item.id ? this._scrollTo(item.id) : item.href ? (location = item.href) : {})}
                to={{ pathname: item.routeName ? item.routeName : "/tokensale" }}
              >
                {item.name}
              </Link>
            );
          })}
          {buttons.length > 0 && (
            <div className="header-buttons-container">
              {buttons.map((item, index) => (
                <div key={index} className="header-link" style={{ borderBottomWidth: 0 }}>
                  {!item.routeName ? (
                    <a className="btn small" href={item.link} target="_blank">
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      onClick={() => {
                        window.open(window.location.origin + item.routeName, "_self");
                      }}
                      to={item.routeName}
                      className={"btn small"}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* <div id="google_translate_element" /> */}
        </nav>
      </header>
    );
  };
}
