import Link from "next/link";
import { ComponentType } from "react";
import { Url } from "url";
type IconProps = {
  size?: number;
  strokeWidth?: number;
  color?: string
};
type ButtonProps = {
  text: string;
  bgColor: string;
  borderColor: string;
  btnHeight: string | number;
  btnRadius: string | number;
  textColor: string;
  hover?: string[];
  icon: ComponentType<IconProps>
  iconProps?: IconProps
  href?: Url | string 
  arialabel?: string

};

const Button = ({
  text,
  bgColor,
  borderColor,
  btnHeight,
  btnRadius,
  textColor,
  hover,
  icon:Icon,
  iconProps,
  href,
  arialabel
}: ButtonProps) => {
  hover = hover ?? []
  
  return (
  <Link
    href={href ?? "#"}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={arialabel}
    >
<button
  className={`relative overflow-hidden flex items-center gap-4 justify-center w-auto px-6 border cursor-pointer transition-all duration-300 shadow-sm ${hover.map(h => `hover:${h}`).join(" ")}`}
  style={{
    height: btnHeight,
    borderRadius: btnRadius,
    backgroundColor: bgColor,
    borderColor: borderColor,
  }}
  aria-label={arialabel}
>
      <span
        className="text-lg font-normal leading-[100%] z-10"
        style={{ color: textColor }}
      >
        {text}
      </span>
      <Icon {...iconProps}/>
    </button>
    </Link>
  )
}

export default Button
