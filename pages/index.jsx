import React from 'react';
import Image from 'next/image'
import Navbar2 from '../components/Navbar/Navbar2'
import FoodList from '../components/FoodList/FoodList'
import DrinkList from '../components/DrinkList/DrinkList'
import Footer from '../components/Footer/Footer'
import 'semantic-ui-css/semantic.min.css'


function HomePage() {
    return (
        <div>
            <Navbar2 />
            <div className='logoContainer'>
            <Image className='logoPrincipal' src="/images/logon.jpg" alt="logo" width={300} height={100} />
            </div>
            <FoodList />
            <DrinkList />
            <div className='footer'>
            <Footer className='ui vertical segment' />
            </div>
        </div>
    )
  }
  
  export default HomePage