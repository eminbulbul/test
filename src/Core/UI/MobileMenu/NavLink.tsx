import Anchor from "@/UI/Anchor";

type TProps = {
    children: React.ReactNode;
    path: string;
};

const NavLink = ({ children, path }: TProps) => {
    return (
        <Anchor
            path={path}
            className="text-[16px] font-medium leading-normal block py-[19px] text-white hover:text-white"
        >
            {children}
        </Anchor>
    );
};
export default NavLink;
