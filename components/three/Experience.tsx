import {
  OrbitControls,
  OrthographicCamera,
  useGLTF,
  useHelper,
} from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useRef } from "react"
import { CameraHelper } from "three"
import BackgroundBox from "./BackgroundBox"

const Experience = () => {
  const positions: [number, number, number][] = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 2, 0],
    [1, 0, 0],
    [2, 0, 0],
    [-1, 0, 0],
    [-2, 0, 0],
    [0, -1, 0],
    [0, -2, 0],
    [1, 1, 0],
    [-1, -1, 0],
    [-1, 1, 0],
    [1, -1, 0],
  ]

  const { scene } = useGLTF("/models/backgroundbox.glb")

  return (
    <>
      <ambientLight intensity={0.2}></ambientLight>
      <directionalLight
        position={[-20, 20, 20]}
        intensity={1.5}
      ></directionalLight>
      <directionalLight
        position={[20, -20, -20]}
        intensity={2}
        // color="#1A1E33"
        color="#0B0B16"
      ></directionalLight>
      <group scale={0.9}>
        {positions.map((position, index) => (
          <BackgroundBox
            key={index}
            position={position}
            boxModel={scene.clone()}
          />
        ))}
      </group>
    </>
  )
}

export default Experience
