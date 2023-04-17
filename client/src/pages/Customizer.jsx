import React, { useState, useEffect } from 'react';
import { AnimationPresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config';
import { fadeAnimation, slideAnimation } from '../config/motion';

const Customizer = () => {
  return <div>Customizer</div>;
};

export default Customizer;
