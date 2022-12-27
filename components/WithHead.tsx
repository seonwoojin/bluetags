import { NextComponentType } from "next";
import Head from "next/head";

const WithHead = (
  Component: NextComponentType,
  title: string,
  pageName: string,
  pageRouter: string,
  description: string
) => {
  const App = (props: any) => {
    const domain = `https://www.bluetags.app`;
    const currentUrl = `${domain}/${pageRouter}`;

    return (
      <>
        <Head>
          <link rel="canonical" href={currentUrl} />
          <meta name="format-detection" content="telephone=no" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <title>
            {title} : {pageName}
          </title>
          <meta name="description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:title" content={`${title} : ${pageName}`} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:locale" content="ko_kr" />
          <meta
            property="og:image"
            content={`${domain}/opengraph.png?${(Math.random() * 7).toString(
              7
            )}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={domain} />
        </Head>
        <Component {...props} />
      </>
    );
  };

  return App;
};

export default WithHead;
