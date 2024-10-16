import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { Anchor, Logo, SearchForm } from "@/Core/index";
import MainMenu from "@/UI/MainMenu";
import BurgerButton from "@/UI/BurgerButton";
import useSticky from "@/Hooks/useSticky";
import { FaSearch } from "react-icons/fa";
import useFetchApi from "@/Hooks/useFetchApi";
import { FaRegUserCircle } from "react-icons/fa";
import useAuth from "@/Hooks/useAuth";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/reducers";
import Button from "@/UI/Button";
import Link from "next/link";

const MobileMenu = dynamic(() => import("@/UI/MobileMenu"), {
  ssr: false,
});

const FlyoutSearchForm = dynamic(() => import("@/UI/Forms/FlyoutSearchForm"), {
  ssr: false,
});

type TProps = {
  shadow?: boolean;
  fluid?: boolean;
  transparent?: boolean;
  mode?: "light" | "dark";
};

const Header = ({ shadow, transparent, mode }: TProps) => {
  const router = useRouter();
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const { sticky, measuredRef } = useSticky();

  const { check } = useAuth();

  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  useEffect(() => {
    if (!isAuthenticated) {
      check();
    }
  }, [isAuthenticated]);

  const [getPackages, packages] = useFetchApi(
    "https://api.linkkurs.com/api/link-kurs/parent-packages"
  );

  useEffect(() => {
    getPackages();
  }, []);

  const dynamicSubmenu = Array.isArray(packages)
    ? packages.map((pkg) => ({
        id: pkg.id,
        slug: pkg.slug,
        label: pkg.fullname,
        path: `/paketler/${pkg.slug}`,
      }))
    : [];

  const MENU_INITIAL = [
    {
      id: 1,
      label: "Ana Sayfa",
      path: "/",
    },
    {
      id: 2,
      label: "Paketler",
      path: "/canli-kurslarimiz",
      submenu: dynamicSubmenu,
    },
    // {
    //   id: 10,
    //   label: "Dersler",
    //   path: "/canli-kurslarimiz",
    //   submenu: [
    //     {
    //       id: 11,
    //       label: "Örnek Canlı Dersler",
    //       path: "/ornekcanlidersler",
    //     },
    // {
    //   id: 12,
    //   label: "En Çok Tercih Edilen Canlı Dersler",
    //   path: "/encoktercihedilendersler",
    // },
    //   ],
    // },
    {
      id: 13,
      label: "Biz Kimiz",
      path: "/hakkimizda",
      submenu: [
        {
          id: 14,
          label: "Hakkımızda",
          path: "/hakkimizda",
        },
        {
          id: 15,
          label: "Kadromuz",
          path: "/kadromuz",
        },
        // {
        //   id: 16,
        //   label: "Kariyer",
        //   path: "/kariyer",
        // },
      ],
    },
    // {
    //   id: 17,
    //   label: "Blog",
    //   path: "/blog",
    // },
    {
      id: 18,
      label: "İletişim",
      path: "/iletisim",
    },
    {
      id: 19,
      label: "Ücretsiz Kurslarımız",
      path: "/ucretsiz-kurslar",
    },
  ];

  useEffect(() => {
    setOffcanvas(false);
  }, [router]);

  return (
    <>
      <header
        className={clsx(
          "header",
          !transparent && "relative",
          transparent && "absolute inset-0 bottom-auto bg-transparent"
        )}
      >
        <div
          ref={measuredRef}
          className={clsx(
            "header-inner py-[19px] xl:py-0 z-50 transition-all left-0 top-0 w-full h-auto",
            !sticky && "absolute",
            sticky &&
              "fixed shadow-3md shadow-black/10 animate-headerSlideDown",
            shadow && "shadow-sm shadow-black/5",
            !transparent && "bg-white",
            transparent && !sticky && "bg-transparent",
            transparent && sticky && "bg-white",
            transparent && sticky && mode === "light" && "bg-black"
          )}
        >
          <div className="container flex items-center justify-center">
            <Logo variant={mode} className="max-w-[120px] sm:max-w-[158px]" />
            <MainMenu
              className="hidden xl:block"
              hoverStyle="B"
              align="center"
              menu={MENU_INITIAL}
              color={mode}
            />
            <div className="flex justify-end items-center">
              <div className="hidden md:block md:max-w-[250px] md:pl-2.5">
                <SearchForm bg={transparent ? "white" : "light"} />
              </div>
              <div className="md:hidden overflow-hidden">
                <button
                  type="button"
                  className={clsx(
                    "inline-block px-2.5 py-1.5 md:hidden",
                    mode === "light" && "text-white",
                    mode === "dark" && "text-dark-50"
                  )}
                  onClick={() => setVisibleSearch((prev) => !prev)}
                  aria-label="Search Toggle"
                >
                  <FaSearch className="text-lg" />
                </button>
                <FlyoutSearchForm
                  show={visibleSearch}
                  onClose={() => setVisibleSearch(false)}
                />
              </div>
              {isAuthenticated ? (
                <Anchor
                  path="/kullanici"
                  className={clsx(
                    "inline-block px-2.5 py-1.5",
                    mode === "light" && "text-white hover:text-white",
                    mode === "dark" && "text-dark-50"
                  )}
                  aria-label="User Profile"
                >
                  <FaRegUserCircle className="text-lg" />
                </Anchor>
              ) : (
                <Link href="/giris">
                  <Button className="ml-3">Giriş</Button>
                </Link>
              )}
              <BurgerButton
                className="pl-5 xl:hidden"
                onClick={() => setOffcanvas(true)}
                color={mode}
                label="Toggle Menu"
              />
            </div>
          </div>
        </div>
        <div className="h-20" />
      </header>
      <MobileMenu
        isOpen={offcanvas}
        onClose={() => setOffcanvas(false)}
        menu={MENU_INITIAL}
      />
    </>
  );
};

Header.defaultProps = {
  fluid: true,
  mode: "dark",
};

export default Header;
