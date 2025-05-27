import type { Icon, IconProps } from "@tabler/icons-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface IButtonProps
{
    text: string, 
    color: string,
    hoverColorBg: string,
    hoverColorText: string,
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>,
    onClick?: () => void; 

}

export default function ButtonItem({ text, color, hoverColorBg, hoverColorText, icon: Icon, onClick }: IButtonProps)
{
    return(
        <div className={`flex gap-4 group min-w-[140px] bg-(--${color}) hover:bg-(--${hoverColorBg})`} onClick={onClick}>
            <Icon className={`text-(--almostBlack) text-xl group-hover:text-(--${hoverColorText})`} />
            <p className={`text-(--${color}) group-hover:text-(--${hoverColorText})`}>{text}</p>   
        </div>
    )
}