import React from 'react'
import Home from '../../components/home/Home'
import About from '../../components/about/About'
import Skills from '../../components/skills/Skills'
import Services from '../../components/services/Services'
import Qualification from '../../components/qualification/Qualification'
import Contact from '../../components/contact/Contact'
import Header from '../../components/header/Header'

const Landpage = () => {
    return (
        <>
            <main className='main'>
                <Header />
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Contact />
            </main>

        </>
    )
}

export default Landpage