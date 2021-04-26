import Link from 'next/link';
import { Card, Icon, Image } from 'semantic-ui-react'
import Navbar2 from '../../components/Navbar/Navbar2'




const listaComidas = () => {
    return (
        <div>
        <Navbar2 />
        <div className='logoContainer'>
            <Image className='logoPrincipal' src="/images/logon.jpg" alt="logo" width={300} height={100} />
        </div>
        <nav className='carrouselDeComidas'>
             <Card.Group itemsPerRow={2} >
            <Link href="/Foods/entradasPage" >
           
                <Card>
                    <Image src='/images/empanadas.jpeg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Entradas</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                            Para un buen comienzo.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            8 Productos
                        </div>
                    </Card.Content>
                </Card>
            </Link>
            <Link href="/Foods/combinadosPage" >
            <Card>
                    <Image src='/images/combinadoCañon.jpeg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Combinados</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                            Compuestos por Carne, Pasta y Ensalada.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            3 Productos
                        </div>
                    </Card.Content>
            </Card>
            </Link>
            <Link href="/Foods/especialesPage" >
            <Card>
                    <Image src='/images/lasagna.jpg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Especiales de la Casa</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                        Acompañados por Papas a la Francesa y Ensalada Cesar.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            3 Productos
                        </div>
                    </Card.Content>
            </Card>
            </Link>
            <Link href="/Foods/pastaPage" >
            <Card>
                    <Image src='/images/pastaSolomito.jpeg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Pastas</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                          Tipo de Pasta Corta(Fusilli) o Larga (Spaghetti) ó (Fetuccini).
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            10 Productos
                        </div>
                    </Card.Content>
                </Card>
            </Link>
            <Link href="/Foods/crepesPage" >
            <Card>
                    <Image src='/images/lasagna.jpg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Crepes</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                            Vienen Acompañados Con Ensalada Tipo Cesar.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            4 Productos
                        </div>
                    </Card.Content>
                </Card>
            </Link>
            <Link href="/Foods/lasagnasPage" >
            <Card>
                    <Image src='/images/lasagna.jpg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Lasagnas</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                          Gratinadas Con Mozzarella y Parmesano.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            4 Productos
                        </div>
                    </Card.Content>
                </Card>
            </Link>
            <Link href="/Foods/ensaladasPage" >
            <Card>
                    <Image src='/images/ensaladaPrimaveral.jpeg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Ensaladas</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                            Con Deliciosa Variedad de Lechugas.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            3 Productos
                        </div>
                    </Card.Content>
                </Card>
            </Link>
            <Link href="/Foods/sanduchesPage" >
            <Card>
                    <Image src='/images/sandSolomito.jpeg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Sanduches</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                            Acompañados con Papas a la Francesa.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            5 Productos
                        </div>
                    </Card.Content>
                </Card>
            </Link>
            <Link href="/Foods/gratinadosPage" >
            <Card>
                    <Image src='/images/lasagna.jpg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Gratinados</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                          Vienen Acompañados Con Ensalada Tipo Cesar.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            4 Productos
                        </div>
                    </Card.Content>
                </Card>
            </Link>
            <Link href="/Foods/deliciasToscanaPage" >
            <Card>
                    <Image src='/images/lasagna.jpg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Delicias Toscana</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                            Platos Recomendados Por El Cheff.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            2 Productos
                        </div>
                    </Card.Content>
                </Card>
            </Link>
            <Link href="/Foods/hamburguesasPage" >
            <Card>
                    <Image src='/images/hVegetariana.jpeg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Hamburguesas</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                          Acompañadas con Papas a la Francesa o Tipo Criolla.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            6 Productos
                        </div>
                    </Card.Content>
                </Card>
            </Link>
            <Link href="/Foods/postresPage" >
            <Card>
                    <Image src='/images/torta.jpeg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Postres</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                            Escoge Entre Helado de Vainilla o Chocolate.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            4 Productos
                        </div>
                    </Card.Content>
                </Card>
            </Link>
            <Link href="/Foods/menuInfantilPage" >
            <Card>
                    <Image src='/images/lasagna.jpg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Menú Infantil</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                          Para Los Pequeños de la Casa.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            2 Productos
                        </div>
                    </Card.Content>
                </Card>
            </Link>
            <Link href="/Foods/adicionesPage" >
            <Card>
                    <Image src='/images/lasagna.jpg' size='tiny' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Adiciones</Card.Header>
                        <Card.Meta>
                            <span className='date'>Comidas</span>
                        </Card.Meta>
                        <Card.Description>
                            Agregale lo que Gustes.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Icon name='food' />
                            11 Productos
                        </div>
                    </Card.Content>
                </Card>
            </Link>
            </Card.Group>
        </nav>
        </div>
    );
}


export default listaComidas;