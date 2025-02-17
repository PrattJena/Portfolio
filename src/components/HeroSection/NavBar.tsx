import { useState } from 'react';
import Logo from '../../assets/images/PJ.svg';
import { Links } from './Links';
import { motion } from 'motion/react'; // Ensure correct import

const links = [
  { name: 'LinkedIn', href: '#' },
  { name: 'Github', href: '#' },
];

export const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.nav className='navbar flex h-[3.4vh] w-full flex-row justify-between overflow-y-clip opacity-0 lg:h-[calc(2vh+1vw)]'>
      <div
        className='flex h-[100%] cursor-pointer items-center'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <motion.img
          src={Logo}
          className='h-full'
          animate={{ rotate: isHovered ? -180 : 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        />
        {/* <span className='text-p2 ml-[var(--gap-sm)] font-[Aeonik] font-bold text-[#F3F2F2] md:ml-[var(--gap-md)] lg:ml-[var(--gap-lg)]'>
          PJ
        </span> */}
      </div>
      <div className='lg:gap-sm flex flex-col justify-between text-right lg:flex-row lg:items-center'>
        {links.map((link, i) => (
          <Links key={i} href={link.href}>
            {link.name}
          </Links>
        ))}
      </div>
    </motion.nav>
  );
};
