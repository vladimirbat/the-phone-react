import { DeviceVariantOption } from '../model/products.model';
import './phone-colors.scss';

/* eslint-disable-next-line */
export interface PhoneColorsProps {
  colors: DeviceVariantOption[]
}

export function PhoneColors(props: PhoneColorsProps) {
  const {colors} = props;
  return (
    <div className="phone-colors-container mt-1">
      {colors.map((color)=> renderColor(color))}
    </div>
  );
}

export default PhoneColors;

function renderColor(color:DeviceVariantOption): JSX.Element | null{
  if(!color?.code){
    return null;
  }
  const style = {backgroundColor: color.code};
  return <div className="phone-color" style={style}></div>
}
