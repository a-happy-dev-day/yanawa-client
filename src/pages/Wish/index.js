import React from 'react';
import {Box, styled} from "@mui/material";

import Header from "../../components/common/Header";
import WishList from "./WishList";
import place1 from "../../assets/images/wish/place1.png";
import profile from "../../assets/images/profile.png";


const Wish = () => {
    const listData = [
        {
            id: 0,
            placeImg:place1,
            state: "매칭",
            title: "보라매공원테니스장",
            date: "2022.04.09(토)・18-20시",
            wish: "Y",
            profile: [
                {
                    id: 0,
                    profileImg:profile,
                    host: "Y",
                    name: "host1"

                },
                {
                    id: 1,
                    profileImg:profile,
                    host: "N",
                    name: "user1"
                }
            ]

        },
        {
            id: 1,
            placeImg:place1,
            state: "매칭",
            title: "보라매공원테니스장",
            date: "2022.04.09(토)・18-20시",
            wish: "Y",
            profile: [
                {
                    id: 0,
                    host: "Y",
                    profileImg:profile,
                    name: "host1"

                },
                {
                    id: 1,
                    host: "N",
                    profileImg:"N",
                    name: "user1"
                }
            ]

        },
    ]
    return (
        <Container>
            <Header title="찜 목록"/>
            <WishList listData={listData} />
        < /Container>
    );
};

export default Wish;

const Container = styled(Box)`
            position: relative;
            height: 100vh;
            background: #f9f9f9;
            overflow: scroll;
            padding: 80px 20px 0;
            `;
