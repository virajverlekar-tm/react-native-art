/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import {NativeSurfaceView} from './nativeComponents';

// Create the context
export const SurfaceContext = React.createContext({ isInSurface: false });

type SurfaceProps = {
  height: number,
  width: number,
  children: React.Node,
  style?: any,
};

export default class Surface extends React.Component<SurfaceProps> {
  static childContextTypes = {
    isInSurface: PropTypes.bool,
  };
  static defaultProps = {
    height: 0,
    width: 0,
  };

  render() {
    const {height, width} = this.props;

    return (
      <SurfaceContext.Provider value={{ isInSurface: true }}>
        <NativeSurfaceView style={[this.props.style, {height, width}]}>
          {this.props.children}
        </NativeSurfaceView>
      </SurfaceContext.Provider>
    );
  }
}
