import React from 'react'
import { Container } from '@mui/material'
import Navbar from '../Components/Home/Navbar/navbar'
import Landing from '../Components/Home/Landing/landing'
import Intro from '../Components/Home/Intro/intro'
import Event from '../Components/Home/Event/event'
import Gallery from '../Components/Home/Gallery/gallery'
import Timeline from '../Components/Home/Timeline/Timeline'
import Contact from '../Components/Home/Contact/contact'
import Footer from '../Components/Home/Footer/footer'
import Thaipongal from '../../src/Pages/events/Thaipongal'

function Home() {
    return (
        <>
            <Landing />
            <Intro />
            <Event />
            <Gallery />
            <Timeline />
            <Contact />
        </>)
}
export default Home