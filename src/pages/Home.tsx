import { VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import GDP from '../components/GDP';
import Hero from '../components/Hero';
import Phillips from '../components/Phillips';
import PPC from '../components/PPC';
import ShiftDemand from '../components/ShiftDemand';
import ShiftSupply from '../components/ShiftSupply';
import SupplyDemand from '../components/SupplyDemand';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (
        <VStack>
            <Hero />
            <GDP />
            <PPC />
            <SupplyDemand />
            <ShiftDemand />
            <ShiftSupply />
            <Phillips />
        </VStack>
    );
};

export default Home;
