import React from "react";
import style from "./exercise1.module.scss";
import Header from "../../../components/Header";


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
    <div className={style.mainPageContainer}>
      <Header />
      <div className={style.mainContainer}>
        <h1> Exercise 1</h1>
        <p>
          "Desarrolla un algoritmo que imprima los números del 0 al 100.
          Adicionalmente debe imprimirse en la misma línea la palabra buzz en
          caso de que el número sea par. Sí el número es múltiplo de 5 debe
          imprimirse en la misma línea la palabra bazz"
        </p>
        <div className={style.container}>
          {exercise1().map((element, index) => {
            return <div key={index}>{`${element}`}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Exercise1;
