Este es un [Next.js](https://nextjs.org/) proyecto bootstrapped con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Descripcion

Exhibidor digital de productos.

Este proyecto cuenta con una estructura basica de carpetas propias de Next.js en su version "13.0.7" y una carpeta de componentes conteniendo en una carpeta propia el "Componente.JSX" y su archivo "Componente.module.css", a excepcion de la carpeta de "ProductSources" donde sus componentes comparten el mismo archivo con los estilos. El enrutamiento esta dado por la estructura de la carpeta "pages".

Se utilizo Incremental Static Regeneration (ISR) junto getStaticProps para el consumo de la API del cliente y getStaticPaths para la pre-renderizacion de las rutas del producto. 

Este proyecto consta de 5 páginas: Página  de inicio, página de categorías página de categoría, página de producto y recorridovirtual. La informacion es consumida desde la API del cliente.

1.- Página de inicio muestra la bienvenida al exhibidor digital y después de 2.5 segundos redirecciona a la página de categorías  Esta se encuentra dentro de este proyecto en pages/index.js.

2.- Página de categorías muestra en su versión de escritorio una barra de navegación, con tres apartados: logo TL apps con redireccionamiento a la página de categorías  título de la página y icono con redireccionamiento a la página de recorrido virtual, un contenedor con las cartas de las categorías  estas redireccionan a la página de categoría respectiva a su contenido y un pie de página con el slogan del cliente. Para la versión =< a 768px se muestra la barra de navegación con el logo con redireccionamiento a la página de categorías y un drop down menu con el icono para apertura y cierre del mismo, debajo de esta sección se encuentra el título de la página  En la barra de navegación drop down menu se muestran, en columna, el icono con el redireccionamiento hacia la página de recorrido virtual, el input para el buscador que renderiza los productos encontrados a medida que se teclea y una sección con las categorías disponibles con su redireccionamiento hacia la página de categorías respectiva. Esta se encuentra dentro de este proyecto en pages/categorias.js.

3.- Página de categoría muestra  en su versión de escritorio la barra de navegación previamente descrita, una barra lateral, en columna del lado izquierdo, que muestra un input para el buscador que renderiza los productos encontrados a medida que se teclea, del lado derecho el icono del teclado en pantalla, y debajo de estos una sección con las categorías disponibles con su redireccionamiento hacia la página de categorías respectiva, un contenedor con las cartas de los productos correspondientes a la categoría seleccionada desde la página de categorías o seleccionada desde la barra lateral en su apartado de categorías  estas redireccionan a la página del producto respectivo al contenido de la carta del producto así como un contenedor con los botones para navegar por el número de páginas disponibles, el botón de la página que se muestra tiene un estilo diferente para indicar el número de página en que se encuentra el usuario.  Para la versión =< a 768px se muestra el logo TL apps con redireccionamiento a la página de categorías y un drop down menu con el icono para apertura y cierre del mismo, debajo de esta sección se encuentra el título de la página correspondiente a la categoría. En la barra de navegación drop down menu se muestran, en columna, el icono con el redireccionamiento hacia la página de recorrido virtual, el input para el buscador que renderiza los productos encontrados a medida que se teclea y una sección con las categorías disponibles con su redireccionamiento hacia la página de categorías respectiva. Esta se encuentra dentro de este proyecto en pages/categoria/[categoria].js

4.- Página  de producto muestra  en su versión de escritorio la barra de navegación previamente descrita, solo en esta página el título de la misma pertenece a la categoría del producto y redirecciona a la página de categoría del mismo, una barra lateral, en columna del lado izquierdo, que muestra un input para el buscador que renderiza los productos encontrados a medida que se teclea, del lado derecho el icono del teclado en pantalla, y debajo de estos una sección con las categorías disponibles con su redireccionamiento hacia la página de categorías respectiva, un contenedor con la carta del producto correspondiente a la categoría seleccionada desde la página de categoria/[categoria] en su carta del producto o seleccionada desde la barra lateral en su apartado de resultados del buscador, estas redireccionan a la página del producto   Para la versión =< a 768px se muestra el logo TL apps con redireccionamiento a la página de categorías y un drop down menu con el icono para apertura y cierre del mismo debajo de esta sección se encuentra el título de la página correspondiente a la categoría y solo en esta página el título de la misma pertenece a la categoría del producto y redirecciona a la página de categoría del mismo . En la barra de navegación drop down menu se muestran, en columna, el icono con el redireccionamiento hacia la página de recorrido virtual, el input para el buscador que renderiza los productos encontrados a medida que se teclea y una sección con las categorías disponibles con su redireccionamiento hacia la página de categorías respectiva. Esta se encuentra dentro de este proyecto en pages/producto/[producto].js

5.- Página de recorridovirtual muestra tanto en su versión de escritorio como en su versión <= a 768px una barra de navegación con el logo de TL apps, en el título la leyenda de  "DISFRUTA NUESTRO RECORRIDO VIRTUAL" y un icono de home que redirecciona hacia la página de categorías así como un contenedor con iframe que renderiza el recorrido virtual. Esta se encuentra dentro de este 
proyecto en pages/recorridovirtual.js


## Dependencias

1.- "framer-motion": "^8.0.2": An open source motion library for React, made by Frame. "https://www.npmjs.com/package/framer-motion".

2.-  "react-icons": "^4.7.1"s: Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using. "https://www.npmjs.com/package/react-icons"

3.- "react-pdf": "^6.2.2": Display PDFs in your React app as easily as if they were images. "https://www.npmjs.com/package/react-pdf".

4.- "react-pdf": "^6.2.2": "^10.1.0": React.js powered YouTube player component. "https://www.npmjs.com/search?q=react-youtube".

5.- "react-zoom-pan-pinch": "^3.0.7": Super fast and light react npm package for zooming, panning and pinching html elements in easy way. "https://www.npmjs.com/package/react-zoom-pan-pinch".

6.- "axios": "^1.2.1": Promise based HTTP client for the browser and node.js. "https://www.npmjs.com/package/axios".



## Observaciones

Esta es la estructura de  los objetos "categorias (categories)", "productos(products)" que se toma en cuenta para el filtrado, enrutamiento y renderizado condicional de las paginas que componen este proyecto, al hacer cambios en estas el proyecto puede dejar de funcionar ya que solo se tomaron los escenarios donde pueda cambiar la estructura debido a las necesidades de la API y que se encuentran cubiertos con condicionales dentro de los objetos de las respuestas de las paginas: 


## Producto

  data: [
    {
      id: 4441,
      attributes: {
        price: 169,
        description: "luminario para alberca LED PAR-56",
        qty: 294,
        sku: "ALED-S56",
        product: "luminario para alberca LED PAR-56",
        createdAt: "2022-06-07T17:21:12.273Z",
        updatedAt: "2023-04-18T18:29:07.348Z",
        locale: "en",
        Iva: "Y",
        multiplo: null,
        Peso: null,
        Activo: null,
        CodigoGrupo: "147",
        class: "AA",
        voltaje: null,
        catalogo: true,
        video: null,
        categories: {
          data: [
            {
              id: 32,
              attributes: {
                category: "Luminarios Subacuaticos",
                createdAt: "2022-06-07T17:21:12.273Z",
                updatedAt: "2023-04-11T18:18:06.907Z",
                publishedAt: "2022-06-07T17:21:12.273Z",
                codigo: "147",
                Catalogo: true,
              },
            },
          ],
        },
        thumbnail: {
          data: {
            id: 1111,
            attributes: {
              name: "ALED-S56.webp",
              alternativeText: "ALED-S56.webp",
              caption: "ALED-S56.webp",
              width: 1200,
              height: 1200,
              formats: {
                large: {
                  ext: ".webp",
                  url: "https://tlappshop-imagenes.s3.amazonaws.com/large_ALED_S56_3421fd6c48.webp",
                  hash: "large_ALED_S56_3421fd6c48",
                  mime: "image/webp",
                  name: "large_ALED-S56.webp",
                  path: null,
                  size: 49.36,
                  width: 1000,
                  height: 1000,
                },
                small: {
                  ext: ".webp",
                  url: "https://tlappshop-imagenes.s3.amazonaws.com/small_ALED_S56_3421fd6c48.webp",
                  hash: "small_ALED_S56_3421fd6c48",
                  mime: "image/webp",
                  name: "small_ALED-S56.webp",
                  path: null,
                  size: 14.52,
                  width: 500,
                  height: 500,
                },
                medium: {
                  ext: ".webp",
                  url: "https://tlappshop-imagenes.s3.amazonaws.com/medium_ALED_S56_3421fd6c48.webp",
                  hash: "medium_ALED_S56_3421fd6c48",
                  mime: "image/webp",
                  name: "medium_ALED-S56.webp",
                  path: null,
                  size: 30.83,
                  width: 750,
                  height: 750,
                },
                thumbnail: {
                  ext: ".webp",
                  url: "https://tlappshop-imagenes.s3.amazonaws.com/thumbnail_ALED_S56_3421fd6c48.webp",
                  hash: "thumbnail_ALED_S56_3421fd6c48",
                  mime: "image/webp",
                  name: "thumbnail_ALED-S56.webp",
                  path: null,
                  size: 1.67,
                  width: 156,
                  height: 156,
                },
              },
              hash: "ALED_S56_3421fd6c48",
              ext: ".webp",
              mime: "image/webp",
              size: 69.47,
              url: "https://tlappshop-imagenes.s3.amazonaws.com/ALED_S56_3421fd6c48.webp",
              previewUrl: null,
              provider: "aws-s3",
              provider_metadata: null,
              createdAt: "2023-02-10T19:42:30.571Z",
              updatedAt: "2023-02-10T19:42:30.571Z",
            },
          },
        },
        ficha: {
          data: [
            {
              id: 2366,
              attributes: {
                name: "ALED-S56.pdf",
                alternativeText: "ALED-S56.pdf",
                caption: "ALED-S56.pdf",
                width: null,
                height: null,
                formats: null,
                hash: "ALED_S56_497395ec44",
                ext: ".pdf",
                mime: "application/pdf",
                size: 374.47,
                url: "https://tlappshop-imagenes.s3.amazonaws.com/ALED_S56_497395ec44.pdf",
                previewUrl: null,
                provider: "aws-s3",
                provider_metadata: null,
                createdAt: "2023-04-18T18:28:49.267Z",
                updatedAt: "2023-04-18T18:28:49.267Z",
              },
            },
          ],
        },
        instructivo: {
          data: [
            {
              id: 2367,
              attributes: {
                name: "ALED-S56.pdf",
                alternativeText: "ALED-S56.pdf",
                caption: "ALED-S56.pdf",
                width: null,
                height: null,
                formats: null,
                hash: "ALED_S56_d21a5b9889",
                ext: ".pdf",
                mime: "application/pdf",
                size: 794.45,
                url: "https://tlappshop-imagenes.s3.amazonaws.com/ALED_S56_d21a5b9889.pdf",
                previewUrl: null,
                provider: "aws-s3",
                provider_metadata: null,
                createdAt: "2023-04-18T18:29:02.313Z",
                updatedAt: "2023-04-18T18:29:02.313Z",
              },
            },
          ],
        },
        accesorios: { data: null },
        galeria: {
          data: [
            {
              id: 1113,
              attributes: {
                name: "ALED-S56(1).webp",
                alternativeText: "ALED-S56(1).webp",
                caption: "ALED-S56(1).webp",
                width: 1200,
                height: 1200,
                formats: {
                  large: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/large_ALED_S56_1_6125a202bb.webp",
                    hash: "large_ALED_S56_1_6125a202bb",
                    mime: "image/webp",
                    name: "large_ALED-S56(1).webp",
                    path: null,
                    size: 50.05,
                    width: 1000,
                    height: 1000,
                  },
                  small: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/small_ALED_S56_1_6125a202bb.webp",
                    hash: "small_ALED_S56_1_6125a202bb",
                    mime: "image/webp",
                    name: "small_ALED-S56(1).webp",
                    path: null,
                    size: 17.13,
                    width: 500,
                    height: 500,
                  },
                  medium: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/medium_ALED_S56_1_6125a202bb.webp",
                    hash: "medium_ALED_S56_1_6125a202bb",
                    mime: "image/webp",
                    name: "medium_ALED-S56(1).webp",
                    path: null,
                    size: 32.51,
                    width: 750,
                    height: 750,
                  },
                  thumbnail: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/thumbnail_ALED_S56_1_6125a202bb.webp",
                    hash: "thumbnail_ALED_S56_1_6125a202bb",
                    mime: "image/webp",
                    name: "thumbnail_ALED-S56(1).webp",
                    path: null,
                    size: 2.67,
                    width: 156,
                    height: 156,
                  },
                },
                hash: "ALED_S56_1_6125a202bb",
                ext: ".webp",
                mime: "image/webp",
                size: 68.43,
                url: "https://tlappshop-imagenes.s3.amazonaws.com/ALED_S56_1_6125a202bb.webp",
                previewUrl: null,
                provider: "aws-s3",
                provider_metadata: null,
                createdAt: "2023-02-10T19:48:24.435Z",
                updatedAt: "2023-02-10T19:48:24.435Z",
              },
            },
            {
              id: 1112,
              attributes: {
                name: "ALED-S56(2).webp",
                alternativeText: "ALED-S56(2).webp",
                caption: "ALED-S56(2).webp",
                width: 1200,
                height: 1200,
                formats: {
                  large: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/large_ALED_S56_2_3b4b1c4a95.webp",
                    hash: "large_ALED_S56_2_3b4b1c4a95",
                    mime: "image/webp",
                    name: "large_ALED-S56(2).webp",
                    path: null,
                    size: 41.42,
                    width: 1000,
                    height: 1000,
                  },
                  small: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/small_ALED_S56_2_3b4b1c4a95.webp",
                    hash: "small_ALED_S56_2_3b4b1c4a95",
                    mime: "image/webp",
                    name: "small_ALED-S56(2).webp",
                    path: null,
                    size: 15.71,
                    width: 500,
                    height: 500,
                  },
                  medium: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/medium_ALED_S56_2_3b4b1c4a95.webp",
                    hash: "medium_ALED_S56_2_3b4b1c4a95",
                    mime: "image/webp",
                    name: "medium_ALED-S56(2).webp",
                    path: null,
                    size: 28.7,
                    width: 750,
                    height: 750,
                  },
                  thumbnail: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/thumbnail_ALED_S56_2_3b4b1c4a95.webp",
                    hash: "thumbnail_ALED_S56_2_3b4b1c4a95",
                    mime: "image/webp",
                    name: "thumbnail_ALED-S56(2).webp",
                    path: null,
                    size: 2.45,
                    width: 156,
                    height: 156,
                  },
                },
                hash: "ALED_S56_2_3b4b1c4a95",
                ext: ".webp",
                mime: "image/webp",
                size: 53.53,
                url: "https://tlappshop-imagenes.s3.amazonaws.com/ALED_S56_2_3b4b1c4a95.webp",
                previewUrl: null,
                provider: "aws-s3",
                provider_metadata: null,
                createdAt: "2023-02-10T19:48:24.309Z",
                updatedAt: "2023-02-10T19:48:24.309Z",
              },
            },
            {
              id: 1114,
              attributes: {
                name: "ALED-S56(4).webp",
                alternativeText: "ALED-S56(4).webp",
                caption: "ALED-S56(4).webp",
                width: 1200,
                height: 1200,
                formats: {
                  large: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/large_ALED_S56_4_b102578514.webp",
                    hash: "large_ALED_S56_4_b102578514",
                    mime: "image/webp",
                    name: "large_ALED-S56(4).webp",
                    path: null,
                    size: 90.79,
                    width: 1000,
                    height: 1000,
                  },
                  small: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/small_ALED_S56_4_b102578514.webp",
                    hash: "small_ALED_S56_4_b102578514",
                    mime: "image/webp",
                    name: "small_ALED-S56(4).webp",
                    path: null,
                    size: 30.33,
                    width: 500,
                    height: 500,
                  },
                  medium: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/medium_ALED_S56_4_b102578514.webp",
                    hash: "medium_ALED_S56_4_b102578514",
                    mime: "image/webp",
                    name: "medium_ALED-S56(4).webp",
                    path: null,
                    size: 58.7,
                    width: 750,
                    height: 750,
                  },
                  thumbnail: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/thumbnail_ALED_S56_4_b102578514.webp",
                    hash: "thumbnail_ALED_S56_4_b102578514",
                    mime: "image/webp",
                    name: "thumbnail_ALED-S56(4).webp",
                    path: null,
                    size: 5.14,
                    width: 156,
                    height: 156,
                  },
                },
                hash: "ALED_S56_4_b102578514",
                ext: ".webp",
                mime: "image/webp",
                size: 130.35,
                url: "https://tlappshop-imagenes.s3.amazonaws.com/ALED_S56_4_b102578514.webp",
                previewUrl: null,
                provider: "aws-s3",
                provider_metadata: null,
                createdAt: "2023-02-10T19:48:25.173Z",
                updatedAt: "2023-02-10T19:48:25.173Z",
              },
            },
            {
              id: 1116,
              attributes: {
                name: "ALED-S56(3).webp",
                alternativeText: "ALED-S56(3).webp",
                caption: "ALED-S56(3).webp",
                width: 1200,
                height: 1200,
                formats: {
                  large: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/large_ALED_S56_3_f63a3aba2d.webp",
                    hash: "large_ALED_S56_3_f63a3aba2d",
                    mime: "image/webp",
                    name: "large_ALED-S56(3).webp",
                    path: null,
                    size: 93.06,
                    width: 1000,
                    height: 1000,
                  },
                  small: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/small_ALED_S56_3_f63a3aba2d.webp",
                    hash: "small_ALED_S56_3_f63a3aba2d",
                    mime: "image/webp",
                    name: "small_ALED-S56(3).webp",
                    path: null,
                    size: 30.68,
                    width: 500,
                    height: 500,
                  },
                  medium: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/medium_ALED_S56_3_f63a3aba2d.webp",
                    hash: "medium_ALED_S56_3_f63a3aba2d",
                    mime: "image/webp",
                    name: "medium_ALED-S56(3).webp",
                    path: null,
                    size: 60.44,
                    width: 750,
                    height: 750,
                  },
                  thumbnail: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/thumbnail_ALED_S56_3_f63a3aba2d.webp",
                    hash: "thumbnail_ALED_S56_3_f63a3aba2d",
                    mime: "image/webp",
                    name: "thumbnail_ALED-S56(3).webp",
                    path: null,
                    size: 4.46,
                    width: 156,
                    height: 156,
                  },
                },
                hash: "ALED_S56_3_f63a3aba2d",
                ext: ".webp",
                mime: "image/webp",
                size: 129.53,
                url: "https://tlappshop-imagenes.s3.amazonaws.com/ALED_S56_3_f63a3aba2d.webp",
                previewUrl: null,
                provider: "aws-s3",
                provider_metadata: null,
                createdAt: "2023-02-10T19:48:27.149Z",
                updatedAt: "2023-02-10T19:48:27.149Z",
              },
            },
            {
              id: 1115,
              attributes: {
                name: "ALED-S56(5).webp",
                alternativeText: "ALED-S56(5).webp",
                caption: "ALED-S56(5).webp",
                width: 1200,
                height: 1200,
                formats: {
                  large: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/large_ALED_S56_5_1701a10ddd.webp",
                    hash: "large_ALED_S56_5_1701a10ddd",
                    mime: "image/webp",
                    name: "large_ALED-S56(5).webp",
                    path: null,
                    size: 86.57,
                    width: 1000,
                    height: 1000,
                  },
                  small: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/small_ALED_S56_5_1701a10ddd.webp",
                    hash: "small_ALED_S56_5_1701a10ddd",
                    mime: "image/webp",
                    name: "small_ALED-S56(5).webp",
                    path: null,
                    size: 27.61,
                    width: 500,
                    height: 500,
                  },
                  medium: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/medium_ALED_S56_5_1701a10ddd.webp",
                    hash: "medium_ALED_S56_5_1701a10ddd",
                    mime: "image/webp",
                    name: "medium_ALED-S56(5).webp",
                    path: null,
                    size: 54.91,
                    width: 750,
                    height: 750,
                  },
                  thumbnail: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/thumbnail_ALED_S56_5_1701a10ddd.webp",
                    hash: "thumbnail_ALED_S56_5_1701a10ddd",
                    mime: "image/webp",
                    name: "thumbnail_ALED-S56(5).webp",
                    path: null,
                    size: 4.44,
                    width: 156,
                    height: 156,
                  },
                },
                hash: "ALED_S56_5_1701a10ddd",
                ext: ".webp",
                mime: "image/webp",
                size: 124.17,
                url: "https://tlappshop-imagenes.s3.amazonaws.com/ALED_S56_5_1701a10ddd.webp",
                previewUrl: null,
                provider: "aws-s3",
                provider_metadata: null,
                createdAt: "2023-02-10T19:48:27.008Z",
                updatedAt: "2023-02-10T19:48:27.008Z",
              },
            },
          ],
        },
      },
    },
  ]

## Categorias 

    data: [
      {
        id: 14,
        attributes: {
          category: "Automatizacion Basica",
          createdAt: "2022-06-07T17:21:12.273Z",
          updatedAt: "2023-04-11T18:16:38.202Z",
          publishedAt: "2022-06-07T17:21:12.273Z",
          codigo: "100",
          Catalogo: true,
          cover: {
            data: {
              id: 2354,
              attributes: {
                name: "Categori╠üa - ED - Automatizacio╠ün v2 copy.webp",
                alternativeText:
                  "Categori╠üa - ED - Automatizacio╠ün v2 copy.webp",
                caption: "Categori╠üa - ED - Automatizacio╠ün v2 copy.webp",
                width: 1920,
                height: 1080,
                formats: {
                  large: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/large_Categori_uea_ED_Automatizacio_uen_v2_copy_e39d14f57a.webp",
                    hash: "large_Categori_uea_ED_Automatizacio_uen_v2_copy_e39d14f57a",
                    mime: "image/webp",
                    name: "large_Categori╠üa - ED - Automatizacio╠ün v2 copy.webp",
                    path: null,
                    size: 17.03,
                    width: 1000,
                    height: 563,
                  },
                  small: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/small_Categori_uea_ED_Automatizacio_uen_v2_copy_e39d14f57a.webp",
                    hash: "small_Categori_uea_ED_Automatizacio_uen_v2_copy_e39d14f57a",
                    mime: "image/webp",
                    name: "small_Categori╠üa - ED - Automatizacio╠ün v2 copy.webp",
                    path: null,
                    size: 7.75,
                    width: 500,
                    height: 281,
                  },
                  medium: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/medium_Categori_uea_ED_Automatizacio_uen_v2_copy_e39d14f57a.webp",
                    hash: "medium_Categori_uea_ED_Automatizacio_uen_v2_copy_e39d14f57a",
                    mime: "image/webp",
                    name: "medium_Categori╠üa - ED - Automatizacio╠ün v2 copy.webp",
                    path: null,
                    size: 12.23,
                    width: 750,
                    height: 422,
                  },
                  thumbnail: {
                    ext: ".webp",
                    url: "https://tlappshop-imagenes.s3.amazonaws.com/thumbnail_Categori_uea_ED_Automatizacio_uen_v2_copy_e39d14f57a.webp",
                    hash: "thumbnail_Categori_uea_ED_Automatizacio_uen_v2_copy_e39d14f57a",
                    mime: "image/webp",
                    name: "thumbnail_Categori╠üa - ED - Automatizacio╠ün v2 copy.webp",
                    path: null,
                    size: 3.27,
                    width: 245,
                    height: 138,
                  },
                },
                hash: "Categori_uea_ED_Automatizacio_uen_v2_copy_e39d14f57a",
                ext: ".webp",
                mime: "image/webp",
                size: 39.04,
                url: "https://tlappshop-imagenes.s3.amazonaws.com/Categori_uea_ED_Automatizacio_uen_v2_copy_e39d14f57a.webp",
                previewUrl: null,
                provider: "aws-s3",
                provider_metadata: null,
                createdAt: "2023-04-04T22:16:17.892Z",
                updatedAt: "2023-04-04T22:16:17.892Z",
              },
            },
          },
          background: {
            data: [
              {
                id: 2351,
                attributes: {
                  name: "Fondo de prueba Decorativo.webp",
                  alternativeText: "Fondo de prueba Decorativo.webp",
                  caption: "Fondo de prueba Decorativo.webp",
                  width: 1920,
                  height: 1080,
                  formats: {
                    large: {
                      ext: ".webp",
                      url: "https://tlappshop-imagenes.s3.amazonaws.com/large_Fondo_de_prueba_Decorativo_d6120a7ba2.webp",
                      hash: "large_Fondo_de_prueba_Decorativo_d6120a7ba2",
                      mime: "image/webp",
                      name: "large_Fondo de prueba Decorativo.webp",
                      path: null,
                      size: 14.67,
                      width: 1000,
                      height: 563,
                    },
                    small: {
                      ext: ".webp",
                      url: "https://tlappshop-imagenes.s3.amazonaws.com/small_Fondo_de_prueba_Decorativo_d6120a7ba2.webp",
                      hash: "small_Fondo_de_prueba_Decorativo_d6120a7ba2",
                      mime: "image/webp",
                      name: "small_Fondo de prueba Decorativo.webp",
                      path: null,
                      size: 6.28,
                      width: 500,
                      height: 281,
                    },
                    medium: {
                      ext: ".webp",
                      url: "https://tlappshop-imagenes.s3.amazonaws.com/medium_Fondo_de_prueba_Decorativo_d6120a7ba2.webp",
                      hash: "medium_Fondo_de_prueba_Decorativo_d6120a7ba2",
                      mime: "image/webp",
                      name: "medium_Fondo de prueba Decorativo.webp",
                      path: null,
                      size: 10.13,
                      width: 750,
                      height: 422,
                    },
                    thumbnail: {
                      ext: ".webp",
                      url: "https://tlappshop-imagenes.s3.amazonaws.com/thumbnail_Fondo_de_prueba_Decorativo_d6120a7ba2.webp",
                      hash: "thumbnail_Fondo_de_prueba_Decorativo_d6120a7ba2",
                      mime: "image/webp",
                      name: "thumbnail_Fondo de prueba Decorativo.webp",
                      path: null,
                      size: 2.93,
                      width: 245,
                      height: 138,
                    },
                  },
                  hash: "Fondo_de_prueba_Decorativo_d6120a7ba2",
                  ext: ".webp",
                  mime: "image/webp",
                  size: 41.91,
                  url: "https://tlappshop-imagenes.s3.amazonaws.com/Fondo_de_prueba_Decorativo_d6120a7ba2.webp",
                  previewUrl: null,
                  provider: "aws-s3",
                  provider_metadata: null,
                  createdAt: "2023-03-30T22:43:11.692Z",
                  updatedAt: "2023-03-30T22:43:11.692Z",
                },
              },
            ],
          },
          thumbnail: {
            data: [
              {
                id: 2355,
                attributes: {
                  name: "Automatizacio╠ün400x400.webp",
                  alternativeText: "Automatizacio╠ün400x400.webp",
                  caption: "Automatizacio╠ün400x400.webp",
                  width: 400,
                  height: 400,
                  formats: {
                    thumbnail: {
                      ext: ".webp",
                      url: "https://tlappshop-imagenes.s3.amazonaws.com/thumbnail_Automatizacio_uen400x400_bd728c2206.webp",
                      hash: "thumbnail_Automatizacio_uen400x400_bd728c2206",
                      mime: "image/webp",
                      name: "thumbnail_Automatizacio╠ün400x400.webp",
                      path: null,
                      size: 5.25,
                      width: 156,
                      height: 156,
                    },
                  },
                  hash: "Automatizacio_uen400x400_bd728c2206",
                  ext: ".webp",
                  mime: "image/webp",
                  size: 10.37,
                  url: "https://tlappshop-imagenes.s3.amazonaws.com/Automatizacio_uen400x400_bd728c2206.webp",
                  previewUrl: null,
                  provider: "aws-s3",
                  provider_metadata: null,
                  createdAt: "2023-04-05T05:49:01.782Z",
                  updatedAt: "2023-04-05T05:49:01.782Z",
                },
              },
            ],
          },
        },
      },
    ]