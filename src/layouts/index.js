import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Frontend, ReactJS, ES6, JavaScript, HTML, CSS, SASS, Berlin, magic' },
        { name: 'keywords', content: 'Frontend, ReactJS, React, ES6, JavaScript, SASS, Berlin' },
      ]}
    />
    <Header siteTitle="Emily Wu" />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      { children() }
    </div>

    <div id='chat-window' className='chat-window'>
      <header>
        <h5>Chat with my representative</h5>
        <span className='toggle-button'>-</span>
      </header>
      <div id='chat-app'></div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
