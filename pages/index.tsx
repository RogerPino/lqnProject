import type { NextPage } from 'next'
import CharactersList from "../containers/CharactersList";
import style from "../styles/listPage.module.scss";

const Home: NextPage = () => {
  return (
    <div className={style.mainPageContainer}>
      <div className={style.characterContainer}>
        <CharactersList />
      </div>
    </div>
  );
};

export default Home
