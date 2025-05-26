import { Outlet } from 'react-router';

export function AppShell() {
  return (
    <div className="flex h-screen flex-col font-josefin">
      <header className="h-[8%] flex items-end text-2xl font-bold pb-3 bg-white  border-b-1 border-b-gray-300"> 
        <img src="assets/icons/colorful-logo-iagro.png" alt="" className='h-12' />
        <p className='font-josefin text-center text-almostBlack2  '>IAgro</p>
      </header> 
      <div className="h-[90%] flex">
        <aside className="h-full w-[20%] bg-white p-4 border-r-1 border-gray-300 overflow-y-auto">
          <h1>navbar</h1>
        </aside>
        <main className="flex w-[80%] p-6 overflow-y-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
