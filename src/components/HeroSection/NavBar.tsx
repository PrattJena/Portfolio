import Logo from '../../assets/images/PJ.svg';
import { Links } from './Links';

const links = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Github', href: '#' },
];

export const NavBar = () => {
  return (
    <nav className='navbar z-40 flex h-[5vh] w-full flex-row justify-between overflow-clip opacity-0'>
      <div className='flex h-[100%] items-center'>
        <img src={Logo} className='h-full' />
      </div>
      <div className='flex flex-col justify-between text-right lg:w-[11%] lg:flex-row lg:items-center'>
        {links.map((link, i) => {
          return (
            <Links key={i} href={link.href}>
              {link.name}
            </Links>
          );
        })}
      </div>
    </nav>
  );
};
