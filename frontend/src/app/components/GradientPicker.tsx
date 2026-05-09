import React from 'react'
import ColorPicker from 'react-best-gradient-color-picker'
import useState from 'react'
export default function GradientPicker(){
    const [color, setColor] = useState('rgba(255,255,255,1)');
    return(
        <div className="gradient-wrapper">
            return <ColorPicker value={color} onChange={setColor} />
        </div>
    )
}