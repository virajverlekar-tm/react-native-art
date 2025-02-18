// Group.js (or wherever you define the Group component)

import * as React from 'react';
import invariant from 'invariant';
import { NativeGroup } from './nativeComponents';
import { extractOpacity, extractTransform, extractShadow } from './helpers';
import { SurfaceContext } from './Surface'; // Import the context from Surface
import type { OpacityProps, TransformProps, ShadowProps } from './types';

type GroupProps = OpacityProps & ShadowProps & TransformProps & {
  children: React.Node,
};

const Group = (props: GroupProps) => {
  // Use context to access isInSurface
  const { isInSurface } = React.useContext(SurfaceContext);

  // Ensure the component is inside a Surface context
  invariant(isInSurface, 'ART: <Group /> must be a child of a <Surface />');

  return (
    <NativeGroup
      opacity={extractOpacity(props)}
      transform={extractTransform(props)}
      shadow={extractShadow(props)}
    >
      {props.children}
    </NativeGroup>
  );
};

export default Group;
