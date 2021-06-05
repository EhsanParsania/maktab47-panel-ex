import { Component } from 'react'
import { Header } from '../components/Header/Header'

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
      </>
    )
  }
}
export { Main }