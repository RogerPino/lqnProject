import { gql } from "@apollo/client";
export const GET_CHARACTERS = gql`
  query AllPeople {
    allPeople {
      people {
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
