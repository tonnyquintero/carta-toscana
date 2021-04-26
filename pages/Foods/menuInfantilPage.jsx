import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function menuInfantilPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Nugguets de Pollo x7' />
              <Card.Content description='Croquetas de Pollo Acompañadas de Papas Francesas y Miel Mostaza' />
              <Card.Content extra>
              <Icon name='dollar' />15.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Salchipapas' />
              <Card.Content description='Papas a la Francesa y Salchichas' />
              <Card.Content extra>
              <Icon name='dollar' />15.000
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default menuInfantilPage;