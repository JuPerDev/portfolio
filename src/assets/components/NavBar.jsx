import { ChangeTheme } from "./ChangeTheme";

export const NavBar = () => {
  return (
    <div className='fixed bottom-2 left-0 right-0 mx-auto'>
      <nav>
        <div className='min-w-[300px] max-w-[300px] flex items-center justify-center gap-2  px-4 py-1 rounded-full bg-slate-500/15 backdrop-blur-sm mx-auto'>
          <a href='#home' className='text-3xl p-1'>
            <i className='ri-home-line'></i>
          </a>
          <a href='#about_me' className='text-3xl p-1'>
            <i className='ri-user-line'></i>
          </a>
          <a href='#skills' className='text-3xl p-1'>
            <i className='ri-file-unknow-line'></i>
          </a>
          <a href='#projects' className='text-3xl p-1'>
            <i className='ri-terminal-box-line'></i>
          </a>
          <ChangeTheme />
        </div>
      </nav>
    </div>
  );
};
