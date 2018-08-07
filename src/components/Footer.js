import React, { Component } from "react";
import $ from "jquery";

import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import reddit from "../images/reddit.png";
import linkedIn from "../images/linkedin.svg";
import youTube from "../images/youtube.png";
import bitcoin from "../images/bitcoin.png";
import medium from "../images/medium.png";
import telegram from "../images/telegram.png";

import logo from "../images/ekkbaz-logo-full.png";

import "../styles/Footer.css";

const seeAlso = [
    {
      name: "support",
      href: "http://support.ekkbaz.com"
    },
    {
      name: "blog",
      href: "/blog"
    },
    {
      name: "EkkBaz Business terms",
      href: "/business/terms-and-conditions"
    },
    {
      name: "EkkBaz Business privacy",
      href: "/business/privacy-policy"
    }
  ],
  socials = [
    { name: twitter, href: "https://twitter.com/EkkBazCom" },
    { name: facebook, href: "https://www.facebook.com/ekkbaz" },
    { name: youTube, href: "https://www.youtube.com/channel/UCnWEs-pWe6aeVVayZGPeCsA" },
    { name: linkedIn, href: "https://www.linkedin.com/company/7603237/" },
    { name: medium, href: "https://medium.com/ekkbaz" },
    { name: telegram, href: "https://t.me/ekkbaz" },
    { name: reddit, href: "https://www.reddit.com/r/EkkBaz/" },
    { name: bitcoin, href: "https://bitcointalk.org/index.php?action=profile;u=1896766" }
  ],
  company = [
    // {
    // 	name: "overview",
    // 	href: "/#overview"
    // },
    // {
    // 	name: "feature",
    // 	href: "/#feature"
    // },
    // {
    // 	name: "download",
    // 	href: "/#download"
    // },
    // {
    // 	name: "client",
    // 	href: "/#client"
    // }
  ],
  tokenSale = [
    // {
    // 	name: "whitepaper",
    // 	href: "https://ekkfilesdbt.blob.core.windows.net/businessesblobs/80f6392c-c23c-4529-8b9e-fdcaab7f3863_sample.pdf"
    // },
    // {
    // 	name: "whitelist",
    // 	href: "/auth"
    // },
    {
      name: "advisors",
      href: "/token-offer/#advisors"
    },
    {
      name: "team",
      href: "/token-offer/#team"
    },
    {
      name: "purchase agreement",
      href: "/token-offer/purchase-agreement"
    },
    {
      name: "terms",
      href: "/token-offer/terms"
    },
    {
      name: "airdrop",
      href: "/token-offer/airdrop"
    },
    {
      name: "bounty", //bounty
      href: "/token-offer/bounty"
    }
  ];

export default class Footer extends Component {
  _toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  _scrollTo = id => {
    // let value = id === "#home" ? 0 : 64;
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - 0
      },
      1000
    );
  };

  render = () => {
    const { colored, id } = this.props.footer;
    return (
      <div className={`footer ${colored ? "colored" : ""}`} id={id}>
        <div className="container">
          <section className="row">
            <article className="column _40">
              <img src={logo} alt="logo" className="footer-logo-icon" />
              <p>
                <a href="/about" style={{ fontWeight: "700", color: "#232e44" }}>
                  Enam Pte. Ltd.
                </a>
                , a company incorporated in Republic of Singapore which owns, develops and manages the EkkBaz Platform
                and its affiliates. EkkBaz reserves the right to change, modify, add, or remove portions of this for any
                reason at any time.
              </p>

              <div>
                <div>
                  <h3>Singapore Office</h3>
                  <p>
                    Link@AMK, #04-15<br />3 Ang Mo Kio Street 62,<br />Singapore 569139
                  </p>
                </div>
                <div>
                  <h3>Bangladesh Office</h3>
                  <p>
                    Razzak Plaza, Flat no-6/A,C, Lift-5<br />2 Shahid Tazuddin Saroni, Moghbazar
                    <br />Dhaka-1217, Bangladesh
                  </p>
                </div>
              </div>
            </article>
            {company.length > 0 && (
              <article className="column _20">
                <span className="footer-link-title">Home</span>
                <ul>
                  {company.map((link, index) => (
                    <li key={index}>
                      <a
                        // onClick={() => this._scrollTo(link.href)}
                        href={link.href}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            )}
            {tokenSale.length > 0 && (
              <article className="column _20">
                <span className="footer-link-title">Token Offer</span>
                <ul>
                  {tokenSale.map((link, index) => (
                    <li key={index}>
                      <a
                        // onClick={() => this._scrollTo(link.href)}
                        href={link.href}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            )}
            <article className="column _20">
              <span className="footer-link-title">See Also</span>
              <ul>
                {seeAlso.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </article>
          </section>
          <section className="row">
            <article className="column">
              <div className="footer-socials-wrapper">
                {socials.map((social, index) => {
                  return (
                    <a key={index} className="footer-social" href={social.href} target="_blank">
                      <img src={social.name} alt="footer icon" className="footer-icon" />
                    </a>
                  );
                })}
              </div>
            </article>
            <div id="google_translate_element" />

            <article className="column">
              <p>&copy; EkkBaz | Enam Pte. Ltd.</p>
            </article>
          </section>
        </div>
      </div>
    );
  };
}
