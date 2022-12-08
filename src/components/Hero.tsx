import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PELKEY from '../assets/pelkey.jpeg';

export default function Hero() {
    const navigate = useNavigate();
    return (
        <Stack
            minHeight={'calc(100vh - 64px)'}
            direction={{ base: 'column', md: 'row' }}
        >
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({
                                    base: '20%',
                                    md: '30%',
                                }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}
                        >
                            Learn
                        </Text>
                        <br />{' '}
                        <Text color={'blue.400'} as={'span'}>
                            Pelkenomics
                        </Text>{' '}
                    </Heading>
                    <Text
                        fontSize={{ base: 'md', lg: 'lg' }}
                        color={'gray.500'}
                    >
                        This website has a collection of resources for you to
                        learn Pelkenomics! Start your journey with one of these
                        theories or scroll down for general Pelkenomics
                        knowledge. - Vincent Zhao
                    </Text>
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4}
                    >
                        <Button
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            onClick={() => navigate('/classical')}
                        >
                            Classical
                        </Button>
                        <Button
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            onClick={() => navigate('/keynsian')}
                        >
                            Keynes
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image alt={'PELKEY'} objectFit={'cover'} src={PELKEY} />
            </Flex>
        </Stack>
    );
}
