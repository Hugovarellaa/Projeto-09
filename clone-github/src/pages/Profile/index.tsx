import React from "react";
import { ProfileData } from "../../components/ProfileData";
import { RandomCalendar } from "../../components/RandomCalendar";
import RepoCard from "../../components/RepoCard";

import {
  Container,
  LeftSide,
  RightSide,
  Main,
  Repos,
  CalendarHeading,
  Tab,
  RepoIcon,
} from "./styles";

export const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositorios</span>
      <span className="number">26</span>
    </div>
  );
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <div className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={"HugoVarella"}
            name={"Hugo Alves Varella"}
            avatarUrl={"https://github.com/Hugovarellaa.png"}
            followers={887}
            following={3}
            company={"Casa"}
            location={"Brasilia-DF, Brasil"}
            email={"hugovarellaa@gmail.com"}
            blog={undefined}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <RepoCard
                  key={item}
                  username={"Hugovarellaa"}
                  reponame={"my-content"}
                  description={"Contains all of my lessons code"}
                  language={item % 3 === 0 ? "Javascript" : "Typescript"}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};
