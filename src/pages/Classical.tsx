import {
    Box,
    Button,
    Heading,
    HStack,
    ListItem,
    UnorderedList,
    VStack,
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { LineChart, CartesianGrid, XAxis, Label, YAxis, Line } from 'recharts';

interface SupplyDemandProps {}

const Graph: FC = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        updateData(0, 0);
    }, []);

    const updateData = (shift1: number, shift2: number) => {
        let newData: any = [];

        for (let i = 0; i <= 6; i++) {
            // if (6 + shift - i <= 6 && 6 + shift - i >= 0)
            newData.push({ x: i, supply: shift1 + i, demand: shift2 + 6 - i });
        }

        for (let i = -2; i <= 8; i++) newData.push({ x: 3, lras: i });

        setData(newData);
    };

    return (
        <VStack width="25rem">
            <HStack alignItems={'flex-start'}>
                <Button onClick={() => updateData(0, 0)}>Normal</Button>
                <VStack>
                    <Button onClick={() => updateData(0, 2)}>Inflation</Button>
                    <Button onClick={() => updateData(2, 2)}>Fix</Button>
                </VStack>
                <VStack>
                    <Button onClick={() => updateData(0, -2)}>Recession</Button>
                    <Button onClick={() => updateData(-2, -2)}>Fix</Button>
                </VStack>
            </HStack>
            <LineChart width={300} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" domain={[-2, 8]} type="number">
                    <Label value="Real GDP" position="insideBottom" />
                </XAxis>
                <YAxis orientation="left" domain={[-2, 8]}>
                    <Label value="Price Level" angle={-90} />
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
                <Line
                    type="monotone"
                    dataKey="lras"
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
            <Heading>Classical Theory</Heading>
            <HStack>
                <Graph />
                <Box width="16rem" textAlign={'left'}>
                    <UnorderedList>
                        <ListItem>
                            The vertical line is long run aggregate supply as in
                            the long run, supply will be optimized so that the
                            economy is at maximum output
                        </ListItem>
                        <ListItem>
                            Inflation
                            <UnorderedList>
                                <ListItem>
                                    Inflation is caused by an increase in
                                    aggregate demand
                                </ListItem>
                                <ListItem>
                                    Classical Theory says that the economy will
                                    fix itself by increasing aggregate supply to
                                    meet aggregate demand and keep equilibrium
                                    on the LRAS
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                        <ListItem>
                            Recession
                            <UnorderedList>
                                <ListItem>
                                    Recession is caused by an decrease in
                                    aggregate demand
                                </ListItem>
                                <ListItem>
                                    Classical Theory says that the economy will
                                    fix itself by decreasing aggregate supply to
                                    meet aggregate demand and keep equilibrium
                                    on the LRAS
                                </ListItem>
                            </UnorderedList>
                        </ListItem>
                    </UnorderedList>
                </Box>
            </HStack>
        </VStack>
    );
};

export default SupplyDemand;
