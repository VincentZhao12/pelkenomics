import {
    Box,
    Button,
    Heading,
    HStack,
    ListItem as LI,
    UnorderedList as UL,
    VStack,
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { LineChart, CartesianGrid, XAxis, Label, YAxis, Line } from 'recharts';

interface SupplyDemandProps {}

const Graph1: FC = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        updateData(0, 0);
    }, []);

    const updateData = (shift1: number, shift2: number) => {
        let newData: any = [];

        for (let i = 0; i <= 6; i++) {
            // if (6 + shift - i <= 6 && 6 + shift - i >= 0)
            newData.push({
                x: i,
                supply: 0.1 * Math.pow(2, shift1 + i),
                demand: shift2 + 6 - i,
            });
        }
        setData(newData);
    };

    return (
        <VStack width="25rem">
            <HStack alignItems={'flex-start'}>
                <Button onClick={() => updateData(0, 0)}>Normal</Button>
                <VStack>
                    <Button onClick={() => updateData(0, 2)}>Inflation</Button>
                    <Button onClick={() => updateData(0, 0)}>Fix</Button>
                </VStack>
                <VStack>
                    <Button onClick={() => updateData(0, -2)}>Recession</Button>
                    <Button onClick={() => updateData(0, 0)}>Fix</Button>
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
            </LineChart>
        </VStack>
    );
};

const Graph: FC = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        updateData(0, 0);
    }, []);

    const updateData = (shift1: number, shift2: number) => {
        let newData: any = [];

        for (let i = 0; i <= 6; i++) {
            // if (6 + shift - i <= 6 && 6 + shift - i >= 0)
            newData.push({
                x: i,
                y: i,
                c: (1 / 4) * i + 1,
                ci: (1 / 4) * i + 2,
                cig: (1 / 4) * i + 3,
            });
        }

        setData(newData);
    };

    return (
        <VStack width="25rem">
            <LineChart width={300} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" domain={[0, 6]} type="number">
                    <Label value="Income" position="insideBottom" />
                </XAxis>
                <YAxis orientation="left" domain={[0, 6]}>
                    <Label value="Aggregate Expenditure" angle={-90} />
                </YAxis>
                <Line
                    type="monotone"
                    dataKey="y"
                    stroke="#8884d8"
                    strokeWidth={2}
                />
                <Line
                    type="monotone"
                    dataKey="c"
                    stroke="#8884d8"
                    strokeWidth={2}
                />
                <Line
                    type="monotone"
                    dataKey="ci"
                    stroke="#8884d8"
                    strokeWidth={2}
                />

                <Line
                    type="monotone"
                    dataKey="cig"
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
            <Heading>Keynsian Theory</Heading>

            <HStack>
                <VStack>
                    <Graph />
                    <Graph1 />
                </VStack>
                <Box width="16rem" textAlign={'left'}>
                    <UL>
                        <LI>
                            Keynes says that prices and wages are sticky, so
                            supply doesn't move
                        </LI>
                        <LI>
                            Aggregate expenditure is total spending, consumption
                            is porportional to income, and by adding I and G
                            which are constant, you get the final aggregate
                            expenditure graph
                        </LI>
                        <LI>
                            Keynes believes that the way to fix the economy
                            during a recession or during inflation is to
                            manipultate government spending to adjust aggregate
                            demand
                            <UL>
                                <LI>
                                    During inflation, government decreases
                                    government spending and increases taxes in
                                    order to shift demand back down to
                                    equilibrium
                                </LI>
                                <LI>
                                    During a recession, government increases
                                    government spending and cuts taxes in order
                                    to shift demand up to equilibrium
                                </LI>
                            </UL>
                        </LI>
                    </UL>
                </Box>
            </HStack>
        </VStack>
    );
};

export default SupplyDemand;
