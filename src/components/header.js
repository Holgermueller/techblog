import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const siteLinks = [
  { text: "About", url: "/About" },
  { text: "Archives", url: "/Archives" },
  { text: "Contact", url: "/Contact" },
]

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: `light-grey`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>

    <ul
      style={{
        margin: `0 `,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        backgroundColor: `light-grey`,
      }}
    >
      {siteLinks.map((link, i) => (
        <React.Fragment key={i}>
          <Link
            to={link.url}
            style={{
              fontSize: `var(--font-sm)`,
              textDecoration: `none`,
              margin: `5px`,
            }}
          >
            {link.text}
          </Link>
        </React.Fragment>
      ))}
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
