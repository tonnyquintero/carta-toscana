import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function deliciasToscanaPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Papas Italianisimas' />
              <Card.Content description='Con Carne a la Bolognesa o Pollo Desmechado en Salsa Bechamel, Dip de Queso Crema y Aderezzo de Albahaca y Pico de Gallo' />
              <Card.Content extra>
              <Icon name='dollar' />20.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Crispy Chicken' />
              <Card.Content description='Julianas de Pollo, Dedos de Queso y Papas a la Francesa y 4 Tipos de Salsa' />
              <Card.Content extra>
              <Icon name='dollar' />26.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Tardeada' />
              <Card.Content description='4 Empanadas de Carne y 4 de Queso, 4 Aros de Cebolla, 4 Crispadillas, 4 Palitos de Queso, Papas a la Francesa y sus Respectivas Salsas' />
              <Card.Content extra>
              <Icon name='dollar' />32.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default deliciasToscanaPage;