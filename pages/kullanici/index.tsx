import { TabContainer, TabNav, TabPane, TabList, TabContent } from "@/UI/Tab";
import { useAuth } from "@/Hooks/index";
import { RootState } from "@/Redux/reducers";
import Section from "@/UI/Section";
import { Button } from "antd";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProfileBio = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    console.log("redux", user);
  }, [user]);
  const { logout } = useAuth();
  return (
    <Section className="profile-area" space="bottom">
      <div className="container">
        <div className=" flex justify-between items-center mt-10 ">
          <div className="w-full">
            {user?.image_url != null ? (
              <img
                className="w-52 h-52 mx-auto rounded-full"
                src={user.image_url}
                alt="profile"
              />
            ) : (
              <img
                className="w-52 h-52 mx-auto rounded-full"
                src="img/user.png"
                alt="profile"
              />
            )}
          </div>
          <div className="w-1/2 ml-10">
            <div className="w-full">
              <h2 className="mb-0 leading-[1.42]">{user?.name}</h2>

              <h4 className="font-normal text-body text-h6 leading-relaxed mb-0">
                {user?.student.class.fullname}
              </h4>
              <Button
                className="my-4"
                onClick={() => {
                  logout();
                }}
              >
                Hesaptan Çıkış Yap
              </Button>
              <h4 className="text-h5 mt-9 mb-2.5">İletişim</h4>
              <div className="contact-info-text">
                <span className="phone">
                  Telefon Numarası:{" "}
                  <strong className="text-heading">{user?.phone}</strong>{" "}
                </span>
                <br />
                <span className="email">
                  Email: <strong className="text-heading">{user?.email}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center w-full my-10">
          <TabContainer variant="underline">
            <TabList>
              <TabNav>Paketlerim</TabNav>
              <TabNav>Öğrencilerim</TabNav>
              <TabNav>Adreslerim</TabNav>
            </TabList>
            <TabContent className="mt-10 lg:mt-[50px]">
              <TabPane>
                <div className="grid md:grid-cols-4 grid-cols-2">
                  {user?.student.package.map((packages: any) => (
                    <Link
                      key={packages.id}
                      href="https://app.linkkurs.com/"
                      className="flex flex-col items-center justify-center m-2 shadow-lg rounded-md p-2 hover:scale-105 ease-in-out transition-all duration-300 cursor-pointer"
                    >
                      <img src={packages.image_url} alt="package_image" />
                      <h4 className="my-2">{packages.fullname}</h4>
                    </Link>
                  ))}
                </div>
              </TabPane>
              <TabPane>
                <div className="grid md:grid-cols-4 grid-cols-2">
                  {user?.student.package.map((packages: any) => (
                    <Link
                      key={packages.id}
                      href="https://app.linkkurs.com/"
                      className="flex flex-col items-center justify-center m-2 shadow-lg rounded-md p-2 hover:scale-105 ease-in-out transition-all duration-300 cursor-pointer"
                    >
                      <img src={packages.image_url} alt="package_image" />
                      <h4 className="my-2">{packages.fullname}</h4>
                    </Link>
                  ))}
                </div>
              </TabPane>
              <TabPane>
                <div className="grid md:grid-cols-4 grid-cols-2">
                  {user?.student.package.map((packages: any) => (
                    <Link
                      key={packages.id}
                      href="https://app.linkkurs.com/"
                      className="flex flex-col items-center justify-center m-2 shadow-lg rounded-md p-2 hover:scale-105 ease-in-out transition-all duration-300 cursor-pointer"
                    >
                      <img src={packages.image_url} alt="package_image" />
                      <h4 className="my-2">{packages.fullname}</h4>
                    </Link>
                  ))}
                </div>
              </TabPane>
            </TabContent>
          </TabContainer>
        </div>
      </div>
    </Section>
  );
};

export default ProfileBio;
