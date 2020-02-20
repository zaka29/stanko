import React, { Component } from 'react';
import { Box, Heading } from 'rebass';
import MilestoneItem from './MileStoneItem';
import { styles } from './styling/styles';

const MilestoneSection = ({side}) => {
    let sectionStyles = styles(side);
    // TODO: run map over milestones section
    return (
        <Box
            px={15}
            py={15}
        >
            <Heading sx={sectionStyles.heading}>
                EXPERIENCE
            </Heading>
            <Box pl={10}>
                <MilestoneItem side={side} />
                <MilestoneItem side={side} />
            </Box>

        </Box>
    );
};

export default MilestoneSection;