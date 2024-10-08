import React from "react";
import { Routes, Route } from "react-router-dom";
import News from "./News";
import About from "./About";
import Contact from "./Contact";

export default function Home(props) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <News apiKey={props.apiKey} key="allNews" category="general" />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/category/business"
          element={
            <News apiKey={props.apiKey} key="business" category="business" />
          }
        />
        <Route
          path="/category/entertainment"
          element={
            <News
              apiKey={props.apiKey}
              key="entertainment"
              category="entertainment"
            />
          }
        />
        <Route
          path="/category/general"
          element={
            <News apiKey={props.apiKey} key="general" category="general" />
          }
        />
        <Route
          path="/category/health"
          element={
            <News apiKey={props.apiKey} key="health" category="health" />
          }
        />
        <Route
          path="/category/science"
          element={
            <News apiKey={props.apiKey} key="science" category="science" />
          }
        />
        <Route
          path="/category/sports"
          element={
            <News apiKey={props.apiKey} key="sports" category="sports" />
          }
        />
        <Route
          path="/category/technology"
          element={
            <News
              apiKey={props.apiKey}
              key="technology"
              category="technology"
            />
          }
        />
      </Routes>
    </>
  );
}
