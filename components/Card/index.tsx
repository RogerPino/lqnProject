import React from "react";

import { Card, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import style from "../Card/card.module.scss";
const { Meta } = Card;

export type TCardCharacter = {
  onClick: (id: string) => void;
  data: {
    id: string;
    name: string;
    birthYear: string;
    gender: string;
    height: number;
    mass: number;
    hairColor: string;
    skinColor: string;
    homeworld: {
      name: string;
    };
    filmConnection: {
      totalCount: number;
      films: {
        title: string;
        director: string;
        planetConnection: {
          planets: {
            name: string;
          }[];
        };
      }[];
    };
  };
};

const CardCharacter = ({
  onClick,
  data: {
    id,
    name,

    filmConnection,
  },
}: TCardCharacter) => {
  return (
    <>
      <Card className={style.container} hoverable>
        <Meta
          title={name}
          description={"Total Movies " + filmConnection?.totalCount}
        />
        <Button
          onClick={() => {
            onClick(id);
          }}
          className={style.btnGrad}
          icon={<SearchOutlined />}
        >
          See details
        </Button>
      </Card>
    </>
  );
};
export default CardCharacter;
