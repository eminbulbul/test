import { useState } from "react";
import { useRouter } from "next/router";
import Input from "@/UI/FormElements/Input";

type TProps = {
  className?: string;
};

const SearchWidget = ({ className }: TProps) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) return;
    void router.push(
      {
        pathname: "/blogs",
        query: {
          s: search,
        },
      },
      undefined,
      { scroll: false }
    );
  };
  return (
    <div className={className}>
      <h3 className="mb-7.5">Ara</h3>
      <form className="relative" onSubmit={onSubmit}>
        <label htmlFor="widgetSearch" className="sr-only">
          Arama yap
        </label>
        <Input
          id="widgetSearch"
          name="widgetSearch"
          type="text"
          className="pr-[72px]"
          value={search}
          placeholder="Ara"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          aria-label="Ara"
          type="submit"
          className="absolute right-0 top-0 w-14 h-14 rounded-tr rounded-br transition-colors text-primary flex justify-center items-center hover:bg-primary hover:text-white"
        >
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
};

export default SearchWidget;
