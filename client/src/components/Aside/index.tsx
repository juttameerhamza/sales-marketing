import React from 'react';
import { Typography, styled } from '@mui/material';
import visaLogo from 'assets/images/visa-logo.png';
import avatarImg from 'assets/images/avatar.jpg';

const AsideMain = styled('aside')`
    width: 260px;
    height: 100vh;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    box-shadow: 4px 4px 15px rgba(0,0,0,0.1);
`;

const AsideLogo = styled('img')`
    width: 80px;
    height: auto;
    border-radius: 50%;
`;

const AsideUser = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 38px;

    p {
        font-size: 14px;
        font-weight: 600;

        &:first-of-type {
            color: #8c8c8c;
        }
    }
`;

const AsideUserAvatar = styled('img')`
    width: 100px;
    height: auto;
    border-radius: 50%;
    margin-bottom: 10px;
`;

const AsideNavList = styled('ul')`
    list-style: none;
    margin-top: 30px;
`;

const AsideNavItem = styled('li')`
    padding: 20px;
    font-weight: 500;
    text-align: center;

    a {
        text-decoration: none;
        color: #000;

        &:hover {
            font-weight: 600;
        }
    }
`;

const Aside = () => {
    return (
        <AsideMain>
            <AsideLogo src={visaLogo} alt="logo" />

            <AsideUser>
                <AsideUserAvatar src={avatarImg} alt="avatar" />
                <Typography variant="body1">Wellcome back,</Typography>
                <Typography variant="body1">John Smith</Typography>
            </AsideUser>

            <AsideNavList>
                <AsideNavItem>
                    <a href="/">Dasboard</a>
                </AsideNavItem>
                <AsideNavItem>
                    <a href="/">Reports</a>
                </AsideNavItem>
                <AsideNavItem>
                    <a href="/">Insight</a>
                </AsideNavItem>
                <AsideNavItem>
                    <a href="/">Settings</a>
                </AsideNavItem>
            </AsideNavList>
        </AsideMain>
    )
}

export default Aside;