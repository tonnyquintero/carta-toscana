import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function gaseosasPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Coca-Cola' />
              <Card.Content description='Elige entre Tradicional o Zero' />
              <Card.Content extra>
              <Icon name='dollar' />4.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Manzana' />
              <Card.Content extra>
              <Icon name='dollar' />4.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Colombiana' />
              <Card.Content extra>
              <Icon name='dollar' />4.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Soda' />
              <Card.Content extra>
              <Icon name='dollar' />4.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Canada Dry' />
              <Card.Content extra>
              <Icon name='dollar' />4.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Agua Mineral' />
              <Card.Content extra>
              <Icon name='dollar' />3.800
            </Card.Content>
          </Card>
        </Card.Group>
      


      </div>

      
    )
  }
  
  export default gaseosasPage;