import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function gratinadosPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Jamón y Tocineta' />
              <Card.Content description='Bañado en Salsa Bechamel, Queso Mozarella y Parmesano' />
              <Card.Content extra>
              <Icon name='dollar' />19.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Pollo y Champiñones' />
              <Card.Content description='Julianas de Pollo Bañadas en Vino Blanco, Salsa Bechamel, Queso Mozarella y Parmesano' />
              <Card.Content extra>
              <Icon name='dollar' />20.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Pollo en Salsa Carbonara' />
              <Card.Content description='Julianas de Pollo Bañadas en Vino Blanco, Tocineta, Salsa Bechamel, Queso Mozarella y Parmesano' />
              <Card.Content extra>
              <Icon name='dollar' />20.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Cañon en Salsa de Champiñones' />
              <Card.Content description='Cubos de Cañon y Tocineta Bañados en Salsa Bechamel, Queso Mozarella y Parmesano' />
              <Card.Content extra>
              <Icon name='dollar' />21.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default gratinadosPage;