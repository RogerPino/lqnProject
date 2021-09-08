import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../features/query";

import { Image, List } from "antd";
import style from "./charactersList.module.scss";
import CardCharacter from "../../components/Card";

export type TCharacterInfo = {
  name?: string;
  birthYear?: string;
  gender?: string;
  height?: number;
  mass?: number;
  hairColor?: string;
  skinColor?: string;
  homeworld?: {
    name: string;
  };
  filmConnection?: {
    totalCount?: number;
    films?: {
      title?: string;
      director?: string;
      planetConnection?: {
        planets?: {
          name?: string;
        };
      };
    };
  };
};

const CharactersList = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  return (
    <>
      <div className={style.logoContainer}>
        <div className={style.logo}></div>
      </div>
      <h1 className={style.titleList}>List of Characters</h1>
      <List
        loading={loading}
        className={style.container}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 6,
          column: 8,
        }}
        dataSource={data?.allPeople.people}
        renderItem={(item: TCharacterInfo) => (
          <List.Item>
            <CardCharacter
              name={item.name}
              birthYear={item.birthYear}
              {...item}
            ></CardCharacter>
          </List.Item>
        )}
      />
    </>
  );
};

export default CharactersList;
