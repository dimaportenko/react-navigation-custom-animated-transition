import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function InfoCircleIcon(props: SvgProps) {
  return (
    <Svg width={32} height={33} viewBox="0 0 32 33" fill="none" {...props}>
      <Path
        d="M16.239.815C7.574.815.549 7.84.549 16.5c0 8.662 7.025 15.685 15.69 15.685 8.664 0 15.69-7.024 15.69-15.685 0-8.661-7.026-15.685-15.69-15.685zm0 28.709C9.045 29.524 3.21 23.69 3.21 16.5c0-7.191 5.835-13.024 13.029-13.024 7.193 0 13.028 5.833 13.028 13.024 0 7.191-5.835 13.024-13.028 13.024z"
        fill="#000"
      />
      <Path
        d="M14.414 10.338a1.823 1.823 0 103.647 0 1.823 1.823 0 00-3.647 0zm.984 3.778a.424.424 0 00-.424.424v9.522c0 .233.19.423.424.423h1.68c.234 0 .424-.19.424-.423V14.54a.424.424 0 00-.423-.423h-1.681z"
        fill="#000"
        stroke="#000"
        strokeWidth={0.286}
      />
    </Svg>
  );
}

export default InfoCircleIcon;
