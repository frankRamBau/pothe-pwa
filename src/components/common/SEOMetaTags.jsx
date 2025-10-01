import React from 'react';
import { Title, Meta } from 'react-head';

const SEOMetaTags = ({
  title = 'Pöthe - Heladeros desde 1974',
  description = 'Descubre nuestros deliciosos sabores de helados, nieves y paletas. Más de 80 sabores únicos para endulzar tus momentos especiales.',
  image = '/pothe-pwa/images/share-pothe.jpg',
  url = '',
  type = 'website',
  siteName = 'Pöthe',
  twitterCard = 'summary_large_image',
  productData = null
}) => {
  // Configurar base URL correcta para GitHub Pages
  const baseUrl = import.meta.env.PROD 
    ? 'https://frankrambau.github.io/pothe-pwa'
    : window.location.origin;

  const fullUrl = url ? `${baseUrl}${url}` : window.location.href;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  // // Construir URL completa
  // const fullUrl = url ? `${window.location.origin}${url}` : window.location.href;
  // const fullImageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;

  // Si es un producto, personalizar los datos
  let finalTitle = title;
  let finalDescription = description;
  let finalImage = fullImageUrl;

  if (productData) {
    finalTitle = `${productData.name} - ${siteName}`;
    finalDescription = productData.shareDescription || productData.description || description;
    finalImage = productData.shareImage
      ? `${baseUrl}${productData.shareImage}`
      : fullImageUrl;
  }

  return (
    <>
      {/* Título de la página */}
      <Title>{finalTitle}</Title>

      {/* Meta tags básicos */}
      <Meta name="description" content={finalDescription} />
      <Meta name="keywords" content="helados, nieves, paletas, crepas, artesanal, sabores, postres" />

      {/* Open Graph Meta Tags */}
      <Meta property="og:title" content={finalTitle} />
      <Meta property="og:description" content={finalDescription} />
      <Meta property="og:image" content={finalImage} />
      <Meta property="og:url" content={fullUrl} />
      <Meta property="og:type" content={type} />
      <Meta property="og:site_name" content={siteName} />
      <Meta property="og:locale" content="es_MX" />

      {/* Twitter Card Meta Tags */}
      <Meta name="twitter:card" content={twitterCard} />
      <Meta name="twitter:title" content={finalTitle} />
      <Meta name="twitter:description" content={finalDescription} />
      <Meta name="twitter:image" content={finalImage} />

      {/* WhatsApp específicos (usan Open Graph) */}
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:image:type" content="image/jpeg" />

      {/* Meta tags adicionales para productos */}
      {productData && (
        <>
          <Meta property="product:price:amount" content={productData.price || '0'} />
          <Meta property="product:price:currency" content="MXN" />
          <Meta property="product:availability" content="in stock" />
          {productData.category && (
            <Meta property="product:category" content={productData.category} />
          )}
        </>
      )}

      {/* Schema.org structured data para productos */}
      {productData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": productData.name,
              "description": productData.description,
              "image": finalImage,
              "brand": {
                "@type": "Brand",
                "name": siteName
              },
              "offers": {
                "@type": "Offer",
                "price": productData.price || "0",
                "priceCurrency": "MXN",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      )}
    </>
  );
};

export default SEOMetaTags;