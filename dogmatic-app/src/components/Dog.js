import React from 'react'

import icon1 from 'images/icons/icon1.png'
import icon2 from 'images/icons/icon2.png'
import icon3 from 'images/icons/icon3.png'
import icon4 from 'images/icons/icon4.png'

const icons = [icon1, icon2, icon3, icon4]

class Dog extends React.PureComponent {
  render() {
    const { name, icon, size } = this.props
    return (
      <div style={{ height: size, textAlign: 'center'  }} >
        <img
          alt={name}
          style={{ margin: '0 auto', display: 'block', height: '100%'}}
          src={icons[icon]}
        />
        <span style={{ display: 'block'}}>{name}</span>
      </div>
    )
  }
}

export { Dog }
