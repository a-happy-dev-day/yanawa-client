import React from 'react';
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Avatar, Badge, Box, styled, Typography} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from "@mui/icons-material/Add";
import crown from "../../assets/images/crown.png";

const ListCard = ({placeImg, wish, state, title, date, profile}) => {
    return (
        <Container>
            <LeftCont>
                <img src={placeImg} alt="테니스코트"/>
                <IconCont>
                    {
                        wish === "Y" ? <FavoriteIcon sx={{color: '#0027FD', width: '24px', height: '24px'}}/> :
                            <FavoriteBorderIcon sx={{color: '#000', width: '24px', height: '24px'}}/>
                    }
                </IconCont>
            </LeftCont>
            <RightCont>
                <State>{state}</State>
                <Title>{title}</Title>
                <Date>{date}</Date>
                <ProfileCont>
                    {
                        profile.map((profile) =>
                            <div>
                                {
                                    profile.host === "Y" ? (<Badge
                                            overlap="circular"
                                            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                                            badgeContent={<SmallAvatar alt="host"/>}
                                        >
                                            <Avatar sx={{width: '30px', height: '30px', marginRight: '4px'}} alt="profile"
                                                    src={profile.profileImg}/>
                                        </Badge>) :
                                        (
                                            profile.profileImg === "N" ? <Avatar
                                                    sx={{
                                                        width: '30px',
                                                        height: '30px',
                                                        bgcolor: '#fff',
                                                        border: '1px solid #B3BEFE'
                                                    }}
                                                    alt="profile">
                                                    <AddIcon sx={{color: '#B3BEFE'}}/> </Avatar> :
                                                <Avatar sx={{width: '30px', height: '30px', marginRight: '4px'}}
                                                        alt="profile"
                                                        src={profile.profileImg}/>
                                        )
                                }
                            </div>
                        )}
                </ProfileCont>
            </RightCont>
        </Container>
    );
};

export default ListCard;

const SmallAvatar = styled(Avatar)(({theme}) => ({
    width: 12,
    height: 12,
    background: `no-repeat center/12px 8px url(${crown}) #fff`,
    '& .MuiAvatar-fallback': {
        display: 'none',
    },
}));

const Container = styled(Box)`
    display: flex;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    height: 120px;
    margin-bottom: 16px;
`

const LeftCont = styled(Box)`
    position: relative;
    width: 100px;
    img {
        width: 100%;
        height: 100%;
    }
`;
const IconCont = styled(Box)`
    position: absolute;
    bottom: 10px;
    left: 10px;
`

const RightCont = styled(Box)`
    padding: 10px;
`

const State = styled(Typography)`
    font-weight: 500;
    font-size: 12px;
    line-height: 15.9px;
    color: #fff;
    background-color: #3E3E3E;
    width: 40px;
    text-align: center;
    padding: 3px 0;
    border-radius: 11px;
    margin-bottom: 4px;
`

const Title = styled(Typography)`
    font-weight: 500;
    font-size: 14px;
    line-height: 18.55px;
    margin-bottom: 5px;
`

const Date = styled(Typography)`
    font-size: 10px;
    line-height: 13.25px;
    margin-bottom: 7px;
 `

const ProfileCont = styled(Box)`
    display: flex;    
`