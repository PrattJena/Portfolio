import { useState } from 'react';
import Logo from '../../assets/images/PJ.svg';
import { Links } from './Links';
import { motion } from 'motion/react'; // Ensure correct import
import { links } from '../../constants';

export const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const onClickUrl =
    (url: string): React.MouseEventHandler<HTMLAnchorElement> =>
    (e) => {
      e.preventDefault();
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    };

  return (
    <motion.nav className='navbar flex h-[3.4vh] w-full flex-row justify-between overflow-y-clip opacity-0 lg:h-[calc(2vh+1vw)]'>
      <div
        className='logo-entry flex h-[100%] cursor-pointer items-center'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleLogoClick}>
        <motion.img
          src={Logo}
          className='h-full'
          animate={{ rotate: isHovered ? -180 : 0 }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
        />
      </div>
      <div className='lg:gap-sm flex flex-col justify-between text-right lg:flex-row lg:items-center'>
        {links.map((link, i) => (
          <Links key={i} onClick={onClickUrl(link.url)}>
            {link.name}
          </Links>
        ))}
      </div>
    </motion.nav>
  );
};
