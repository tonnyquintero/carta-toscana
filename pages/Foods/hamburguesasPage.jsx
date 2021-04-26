import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function hamburguesasPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Toscana' />
              <Card.Content description='con Tocineta, Jamón, Queso Mozarella, Lechuga, Tomate y Papas Francesas' />
              <Card.Content extra>
              <Icon name='dollar' />20.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Artesanal' />
              <Card.Content description='con Carne Artesanal, Cebolla Caramelizada y Papa Caramelizada' />
              <Card.Content extra>
              <Icon name='dollar' />21.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Pollo Barbacoa' />
              <Card.Content description='Pollo Apanado, Tomate, Lechuga, Tocineta, Queso Parmesano y Cebolla Crispy' />
              <Card.Content extra>
              <Icon name='dollar' />21.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Roma' />
              <Card.Content description='Dip de Queso Crema, Aros de Cebolla Apanados, Pan de la Casa, Papas Francesas' />
              <Card.Content extra>
              <Icon name='dollar' />21.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Vegetariana' />
              <Card.Content description='Cuenta con una Deliciosa Carne Vegetariana a Base de Soya, Champiñones, Dip de Queso Crema' />
              <Card.Content extra>
              <Icon name='dollar' />21.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Verona' />
              <Card.Content description='Pan de la casa, Dip de Mostaza Dijon, Queso Amarillo Tipo Chedar, Carne Artesanal, Papas Francesas' />
              <Card.Content extra>
              <Icon name='dollar' />21.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default hamburguesasPage;