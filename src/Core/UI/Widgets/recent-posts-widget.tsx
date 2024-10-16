import Anchor from "@/UI/Anchor";
import { IBlog } from "@/Utils/types";

type TProps = {
  recentPosts: Pick<IBlog, "title" | "path">[];
};

const RecentPostsWidget = ({ recentPosts }: TProps) => {
  return (
    <div className="mt-[45px]">
      <h3 className="mb-[9px]">Benzer Yazılar</h3>

      {recentPosts.map(({ title, path }) => (
        <Anchor
          key={path}
          path={path}
          className="block relative text-lg font-bold leading-[1.78] pt-4 pl-7.5 pb-3.8 text-body border-b border-b-gray-500 last:border-0 group"
        >
          <span>{title}</span>
        </Anchor>
      ))}
    </div>
  );
};

export default RecentPostsWidget;
