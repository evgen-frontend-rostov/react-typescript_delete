import React, { FC, useState } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

interface IBlock {
  width: string;
  height: string;
  variant: CardVariant;
  onFunc: (num: number) => void;
}

export const Block: FC<IBlock> = ({ width, height, children, variant, onFunc}) => {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '2px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'orange' : '',
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
      }}
      onClick={() => onFunc(state)}
    >
      {children}
    </div>
  );
};
