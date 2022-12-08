import { ChakraProvider } from '@chakra-ui/react';
import React, { FC } from 'react';
import theme from '../theme';

export interface ProvidersProps {
    children: JSX.Element;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
