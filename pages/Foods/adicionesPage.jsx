import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function adicionesPage() {

    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Papas a la Francesa' />
              <Card.Content extra>
              <Icon name='dollar' />5.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Carne de Hamburguesa' />
              <Card.Content extra>
              <Icon name='dollar' />5.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Jamón' />
              <Card.Content extra>
              <Icon name='dollar' />3.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Champiñones' />
              <Card.Content extra>
              <Icon name='dollar' />4.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Mozzarella' />
              <Card.Content extra>
              <Icon name='dollar' />3.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Parmesano' />
              <Card.Content extra>
              <Icon name='dollar' />3.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Salsa' />
              <Card.Content extra>
              <Icon name='dollar' />1.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Ensalada' />
              <Card.Content extra>
              <Icon name='dollar' />2.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Pan' />
              <Card.Content extra>
              <Icon name='dollar' />1.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Tocineta' />
              <Card.Content extra>
              <Icon name='dollar' />4.500
            </Card.Content>
          </Card>

        </Card.Group>
      


      </div>

      
    )
  }
  
  export default adicionesPage;