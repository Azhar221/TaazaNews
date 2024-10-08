import React from "react";
import { Routes, Route } from "react-router-dom";
import News from "./News";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  const apiKey = process.env.API_KEY || "11d7ab2b5cc1418e922a7fa9f7795383";
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<News apiKey={apiKey} key="allNews" category="general" />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/category/business"
          element={<News apiKey={apiKey} key="business" category="business" />}
        />
        <Route
          path="/category/entertainment"
          element={
            <News
              apiKey={apiKey}
              key="entertainment"
              category="entertainment"
            />
          }
        />
        <Route
          path="/category/general"
          element={<News apiKey={apiKey} key="general" category="general" />}
        />
        <Route
          path="/category/health"
          element={<News apiKey={apiKey} key="health" category="health" />}
        />
        <Route
          path="/category/science"
          element={<News apiKey={apiKey} key="science" category="science" />}
        />
        <Route
          path="/category/sports"
          element={<News apiKey={apiKey} key="sports" category="sports" />}
        />
        <Route
          path="/category/technology"
          element={
            <News apiKey={apiKey} key="technology" category="technology" />
          }
        />
      </Routes>
    </>
  );
}
