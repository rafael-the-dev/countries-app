import { gql } from '@apollo/client';

export const LOAD_ALL_COUNTRIES = gql`
    query GET_COUNTRIES {
        countries {
            name
            region
            flagURL
            capitalCities
        }
    }
`;

export const LOAD_COUNTRY_DETAILS = gql`
    query GET_DETAILS($cca3: String!) {
        country(cca3: $cca3) {
            borders {
                name
            }
            capitalCities
            currencies {
                name
            }
            flagURL
            languages {
                name
            }
            name
            region
            subregion
        }
    }
`