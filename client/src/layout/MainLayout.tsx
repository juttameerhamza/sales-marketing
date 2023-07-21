import React from 'react';
import { styled } from '@mui/material';
import Aside from 'components/Aside';
import vectorPattern from 'assets/images/vector-pattern-2.jpg'

const MainLayoutStyled = styled('div')`
    display: flex;
    /* height: 100vh; */
`;

const Main = styled('main')`
    padding-top: 100px;
    /* padding-left: 20px; */
    /* padding-bottom: 20px; */
    width: 100%;
    /* height: 100%; */
`;

const Pattern = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background: url(${vectorPattern});
    background-position: center;
    background-size: cover;
    z-index: -1;
`;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <MainLayoutStyled>
            <Pattern />
            <Aside />
            <Main>
                {children}
            </Main>
        </MainLayoutStyled>
    )
}

export default MainLayout;