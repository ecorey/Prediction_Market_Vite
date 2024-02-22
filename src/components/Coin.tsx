import React from "react";
import { Stack } from '@mui/material';
import Image from "next/image";


const Coin = () => {
  return (
    <div>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} padding={5}>
        {/* Animated div with image */}
        <div className="radcoin">
          <span>
            <Image
              src="https://radbro.xyz/images/radcoin.gif"
              alt="radcoin"
              width={125}
              height={125}
              layout="fixed"
            />
          </span>
        
        </div>
      </Stack>
    </div>
  );
};

export default Coin;
