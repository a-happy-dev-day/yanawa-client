import { Box } from '@mui/material';
import Postcode from './Postcode';

const Address = () => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <Box component="div" sx={{ bgcolor: 'white', width: 1, height: 765, position: 'absolute', bottom: 0, zIndex: 10 }}>
      <Postcode onComplete={handleComplete} className="bg-gray" />
    </Box>
  );
};

export default Address;
