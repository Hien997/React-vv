import React from 'react'
import { SketchPicker, ColorResult } from 'react-color'
import { Col } from 'reactstrap'
import { SelectType } from '../../containers/Option/types'
type Props = {
    type: SelectType;
    color: string;
    onChangeColor: Function
}

const ColorPicker: React.FC<Props> = ({ type, color, onChangeColor }) => {
    const onChangeColorSelect = (color: ColorResult) => {
        onChangeColor(color.hex)
    }

    return <>
        <Col md={type === SelectType.BgColor ? "12" : '6'} xs={type === SelectType.BgColor ? "12" : '6'} className="m-0" >
            <SketchPicker color={color} onChange={onChangeColorSelect} />
        </Col>
    </>
}

export default React.memo(ColorPicker)