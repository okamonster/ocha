/* eslint-disable react/no-unknown-property */
import { useMemo } from 'react'
import { SphereGeometry } from 'three'
import { useFrame } from '@react-three/fiber'

import vertex from '~/features/top/shader/vertexShader.glsl'
import fragment from '~/features/top/shader/fragmentShader.glsl'

export const Particle = (): React.ReactNode => {
  const spherePosition = useMemo(() => {
    const sphereGeometry = new SphereGeometry(3, 120, 120)
    const positions = sphereGeometry.attributes.position.array
    return positions
  }, [])

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    }),
    [],
  )

  useFrame(() => {
    shaderArgs.uniforms.uTime.value++
  })

  return (
    <points rotation={[0, 0, Math.PI / 3]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={spherePosition}
          itemSize={3}
          count={spherePosition.length / 3}
        />
      </bufferGeometry>
      <shaderMaterial
        args={[shaderArgs]}
        transparent
        depthTest={false}
        depthWrite={false}
      />
    </points>
  )
}
