import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Modal,
  Table,
  Tag,
  Space,
  Col,
  Row,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import style from "./card.module.scss";
const { Meta } = Card;
const { Title } = Typography;

export type TCardCharacter = {
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
  console.log(filmConnection);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "filmConnection.films.title",
    },
    {
      title: "Director",
      dataIndex: "director",
      key: "filmConnection.films.director",
    },
    {
      title: "Planets",
      dataIndex: "planets",
      key: "filmConnection.films.planetConnection.planet.name",
    },
  ];
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
        width={600}
        className={style.antModalContent}
        title={<Title>{name}</Title>}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row gutter={[8, 0]}>
          <Col span={16}>
            <p>Total Movies: {filmConnection?.totalCount}</p>
            <p>Birth Year: {birthYear}</p>
            <p>Home World: {homeworld?.name}</p>
            <p>Gender: {gender}</p>
          </Col>
          <Col span={8}>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair Color: {hairColor}</p>
            <p>Skin Color: {skinColor}</p>
          </Col>
        </Row>
        <Row>
          <Table
            columns={columns}
            dataSource={filmConnection?.films.map((film) => ({
              key: film.title,
              title: film.title,
              director: film.director,
              planets: film.planetConnection.planets
                .map((planet) => planet.name)
                .join(", "),
            }))}
          ></Table>
        </Row>
      </Modal>
    </>
  );
};

export default CardCharacter;
