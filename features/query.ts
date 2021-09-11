import { gql } from "@apollo/client";
export const GET_CHARACTERS = gql`
  query AllPeople {
    allPeople {
      people {
        id
        name
        birthYear
        gender
        height
        mass
        hairColor
        skinColor
        homeworld {
          name
        }
        filmConnection {
          totalCount
          films {
            title
            director
            planetConnection {
              planets {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CHARACTER_DETAIL = gql`
  query Person($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      gender
      height
      mass
      hairColor
      skinColor
      homeworld {
        name
      }
      species {
        name
      }
      filmConnection {
        totalCount
        films {
          title
          director
          planetConnection {
            planets {
              name
            }
          }
        }
      }
    }
  }
`;
