import Head from "next/head";

const Meta = () => (
  <div>
    
    <Head>
      <title>Fredd AI | Motor de recomendaciones basado en Inteligencia Artificial</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Somos cinturón negro en JavaScript y amamos construir aplicaciones web." />
      <link rel="shortcut icon" href="favicon.png" />
      <meta name="theme-color" content="#080808" />
      
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>

    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        background: #080808;
        color: rgb(134, 143, 151);
        height: 100%;
        font-family: 'Inter', sans-serif;
        font-weight: 200;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      a, p {
        line-height: 26px;
      }
      a {
        color: #999;
        transition: all .3s;
      }
      a:hover {
        color: #fff;
        cursor: pointer;
      }
      h3 {
        color: #ffF;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.8rem;
      }
      h4 {
        color: #ffF;
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.8rem;
      }
      .align-center {
        text-align: center;
      }
      .nell {
        padding: 2rem 0;
      }
    `}</style>
  </div>
);

export default Meta;
