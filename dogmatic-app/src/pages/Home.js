import React from 'react'
import { Header } from 'components/Header'
import { BottomNav } from 'components/BottomNav'

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <BottomNav />
      </div>
    )
  }
}

export { Home }
