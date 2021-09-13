import React from "react";
import style from "./exercise2.module.scss";
import Header from "../../../components/Header";

const Exercise2 = () => {
  function exercise2() {
    const arrayPokemons = [
      "audino",
      "bagon",
      "baltoy",
      "banette",
      "bidoof",
      "braviary",
      "bronzor",
      "carracosta",
      "charmeleon",
      "cresselia",
      "croagunk",
      "darmanitan",
      "deino",
      "emboar",
      "emolga",
      "exeggcute",
      "gabite",
      "girafarig",
      "gulpin",
      "haxorus",
      "heatmor",
      "heatran",
      "ivysaur",
      "jellicent",
      "jumpluff",
      "kangaskhan",
      "kricketune",
      "landorus",
      "ledyba",
      "loudred",
      "lumineon",
      "lunatone",
      "machamp",
      "magnezone",
      "mamoswine",
      "nosepass",
      "petilil",
      "pidgeotto",
      "pikachu",
      "pinsir",
      "poliwrath",
      "poochyena",
      "porygon2",
      "porygonz",
      "registeel",
      "relicanth",
      "remoraid",
      "rufflet",
      "sableye",
      "scolipede",
      "scrafty",
      "seaking",
      "sealeo",
      "silcoon",
      "simisear",
      "snivy",
      "snorlax",
      "spoink",
      "starly",
      "tirtouga",
      "trapinch",
      "treecko",
      "tyrogue",
      "vigoroth",
      "vulpix",
      "wailord",
      "wartortle",
      "whismur",
      "wingull",
      "yamask",
    ];
    function nameStartWith(lastletter: string, names: string[]) {
      return names.findIndex((name) => name[0] === lastletter);
    }

    let final_serie: string[][] = [];

    arrayPokemons.forEach((name) => {
      let current_series: string[] = [];
      let current_name = name;

      current_series.push(current_name);
      arrayPokemons.splice(arrayPokemons.indexOf(current_name), 1);

      let next_index = nameStartWith(
        current_name[current_name.length - 1],
        arrayPokemons
      );
      while (next_index >= 0) {
        current_name = arrayPokemons[next_index];
        current_series.push(" " + current_name);
        arrayPokemons.splice(next_index, 1);
        next_index = nameStartWith(
          current_name[current_name.length - 1],
          arrayPokemons
        );
      }

      final_serie.push(current_series);
    });
    final_serie.forEach((element) => {
      console.log("Serie: " + element);
    });
    return final_serie;
  }

  return (
    <div className={style.mainPageContainer}>
      <Header />
      <div className={style.mainContainer}>
        <h1> Exercise 2</h1>
        <div className={style.container}>
          {exercise2().map((element, index) => {
            return <div key={index}>{`${element}`}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Exercise2;
