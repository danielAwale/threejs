import React from 'react'
//AnimatePresence enables the animation of components that have been removed from the tree.
import {motion, AnimatePresence} from "framer-motion"

// This hook actually returns a wrapped snapshot in a proxy for render optimization instead of a plain object compared to snapshot() method. Rule of thumb: read from snapshots, mutate the source. The component will only re-render when the parts of the state you access have changed, it is render-optimized.
import {useSnapshot} from "valtio";

import state from '../store'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state);
  return (
   <AnimatePresence>
    {snap.intro && (
      <motion.section className='home' {...slideAnimation('left')}>
        <motion.header {...slideAnimation("down")}>
          <img src="./threejs.png" alt="logo" className='w-8 h-8 object-contain' />
        </motion.header>

        <motion.div className='home-content' {...headContainerAnimation}>
          {/* the motion div below will contain the header */}
          <motion.div {...headTextAnimation}>
            <h1 className='head-text'>
              LET'S <br className='xl:block hidden' /> DO IT!
            </h1>
          </motion.div>

          <motion.div
            {...headContentAnimation}
            className="flex flex-col gap-5"
          >
            <p className='max-w-md font-normal text-gray-600 text-base'>Create your unique and exclusive shirt with our brand new 3d customiuzation tool. <strong>Unleash your imagination</strong> and define your own style</p>
          </motion.div>
          
        </motion.div>
      </motion.section>
    )}
   </AnimatePresence>
  )
}

export default Home