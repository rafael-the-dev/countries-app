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