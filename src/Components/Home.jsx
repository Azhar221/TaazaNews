
import React from 'react'
import { Routes, Route } from "react-router-dom";
import News from './News';
import About from './About';
import Contact from './Contact';


export default function Home() {
    return (
        <>
            <Routes>
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>


        </>
    )
}
