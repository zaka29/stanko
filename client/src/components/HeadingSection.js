import React, { Component } from 'react';
import { Box, Heading, Text} from 'rebass'

const headingStyles = (side) => {
    return {
        display: 'inline-block',
        fontFamily: 'Tauri, sans-serif',
        fontSize: [ 1, 2, 3 ],
        color: side === 'left' ? '#FEE5A0' : '#F78A73',
        mb: 20,
        p: 10,
        bg: '#2A315A',
    }
};

const HeadingSection = ({side}) => (
    <Box
        px={15}
        py={15}
    >
        <Heading sx={headingStyles(side)}>
            PROFILE
        </Heading>
        <Text
            lineHeight={1.5}
            fontSize={[ 1, 1 ]}
            color='#2A315A'
        >
            I am an experienced educator specialising in teaching pre-school, lower school, and middle school students.
            I specialise in teaching Mathematics and Science lessons.
        </Text>
    </Box>
);

export default HeadingSection;