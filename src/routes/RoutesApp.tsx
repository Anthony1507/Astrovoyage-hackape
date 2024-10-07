import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OrreryPage } from "../pages/Orrery/OrreryPage";
import { HomePage } from "../pages/home/HomePage";
import { QuizApp } from "../pages/quizz/QuizzPage";
import MercuryInfo from "../pages/planets/mercury";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/orrery" element={<OrreryPage/>} />
        <Route path="/quizz" element={<QuizApp/>} />
        <Route path="/mercury" element={<MercuryInfo/>} />

      </Routes>
    </BrowserRouter>
  );
};
