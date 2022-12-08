import { Box, Heading, HStack, VStack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { render } from 'react-dom';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
    Label,
} from 'recharts';

interface PPCProps {}

let data: any = [];

for (let i = 0; i <= 6; i++) {
    data[i] = { x: i, y: Math.sqrt(100 - 4 * i * i) };
}

const Graph: FC = () => {
    return (
        <Box width="25rem">
            <LineChart width={300} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" domain={[0, 6]}>
                    <Label value="Quantity of Good B" position="insideBottom" />
                </XAxis>
                <YAxis
                    orientation="left"
                    tickCount={10}
                    // ticks={[2, 4, 6, 8, 10, 12]}
                    // domain={[0, 6]}
                    domain={[0, 12]}
                >
                    <Label value="Quantity of Good A" angle={-90} />
                </YAxis>
                <Line
                    type="monotone"
                    dataKey="y"
                    stroke="#8884d8"
                    strokeWidth={2}
                />
            </LineChart>
        </Box>
    );
};

const PPC: FC<PPCProps> = () => {
    return (
        <VStack width={'100%'}>
            <Heading>Production Possiblity Curve</Heading>
            <HStack>
                <Box width="16rem">
                    The production possibliity curve shows the opportunity cost
                    of producing one good over another.
                    <br />
                    <br />
                    ex. The opportunity cost of going from 0 units of good B to
                    3 units is 2 units of Good A
                </Box>
                <Graph />
            </HStack>
        </VStack>
    );
};

export default PPC;
