import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CompetitionSection from "../components/Competitions";
import UserJourney from "../components/UserJourney";
import BotLeague from "../components/BotLeague";
import CategoriesSection from "../components/CategoriesSection";
import SportsSection from "../components/SportsSection";
import LeagueAdvantage from "../components/LeagueAdvantage";
import JoinEcosystem from "../components/JoinEcosystem";
import SponsorsSection from "../components/SponsorsSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CompetitionSection />
      <UserJourney />
      <BotLeague />
      <CategoriesSection />
      <SportsSection />
      <LeagueAdvantage />
      <JoinEcosystem />
      <SponsorsSection />
      <Footer />
    </>
  );
}

export default Home;
