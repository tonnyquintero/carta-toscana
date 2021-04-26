import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function especialesPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Suprema de Pollo en Salsa de Campiñones ' />
              <Card.Content extra>
              <Icon name='dollar' />25.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Solomito en Salsa 3 Pimientas y Champiñones' />
              <Card.Content extra>
              <Icon name='dollar' />29.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Medallones de Cerdo Toscana' />
              <Card.Content extra>
              <Icon name='dollar' />28.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default especialesPage;