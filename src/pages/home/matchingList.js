import React from 'react';
import ListCard from '../../components/ListCard';

const matchingList = ({ listData }) => {
  return (
    <>
      {listData.map((item) => (
        <ListCard
          placeImg={item.placeImg}
          wish={item.wish}
          state={item.state}
          title={item.title}
          date={item.date}
          profile={item.profile}
        />
      ))}
    </>
  );
};

export default matchingList;
