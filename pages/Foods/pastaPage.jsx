import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function pastaPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Napolitana' />
              <Card.Content description='Tradicional Salsa Italiana a Base de Tomate con Parmesano' />
              <Card.Content extra>
              <Icon name='dollar' />14.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Alfredo' />
              <Card.Content description='Salsa Blanca a Base de Bechael y Queso Parmesano' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Bolognesa' />
              <Card.Content description='Salsa Napolitana con Carne al Estilo Italiano' />
              <Card.Content extra>
              <Icon name='dollar' />18.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Carbonara' />
              <Card.Content description='Salsa a Base de Crema de Leche y Tocineta' />
              <Card.Content extra>
              <Icon name='dollar' />19.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Pollo y Champiñones' />
              <Card.Content description='Julianas de Pollo yChampiñones Bañadas en Vino Blanco y Salsa Bechamel' />
              <Card.Content extra>
              <Icon name='dollar' />19.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Di Colori con Pollo' />
              <Card.Content description='Vegetales bañados en Vino Blanco y Salsa Napolitana, Champiñones y Pollo' />
              <Card.Content extra>
              <Icon name='dollar' />19.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Di Colori' />
              <Card.Content description='Vegetales bañados en Vino Blanco y Salsa Napolitana, Champiñones y Parmesano' />
              <Card.Content extra>
              <Icon name='dollar' />17.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Pesto con Pollo' />
              <Card.Content description='Cubos de Pollo Bañados en Salsa Bechamel y Parmesano' />
              <Card.Content extra>
              <Icon name='dollar' />18.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Solomito y Champiñones' />
              <Card.Content description='Cubos de Solomito con Champiñones Salteados en salsa Blanca y Parmesano' />
              <Card.Content extra>
              <Icon name='dollar' />24.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default pastaPage;