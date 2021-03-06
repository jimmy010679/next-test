import Link from "next/link";
import Head from "next/head";

export default ({ children, title = "This is the default title" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>家目錄</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>關於我</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    {children}

    <footer>footer</footer>
  </div>
);
