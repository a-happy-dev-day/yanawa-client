import React, {useEffect} from 'react';
import {Box, styled} from '@mui/material';

import logo from '../../assets/images/splash/logo_white.png';
import {useNavigate} from "react-router-dom";

const Splash = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/login')
        }, 1000)
    },[])

    return (
        <Container>
            <h1>
                <img src={logo} alt="다나와"/>
            </h1>
        </Container>
    );
};

export default Splash;

const Container = styled(Box)`
  background-color: #0027fd;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
