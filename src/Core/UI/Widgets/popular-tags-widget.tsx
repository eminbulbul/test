import Anchor from "@/UI/Anchor";
import { BlogMetaType } from "@/Utils/types";

type TProps = {
  tags: BlogMetaType[];
};

const PopularTagsWidget = ({ tags }: TProps) => {
  return (
    <div className="mt-[45px]">
      <h3 className="mb-7.5">Popüler Etiketler</h3>
      <div className="-m-[5px]">
        {tags.map((tag) => (
          <Anchor
            key={tag.slug}
            path={`/blogs/tag/${tag.slug}`}
            className="inline-block text-[13px] font-medium leading-normal pt-[7px] pb-1.5 px-3.8 rounded-[3px] bg-gray-200 text-gray-400 lowercase m-[5px] hover:bg-primary hover:text-white"
          >
            {tag.title}
          </Anchor>
        ))}
      </div>
    </div>
  );
};

export default PopularTagsWidget;
