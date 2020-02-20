import React, { Component } from 'react';
import { Box, Text} from 'rebass';
import { styles } from './styling/styles';

const MileStoneItem = ({side}) => {
    let sectionStyles = styles(side);
    return (
        <Box sx={sectionStyles.description}>
            <Text sx={sectionStyles.title}>
                senior front end engineer
                <Text sx={sectionStyles.date}>| 2015 - 2017 </Text>
            </Text>
            <Text>
                Designed and developed new features for existing React Native mobile application.
            </Text>
            <Text>
                Migrated core React Native version 0.4  to latest 0.6 versions
            </Text>
            <Box sx={sectionStyles.circle} />
        </Box>
    )
};

export default MileStoneItem;