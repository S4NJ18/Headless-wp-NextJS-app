/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wpgetsolution.com',
        port: '',
        pathname: '/**',
      }, 
    ]
    }
    
};

export default nextConfig;
