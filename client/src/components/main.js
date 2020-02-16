import React, { Component } from 'react';
import { Box, Flex } from 'rebass';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

// Move to separate folder

const mainBoxStyles = {
    maxWidth: 960,
    minHeight: '100vh',
    mx: 'auto',
    bg: '#2A315A',
    fontFamily: 'Arimo, sans-serif'
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
                    <Header />

                    <Flex flex='1 1 auto'>
                        <Box
                            p={3}
                            width={1/2}
                            color='white'
                            bg='#F78A73'>

                            <Section side='left'/>

                        </Box>
                        <Box
                            p={3}
                            width={1/2}
                            color='white'
                            bg='#FEE5A0'>

                            <Section side='right' />

                        </Box>
                    </Flex>

                    <Footer />

                </Flex>
            </Flex>
        );
    }
}

export default Stanko

