/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'aluno.uniftc.edu.br',
                port: '',
                pathname: '/assets/images/uniftc-branco.png'
            }
        ]
    }
}

module.exports = nextConfig
