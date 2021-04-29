import Link from 'next/link';
import { Card, Icon, Image } from 'semantic-ui-react'

const DrinkList = () => {
    return (
        <nav className='carrouselDeBebidas'>
            <Card.Group itemsPerRow={2} >

            <Link href="/Drinks/cafesPage" >
            <Card>
                <Image src='./images/opera.jpg' size='tiny' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Cafés</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                      Fríos y Calientes, Con Licor o Sin Licor.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='glass martini' />
                        12 Productos
                    </div>
                </Card.Content>
            </Card>
            </Link>

            <Link href="/Drinks/bebidasPage" >
            <Card>
                <Image src='./images/sodasSaborisadas.jpeg' size='tiny' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Bebidas</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                      La Sección mas Refrescante.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='glass martini' />
                        10 Productos
                    </div>
                </Card.Content>
            </Card>
            </Link>



            <Link href="/Drinks/cervezasPage" >
            <Card>
                <Image src='./images/peroni.jpg' size='tiny' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Cervezas</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                      Contamos con variedad en nacionales e importadas.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='glass martini' />
                        8 Productos
                    </div>
                </Card.Content>
            </Card>
            </Link>
            <Link href="/Drinks/gaseosasPage" >
            <Card>
                <Image src='./images/cocaCola.jpg' size='tiny' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Gaseosas</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Productos Coca-Cola y Postobon.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='glass martini' />
                        7 Productos
                    </div>
                </Card.Content>
            </Card>
            </Link>
           
            <Link href="/Drinks/aromaticasPage" >
            <Card>
                <Image src='./images/aromatica.jpg' size='tiny' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Aromaticas</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Se Componen de Productos Naturales.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='glass martini' />
                        3 Productos
                    </div>
                </Card.Content>
            </Card>
            </Link>
            <Link href="/Drinks/jugosCombinadosPage" >
            <Card>
                <Image src='./images/sodasSaborisadas.jpeg' size='tiny' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Jugos Combinados</Card.Header>
                    <Card.Meta>
                        <span className='date'>bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                      Deliciosa Combinación de Sabores.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='glass martini' />
                        4 Productos
                    </div>
                </Card.Content>
            </Card>
            </Link>
            <Link href="/Drinks/malteadasPage" >
            <Card>
                <Image src='./images/opera.jpg' size='tiny' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Malteadas</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Una Cremosa Variedad Para Ti.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='glass martini' />
                        3 Productos
                    </div>
                </Card.Content>
            </Card>
            </Link>
            
            <Link href="/Drinks/licoresPage" >
            <Card>
                <Image src='./images/oldParr.jpg' size='tiny' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Licores</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Variedad en Licores Nacionales e Importados.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='glass martini' />
                        10 Productos
                    </div>
                </Card.Content>
            </Card>
            </Link>
            <Link href="/Drinks/vinosPage" >
            <Card>
                <Image src='./images/bardolino.jpg' size='tiny' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Vinos</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                      Desde Italia hasta tu Mesa.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='glass martini' />
                        6 Productos
                    </div>
                </Card.Content>
            </Card>
            </Link>
            <Link href="/Drinks/sangriaPage" >
            <Card>
                <Image src='./images/bardolino.jpg' size='tiny' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Sangria de la casa</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Dale un Toque de Elegancia a tu Día.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='glass martini' />
                        4 Productos
                    </div>
                </Card.Content>
            </Card>
            </Link>
            <Link href="/Drinks/coctelesPage" >
            <Card>
                <Image src='./images/ginTonic1.jpeg' size='tiny' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Cócteles</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                      Para todos los Gustos.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Icon name='glass martini' />
                        16 Productos
                    </div>
                </Card.Content>
            </Card>
            </Link>
            </Card.Group>
        </nav>
    );
};

export default DrinkList;

