import React from 'react';
import { Box, Text } from 'rebass'

const Header = ({ header }) => (
    <Box
        px={15}
        py={35}
    >
        <Text
            fontFamily='Tauri, sans-serif'
            fontSize={[ 4, 5, 7 ]}
            lineHeight='body'
            textAlign='center'
            color='#F78A73'
            marginBottom={10}
        >
            stanislav zaichenko
        </Text>
        <Text
            textAlign='center'
            fontSize={[ 1, 2 ]}
            color='#DAC493'
        >
            FRONT END DEVELOPER
        </Text>
    </Box>
);

export default Header;