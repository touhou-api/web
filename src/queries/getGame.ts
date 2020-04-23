import gql from "graphql-tag";

export default gql`
  query getGames($lang: LocalizeLanguage!) {
    games {
      id
      title
      number
      localizedTitles {
        longTitle
        title
      }
      localizedTitle(lang: $lang) {
        longTitle
        title
      }
    }
  }
`;
