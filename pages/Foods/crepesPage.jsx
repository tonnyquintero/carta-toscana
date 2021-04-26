import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function crepesPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Napolitano Gratinado' />
              <Card.Content description='Variedad de Vegetales Salteados En Salsa Napolitana' />
              <Card.Content extra>
              <Icon name='dollar' />17.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Bolognesa Gratinado' />
              <Card.Content description='Salsa Napolitana con Carne al Mejor Estilo Italiano' />
              <Card.Content extra>
              <Icon name='dollar' />18.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Pollo y Champiñones' />
              <Card.Content description='Cubos de Pollo y Champiñones Bañados en Salsa Bechamel' />
              <Card.Content extra>
              <Icon name='dollar' />19.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Cañon y Tocineta' />
              <Card.Content description='Cubos de Cañon y Tocineta Bañados en Salsa Bechamel' />
              <Card.Content extra>
              <Icon name='dollar' />20.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default crepesPage;