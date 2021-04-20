import React, { Component } from 'react'
import Link from 'next/link'
import { Menu } from 'semantic-ui-react'

export default class Navbar2 extends Component {
  state = {  }

  handleItemClick = ( { name }) => this.setState({ activeItem: name })

  

  render() {
    const { activeItem } = this.state

    return (
          <div className="ui top fixed menu">
      <Menu inverted fluid widths={5} compact pointing size='mini' borderless>

        <Link href="/" >
        <Menu.Item header
          name='Inicio'
          active={activeItem === 'Inicio'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link href="/listaComidas/listaComidas" >
        <Menu.Item
          name='Platos'
          active={activeItem === 'Platos'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link href="/listaBebidas/listaBebidas" >
        <Menu.Item
          name='Bebidas'
          active={activeItem === 'Bebidas'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link href="/about" >
        <Menu.Item
          name='Sobre Nosotros'
          active={activeItem === 'Sobre Nosotros'}
          onClick={this.handleItemClick}
        />
        </Link>
      </Menu>
        </div>
    )
  }
}
