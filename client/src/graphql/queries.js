import { gql } from 'apollo-boost';

export const HEADER_BASE_QUERY = gql`
    {
        headerRecords{
            name
            position
        }
    }
`;