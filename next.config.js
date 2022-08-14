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
}

module.exports = nextConfig
