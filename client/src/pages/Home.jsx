import React from 'react'
//AnimatePresence enables the animation of components that have been removed from the tree.
import {motion, AnimatePresence} from "framer-motion"

// This hook actually returns a wrapped snapshot in a proxy for render optimization instead of a plain object compared to snapshot() method. Rule of thumb: read from snapshots, mutate the source. The component will only re-render when the parts of the state you access have changed, it is render-optimized.
import {useSnapshot} from "valtio";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home