import React from "react";
import Link from "next/link";
import style from "./header.module.scss";

const Header = () => {
  return (
    <div className={style.container}>
      <ul className={style.navBar}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/LogicExercises/Exercise1">
            <a>Exercise JS 1</a>
          </Link>
        </li>
        <li>
          <Link href="/LogicExercises/Exercise2">
            <a>Exercise JS 2</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
