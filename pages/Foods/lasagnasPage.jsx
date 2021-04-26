import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function lasagnasPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Carne' />
              <Card.Content extra>
              <Icon name='dollar' />19.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Pollo' />
              <Card.Content extra>
              <Icon name='dollar' />19.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Pollo y Champiñones' />
              <Card.Content extra>
              <Icon name='dollar' />20.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Mixta' />
              <Card.Content description='Cubos de Pollo y Res Bañados en Salsa Bechamel' />
              <Card.Content extra>
              <Icon name='dollar' />21.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default lasagnasPage;