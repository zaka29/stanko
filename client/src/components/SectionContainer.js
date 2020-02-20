import React from 'react';
import { Box } from 'rebass'
import MilestoneSection from './MilestoneSection/MileStoneSection';
import HeadingSection from './HeadingSection';

// TODO: Create a HOC components based on given section type and airtable base
// TODO: e.g <SectionHoc base='base' side={side} />

const SectionContainer = ({ section, side }) => (
    <Box>
        <HeadingSection side={side} />
        <MilestoneSection side={side} />
    </Box>
);

export default SectionContainer;