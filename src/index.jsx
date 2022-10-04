import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Error from "./pages/Error/NotFound";
import Header from "./components/Header";

import Freelances from "./pages/Freelances";
import Home from "./pages/Home";
import Results from "./pages/Results/Results";
import Survey from "./pages/Survey/Survey";
import Profile from "./pages/Freelances/show";
import Footer from "./components/Footer";
import { SurveyProvider, ThemeProvider } from "./utils/Context";
import GlobalStyle from "./utils/style/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/survey" element={<Survey />} /> */}
            <Route path="survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" end="true" element={<Freelances />} />
            <Route path="/freelance" element={<Profile />} />
            <Route path="*" element={<Error />} />
            </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
