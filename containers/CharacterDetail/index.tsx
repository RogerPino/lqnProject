import React, { useEffect, useState } from "react";
import { Typography, Modal, Row, Col, Tag, Table, Spin } from "antd";
const { Title } = Typography;
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_DETAIL } from "../../features/query";
import { LoadingOutlined } from "@ant-design/icons";
import { GlobalOutlined } from "@ant-design/icons";
import style from "./characterdetail.module.scss";

export type TCharacterDetail = {
  onCancel: () => void;
  id: any;
  visible: boolean;
};

const CharacterDetail = ({ visible, id, onCancel }: TCharacterDetail) => {
  const { loading, error, data } = useQuery(GET_CHARACTER_DETAIL, {
    variables: { id: id },
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    onCancel();
  };
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "#00176F" }} spin />
  );

  const tableLoading = {
    spinning: loading,
    indicator: <Spin indicator={antIcon} />,
  };

  useEffect(() => {
    setIsModalVisible(true);
  }, [id]);
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "data.filmConnection.films.title",
    },
    {
      title: "Director",
      dataIndex: "director",
      key: "data.filmConnection.films.director",
    },
    {
      title: "Planets",
      dataIndex: "planets",
      key: "data.filmConnection.films.planetConnection.planets.name",
      render: (name: any) => (
        <>
          {name.map((name: any) => {
            return (
              <Tag
                key={name}
                style={{ borderRadius: "8px" }}
                color="geekblue"
                icon={<GlobalOutlined style={{ fontSize: "12px" }} />}
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
    <Modal
      className={style.modalInfoContainer}
      width={800}
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
      title={<Title className={style.title}>{data?.person.name}</Title>}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Row className={style.containerInfoTop} gutter={20}>
        <Col span={6}>
          <p>
            Specie:{" "}
            {data?.person?.species?.name ? data.person.species.name : " Human"}
          </p>
          <p>Birth Year: {data?.person.birthYear}</p>
        </Col>
        <Col span={7}>
          <p>Home World: {" " + data?.person.homeworld.name}</p>
          <p>Gender: {data?.person.gender}</p>
        </Col>
        <Col span={5}>
          <p>Height: {data?.person.height}</p>
          <p>Mass: {data?.person.mass}</p>
        </Col>
        <Col span={6}>
          <p>Hair Color: {data?.person.hairColor}</p>
          <p>Skin Color: {data?.person.skinColor}</p>
        </Col>
      </Row>

      <div>
        <Title className={style.titleTable}>
          Total Movies: {data?.person.filmConnection.totalCount}{" "}
        </Title>
        <Table
          key={id}
          bordered={true}
          loading={tableLoading}
          className={style.table}
          columns={columns}
          pagination={false}
          dataSource={data?.person.filmConnection?.films.map((film: any) => ({
            key: film.title,
            title: film.title,
            director: film.director,
            planets: film.planetConnection.planets.map(
              (planet: any) => planet.name
            ),
          }))}
        ></Table>
      </div>
    </Modal>
  );
};

export default CharacterDetail;
