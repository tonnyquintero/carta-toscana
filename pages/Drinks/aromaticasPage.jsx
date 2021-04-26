import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function aromaticasPage() {

  const description1 = [
    'Compuesta principalmente por fresas y moras',
  ].join(' ')

  const description2 = [
    'Contiene almibar de uchuva y porciones de naranja',
  ].join(' ')

  const description3 = [
    'Con un toque adicional de limón',
  ].join(' ')

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Frutos Rojos' />
              <Card.Content description={description1} />
              <Card.Content extra>
              <Icon name='dollar' />4.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Frutos Amarillos' />
              <Card.Content description={description2} />
              <Card.Content extra>
              <Icon name='dollar' />4.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Genjibre y Hierba Buena' />
              <Card.Content description={description3} />
              <Card.Content extra>
              <Icon name='dollar' />4.000
            </Card.Content>
          </Card>
        </Card.Group>
      


      </div>

      
    )
  }
  
  export default aromaticasPage;