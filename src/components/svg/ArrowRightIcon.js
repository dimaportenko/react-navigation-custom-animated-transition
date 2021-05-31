/**
 * Created by Dima Portenko on 16.04.2021
 */
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={9} height={15} viewBox="0 0 9 15" fill="none" {...props}>
      <Path
        d="M1.27 2.421A1.143 1.143 0 012.887.805L8.6 6.519c.446.446.446 1.17 0 1.616L2.887 13.85a1.143 1.143 0 01-1.617-1.617l4.906-4.906L1.27 2.421z"
        fill="#A4A4A4"
      />
    </Svg>
  );
}

export default SvgComponent;
