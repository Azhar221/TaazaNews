
import React from 'react'
import { Routes, Route } from "react-router-dom";
import News from './News';
import About from './About';
import Contact from './Contact';


export default function Home() {
    return (
        <>
            <Routes>
                <Route path="/" element={<News key="allNews" category="general" />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/category/business" element={<News key="business" category="business" />} />
                <Route path="/category/entertainment" element={<News key="entertainment" category="entertainment" />} />
                <Route path="/category/general" element={<News key="general" category="general" />} />
                <Route path="/category/health" element={<News key="health" category="health" />} />
                <Route path="/category/science" element={<News key="science" category="science" />} />
                <Route path="/category/sports" element={<News key="sports" category="sports" />} />
                <Route path="/category/technology" element={<News key="technology" category="technology" />} />
            </Routes>


        </>
    )
}
