import type { Icon, IconProps } from "@tabler/icons-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { CustomColors } from "../../../constants/custom-colors";

interface IButtonProps {
  text: string;
  textColor?: keyof typeof CustomColors.text;
  bgColor?: keyof typeof CustomColors.background;
  hoverColorBg?: keyof typeof CustomColors.background;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  onClick?: () => void;
}

export default function ButtonItem({
  text,
  textColor,
  bgColor,
  hoverColorBg,
  icon: Icon,
  onClick,
}: IButtonProps) {
  const resolvedTextColor = textColor && CustomColors.text[textColor]
    ? CustomColors.text[textColor]
    : "text-inherit";

  const resolvedBgColor = bgColor && CustomColors.background[bgColor]
    ? CustomColors.background[bgColor]
    : "bg-inherit";

  const resolvedHoverBgColor = hoverColorBg && CustomColors.background[hoverColorBg]
    ? `${CustomColors.background[hoverColorBg]}`
    : "";

  return (
    <div
      onClick={onClick}
      className={`flex gap-4 group w-[140px] px-4 py-2 rounded-md cursor-pointer ${resolvedBgColor} ${resolvedHoverBgColor}`}
    >
      <Icon className={`text-xl ${resolvedTextColor}`} />
      <p className={`${resolvedTextColor}`}>
        {text}
      </p>
    </div>
  );
}
