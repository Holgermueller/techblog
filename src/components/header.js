import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "../components/index.module.css"

const siteLinks = [{ text: "About", url: "About" }]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
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

    <ul className={styles.link}>
      {siteLinks.map((link, i) => (
        <React.Fragment key={i}>
          <Link to={link.url}>{link.text}</Link>
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
