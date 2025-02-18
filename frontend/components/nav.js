import React, {useContext, useMemo} from "react";
import {Disclosure} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import Link from "next/link";
import GlobalContext from "../contexts/GlobalContext";
import {useRouter} from "next/router";
import {ConnectButton} from "@rainbow-me/rainbowkit";

const Nav = () => {
  const {defaultNav} = useContext(GlobalContext) || {defaultNav: []};
  const router = useRouter();

  const slugFromPath = useMemo(() => {
    const slug = router?.asPath?.split("/")[2] || "";
    return slug.split("?")[0];
  }, [router.asPath]);

  return (
    <Disclosure as="nav" className="color-black sm:pt-1 pt-4">
      {({open}) => (
        <>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">

            <div className="flex justify-between items-center h-16">

              <div className="flex-shrink-0">
                <Link href={"/"}>
                  <a><img className="block w-auto h-10 md:hidden" src="/minipent-icon.svg" alt="{sitename}"/></a>
                </Link>
                <Link href={"/"}>
                  <a><img className="hidden w-auto h-10 md:block" src="/minipent-logo.svg" alt="{sitename}"/></a>
                </Link>
              </div>

              <div className={"hidden lg:block flex items-center justify-between"}>
                <div>
                  <ul className="flex space-x-3">
                    {defaultNav.map((item) => {
                      return (
                        <li key={item.id}>
                          <Link href={`/${item.link}`} className={`${router.asPath}`}>
                            <a id={router.pathname}
                               className={`link px-2 py-1.5 text-sm hover:text-color-primary-700 ${slugFromPath === item.navTitle && 'bg-white/20 rounded-md'}`}>{item.navTitle}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/*<div>*/}
                {/*<ConnectButton label={"connect wallet"} showBalance={false}/>*/}
              {/*</div>*/}


              <div className="flex lg:hidden">
                <Disclosure.Button
                  className="inline-flex justify-center items-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true"/>
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true"/>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            {defaultNav.map((item) => {
              return (
                <div className="px-2 space-y-1" key={item.id}>
                  <Disclosure.Button as="a" href={`/${item.link}`} className="block px-3 py-1">
                    <span className="text-sm hover:text-p-green-400">{item.navTitle}</span>
                  </Disclosure.Button>
                </div>
              );
            })}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
