import React from 'react';
import Navbar2 from '../components/Navbar/Navbar2'
import { Button, Card, Segment } from 'semantic-ui-react'
import Image from 'next/image'
import Footer from '../components/Footer/Footer';


const About = () => {
    return (
        <div>

            <Navbar2 />

        <div className='cocaCola'>
            <Card >
            <Card.Content  header='Siguenos!' />
            </Card>
        </div>
        

        <div className='yoyo'>
            <Button circular color='black' icon='facebook' href="https://www.facebook.com/Toscana-Restaurante-Cafe-Bar-558339904687379/" />
            <Button circular color='black' icon='whatsapp' href="https://api.whatsapp.com/send?phone=573041439633" />
            <Button circular color='black' icon='instagram' href="https://www.instagram.com/toscanarestaurantecafebar/" />
            
        </div>

        <div className='about'>
            <Image src="/images/about.jpg" alt="logo" width={300} height={300} />
        </div>

        <div className='segmento_about'>
            <Segment>Somos un equipo enfocado en brindarte la mejor experiencia, 
                y nuestras herramientas para lograrlo son: Nuestra locación, la calidad de nuestros
                productos y combinarlo con el mejor servicio. Un placer para nosotros atenderte.
            </Segment>
        </div>

        <div className='footer'>
            <Footer />
        </div>
            
        </div>
    );
};

export default About;