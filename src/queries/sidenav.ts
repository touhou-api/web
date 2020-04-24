import gql from "graphql-tag";

export default gql`
  query SideNav($lang: LocalizeLanguage!) {
    games {
      id
      title
      number
      localizedTitle(lang: $lang) {
        longTitle
        title
        abbreviation
      }
    }
  }
`;
