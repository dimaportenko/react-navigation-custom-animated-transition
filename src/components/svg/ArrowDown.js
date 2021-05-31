/**
 * Created by Dima Portenko on 19.04.2021
 */
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={13} height={8} viewBox="0 0 13 8" fill="none" {...props}>
      <Path
        d="M11.228.62a1 1 0 011.415 1.414l-5 5a1 1 0 01-1.415 0l-5-5A1 1 0 112.643.62l4.293 4.293L11.228.62z"
        fill="#828282"
        fillOpacity={0.66}
      />
    </Svg>
  );
}

export default SvgComponent;
