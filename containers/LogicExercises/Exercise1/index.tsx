import React from "react";
import style from "./logicExercises.module.scss";
import { List, Spin } from "antd";

const Exercise1 = () => {
  function exercise1() {
    let number: string[] = [];
    for (let i = 0; i <= 100; i++) {
      let cadena = " " + i;
      if (i % 2 == 0) {
        cadena += " buzz";
      }
      if (i % 5 == 0) {
        cadena += " bazz";
      }
      number.push(cadena);
    }
    return number;
  }

  return (
    <div className={style.mainContainer}>
      <h1 className={style.title}>Logic Excercises </h1>
      <div className={style.container}>
        <h3> Exercise 1</h3>
        {exercise1().map((element) => {
          return <div>{`${element}`}</div>;
        })}
      </div>
    </div>
  );
};

export default Exercise1;
