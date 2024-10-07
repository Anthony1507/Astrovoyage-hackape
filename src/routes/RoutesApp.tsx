import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OrreryPage } from "../pages/Orrery/OrreryPage";
import { HomePage } from "../pages/home/HomePage";
import { QuizApp } from "../pages/quizz/QuizzPage";
import MercuryInfo from "../pages/planets/mercury";
import EarthInfo from "../pages/planets/earth";
import JupiterInfo from "../pages/planets/jupiter";
import MarsInfo from "../pages/planets/mars";
import VenusInfo from "../pages/planets/venus";
import SaturnInfo from "../pages/planets/saturn";
import UranusInfo from "../pages/planets/uranus";
import NeptuneInfo from "../pages/planets/neptune";
import SunInfo from "../pages/sun/sun";
import Gallery from "../pages/gallery/images";
import DwarfPlanets from "../pages/dwarf planets/dwarfplanets";
import Asteroids from "../pages/asteroids/asteroids";




export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/orrery" element={<OrreryPage/>} />
        <Route path="/quizz" element={<QuizApp/>} />
        <Route path="/mercury" element={<MercuryInfo/>} />
        <Route path="/venus" element={<VenusInfo/>} />
        <Route path="/earth" element={<EarthInfo/>} />
        <Route path="/mars" element={<MarsInfo/>} />
        <Route path="/jupiter" element={<JupiterInfo/>} />
        <Route path="/saturn" element={<SaturnInfo/>} />
        <Route path="/uranus" element={<UranusInfo/>} />
        <Route path="/neptune" element={<NeptuneInfo/>} />
        <Route path="/sun" element={<SunInfo/>} />
        <Route path="/images" element={<Gallery/>} />
        <Route path="/dwarfplanets" element={<DwarfPlanets/>} />
        <Route path="/asteroids" element={<Asteroids/>} />

      </Routes>
    </BrowserRouter>
  );
};
