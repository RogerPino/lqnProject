import React from "react";
import { useRouter } from "next/router";

const CharacterName = () => {
  const router = useRouter();
  return <div>Esta es la pagina de characters: {router.query.name}</div>;
};

export default CharacterName;
