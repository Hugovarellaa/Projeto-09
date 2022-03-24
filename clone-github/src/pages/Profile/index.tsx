import React from "react";
import { ProfileData } from "../../components/ProfileData";

import { Container, LeftSide, RightSide, Main } from "./styles";

export const Profile: React.FC = () => {
  return (
    <Container>
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
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};
