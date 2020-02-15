import React, { Component } from 'react';
import { Box, Heading, Flex, Text } from 'rebass'

// Move to separate folder

const mainBoxStyles = {
    maxWidth: 960,
    minHeight: '100vh',
    mx: 'auto',
    bg: '#2A315A',
};

const footerStyles = {
    minHeight: 85,
    p: 10,
};

class Stanko extends Component {
    state = {
        headerName: '',
    };

    componentDidMount = () => {

    };

    render = () => {

        return (
            <Flex sx={mainBoxStyles}>

                <Flex
                    flexDirection="column"
                    flex='1 1 auto'
                >

                    <Heading
                        p={15}
                        height={128}
                    >
                        <Text
                            fontFamily='Varela Round, monospace'
                            fontSize={[ 4, 5, 6 ]}
                            lineHeight='body'
                            textAlign='center'
                            color='#F78A73'
                        >
                            stanislav zaichenko
                        </Text>
                    </Heading>

                    <Flex flex='1 1 auto'>
                        <Box
                            p={3}
                            width={1/2}
                            color='white'
                            bg='#F78A73'>
                            Flex
                        </Box>
                        <Box
                            p={3}
                            width={1/2}
                            color='white'
                            bg='#FEE5A0'>
                            Box
                        </Box>
                    </Flex>

                    <Box sx={footerStyles}>
                        <Text>
                            stanko contacts
                        </Text>
                    </Box>

                </Flex>
            </Flex>
        );
    }
}








export default Stanko

