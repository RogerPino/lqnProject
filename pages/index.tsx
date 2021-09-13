import type { NextPage } from 'next'

import CharactersList from "../containers/CharactersList";
import Header from "../components/Header";
import style from "../styles/wrapperPage.module.scss";

const Home: NextPage = () => {
  return (
    <div className={style.mainPageContainer}>
      <Header />
      <div className={style.container}>
        <CharactersList />
      </div>
    </div>
  );
};

export default Home
