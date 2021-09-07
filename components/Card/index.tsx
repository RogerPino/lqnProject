import React from "react";
import { Card, Typography, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import style from "./card.module.scss";

const { Title, Text } = Typography;
const { Meta } = Card;

export type TCardCharacter = {
  name: string;
};

const CardCharacter = ({ name }: TCardCharacter) => {
  return (
    <Card className={style.container} hoverable>
      <Meta title={name} />
      <Button className={style.btn} type="primary" icon={<SearchOutlined />}>
        See details
      </Button>
    </Card>
  );
};

export default CardCharacter;
