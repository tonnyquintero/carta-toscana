import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function sangriaPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Copa de Vino de la Casa' />
              <Card.Content extra>
              <Icon name='dollar' />9.000
            </Card.Content>
          </Card>
          <Card>
            <Card.Content header='Copa de Vino Caliente' />
            <Card.Content description='Vino Semidulce con Notas Afrutadas' />
              <Card.Content extra>
              <Icon name='dollar' />10.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Trago de Limoncello' />
              <Card.Content description='Licor Típico Italiano' />
              <Card.Content extra>
              <Icon name='dollar' />5.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Lambrusco' />
              <Card.Content description='Disponible en Tinto, Blanco y Rosé' />
              <Card.Content extra>
              <Icon name='dollar' />45.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Cabernet Sauvignon' />
              <Card.Content description='Vino Tinto Con Tonos Afrutados' />
              <Card.Content extra>
              <Icon name='dollar' />52.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Chardonnay' />
              <Card.Content description='Vino Blanco con Aromas y Toques Dulces' />
              <Card.Content extra>
              <Icon name='dollar' />55.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Bardolino' />
              <Card.Content description='Afrutado con notas de Frambuesa y Cereza' />
              <Card.Content extra>
              <Icon name='dollar' />51.000
            </Card.Content>
          </Card>
        </Card.Group>
      


      </div>

      
    )
  }
  
  export default sangriaPage;