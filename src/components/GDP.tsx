import { Box, Heading, HStack, Text, Tooltip } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { Container, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Symbol = ({
    children,
    order,
    explain,
}: {
    children: ReactNode;
    order: number;
    explain: string;
}) => {
    const delay = 0.5 * (order - 1);
    return (
        <Tooltip label={explain} textAlign="center">
            <ChakraBox
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                // @ts-ignore no problem in operation, although type error appears
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay,
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="80px"
                height="80px"
                bg={'blue.400'}
                borderRadius={'md'}
            >
                <Heading size="sm">{children}</Heading>
            </ChakraBox>
        </Tooltip>
    );
};

const GDP: FC = () => {
    return (
        <HStack height={'12rem'} marginY="3rem">
            <Symbol
                explain="Gross Domestic Product is a measure of the size of an economy"
                order={1}
            >
                GDP
            </Symbol>{' '}
            <Text>=</Text>
            <Symbol
                explain="Consumption are the goods and services bought by individuals"
                order={2}
            >
                C
            </Symbol>{' '}
            <Text>+</Text>
            <Symbol
                explain="Investment are the goods used by buisnesses to produce goods"
                order={3}
            >
                I
            </Symbol>{' '}
            <Text>+</Text>
            <Symbol explain="Government Spending" order={4}>
                G
            </Symbol>{' '}
            <Text>+ (</Text>
            <Symbol explain="Exports" order={5}>
                X
            </Symbol>{' '}
            <Text>-</Text>
            <Symbol explain="Imports" order={6}>
                M
            </Symbol>{' '}
            <Text>)</Text>
        </HStack>
    );
};

export default GDP;
