import React from 'react';
import './Header.css';

import {CenterDiv} from "../tmp/center";

import githubLogoSVG from './github-logo.svg';
const githubLogo = (
  <img
    style={{marginRight: "5px"}}
    src={githubLogoSVG}
    alt="github-logo"
    width="20px"
    height="auto"
  />
);

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="title">
          <span>NEWTON</span>&#160;
          <span style={{color: "#3a42e7"}}>UI</span>
          <a href="https://www.freepik.com" style={{display: "none"}}>
            Designed by starline / Freepik
          </a>
        </div>

        <div className="description">
          <CenterDiv><strong>Hello friends!</strong></CenterDiv>
          <CenterDiv>
            I wanted to make my first interface on React.js, so I chose
            Newton API &#8211;&#160;<i>a really micro micro-service for advanced math</i>.
          </CenterDiv>
          <CenterDiv>API has some bugs&#8230; but for me, it's not important.</CenterDiv>
          <CenterDiv>If you find my site on Internet, please, give me feedback.</CenterDiv>
          <CenterDiv>
            <a
              href={'https://github.com/Vergil645/newton-ui'}
              style={{marginRight: "20px"}}
            >
              <CenterDiv>{githubLogo}My Github</CenterDiv>
            </a>
            <a href={'https://github.com/aunyks/newton-api'}>
              <CenterDiv>{githubLogo}Newton API</CenterDiv>
            </a>
          </CenterDiv>
        </div>
      </div>
    );
  }
}
