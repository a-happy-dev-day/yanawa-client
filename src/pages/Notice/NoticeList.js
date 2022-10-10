import React from 'react';
import {Avatar, Box, styled, Typography} from "@mui/material";

const NoticeList = ({list}) => {
    return (
        <div>
            {
                list ?
                    (list.map((item) => (
                        <ItemContainer key={item.id}>
                            <Avatar sx={{width: 50, height: 50, marginRight: "10px"}} alt={item.title}
                                    src={item.imgURL}/>
                            <div>
                                <NoticeMessage>{item.message}</NoticeMessage>
                                <TimeMessage>{item.time}</TimeMessage>
                            </div>
                        </ItemContainer>
                    ))) :

                    (
                        <StyledBox>
                            <p>아직 알람이 없습니다</p>
                        </StyledBox>
                    )
            }
        </div>
    );
};

export default NoticeList;

const ItemContainer = styled(Box)`
            padding: 15px 0 15px 20px;
            display: flex;
            background-color: #fff;
            margin-bottom: 2px;
            `

const NoticeMessage = styled(Typography)`
            font-weight: 500;
            font-size: 14px;
            line-height: 20.72px;
            color: #000;
            margin-bottom: 6px;
            `

const TimeMessage = styled(Typography)`
            font-size: 12px;
            line-height: 15.9px;
            color: #707070;
            `

const StyledBox = styled(Box)`
            text-align: center;
            padding-top: 30px;

            p {
            font - weight: 500;
            font-size: 14px;
            line-height: 18.55px;
            color: #000;
        }
            `