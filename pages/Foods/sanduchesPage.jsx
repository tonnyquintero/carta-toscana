import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function sanduchesPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Cañon Teriyaki' />
              <Card.Content description='Julianas de Cañon Bañadas en Salsa Teriyaki Acompañado de Papas Francesas' />
              <Card.Content extra>
              <Icon name='dollar' />21.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Solomito y Champiñones' />
              <Card.Content description='Solomito en Salsa de Mostaza con Tocineta, Champiñones, Queso Mozzarella' />
              <Card.Content extra>
              <Icon name='dollar' />22.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Italiano' />
              <Card.Content description='Salami, Pepperoni, Parmesano, Tomate, Lechuga y Pesto de Tomates Secos' />
              <Card.Content extra>
              <Icon name='dollar' />18.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Caprese' />
              <Card.Content description='Tomate, Queso Mozzarella y Albahaca en Salsa Pesto' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Pollo Exotico' />
              <Card.Content description='Salsa Picante de la Casa, Champiñones, Mozzarella, Cebolla Grille y Tocineta' />
              <Card.Content extra>
              <Icon name='dollar' />21.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default sanduchesPage;