import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function cervezasPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Aguila' />
              <Card.Content description='Elige entre Tradicional, Ligth o Cero' />
              <Card.Content extra>
              <Icon name='dollar' />5.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Club Colombia' />
              <Card.Content description='Disponemos de Dorada, Roja y Negra' />
              <Card.Content extra>
              <Icon name='dollar' />5.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Corona' />
              <Card.Content description='Ceveza Importada Extra Grande' />
              <Card.Content extra>
              <Icon name='dollar' />9.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Peroni' />
              <Card.Content description='Ceveza Importada de Italia' />
              <Card.Content extra>
              <Icon name='dollar' />9.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Vaso Michelado' />
              <Card.Content description='Limón Natural y sal' />
              <Card.Content extra>
              <Icon name='dollar' />1.500
            </Card.Content>
          </Card>
        </Card.Group>
      


      </div>

      
    )
  }
  
  export default cervezasPage;