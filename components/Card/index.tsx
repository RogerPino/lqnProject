import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Card, Button } from "antd";
import { TCharacterInfo } from "../../utils/models/character";
import style from "../Card/card.module.scss";

export type TCardCharacter = {
  onClick: (id: string) => void;
  data: TCharacterInfo;
};

/// Componente independiente donde se presenta cada personaje 

const { Meta } = Card;
const CardCharacter = ({
  onClick,
  data: { id, name, filmConnection },
}: TCardCharacter) => {
  return (
    <Card className={style.container} hoverable>
      <Meta
        title={name}
        description={`Total Movies :${filmConnection?.totalCount || 0}`}
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
  );
};
export default CardCharacter;
