import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Profile } from "./pages/Profile";
import { Repo } from "./pages/Repo";
import { GlobalStyle } from "./styles/GlobalStyles";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>
      {/* <Footer /> */}
      <GlobalStyle />
    </BrowserRouter>
  );
}
