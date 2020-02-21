import React from 'react';
import { Box, Text } from 'rebass'
import { useQuery } from '@apollo/react-hooks';
import { HEADER_BASE_QUERY } from '../graphql/queries';

const Header = () => {
    const { loading, error, data } = useQuery(HEADER_BASE_QUERY);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :(</Text>;

    // console.log('airtable data - ', data.headerRecords);

    const {name, position} = data.headerRecords[0];

    return (
        <Box
            px={15}
            py={25}
        >
            <Text
                fontFamily='Tauri, sans-serif'
                fontSize={[ 4, 5, 6 ]}
                lineHeight='body'
                textAlign='center'
                color='#F78A73'
                marginBottom={10}
            >
                {name}
            </Text>
            <Text
                textAlign='center'
                fontSize={[ 1, 2 ]}
                color='#DAC493'
            >
                {position}
            </Text>
        </Box>
    )
};



export default Header;