import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'react-notion-x/src/styles.css';

import Header from '@/components/header/header';
import Provider from '@/components/provider';
import ScrollUpButton from '@/components/scroll-up-button';
import '@/styles/globals.css';
import '@/styles/paginate.css';

export const metadata = {
  title: {
    default: 'Subconsciously',
    template: '%s | Shivam Bunge',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Header />

        <Provider>
          <main>{children}</main>
          <div className="fixed bottom-12 right-10">
            <ScrollUpButton />
          </div>
        </Provider>
      </body>
    </html>
  );
}
