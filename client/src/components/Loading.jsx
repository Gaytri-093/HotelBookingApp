import React , {CSSProperties} from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import { useState } from 'react';



function Loading() {

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "green",
      };
  return (
    <div style={{marginTop: "150px"}}>
        <div className="sweet-loading text-center">
      
      <CircleLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        
      />
    </div>
      
    </div>
  )
}

export default Loading
