import { PivotControls } from "@react-three/drei";

const PrivateControl = () => {
   
    return (
        <>
        <PivotControls 
        anchor={[-1, 0, 0]} 
        depthTest={false}
        axisColors={["black", "gray", "pink"]}
        lineWidth={7} // Aumentar a largura da linha
        scale={2} 
        >
            {/*  Os controles de pivô são semelhantes aos controles de transformação, mas têm uma aparência melhor e também têm diferentes características. */}
            <mesh position-x={2}
            scale={2}
            >
                <boxGeometry />
                <meshBasicMaterial color="skyblue" />
            </mesh>

        </PivotControls>
        </>
    )
}

export default PrivateControl;