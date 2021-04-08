import React, { Component } from 'react'
import Link from 'next/link'
import { Menu } from 'semantic-ui-react'

export default class Navbar2 extends Component {
  state = { activeItem: 'Inicio' }

  

  render() {
    const { activeItem } = this.state

    return (
        <div className="ui huge top fixed menu">
      <Menu >

        <Link href="/" >
        <Menu.Item header
          name='Inicio'
          active={activeItem === 'Inicio'}
        />
        </Link>
        <Link href="/listaComidas/listaComidas" >
        <Menu.Item
          name='Platos'
          active={activeItem === 'Platos'}
        />
        </Link>
        <Link href="/listaBebidas/listaBebidas" >
        <Menu.Item
          name='Bebidas'
          active={activeItem === 'Bebidas'}
        />
        </Link>
        <Link href="/about" >
        <Menu.Item
          name='Sobre Nosotros'
          active={activeItem === 'Sobre Nosotros'}
        />
        </Link>
      </Menu>
        </div>
    )
  }
}
