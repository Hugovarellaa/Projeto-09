import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  BreadCrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

export const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link className={"username"} to={"/Hugovarellaa"}>
          Hugo Varella 
          <span> / </span>
          <Link
            className={"reponame"}
            to={"/Hugovarellaa/clone-interface-github"}
          >
            repo-content
          </Link>
        </Link>
      </BreadCrumb>

      <p>contains all of my Youtube lessons code.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton
        href={"https://github.com/Hugovarellaa/clone-interface-github"}
      >
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};
