// _document.tsx はカスタムドキュメントと呼ばれる仕組み。デフォルトで生成されるページの設定のうち、
// htmlやhead、body要素に関わる部分を上書きするもの。
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// ここで上書きしている
export default class MyDocument extends Document {
  // サーバーサイドでスタイルを適用するために getInitialProps が必要
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      // 継承元となる Document の props の style を追加して、MyDocument の style に追加しているみたい?
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
