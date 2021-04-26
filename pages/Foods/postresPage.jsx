import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function postresPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Copa de Helado' />
              <Card.Content description='Helado con Galletas Mini-Chip Bañado en Salsa Caramelo' />
              <Card.Content extra>
              <Icon name='dollar' />6.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Torta de Chocolate' />
              <Card.Content description='Esponjoso Centro de Arequipe y Corteza de Chocolate Acompañada con Helado' />
              <Card.Content extra>
              <Icon name='dollar' />8.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Cremoso de Baileys' />
              <Card.Content description='Helado de Vainilla y Crema de Whisky' />
              <Card.Content extra>
              <Icon name='dollar' />9.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Crepe Toscana' />
              <Card.Content description='Crepe de Arequipe con Helado con Crema Chantilly y Chocolate' />
              <Card.Content extra>
              <Icon name='dollar' />7.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default postresPage;