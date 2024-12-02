import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Enlace al CSS de Bootstrap desde un CDN */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            integrity="sha384-pzjw8f+ua7Kw1TIq0v8FqFJl4G4Ksf5cT4QXr1Cq5Rz+F9Sf3cSl5cz0omFqfL7t"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Script de Bootstrap necesario para el funcionamiento del colapso del menú */}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
