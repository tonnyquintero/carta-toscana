import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function ensaladasPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Ensalada César' />
              <Card.Content description='Julianas de Pollo, Crotones de Pan con Nuestro Aderezo César' />
              <Card.Content extra>
              <Icon name='dollar' />18.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Pollo Primaveral' />
              <Card.Content description='Mix de Lechuga, Tomate, Maicito, Galletas de Parmesano y Coditos de Pasta en Salsa Pesto' />
              <Card.Content extra>
              <Icon name='dollar' />24.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Solomito Toscana' />
              <Card.Content description='Mix de Lechuga, Champiñones, Tomate, Cebolla Crispy, Solomito en Reduccion Teriyaki' />
              <Card.Content extra>
              <Icon name='dollar' />26.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default ensaladasPage;