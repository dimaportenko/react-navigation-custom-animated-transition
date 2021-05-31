import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function BarCodeIcon(props: SvgProps) {
  return (
    <Svg width={44} height={31} viewBox="0 0 44 31" fill="none" {...props}>
      <Path
        d="M19.2 26.87h-3.04V4.13h3.04v22.74zM43.515 4.13h-3.04v22.74h3.04V4.13zm-30.396 0H7.041v22.74h6.08V4.13zm15.343 0h-6.224v22.74h6.224V4.13zM4 4.13H.961v22.74h3.04V4.13zm34.883 0h-3.04v22.74h3.04V4.13zM30.606 4.13h2.895v22.74h-2.895z"
        fill="#000"
      />
    </Svg>
  );
}

export default BarCodeIcon;
