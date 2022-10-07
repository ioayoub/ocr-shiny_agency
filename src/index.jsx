import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./pages/Error/NotFound";
import Header from "./components/Header";

import Freelances from "./pages/Freelances";
import Home from "./pages/Home";
import Results from "./pages/Results/index";
import Survey from "./pages/Survey/Survey";
import Profile from "./pages/Freelances/show";
import Footer from "./components/Footer";
import { SurveyProvider, TestProvider, ThemeProvider } from "./utils/Context";
import GlobalStyle from "./utils/style/GlobalStyle";
import Test from "./pages/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
      <SurveyProvider>
          <TestProvider>
          
            <GlobalStyle />
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="survey/:questionNumber" element={<Survey />} />
              <Route path="/results" element={<Results />} />
              <Route path="/freelances" end="true" element={<Freelances />} />
              <Route path="/freelance" element={<Profile />} />
              <Route path="*" element={<Error />} />
              <Route path="/test" element={<Test />} />
            </Routes>
            <Footer />
          </TestProvider>
        </SurveyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
