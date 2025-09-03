import Link from "next/link";
import { ComponentType } from "react";

type IconProps = {
  size?: number;
  strokeWidth?: number;
  color?: string;
};

type ButtonProps = {
  text: string;
  bgColor?: string;
  borderColor?: string;
  btnHeight: string | number;
  btnRadius: string | number;
  textColor?: string;
  hover?: string[];
  icon: ComponentType<IconProps>;
  iconProps?: IconProps;
  href?: string;
  arialabel?: string;
  download?: boolean; 
};

const Button = ({
  text,
  bgColor,
  borderColor,
  btnHeight,
  btnRadius,
  textColor,
  hover,
  icon: Icon,
  iconProps,
  href,
  arialabel,
  download,
}: ButtonProps) => {
  hover = hover ?? [];

  const classes = `relative overflow-hidden flex items-center gap-4 justify-center w-auto px-6 border cursor-pointer transition-all duration-300 shadow-sm ${hover
    .map((h) => `hover:${h}`)
    .join(" ")}`;

  const style = {
    height: btnHeight,
    borderRadius: btnRadius,
    backgroundColor: bgColor,
    borderColor: borderColor,
  };

  const content = (
    <>
      <span
        className="text-lg font-normal leading-[100%] z-10"
        style={{ color: textColor }}
      >
        {text}
      </span>
      {Icon && <Icon {...iconProps} />}
    </>
  );

  if (download && href) {
    return (
      <a
        href={href as string}
        download
        className={classes}
        style={style}
        aria-label={arialabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={arialabel}
    >
      <button className={classes} style={style} aria-label={arialabel}>
        {content}
      </button>
    </Link>
  );
};

export default Button;
