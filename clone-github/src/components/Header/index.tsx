import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeName } from "../../styles/themes";

import { Container, GithubLogo, SearchForm } from "./styles";

interface HeaderProps {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

export const Header: React.FC<HeaderProps> = ({ setThemeName, themeName }) => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate(`/` + search.toLowerCase().trim());
  }

  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username or Repo..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};
