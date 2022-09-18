import React from 'react';
import { Box, InputLabel, styled, TextareaAutosize } from '@mui/material';

const Comment = ({ details, onChangeHandler }) => {
  return (
    <Box sx={{ marginBottom: '51px' }} component="div">
      <StyledLabel htmlFor="comment">하고 싶은 말</StyledLabel>
      <StyledTextarea
        id="comment"
        placeholder="매칭할 상대에게 하고 싶은 말을 적어주세요."
        style={{ height: '125px' }}
        name="details"
        onChange={onChangeHandler}
        value={details}
      />
    </Box>
  );
};

export default Comment;

const StyledLabel = styled(InputLabel)`
  font-size: 12px;
  color: #707070;
  margin-bottom: 11px;
`;

const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  height: 125px;
  padding: 10px;
  font-size: 12px;
`;
