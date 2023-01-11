import { DeviceVariantOption } from '@the-phone/commons';
import './phone-colors.scss';

/* eslint-disable-next-line */
export interface PhoneColorsProps {
  colors: DeviceVariantOption[];
  colorSelected?: ColorSelectedCallback;
}

export function PhoneColors(props: PhoneColorsProps) {
  const { colors, colorSelected } = props;
  return (
    <div className="phone-colors-container mt-1">
      {colors.map((color) => renderColor(color, colorSelected))}
    </div>
  );
}

export default PhoneColors;

function renderColor(color: DeviceVariantOption, colorSelected?: ColorSelectedCallback): JSX.Element | null {
  if (!color?.code) {
    return null;
  }
  const style = { backgroundColor: color.code };
  return (
    <div
      key={color.code}
      className="phone-color"
      style={style}
      onClick={(event) => {
        colorSelected ? colorSelected(color) : null;
      }}
    ></div>
  );
}

export type ColorSelectedCallback = (colorOption: DeviceVariantOption) => void;
