import Head from 'next/head';
import type { AppProps /*, AppContext */ } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { SWRConfig } from 'swr';
import 'gridjs/dist/theme/mermaid.css';
// files
import '../styles/index.css';

// axios BASE URL
axios.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : 'https://weather-station.vercel.app/api';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ESP8266 Weather Station</title>
        {/* meta */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="ESP8266 Weather Station Web Application"
        />
        <meta name="apple-mobile-web-app-title" content="WeStation" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="application-name" content="WeStation" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-navbutton-color" content="#90EE90" />
        <meta name="theme-color" content="#07BB00" />

        {/* link */}
        <link
          rel="icon"
          sizes="32x32"
          href="/assets/img/icons/icon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="32x32"
          href="/assets/img/icons/icon-32x32.png"
        />
        <link
          rel="icon"
          sizes="128x128"
          href="/assets/img/icons/icon-128x128.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="128x128"
          href="/assets/img/icons/icon-128x128.png"
        />
        <link
          rel="icon"
          sizes="144x144"
          href="/assets/img/icons/icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/img/icons/icon-144x144.png"
        />
        <link
          rel="icon"
          sizes="152x152"
          href="/assets/img/icons/icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/img/icons/icon-152x152.png"
        />
        <link
          rel="icon"
          sizes="192x192"
          href="/assets/img/icons/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/assets/img/icons/icon-192x192.png"
        />
        <link
          rel="icon"
          sizes="256x256"
          href="/assets/img/icons/icon-256x256.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="256x256"
          href="/assets/img/icons/icon-256x256.png"
        />
        <link
          rel="icon"
          sizes="512x512"
          href="/assets/img/icons/icon-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/assets/img/icons/icon-512x512.png"
        />
      </Head>

      <SWRConfig
        value={{
          // refreshInterval: 3000, // automatic re-fetching data in API every 3s
          fetcher: (url: string) => axios.get(url).then((res) => res.data),
        }}
      >
        <Component {...pageProps} />
        <ToastContainer />
      </SWRConfig>
    </>
  );
}
