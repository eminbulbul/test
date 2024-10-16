import { Menu, Tooltip } from "antd";
import { LuLayoutDashboard, LuListTodo } from "react-icons/lu";
import { MdCastForEducation, MdOutlineExitToApp } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineAim } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbDeviceDesktopQuestion } from "react-icons/tb";
import Link from "next/link";
import { useAuth, useMutateApi } from "@/Hooks/index";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/reducers";

const SiderbarMenu = ({ collapsed = true }) => {
  const { logout } = useAuth();
  const [setStep] = useMutateApi({
    apiPath: "/api/student/step-update",
    method: "PUT",
  });

  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <div className="text-center text-white w-full float-left mt-5">
        <Tooltip
          placement="rightTop"
          title={
            collapsed && (
              <div>
                <h3
                  className={`${
                    collapsed ? "text-sm" : "text-xl"
                  } font-bold tracking-tight dark:text-gray-400`}
                >
                  <a href="#" className="hover:text-white">
                    {user.name}
                  </a>
                </h3>
                <p className="font-light text-gray-300 dark:text-gray-400">
                  {user?.student?.class?.fullname}
                </p>
              </div>
            )
          }
        >
          <img
            className={`${
              collapsed ? "size-14" : "size-20"
            } mx-auto mb-4  rounded-full`}
            src={user.image_url}
            alt={user.name}
          />
        </Tooltip>
        {!collapsed && (
          <div>
            <h3
              className={`${
                collapsed ? "text-sm" : "text-xl"
              } font-bold tracking-tight text-gray-900 dark:text-white`}
            >
              <a href="#">{user.name}</a>
            </h3>
            <p className="font-light text-gray-400 dark:text-gray-400">
              {user?.student?.class?.fullname}
            </p>
            <ul className="flex justify-center mb-4 mt-2 space-x-1">
              <li>
                <Tooltip placement="bottom" title="Bildirimler">
                  <a
                    href="#"
                    className="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                  >
                    <IoMdNotificationsOutline size="25" />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip placement="bottom" title="Raporlar">
                  <a
                    href="#"
                    className="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                  >
                    <AiOutlineAim size="25" />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <LuLayoutDashboard size="25" />,
            label: <Link href="/">Ana Sayfa</Link>,
          },
          {
            key: "3",
            icon: <MdCastForEducation size="25" />,
            label: <Link href="/educations">Eğitimlerim</Link>,
          },
          {
            key: "4",
            icon: <LuListTodo size="25" />,
            label: <Link href="/homeworks">Ödevler</Link>,
          },
          {
            key: "5",
            icon: <TbDeviceDesktopQuestion size="25" />,
            label: <Link href="/user-question-books">Soru Havuzu</Link>,
          },

          {
            key: "7",
            icon: <BiMessageDetail size="25" />,
            label: "Mesajlar",
          },

          {
            key: "8",
            icon: <IoMdNotificationsOutline size="25" />,
            label: "Bildirimler",
          },
          {
            key: "81",
            label: "data sıfırla",
            onClick: async () => {
              await setStep({
                name: "onboarding_1_tour",
                step: 0,
              });
              await setStep({
                name: "onboarding",
                step: 1,
              });
            },
          },
          {
            key: "10",
            icon: <MdOutlineExitToApp size="25" color="red" />,
            label: "Çıkış",
            onClick: logout,
          },
        ]}
      />
    </>
  );
};
export default SiderbarMenu;
