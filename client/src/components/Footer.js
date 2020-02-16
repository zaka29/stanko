import React from 'react';
import { Box, Button} from 'rebass'


const footerStyles = () => {
    return {
        minHeight: 85,
        p: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
};

const Footer = ({ section, side }) => (
    <Box sx={footerStyles()}>

        <Button
            backgroundColor="#F78A73"
            color="#2A315A"
            mr={2}
        >
            CONTACT ME
        </Button>

    </Box>
);

export default Footer;