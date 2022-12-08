import { Box, Button, Heading, HStack, VStack } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { LineChart, CartesianGrid, XAxis, Label, YAxis, Line } from 'recharts';

interface SupplyDemandProps {}

const Graph: FC = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        updateData(0);
    }, []);

    const updateData = (shift: number) => {
        let newData: any = [];

        for (let i = 0; i <= 6; i++) {
            // if (6 + shift - i <= 6 && 6 + shift - i >= 0)
            newData[i] = { x: i, supply: i, demand: 6 + shift - i };
        }

        setData(newData);
    };

    return (
        <VStack width="25rem">
            <HStack>
                <Button onClick={() => updateData(0)}>Normal</Button>
                <Button onClick={() => updateData(2)}>Increase</Button>
                <Button onClick={() => updateData(-2)}>Decrease</Button>
            </HStack>
            <LineChart width={300} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" domain={[-2, 8]}>
                    <Label value="Quantity of Good A" position="insideBottom" />
                </XAxis>
                <YAxis orientation="left" domain={[-2, 8]}>
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
        </VStack>
    );
};

const SupplyDemand: FC<SupplyDemandProps> = () => {
    return (
        <VStack width={'100%'}>
            <Heading>Shifts in Demand</Heading>
            <HStack>
                <Box width="16rem">
                    <ul>
                        <li>
                            Changes in tastes, population, income, prices of
                            substitute or complement goods, and expectations
                            about future conditions and prices will shift the
                            demand curve.
                        </li>
                        <li>
                            An increase in demand will increase the equilibrium
                            price
                        </li>
                        <li>
                            A decrease in demand will decrease the equilibrium
                            price
                        </li>
                    </ul>
                </Box>
                <Graph />
            </HStack>
        </VStack>
    );
};

export default SupplyDemand;
