import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function jugosCombinadosPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Maracuyá-Coco' />
              <Card.Content extra>
              <Icon name='dollar' />7.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Piña-Coco' />
              <Card.Content extra>
              <Icon name='dollar' />7.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Mandarina-Fresa' />
              <Card.Content description='Incluye Hierbabuena' />
              <Card.Content extra>
              <Icon name='dollar' />7.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Maracuyá-Piña' />
              <Card.Content description='Incluye Hierbabuena' />
              <Card.Content extra>
              <Icon name='dollar' />7.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default jugosCombinadosPage;