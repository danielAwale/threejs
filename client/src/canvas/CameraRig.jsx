// will be for the movement of the camera
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  // set the model rotation smoothly
  return <group ref={group}>{children}</group>;
};

export default CameraRig;
