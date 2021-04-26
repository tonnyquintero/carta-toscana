import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function malteadasPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Chocolate' />
              <Card.Content extra>
              <Icon name='dollar' />9.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Vainilla' />
              <Card.Content extra>
              <Icon name='dollar' />9.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Café' />
              <Card.Content extra>
              <Icon name='dollar' />9.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default malteadasPage;