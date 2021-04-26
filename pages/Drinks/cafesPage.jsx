import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function cafesPage() {

    return (

      <div>
        
        <Navbar2 />

       <Card.Group centered className='cafe_padding' >

          <Card className='centered'>
            <Card.Content header='CAFÉS CALIENTES' />
          </Card>

          <Card>
            <Card.Content header='Tinto' />
              <Card.Content extra>
              <Icon name='dollar' />1.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Capuccino' />
              <Card.Content description='Tradicional, Fabricado de Manera Artesanal' />
              <Card.Content extra>
              <Icon name='dollar' />6.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Italiano' />
              <Card.Content description='Preparado con Crema de Whisky' />
              <Card.Content extra>
              <Icon name='dollar' />7.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Caramelo' />
              <Card.Content description='Capuccino Tradicional con Crema de Café' />
              <Card.Content extra>
              <Icon name='dollar' />7.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Apricot' />
              <Card.Content description='Preparado con Amaretto' />
              <Card.Content extra>
              <Icon name='dollar' />7.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Aerezzo' />
              <Card.Content description='Tinto con Amaretto' />
              <Card.Content extra>
              <Icon name='dollar' />6.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Carajillo' />
              <Card.Content description='Tinto con Ron o Brandy' />
              <Card.Content extra>
              <Icon name='dollar' />6.500
            </Card.Content>
          </Card>
        </Card.Group>

  <Card.Group centered className='cafes_padding' >

          <Card className='centered'>
            <Card.Content header='CAFÉS FRÍOS' />
          </Card>

          <Card>
            <Card.Content header='Toscano sin Licor' />
              <Card.Content description='Cremoso, con Salsa de Chocolate y Canela' />
              <Card.Content extra>
              <Icon name='dollar' />7.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Toscano con Licor' />
              <Card.Content description='Elige entre Crema de Whisky, Amaretto o Crema de Café' />
              <Card.Content extra>
              <Icon name='dollar' />8.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Vainilla' />
              <Card.Content description='Con Helado, Caramelo y Canela' />
              <Card.Content extra>
              <Icon name='dollar' />8.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Vainilla con Licor' />
              <Card.Content description='Elige entre Crema de Whisky, Amaretto o Crema de Café' />
              <Card.Content extra>
              <Icon name='dollar' />9.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Opera' />
              <Card.Content description='Con Licor de Café y Chantilly' />
              <Card.Content extra>
              <Icon name='dollar' />9.500
            </Card.Content>
          </Card>
        </Card.Group>

      </div>

      
    )
  }
  
  export default cafesPage;