import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function entradasPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Montaditos Toscana x6' />
              <Card.Content description='Pan tostado con tomate, Queso Mozarella y Albahaca' />
              <Card.Content extra>
              <Icon name='dollar' />13.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Crispadillas x8' />
              <Card.Content description='Crujientes Tortillas de Pollo en Salsa Agridulce' />
              <Card.Content extra>
              <Icon name='dollar' />14.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Tabla de Ibéricos' />
              <Card.Content description='Tabla con Jamón Serrano, Salami y Pepperoni' />
              <Card.Content extra>
              <Icon name='dollar' />20.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Empanadas x8' />
              <Card.Content description='Elige entre Carne, Queso o Combinadas' />
              <Card.Content extra>
              <Icon name='dollar' />14.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Palitos de Queso x6' />
              <Card.Content description='Rellenos de Queso Mozarella y Salsa de Frutos Rojos' />
              <Card.Content extra>
              <Icon name='dollar' />13.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Aros de Cebolla x10' />
              <Card.Content description='Acompañados con Mayonesa de Albahaca' />
              <Card.Content extra>
              <Icon name='dollar' />14.500
            </Card.Content>
          </Card>
        </Card.Group>
      


      </div>

      
    )
  }
  
  export default entradasPage;