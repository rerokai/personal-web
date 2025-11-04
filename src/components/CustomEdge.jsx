import React from 'react';
import { BaseEdge, getBezierPath } from '@xyflow/react';
import "./../styles/custom_edge.css"

function CustomEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style = {}, markerEnd }) {
  
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      {}
      <BaseEdge
        id={id}
        path={edgePath}
        style={{ ...style }}
        className="custom-edge"
        markerEnd={markerEnd}
      />

      {}
      <path
        d={edgePath}
        fill="none"
        strokeOpacity={0}
        strokeWidth={10}
        className="custom-edge-interaction"
      />
    </>
  );
}

export default CustomEdge;