import axios from "axios";
import { deleteCookie, setCookie } from "cookies-next";
import { loginUserRedux } from "@/Redux/actions";
import { useFetchApi } from "@/Hooks/index";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
const useAuth = (): any => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [logoutApi] = useFetchApi("https://api.linkkurs.com/api/logout");

  const whichRouter = (isSuccess: boolean) => {
    if (isSuccess) {
      router.push("https://app.linkkurs.com/");
    } else {
      router.push("/");
    }
  };
  const login = async (submitData: any) => {
    try {
      const userData = await axios.post("/api/login", submitData);
      await handleLoginSuccess(userData);
    } catch (error: any) {
      if (error.response?.status === 401) {
        try {
          const parentUserData = await axios.post(
            "/api/parent-login",
            submitData
          );
          await handleLoginSuccess(parentUserData);
        } catch (parentError: any) {
          whichRouter(false);
        }
      } else {
        whichRouter(false);
      }
    }
  };

  const handleLoginSuccess = async (userData: any) => {
    setCookie(
      "access_token",
      userData.data.access_token,
      process.env.NODE_ENV === "production"
        ? {
            domain: ".linkkurs.com",
          }
        : {
            domain: "localhost",
          }
    );
    axios.defaults.headers.common = {
      Authorization: `Bearer ${userData.data.access_token}`,
    };
    dispatch(
      loginUserRedux({ user: userData.data.user, isAuthenticated: true })
    );
    whichRouter(true);
  };

  const check = async () => {
    axios
      .get("/api/user-info")
      .then(async (userData: any) => {
        if (userData.data.data) {
          dispatch(
            loginUserRedux({
              user: userData.data.data,
              isAuthenticated: true,
            })
          );
          whichRouter(true);
        } else {
          dispatch(loginUserRedux({ user: null, isAuthenticated: false }));
        }
      })
      .catch(async (err) => {
        dispatch(loginUserRedux({ user: null, isAuthenticated: false }));
      });
  };

  const logout = async () => {
    deleteCookie("access_token");
    await logoutApi();
    dispatch(loginUserRedux({ user: null, isAuthenticated: false }));
    router.push("/");
  };
  return { check, login, logout };
};

export default useAuth;
