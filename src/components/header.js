import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'linear-gradient(to right, rebeccapurple 0%, rgb(149, 107, 193) 77%, rgb(171, 133, 210) 100%)',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          { siteTitle }
        </Link>
      </h1>
    </div>
  </header>
)

export default Header

