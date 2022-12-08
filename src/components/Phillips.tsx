import { Box, Heading, HStack, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { LineChart, CartesianGrid, XAxis, Label, YAxis, Line } from 'recharts';

interface PhillipsProps {}

let data: any = [];

for (let i = 0; i <= 6; i++) {
    data[i] = { x: i, phillip: 1.0 / (i + 0.8) };
}

for (let i = 0.0; i <= 2; i += 0.25) data[6 + i + 1] = { x: 3, long: i };

const Graph: FC = () => {
    return (
        <Box width="25rem">
            <LineChart width={300} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" domain={[0, 6]} type="number">
                    <Label value="Unemployment" position="insideBottom" />
                </XAxis>
                <YAxis orientation="left" domain={[0, 0.5]} type="number">
                    <Label value="Inflation" angle={-90} />
                </YAxis>
                <Line
                    type="monotone"
                    dataKey="phillip"
                    stroke="#8884d8"
                    strokeWidth={2}
                />
                <Line
                    type="monotone"
                    dataKey="long"
                    stroke="#8884d8"
                    strokeWidth={2}
                />
            </LineChart>
        </Box>
    );
};

const Phillips: FC<PhillipsProps> = () => {
    return (
        <VStack width={'100%'}>
            <Heading>Phillips Curve</Heading>
            <HStack>
                <Box width="16rem">
                    <ul>
                        <li>
                            The Phillips curve is downward sloping showing an
                            inverse relationship between unemployment and
                            inflation
                        </li>
                        <li>
                            The Long Run Phillips curve is a vertical lineas in
                            the long run, the rate of unemployment will settle
                            to the natural rate of unemployment
                        </li>
                    </ul>
                </Box>
                <Graph />
            </HStack>
        </VStack>
    );
};

export default Phillips;
