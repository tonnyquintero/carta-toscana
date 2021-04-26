import React from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import { Card, Icon } from 'semantic-ui-react'


function bebidasPage() {


    return (

      <div>
        <Navbar2 />

       <Card.Group centered className='container_padding' >
          <Card>
            <Card.Content header='Jugo Natural en Agua' />
              <Card.Content description='Fresa, Mora, Mandarina, Mango, Uchuva y Maracuyá' />
              <Card.Content extra>
              <Icon name='dollar' />5.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Jugo Natural en Leche' />
              <Card.Content description='Fresa, Mora, Mandarina, Mango, Uchuva y Maracuyá' />
              <Card.Content extra>
              <Icon name='dollar' />6.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Limonada Natural' />
              <Card.Content description='Elaborada con Limón Tahiti' />
              <Card.Content extra>
              <Icon name='dollar' />5.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Limonada Yerbabuena o Albahaca' />
              <Card.Content description='Elige la que Gustes' />
              <Card.Content extra>
              <Icon name='dollar' />5.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Limonada Cerezada' />
              <Card.Content description='Cerezas Naturales' />
              <Card.Content extra>
              <Icon name='dollar' />5.500
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Limonada de Coco' />
              <Card.Content description='Elaborada con Leche Entera o Deslatosada' />
              <Card.Content extra>
              <Icon name='dollar' />6.900
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Jugo de Uchuva en Amaretto' />
              <Card.Content description='Combinación Recomendada' />
              <Card.Content extra>
              <Icon name='dollar' />6.900
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Milo' />
              <Card.Content description='Lo Puedes Ordenar Frío o Caliente' />
              <Card.Content extra>
              <Icon name='dollar' />5.000
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Sodas Saborizadas' />
              <Card.Content description='Frutos Rojos o Frutos Amarillos' />
              <Card.Content extra>
              <Icon name='dollar' />6.500
            </Card.Content>
          </Card>
        </Card.Group>
      


      </div>

      
    )
  }
  
  export default bebidasPage;