import React from 'react'
import LogoImage from 'images/dogmatic-logo.png'

const Header = () => (
  <div style={{ width: '100vw', textAlign: 'center' }}>
    <img style={Styles.Logo} src={LogoImage} alt="Dogmatic Logo" />
    <span style={Styles.line1}>It's not just automatic</span>
    <span style={Styles.line2}>It's Dogmatic.</span>
  </div>
)

export { Header }

const Styles = {
  Logo: {
    marginTop: '-25px',
    width: '30%',
    padding: '8px 0 0 8px',
    float: 'left',
  },
  line1: {
    color: 'rgb(26, 154, 189)',
    fontSize: 18,
    lineHeight: 1,
    display: 'block',
    marginTop: '25px',
  },
  line2: {
    color: 'rgb(243, 178, 36)',
    fontSize: 18,
    lineHeight: 1,
  },
}
