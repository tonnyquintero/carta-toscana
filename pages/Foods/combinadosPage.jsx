import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function combinadosPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Pollo Gratinado en Salsa Bechamel' />
              <Card.Content extra>
              <Icon name='dollar' />18.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Cañon Gratinado en Salsa Napolitana' />
              <Card.Content extra>
              <Icon name='dollar' />19.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Res con Salsa de la Casa' />
              <Card.Content extra>
              <Icon name='dollar' />20.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default combinadosPage;