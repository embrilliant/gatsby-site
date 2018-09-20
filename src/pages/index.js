import React from 'react';
import Link from 'gatsby-link';
import Archive from '../components/archive';
import ProfileIconList from '../components/profileIconList';

const IndexPage = () => (
  <div className="page">
    <h1 className="hi">Hi, I'm Emily,</h1>
    <p>and I am a film editor turned Frontend Developer based in Berlin. With an aesthetic sensibility, I have been passionate about coding for the web since the time when I started writing HTML to create webpages hosted on Geocities.</p>
    <p>JavaScript is my power these days.</p>
    <ProfileIconList />
    <Archive />
    <div className="some-app"></div>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </div>
)

export default IndexPage
