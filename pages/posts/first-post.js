import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  const handleOnLoad = () => {
    console.log('script loaded correctly, window.FB has been populated');
  };

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={handleOnLoad}
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a className="BackToHome">Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
