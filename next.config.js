/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['tlappshop-imagenes.s3.amazonaws.com',"https://m.youtube.com/", "tlapps.com.mx", "exhibidorddeco.vercel.app"],
    dangerouslyAllowSVG: true,
   

  }
}

module.exports = nextConfig
