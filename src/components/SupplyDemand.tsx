import { Box, Heading, HStack, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { LineChart, CartesianGrid, XAxis, Label, YAxis, Line } from 'recharts';

interface SupplyDemandProps {}

let data: any = [];

for (let i = 0; i <= 6; i++) {
    data[i] = { x: i, supply: i, demand: 6 - i };
}

const Graph: FC = () => {
    return (
        <Box width="25rem">
            <LineChart width={300} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" domain={[0, 6]}>
                    <Label value="Quantity of Good A" position="insideBottom" />
                </XAxis>
                <YAxis orientation="left" domain={[0, 6]}>
                    <Label value="Price of Good A" angle={-90} />
                </YAxis>
                <Line
                    type="monotone"
                    dataKey="supply"
                    stroke="#8884d8"
                    strokeWidth={2}
                />
                <Line
                    type="monotone"
                    dataKey="demand"
                    stroke="#8884d8"
                    strokeWidth={2}
                />
            </LineChart>
        </Box>
    );
};

const SupplyDemand: FC<SupplyDemandProps> = () => {
    return (
        <VStack width={'100%'}>
            <Heading>Supply and Demand Graph for Good A</Heading>
            <HStack>
                <Graph />
                <Box width="16rem">
                    <ul>
                        <li>
                            The supply curve is upward sloping as the lower the
                            price level, the less of the good will be produced
                        </li>
                        <li>
                            The demand curve is downward slopping as the higher
                            the price level, the less of the product a consumer
                            will buy
                        </li>
                        <li>
                            Buisnesses will sell goods at the equilibrium price
                            where the supply curve meets the demand curve
                        </li>
                    </ul>
                </Box>
            </HStack>
        </VStack>
    );
};

export default SupplyDemand;
