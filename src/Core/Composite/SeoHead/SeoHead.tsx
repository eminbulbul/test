import Head from "next/head";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/reducers";

const Default = ({
  title = "",
  description = "",
  keywords = "",
  image = "",
  author = "",
}) => {
  const settings = useSelector((state: RootState) => state.settings);

  if (title == "") {
    title = settings.title;
  }
  if (description == "") {
    description = settings.description;
  }
  if (keywords == "") {
    keywords = settings.keywords;
  }
  if (image == "") {
    image = settings.image;
  }
  if (author == "") {
    author = settings.company;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default Default;
