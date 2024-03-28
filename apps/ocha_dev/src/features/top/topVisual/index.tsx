import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import styles from './style.module.css'

import { Particle } from '~/features/top/particle'

export const TopVisual = (): React.ReactNode => {
  return (
    <div className={styles.topVisual}>
      <Canvas
        style={{
          position: 'absolute',
        }}
      >
        <PerspectiveCamera />
        <Particle />
      </Canvas>
      <div className={styles.logo}>
        <h1 className={styles.title}>OCHA .dev</h1>
      </div>
    </div>
  )
}
