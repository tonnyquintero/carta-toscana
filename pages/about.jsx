import React from 'react';
import Navbar2 from '../components/Navbar/Navbar2'
import { Button, Card } from 'semantic-ui-react'
import Image from 'next/image'

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
            <Button circular color='black' icon='facebook' />
            <Button circular color='black' icon='whatsapp' />
            <Button circular color='black' icon='instagram' />
        </div>

        <div>
            <Image className='logoPrincipal' src="/images/about.jpg" alt="logo" width={300} height={100} />
        </div>
        </div>
    );
};

export default About;