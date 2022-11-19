import styles from './layout.module.scss';
import Header from './(components)/(header)';

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Portfolio</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
