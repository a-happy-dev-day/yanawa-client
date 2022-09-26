import React from 'react';
import {Box, styled, } from "@mui/material";

import Header from "../../components/common/Header";
import NoticeList from "./NoticeList";


const Notice = () => {
    const noticeList = [{
        id: 1,
        title: "",
        time: '방금',
        message: "‘나희도’님이 매칭 참여를 신청했습니다",
        imgURL: ''
    }, {
        id: 2,
        title: "",
        time: '14분 전',
        message: "신청하신 매칭이 거절되었습니다",
        imgURL: ''
    }, {
        id: 3,
        title: '',
        time: '14분 전',
        message: "신청하신 매칭이 수락되었습니다",
        imgURL: ''
    }]

    return (
        <Container>
            <Header title="알림"/>
            <NoticeList list={noticeList} />
        < /Container>

    )
}


export default Notice;

const Container = styled(Box)`
            position: relative;
            height: 100vh;
            background: #f9f9f9;
            overflow: scroll;
            padding-top: 80px;
            `;

