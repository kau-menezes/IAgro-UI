import type { Icon, IconProps } from '@tabler/icons-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

interface INavBarItemProps {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  name: string;
}


export function NavBarItem({ icon: Icon, name }: INavBarItemProps) {
  return (
    <div
      data-active={true}
      className="flex gap-4 group h-10 w-[95%] min-w-[170px] p-2 font-josefin bg-white rounded-lg hover:bg-[var(--lightGreen)] hover:cursor-pointer"
    >
      <Icon className="text-(--almostBlack) text-xl group-hover:text-[var(--mainGreen)]" />
      <h3 className="text-(--almostBlack) text-xl group-hover:text-[var(--mainGreen)]">{name}</h3>
    </div>
  );
}
