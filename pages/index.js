import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Modern Vascular Shared Photo Album</title>
        { /*<link rel="icon" href="/favicon.ico" /> */ }
      </Head>

      <main>
        <p className="supertitle">Modern Vascular</p>
        <h1 className="title">Upload Red Sock Day Photos</h1>
        <p className="description">Upload your photos to a shared Google Photos album or send in an email.</p>

        <div className="grid">
          <a href="https://photos.app.goo.gl/ncfrYn7RkkxnX3d47" className="card" target="_blank">
            <h3>Upload to Google Photos</h3>
            <p>Log in to your Google account.</p> 
            <p className="disclaimer"><small>Your email address and the photos that you add will be visible to others.</small></p>
          </a>

          <a href="mailto:sashe@nobilitymail.com?subject=Digital%20Team%20Mardi%20Gras%20Photos&body=I%20will%20attach%20my%20Mardi%20Gras%20photos%20to%20this%20email." className="card">
            <h3>Email your Photos</h3>
            <p>Embed images or add them as an attachment.</p>
          </a>

          <div><a href="https://modernvascular.com/peripheral-artery-disease/">Minimally invasive endovascular procedures</a> for peripheral artery disease. </div>

        </div>
      </main>

      <footer>
          &copy; 2022 Modern Vascular Digital Team
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .supertitle,
        .footer a {
          font-size: 1em;
          text-transform: uppercase;
          font-weight: 200;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 1.8rem;
        }

        .title,
        .description,
        .supertitle {
          text-align: center;
        }

        .description {
          line-height: 1.4;
          font-size: 1.4rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 60ch;
          margin-top: 1rem;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .disclaimer {
          line-height: 1.2 !important;
          max-width: 28ch;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
