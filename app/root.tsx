import {
  useCatch,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';

import { createMeta } from '~/meta';

import normalizeStylesHref from 'normalize.css/normalize.css';
import stylesHref from './styles.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: normalizeStylesHref },
  { rel: 'stylesheet', href: stylesHref },
];

export const meta: MetaFunction = () => createMeta();

export default function Root() {
  return (
    <App>
      <Outlet />
    </App>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <App>
      <main className="container">
        <h1>{caught.status}</h1>
        {caught.statusText && <p>{caught.statusText}</p>}
      </main>
    </App>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <App>
      <main className="container">
        <h1>Unknown Error</h1>
        <p>An unrecoverable error occured.</p>
      </main>
    </App>
  );
}

function App({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <ul>
        <li className="navbar__title">App Name</li>
        <li className="navbar__item--right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
}
