import React from "react";
import Head from "next/head";

export const DocumentHead = () => (
  <Head>
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com/"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="https://fonts.gstatic.com/s/nunitosans/v5/pe0oMImSLYBIv1o4X1M8cce4E9lKdg.woff2"
      as="font"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8WAc5tU1E.woff2"
      as="font"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cce9I9s.woff2"
      as="font"
      crossOrigin="true"
    />
    <link
      rel="preload"
      href="https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc9iB85tU1E.woff2"
      as="font"
      crossOrigin="true"
    />
    <style>{`
        @font-face {
          font-family: 'Nunito Sans';
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: local('Nunito Sans Italic'), local('NunitoSans-Italic'), url(https://fonts.gstatic.com/s/nunitosans/v5/pe0oMImSLYBIv1o4X1M8cce4E9lKdg.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: local('Nunito Sans Light'), local('NunitoSans-Light'), url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8WAc5tU1E.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Nunito Sans Regular'), local('NunitoSans-Regular'), url(https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cce9I9s.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      
      
        @font-face {
          font-family: 'Nunito Sans';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: local('Nunito Sans SemiBold'), local('NunitoSans-SemiBold'), url(https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc9iB85tU1E.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `}</style>
  </Head>
);
