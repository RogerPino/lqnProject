import React, { Fragment } from "react";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../features/query";

import { List } from "antd";
import style from "./charactersList.module.scss";
import CardCharacter from "../../components/Card";

export type TCharacterInfo = {
  name: string;
};
const CharactersList = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  console.log(data?.allPeople.people);
  return (
    <List
      loading={loading}
      className={style.container}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 6,
        column: 8,
      }}
      dataSource={data?.allPeople.people}
      renderItem={(item: TCharacterInfo) => (
        <List.Item>
          <CardCharacter name={item.name}></CardCharacter>
        </List.Item>
      )}
    />
  );
};

export default CharactersList;
