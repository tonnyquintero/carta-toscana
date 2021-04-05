import Link from 'next/link';
import { Card, Icon, Image } from 'semantic-ui-react'
import Navbar2 from '../../components/Navbar/Navbar2'

const listaBebidas = () => {
    return (
        <div>
            <Navbar2 />
            <nav className='carrouselDeBebidas'>
            <Card.Group itemsPerRow={3} >
            <Link href="/Drinks/cervezasPage" >
            <Card>
                <Image src='/images/vaso.jpg'  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Cervezas</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Compuestos por Carne, Pasta y Ensalada.
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
            <Link href="/Drinks/gaseosasPage" >
            <Card>
                <Image src='/images/vaso.jpg'  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Gaseosas</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Compuestos por Carne, Pasta y Ensalada.
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
            <Link href="/Drinks/bebidasPage" >
            <Card>
                <Image src='/images/vaso.jpg'  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Bebidas</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Compuestos por Carne, Pasta y Ensalada.
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
            <Link href="/Drinks/aromaticasPage" >
            <Card>
                <Image src='/images/vaso.jpg'  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Aromaticas</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Compuestos por Carne, Pasta y Ensalada.
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
                <Image src='/images/vaso.jpg'  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Cervezas</Card.Header>
                    <Card.Meta>
                        <span className='date'>Jugos Combinados</span>
                    </Card.Meta>
                    <Card.Description>
                        Compuestos por Carne, Pasta y Ensalada.
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
            <Link href="/Drinks/malteadasPage" >
            <Card>
                <Image src='/images/vaso.jpg'  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Malteadas</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Compuestos por Carne, Pasta y Ensalada.
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
            <Link href="/Drinks/cafesPage" >
            <Card>
                <Image src='/images/vaso.jpg'  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Cafés</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Compuestos por Carne, Pasta y Ensalada.
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
                <Image src='/images/vaso.jpg'  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Licores</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Compuestos por Carne, Pasta y Ensalada.
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
            <Link href="/Drinks/vinosPage" >
            <Card>
                <Image src='/images/vaso.jpg'  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Vinos</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Compuestos por Carne, Pasta y Ensalada.
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
            <Link href="/Drinks/sangriaPage" >
            <Card>
                <Image src='/images/vaso.jpg'  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Sangria de la casa</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Compuestos por Carne, Pasta y Ensalada.
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
            <Link href="/Drinks/coctelesPage" >
            <Card>
                <Image src='/images/vaso.jpg'  wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Cócteles</Card.Header>
                    <Card.Meta>
                        <span className='date'>Bebidas</span>
                    </Card.Meta>
                    <Card.Description>
                        Compuestos por Carne, Pasta y Ensalada.
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
            </Card.Group>
        </nav>
        </div>
    );
};

export default listaBebidas;

