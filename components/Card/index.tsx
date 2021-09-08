import React, { useState } from "react";
import { Card, Typography, Button, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import style from "./card.module.scss";
const { Meta } = Card;
export type TCardCharacter = {
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

const CardCharacter = ({
  name,
  birthYear,
  gender,
  height,
  mass,
  hairColor,
  skinColor,
  homeworld,
  filmConnection,
}: TCardCharacter) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card className={style.container} hoverable>
        <Meta
          title={name}
          description={"Total Movies " + filmConnection?.totalCount}
        />
        <Button
          onClick={() => showModal()}
          className={style.btnGrad}
          icon={<SearchOutlined />}
        >
          See details
        </Button>
      </Card>

      <Modal
        style={{}}
        className={style.modal}
        title={name}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={style.modalInfoContainer}>
          <div className={style.modalInfoContainerLeft}>
            <p>Total Movies: {filmConnection?.totalCount}</p>
            <p>Birth Year: {birthYear}</p>
            <p>Home World: {homeworld?.name}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair Color: {hairColor}</p>
            <p>Skin Color: {skinColor}</p>
          </div>
          <div className={style.modalInfoContainerLeft}>
            <p>Movies: {filmConnection?.films?.title}</p>
            <p>Planets: {filmConnection?.films?.planetConnection}</p>
            <p>Director: {filmConnection?.films?.director}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CardCharacter;
