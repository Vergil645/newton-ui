import React from 'react';

import {CenterDiv, CenterText} from "../tmp/center";
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

export default class Description extends React.Component {
  render() {
    return (
      <div>
        <CenterText><strong>Hello friends!</strong></CenterText>
        <CenterText>
          I wanted to make my first interface on React.js, so I chose
          Newton API &#8211;&#160;<i>a really micro micro-service for advanced math</i>.
        </CenterText>
        <CenterText>API has some bugs&#8230; but for me, it's not important.</CenterText>
        <CenterText>If you find my site on Internet, please, give me feedback.</CenterText>
        <CenterDiv>
          <a href={'https://github.com/Vergil645/newton-ui'}>
            <CenterDiv>{githubLogo}My Github</CenterDiv>
          </a>
          <a href={'https://github.com/aunyks/newton-api'}>
            <CenterDiv>{githubLogo}Newton API</CenterDiv>
          </a>
        </CenterDiv>
      </div>
    );
  }
}
