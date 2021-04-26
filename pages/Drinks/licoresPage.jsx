import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function licoresPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
         
          <Card>
            <Card.Content header='Antioqueño tapa Roja o Azul' />
              <Card.Content description='Botella' />
              <Card.Content extra>
              <Icon name='dollar' />75.000
            </Card.Content>
            <Card.Content description='Media' />
              <Card.Content extra>
              <Icon name='dollar' />40.000
            </Card.Content>
            <Card.Content description='Trago' />
              <Card.Content extra>
              <Icon name='dollar' />4.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Ron Medellin 3 años' />
              <Card.Content description='Botella' />
              <Card.Content extra>
              <Icon name='dollar' />80.000
            </Card.Content>
            <Card.Content description='Media' />
              <Card.Content extra>
              <Icon name='dollar' />45.000
            </Card.Content>
            <Card.Content description='Trago' />
              <Card.Content extra>
              <Icon name='dollar' />4.800
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Ron Viejo de Caldas' />
              <Card.Content description='Botella' />
              <Card.Content extra>
              <Icon name='dollar' />82.000
            </Card.Content>
            <Card.Content description='Media' />
              <Card.Content extra>
              <Icon name='dollar' />46.000
            </Card.Content>
            <Card.Content description='Botella' />
              <Card.Content extra>
              <Icon name='dollar' />5.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Tequila Jose Cuervo' />
              <Card.Content description='Botella' />
              <Card.Content extra>
              <Icon name='dollar' />120.000
            </Card.Content>
            <Card.Content description='Media' />
              <Card.Content extra>
              <Icon name='dollar' />85.000
            </Card.Content>
            <Card.Content description='Trago' />
              <Card.Content extra>
              <Icon name='dollar' />8.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Crema de Whisky Baileys' />
              <Card.Content description='Botella' />
              <Card.Content extra>
              <Icon name='dollar' />110.900
            </Card.Content>
            <Card.Content description='Media' />
              <Card.Content extra>
              <Icon name='dollar' />70.000
            </Card.Content>
            <Card.Content description='Trago' />
              <Card.Content extra>
              <Icon name='dollar' />7.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Whisky Buchanan´s 12 Años' />
              <Card.Content description='Botella' />
              <Card.Content extra>
              <Icon name='dollar' />160.000
            </Card.Content>
            <Card.Content description='Media' />
              <Card.Content extra>
              <Icon name='dollar' />110.000
            </Card.Content>
            <Card.Content description='Trago' />
              <Card.Content extra>
              <Icon name='dollar' />9.900
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Whisky Old Parr 12 años' />
              <Card.Content description='Botella' />
              <Card.Content extra>
              <Icon name='dollar' />160.000
            </Card.Content>
            <Card.Content description='Media' />
              <Card.Content extra>
              <Icon name='dollar' />120.000
            </Card.Content>
            <Card.Content description='Trago' />
              <Card.Content extra>
              <Icon name='dollar' />9.900
            </Card.Content>
          </Card>
        </Card.Group>
      


      </div>

      
    )
  }
  
  export default licoresPage;