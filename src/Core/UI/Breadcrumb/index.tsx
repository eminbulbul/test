import clsx from "clsx";
import Anchor from "@/UI/Anchor";

type TProps = {
  className?: string;
  pages: Array<{
    path: string;
    label: string;
  }>;
  section?: any;
  currentPage?: any;
  showTitle?: boolean;
  title?: string;
  filteredCourses?: string;
};

const Breadcrumb = ({
  className,
  pages,
  currentPage,
  showTitle,
  title,
  section,
}: TProps) => {
  return (
    <div
      className={clsx(
        "page-title-area relative",
        showTitle && "pt-15 pb-10 md:pt-20 lg:pt-[100px]",
        !showTitle && "pb-10  lg:pb-20",
        className
      )}
    >
      {showTitle && (
        <div className="container">
          <h1
            className={clsx(
              "title font-medium mt-5 mb-0 text-4xl text-start",
              section === 0
                ? "text-cardPrimaryColor"
                : section === 1
                ? "text-cardSecondaryColor"
                : section === 2
                ? "text-cardThirdColor"
                : ""
            )}
          >
            {title || currentPage}
          </h1>
        </div>
      )}
      {!showTitle && <h1 className="sr-only">{title || currentPage}</h1>}

      <div
        className={clsx(
          "page-breadcrumb top-0 left-0 w-full",
          showTitle && "absolute"
        )}
      >
        <nav className="container" aria-label="breadcrumbs">
          <ul className="breadcrumb flex flex-wrap py-3">
            {pages.map(({ path, label }) => (
              <li
                key={label}
                className="text-md first:before:hidden before:content-['/'] before:mx-3.8 before:color-body"
              >
                <Anchor
                  path={path}
                  className="text-body capitalize relative before:absolute before:content-[''] before:-bottom-1.5 before:right-0 before:w-0 before:h-px before:transition-all before:bg-heading hover:text-heading hover:before:left-0 hover:before:w-full"
                >
                  {label}
                </Anchor>
              </li>
            ))}

            <li
              className="text-md capitalize text-heading first:before:hidden before:content-['/'] before:mx-3.8 before:color-body"
              aria-current="page"
            >
              {currentPage}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

Breadcrumb.defaultProps = {
  showTitle: true,
};

export default Breadcrumb;
