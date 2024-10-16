import Document, {
  Html,
  Main,
  NextScript,
  Head,
  DocumentContext,
} from "next/document";
import { FB_PIXEL_ID } from "@/Public/fpixel";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "" };
  }

  render() {
    return (
      <Html dir={this.props.locale === "ar" ? "rtl" : "ltr"} lang="tr">
        <Head>
          <title>
            Link Kurs | TYT, AYT, YKS, LGS için Dijital Eğitim Platformu
          </title>
          <meta
            name="description"
            content="TYT, AYT ve LGS sınavlarına Link Kurs ile online hazırlanarak başarıya ulaşın. Canlı dersler, çözümlü sorular ve sınav stratejileri bir arada."
          />
          <meta
            property="og:title"
            content="Link Kurs | TYT, AYT, YKS, LGS için Dijital Eğitim Platformu"
          />
          <meta
            property="og:description"
            content="TYT, AYT ve LGS sınavlarına Link Kurs ile online hazırlanarak başarıya ulaşın. Canlı dersler, çözümlü sorular ve sınav stratejileri bir arada."
          />
          <meta
            property="og:image"
            content="https://www.linkkurs.com/img/anasayfa.jpg"
          />
          <meta property="og:url" content="https://www.linkkurs.com/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@linkkurs" />
          <meta
            name="twitter:title"
            content="Link Kurs | TYT, AYT, YKS, LGS için Dijital Eğitim Platformu"
          />
          <meta
            name="twitter:description"
            content="TYT, AYT ve LGS sınavlarına Link Kurs ile online hazırlanarak başarıya ulaşın. Canlı dersler, çözümlü sorular ve sınav stratejileri bir arada."
          />
          <meta
            name="twitter:image"
            content="https://www.linkkurs.com/img/anasayfa.jpg"
          />
          <meta
            name="p:domain_verify"
            content="6c6d930dc7c4e36818ee66027591dd36"
          />
          <meta
            name="google-site-verification"
            content="Yn0-gO9lteZSYGFfvKunWNEAPAF0zca9ZIWlUJZwEt8"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){
                    (m[i].a=m[i].a||[]).push(arguments)
                  };
                  m[i].l=1*new Date();
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0];
                  k.async=1;
                  k.src=r;
                  a.parentNode.insertBefore(k,a)
                })
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(98514630, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              `,
            }}
          />
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/98514630"
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
