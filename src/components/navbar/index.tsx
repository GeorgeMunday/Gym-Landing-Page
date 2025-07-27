import ActionButton from '@/Buttons/ActionButton';
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/modules/types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import logo from '../../assets/Logo (1).png';
import Link from './link';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumsScreens = useMediaQuery('(min-width: 1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className={`${flexBetween} top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* LEFT SIDE */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={logo} alt="logo" />
          </div>

          {/* RIGHT SIDE */}
          {isAboveMediumsScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-small`}>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8 text-small`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>
          ) : (
            <button
              aria-label="Open menu"
              className="rounded-full bg-secondary-500 p-2 text-white"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" aria-label="Open menu" />
            </button>
          )}
        </div>
      </div>

      {/*Mobile Menu Modal */}
      {!isAboveMediumsScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button aria-label="Open menu" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
