import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function coctelesPage() {


    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Margarita Clásico' />
              <Card.Content description='Tequila Jose Cuervo, Triple Sec y limón' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Daiquirí de Fresa' />
              <Card.Content description='Ron Bacardi, Fresa, limón y Azucar' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Caipiroska' />
              <Card.Content description='Elige Entre Limón o Frutos Rojos' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Tequila Sun Rise' />
              <Card.Content description='Zumo de Naranja, Tequila y Granadina' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Bellagio' />
              <Card.Content description='Ginebra y Gran Variedad de Componentes' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Piña Colada' />
              <Card.Content description='Ron Medellin, Piña y Helado de Vainilla' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Gin and Tonic' />
              <Card.Content description='Ginebra, Agua Tónica y Limón' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Blue' />
              <Card.Content description='Vodka, Triple Sec y Almibar' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Amor Amor' />
              <Card.Content description='Vino Blanco, Fresas y Vodka' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Destornillador' />
              <Card.Content description='Vodka Absolute y Zumo de Naranja' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Orgasmo' />
              <Card.Content description='Café, Baileys, Amaretto y Brandy' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Alexander' />
              <Card.Content description='Brandy, Amaretto y Helado de Vainilla' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='COCTELES SIN LICOR' />
          </Card>

          <Card>
            <Card.Content header='Mónaco' />
              <Card.Content description='Cerveza sin Licor, 7up, Limón y Granadina' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Rainbow' />
              <Card.Content description='Zumo de Naraja, Triple Sec y 7up' />
              <Card.Content extra>
              <Icon name='dollar' />16.000
            </Card.Content>
          </Card>
        </Card.Group>
      


      </div>

      
    )
  }
  
  export default coctelesPage;