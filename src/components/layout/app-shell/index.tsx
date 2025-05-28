import { Outlet } from 'react-router';
import { NavBarItem } from '../../navigation/nav-bar-item';
import { IconLayoutDashboard, IconSeedling, IconUsers, IconSettings,IconLogout } from '@tabler/icons-react';
import { useState } from 'react';
import ButtonItem from '../../general/button';

interface IUserInfo
{
  email: string,
  name: string
}

const Dummy: IUserInfo = 
{
  email: "juanb.ltda@mail.com",
  name: "Juan Bueno"
}

export function AppShell() {

  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
  return (
    <div className="flex h-screen flex-col font-josefin">
      <header className="h-[60px]  gap-1 flex p-3 items-center text-2xl font-bold bg-white  border-b-1 border-b-gray-300"> 
        <img src="assets/icons/green-logo.png" alt="" className='h-10 ml-2' />
        <h3 className='font-josefin self-end text-center text-(--almostBlack)'>IAgro</h3>
      </header> 
      <div className="min-h-[90%] flex">
        <aside className="flex flex-col items-center h-full w-[20%] min-w-[300px] bg-white p-4 border-r-1 border-gray-300 overflow-y-auto
        ">
          <div className='flex flex-col gap-4 items-center w-full h-[85%]'>
            <NavBarItem icon={IconLayoutDashboard} name={'Dashboards'} />
            <NavBarItem icon={IconSeedling} name={'My Fields'} />
            <NavBarItem icon={IconUsers} name={'My Profile'} />
          </div>
          <div className='flex flex-col gap-4 justify-start w-full h-[15%]  '>
            <div className='flex items-center gap-4'>
              <h2 className='flex justify-center text-white text-center items-center bg-(--mainGreen) rounded-xl w-[45px] h-[45px]'>{userInfo? userInfo.name.substring(0, 1) : Dummy.name.substring(0, 1) }</h2>
              <div className='flex flex-col'>
                <h3 className='text-xl text-(--almostBlack) font-semibold'>{userInfo? userInfo.name.substring(0) : Dummy.name}</h3>
                <p className='text-xs text-gray-500 font-normal'>{userInfo? userInfo.name.substring(0) : Dummy.email}</p>
              </div>
            </div>
            <div className='flex'>
              <ButtonItem text={'Settings'} bgColor={'mainGray'} hoverColorBg={'hoverDarkerGray'} icon={IconSettings} textColor={'mainWhite'}/>
              <ButtonItem text={'Log Out'} hoverColorBg={'mainGray'} icon={IconLogout} textColor={'almostBlack'}/>
            </div>
          </div>
        </aside>
        <main className="flex w-[80%] p-6 overflow-y-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
