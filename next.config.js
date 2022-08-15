/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: (() => {
    // styledComponents の有効化
    let compilerConfig = {
      styledComponents: true,
    }

    if (process.env.NODE_ENV !== 'production') {
      compilerConfig = {
        ...compilerConfig,
        // 本番環境では React Testing Library で使用する data-testid 属性を削除
        reactRemoveProperties: { properties: ['^data-testid$'] },
      }
    }

    return compilerConfig
  })(),

  // Next.js の rewrites 機能を使っている
  //  指定したURLパターンを内部で別の URL に変換する機能
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}

module.exports = nextConfig
