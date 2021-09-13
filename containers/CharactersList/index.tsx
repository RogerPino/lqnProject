import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../features/query";
import { LoadingOutlined } from "@ant-design/icons";

import { List, Spin } from "antd";
import style from "./charactersList.module.scss";
import CardCharacter from "../../components/Card";

import CharacterDetail from "../CharacterDetail";

import { TCharacterInfo } from "../../utils/models/character";

const ROUTE_CHARACTER_ID = "/";
const CharactersList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "#94161C" }} spin />
  );

  const tableLoading = {
    spinning: loading,
    indicator: <Spin indicator={antIcon} />,
  };

  useEffect(() => {
    if (id && !isVisible) {
      setIsVisible(true);
    }
  }, [id]);

  return (
    <>
      <div className={style.logoContainer}>
        <div className={style.logo}></div>
      </div>
      <h1 className={style.titleList}>List of Characters</h1>
      <List
        loading={tableLoading}
        className={style.container}
        grid={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 5,
        }}
        dataSource={data?.allPeople.people}
        renderItem={(item: TCharacterInfo) => (
          <List.Item>
            <CardCharacter
              onClick={(id: string) => {
                router.push({
                  pathname: ROUTE_CHARACTER_ID,
                  query: { id: id },
                });
              }}
              data={item}
            ></CardCharacter>
          </List.Item>
        )}
      />
      {id && (
        <CharacterDetail
          id={id}
          visible={isVisible}
          onCancel={() => {
            router.push(ROUTE_CHARACTER_ID);
          }}
        />
      )}
    </>
  );
};

export default CharactersList;
