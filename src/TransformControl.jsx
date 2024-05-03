import { TransformControls, OrbitControls } from "@react-three/drei";


const TransformControl = () => {
  
  
    return (
    <>

    <OrbitControls
    makeDefault // Desativar os controles de orbita e comecar a mover a malha usando o gizmo
    />


    <TransformControls
     position-x={2}
     mode="rotate"
    //  mode="translate"
    //  mode="scale"
     >
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="#B900F7" />
      </mesh> 
    </TransformControls>
    </>
  )
}

export default TransformControl;
