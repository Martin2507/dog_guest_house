import "./globals.css";

export const metadata = 
{
  title: 'Dog Guest House',
  description: 'Welcome to Dog Guest House website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body>{children}</body>

    </html>
  )
}
