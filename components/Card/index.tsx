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
import { SearchOutlined, GlobalOutlined } from "@ant-design/icons";
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
      key: "filmConnection.films.planetConnection.planets.name",
      render: (name: typeof filmConnection.films) => (
        <>
          {name.map((name) => {
            return (
              <Tag
                style={{ borderRadius: "8px" }}
                color="geekblue"
                icon={<GlobalOutlined />}
                className={style.tag}
              >
                {name}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  return (
    <>
      <Card className={style.container} hoverable>
        <Meta
          title={name}
          description={"Total Movies " + filmConnection?.totalCount}
        />
        {console.log(name)}
        <Button
          onClick={() => showModal()}
          className={style.btnGrad}
          icon={<SearchOutlined />}
        >
          See details
        </Button>
      </Card>

      <Modal
        className={style.modalInfoContainer}
        width={900}
        cancelButtonProps={{
          style: { display: "none" },
        }}
        okButtonProps={{
          style: {
            background: "#0306b9ce",
            borderWidth: "0px",
            borderRadius: "5px",
            width: "90px",
            fontSize: "15px",
            height: "35px",
          },
        }}
        title={<Title style={{ marginLeft: "20px" }}>{name}</Title>}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row
          style={{ marginLeft: "20px", marginRight: "20px", fontSize: "1.2em" }}
          gutter={[8, 0]}
        >
          <Col span={6}>
            <p>Total Movies: {filmConnection?.totalCount}</p>
            <p>Birth Year: {birthYear}</p>
          </Col>
          <Col span={8}>
            <p>Home World: {homeworld?.name}</p>
            <p>Gender: {gender}</p>
          </Col>
          <Col span={4}>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
          </Col>
          <Col span={6}>
            <p>Hair Color: {hairColor}</p>
            <p>Skin Color: {skinColor}</p>
          </Col>
        </Row>
        <Row>
          <Table
            className={style.table}
            columns={columns}
            pagination={false}
            dataSource={filmConnection?.films.map((film) => ({
              key: film.title,
              title: film.title,
              director: film.director,
              planets: film.planetConnection.planets.map(
                (planet) => planet.name
              ),
            }))}
          ></Table>
        </Row>
      </Modal>
    </>
  );
};

export default CardCharacter;
