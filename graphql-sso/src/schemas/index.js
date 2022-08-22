export const getContinents = `
query Continents {
  continents {
    name
    code
  }
}
`;

export const getCountries = `
query Countries($continentCode: ID!) {
  continent(code: $continentCode){
    countries {
      name
      code
    }
  }
}
`;
