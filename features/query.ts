import { gql } from "@apollo/client";
export const GET_CHARACTERS = gql`
  query AllPeople {
    allPeople {
      people {
        name
      }
      pageInfo {
        hasNextPage
      }
      totalCount
    }
  }
`;
