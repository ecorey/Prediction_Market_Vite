import React from "react";
import { Stack } from '@mui/material';
import Image from "next/image";


const Rad = () => {
  return (
    <div>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} padding={10}>
        {/* Animated div with image */}
        <div className="radcoin">
          <span>
            <Image
              src="/radbro3d.gif"
              alt="radbro"
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

export default Rad;
