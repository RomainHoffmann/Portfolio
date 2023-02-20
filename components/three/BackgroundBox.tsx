import { useFrame } from "@react-three/fiber"
import { gsap } from "gsap"
import React, { useEffect } from "react"
import * as THREE from "three"
import { Group } from "three"

const SCALE = 0.9
const SPACE = 1.45
const SPEED = 0.5

const BackgroundBox = ({
  position,
  boxModel,
}: {
  position: [number, number, number]
  boxModel: Group
}) => {
  const model = boxModel
  const body = React.useRef<THREE.Mesh>(null)
  const hovered = React.useRef(false)

  const rotate = () => {
    hovered.current = true
    gsap.to(body.current.rotation as unknown as HTMLElement, {
      duration: 2.5,
      x: body.current.rotation.x + Math.PI * 2,
      y: body.current.rotation.y + Math.PI * 2,
      ease: "power2.inOut",
      onComplete: () => {
        hovered.current = false
      },
    })
  }

  const bump = () => {
    gsap.to(body.current.scale as unknown as HTMLElement, {
      duration: 0.2,
      x: SCALE * 0.8,
      y: SCALE * 0.8,
      z: SCALE * 0.8,
      onComplete: () => {
        gsap.to(body.current.scale as unknown as HTMLElement, {
          duration: 0.2,
          x: SCALE,
          y: SCALE,
          z: SCALE,
        })
      },
    })
  }

  useFrame(({ clock, mouse }) => {
    //Apparition animation

    body.current.position.lerp(
      new THREE.Vector3(
        position[0] * SPACE,
        position[1] * SPACE,
        position[2] * SPACE
      ),
      0.05
    )

    //Rotate the box and handle the hover animation
    if (!hovered.current) {
      const rotation = new THREE.Euler(0, 0, 0)
      rotation.x = -mouse.y * SPEED
      rotation.y = mouse.x * SPEED
      const quaternion = new THREE.Quaternion().setFromEuler(rotation)

      body.current.quaternion.slerp(quaternion, 0.01)
    }
  })

  useEffect(() => {
    body.current.position.set(0, 0, 0)
    body.current.scale.set(SCALE, SCALE, SCALE)
  }, [])

  return (
    <group
      onPointerEnter={() => {
        rotate()
      }}
      onClick={() => {
        console.log("test")

        bump()
      }}
    >
      <primitive ref={body} object={model}></primitive>
    </group>
  )
}

export default BackgroundBox
