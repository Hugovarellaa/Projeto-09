import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Haeader";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
      <>
      <Header/>
      <Dashboard/>
      <GlobalStyle />
    </>
  );
}