import React, { useEffect, useState } from "react";
import { ProfileData } from "../../components/ProfileData";
import { RandomCalendar } from "../../components/RandomCalendar";
import RepoCard from "../../components/RepoCard";
import { useParams } from "react-router-dom";

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
import { APIRepos, APIUser } from "../../@types";

interface Data {
  user?: APIUser;
  repos?: APIRepos[];
  error?: string;
}

export const Profile: React.FC = () => {
  const { username = "Hugovarellaa" } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (response) => {
      const [userResponse, reposResponse] = response;

      if (userResponse.status === 404) {
        setData({ error: "User not found!" });
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const shuffleRepos = repos.sort(() => 0.5 - Math.random());
      const sixRepo = shuffleRepos.slice(0, 6); //6 repositorio randonico 

      setData({
        user,
        repos: sixRepo,
      });
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data.repos) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositorios</span>
      <span className="number">{data.user.public_repos}</span>
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
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.compony}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
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
              {data.repos.map((repo) => (
                <RepoCard
                  key={repo.name}
                  username={repo.owner.login}
                  reponame={repo.name}
                  description={repo.description}
                  language={repo.language}
                  stars={repo.stargazers_count}
                  forks={repo.forks}
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
