import React from 'react'
import HamburgerMenu from 'react-hamburger-menu'

class Header extends React.Component {

  state = {
    open: false,
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div className="header">
        <img className="logo" src="/logo.svg" alt="logo"/>
        <p>212.555.5555</p>
        <p>LOGIN</p>
        <div className="burger">
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>  
      </div>
    )
  }
}

export default Header
