import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function sangriaPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Jarra' />
              <Card.Content description='Contiene Vino Tinto, Variedad de Componentes y Frutillas' />
              <Card.Content extra>
              <Icon name='dollar' />50.000
            </Card.Content>
          </Card>
          <Card>
            <Card.Content header='Media Jarra' />
              <Card.Content extra>
              <Icon name='dollar' />27.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Copa' />
              <Card.Content description='Incluye Frutilla' />
              <Card.Content extra>
              <Icon name='dollar' />10.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default sangriaPage;