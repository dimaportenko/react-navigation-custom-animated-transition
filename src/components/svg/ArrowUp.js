/**
 * Created by Dima Portenko on 19.04.2021
 */
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={12} height={8} viewBox="0 0 12 8" fill="none" {...props}>
      <Path
        d="M10.293 7.417a1 1 0 101.414-1.414l-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 101.414 1.414L6 3.124l4.293 4.293z"
        fill="#828282"
        fillOpacity={0.66}
      />
    </Svg>
  );
}

export default SvgComponent;
