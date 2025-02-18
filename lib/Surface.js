// Surface.js (or wherever you define the Surface component)

import * as React from 'react';
import { NativeSurfaceView } from './nativeComponents';

export const SurfaceContext = React.createContext({ isInSurface: false }); // Define and export the context

type SurfaceProps = {
  height: number,
  width: number,
  children: React.Node,
  style?: any,
};

export default class Surface extends React.Component<SurfaceProps> {
  static defaultProps = {
    height: 0,
    width: 0,
  };

  render() {
    const { height, width } = this.props;

    return (
      <SurfaceContext.Provider value={{ isInSurface: true }}>
        <NativeSurfaceView style={[this.props.style, { height, width }]}>
          {this.props.children}
        </NativeSurfaceView>
      </SurfaceContext.Provider>
    );
  }
}
