import React from 'react';
import { Box, Text } from 'rebass'

const Header = ({ name, position }) => (
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
);

export default Header;