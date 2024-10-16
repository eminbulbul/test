import { forwardRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Input from "@/UI/FormElements/Input";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import useFetchApi from "@/Hooks/useFetchApi";

type TProps = {
  className?: string;
  bg?: "white" | "light";
};

type Course = {
  id?: number;
  fullname?: string;
  image_url?: string;
  slug?: string;
};

// eslint-disable-next-line react/display-name
const SearchForm = forwardRef<HTMLFormElement, TProps>(
  ({ className, bg }, ref) => {
    const [search, setSearch] = useState("");
    const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [getPackages, packages] = useFetchApi(
      `https://api.linkkurs.com/api/link-kurs/search-packages?fullname=${search}`
    );

    useEffect(() => {
      if (search.length > 2) {
        setLoading(true);
        getPackages().finally(() => setLoading(false));
      } else {
        setFilteredCourses([]);
      }
    }, [search]);

    useEffect(() => {
      if (packages && packages.data && Array.isArray(packages.data)) {
        const filtered = packages.data
          .filter((course: any) =>
            course.fullname.toLowerCase().includes(search.toLowerCase())
          )
          .slice(0, 4);
        setFilteredCourses(filtered);
      }
    }, [packages, search]);

    const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!search) return;
      void router.push(
        {
          pathname: "/canli-kurslarimiz/search",
          query: { s: search },
        },
        undefined,
        { scroll: false }
      );
    };

    return (
      <form
        className={clsx("relative", className)}
        ref={ref}
        onSubmit={onSubmit}
      >
        <label htmlFor="search" className="sr-only">
          Ara
        </label>
        <Input
          id="search"
          name="search"
          type="text"
          placeholder="Ara.."
          bg={bg}
          className={clsx("max-h-[48px] pr-[50px]")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search.length > 2 && (
          <div className="absolute top-14 w-full rounded-lg cursor-pointer bg-white">
            {loading ? (
              <div className="p-4 text-center">Yükleniyor...</div>
            ) : (
              <ul className="">
                {filteredCourses.map((course) => (
                  <Link
                    href={`/canli-kurslarimiz/${course?.slug}`}
                    key={course?.id}
                    onClick={() => setSearch("")}
                  >
                    <li className="p-2 hover:text-white hover:bg-primary-light flex items-center justify-between">
                      <p className="text-xs">{course?.fullname}</p>
                      <img
                        className="w-10 h-10"
                        src={course?.image_url}
                        alt={course?.fullname}
                      />
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        )}
      </form>
    );
  }
);

export default SearchForm;
