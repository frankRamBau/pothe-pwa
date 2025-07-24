export const products = [
  // HELADOS GOURMET
  {
    id: 1,
    isFeatured: true,
    name: "Baileys",
    category: "helado",
    description: "Helado cremoso con sabor a licor Baileys.",
    images: [
      "/pothe-pwa/images/products/helados_pothe-sample.jpg",
      "/pothe-pwa/images/products/Baileys.jpg",
    ],
    tags: ["cremoso", "delicioso", "gourmet"],
    nutritionalInfo: ["Contiene alcohol", "Contiene lácteos"],
    // isNew: false,
    // isTrending: true,
    badge: "",
    seasonal: false,
    featured: false
  },
  {
    id: 2,
    isFeatured: false,
    name: "Banana en la luna",
    category: "helado",
    subcategory: "gourmet",
    description: "Helado de plátano con un toque cósmico de sabor.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    tags: ["frutal", "original", "cremoso"],
    nutritionalInfo: ["Contiene fruta", "Contiene lácteos"],
    // isNew: true,
    // isTrending: false,
    badge: "Nuevo",
    seasonal: false,
    featured: false
  },
  {
    id: 3,
    isFeatured: false,
    name: "Bombón quemado",
    category: "helado",
    subcategory: "gourmet",
    description: "Helado dulce con notas de bombón tostado.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["dulce", "marshmallow", "tostado"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene azúcar", "Contiene lácteos"],
    isNew: false,
    isTrending: false,
    badge: "Favorito",
    seasonal: false,
    featured: false
  },
  {
    id: 4,
    isFeatured: false,
    name: "Chai",
    category: "helado",
    subcategory: "gourmet",
    description: "Helado especiado con sabor a té chai.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["especias", "té", "exótico"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene especias", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 5,
    name: "Conejo turín",
    category: "helado",
    subcategory: "gourmet",
    description: "Inspirado en el clásico chocolate con leche en forma de conejo.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["chocolate", "cremoso", "infantil"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene chocolate", "Contiene lácteos"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 6,
    name: "Fresas con crema",
    category: "helado",
    subcategory: "gourmet",
    description: "Clásico sabor de fresas frescas con crema batida.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["fruta", "cremoso", "fresco"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene fruta", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 7,
    name: "Bubbalo",
    category: "helado",
    subcategory: "gourmet",
    description: "Sabor a chicle rosa que te hará volver a la infancia.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["chicle", "divertido", "dulce"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene colorantes", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 8,
    name: "Huevo kinder",
    category: "helado",
    subcategory: "gourmet",
    description: "Helado con sabor a chocolate Kinder Sorpresa.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["chocolate", "infantil", "suave"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene chocolate", "Contiene lácteos"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 9,
    name: "Matcha",
    category: "helado",
    subcategory: "gourmet",
    description: "Helado de té verde japonés con sabor único.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["té", "japonés", "refrescante"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene cafeína", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 10,
    name: "Ramito de violetas",
    category: "helado",
    subcategory: "gourmet",
    description: "Helado floral con un delicado aroma a violetas.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["floral", "exótico", "aromático"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene esencias florales", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 11,
    name: "Trufa",
    category: "helado",
    subcategory: "gourmet",
    description: "Helado intenso con sabor a trufa de chocolate.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["chocolate", "intenso", "gourmet"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene chocolate oscuro", "Contiene lácteos"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 12,
    name: "Piñón",
    category: "helado",
    subcategory: "gourmet",
    description: "Helado cremoso con piñón tostado.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["nuez", "cremoso", "mexicano"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene frutos secos", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 13,
    name: "Romance oaxaqueño",
    category: "helado",
    subcategory: "gourmet",
    description: "Fusión de sabores tradicionales de Oaxaca.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["mexicano", "tradicional", "artesanal"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Ingredientes regionales", "Contiene lácteos"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 14,
    name: "Taro",
    category: "helado",
    subcategory: "gourmet",
    description: "Exótico sabor oriental con raíz de taro.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["oriental", "suave", "diferente"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene taro", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 15,
    name: "Algodón de azúcar",
    category: "helado",
    subcategory: "gourmet",
    description: "Helado con sabor a feria y algodón de azúcar.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["dulce", "infantil", "colorido"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene azúcar", "Contiene colorantes"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 16,
    name: "Pistacho",
    category: "helado",
    subcategory: "gourmet",
    description: "Helado de pistacho auténtico con un sabor único.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["frutos secos", "verde", "cremoso"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene nuez", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 17,
    name: "Cheesecake",
    category: "helado",
    subcategory: "gourmet",
    description: "Helado con sabor a pastel de queso.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["pastel", "dulce", "cremoso"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene queso crema", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 18,
    name: "Cajeta con nuez",
    category: "helado",
    subcategory: "gourmet",
    description: "Dulce combinación de cajeta artesanal y nueces tostadas.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["tradicional", "nuez", "dulce"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene lácteos", "Contiene nueces"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  // HELADOS PREMIUM
  {
    id: 19,
    name: "Arroz con leche",
    category: "helado",
    subcategory: "premium",
    description: "Helado con sabor a arroz con leche tradicional, cremoso y dulce.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["tradicional", "cremoso", "dulce"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene lácteos", "Alto en azúcar"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 20,
    name: "Beso de angel",
    category: "helado",
    subcategory: "premium",
    description: "Delicado helado con sabor suave y dulce como un beso de ángel.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["suave", "dulce", "premium"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene lácteos", "Bajo en grasas"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 21,
    name: "Café con almendras",
    category: "helado",
    subcategory: "premium",
    description: "Helado de café con crocantes almendras tostadas.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["café", "nueces", "premium"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene cafeína", "Contiene frutos secos"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 22,
    isFeatured: false,
    name: "Ferrero",
    category: "helado",
    subcategory: "premium",
    description: "Helado inspirado en el chocolate y avellanas Ferrero Rocher.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["chocolate", "avellanas", "premium"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene nueces", "Contiene lácteos"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 23,
    name: "Frutos secos",
    category: "helado",
    subcategory: "premium",
    description: "Helado con mezcla de frutos secos tostados y cremosos.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["nueces", "cremoso", "premium"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene frutos secos", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 24,
    name: "Mazapán",
    category: "helado",
    subcategory: "premium",
    description: "Helado inspirado en el dulce tradicional de mazapán.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["dulce", "tradicional", "premium"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene azúcar", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 25,
    name: "Mento",
    category: "helado",
    subcategory: "premium",
    description: "Helado refrescante con sabor a menta y toque dulce.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["menta", "refrescante", "premium"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene mentol", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 26,
    name: "Philadelphia con zarza",
    category: "helado",
    subcategory: "premium",
    description: "Helado cremoso de queso Philadelphia con zarzamora natural.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["queso", "fruta", "premium"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene lácteos", "Contiene fruta"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 27,
    name: "Raffaello",
    category: "helado",
    subcategory: "premium",
    description: "Helado inspirado en el dulce Raffaello, con coco y almendra.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["coco", "almendra", "premium"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene frutos secos", "Contiene lácteos"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 28,
    name: "Yogurt griego con frutos rojos",
    category: "helado",
    subcategory: "premium",
    description: "Helado cremoso de yogurt griego con mezcla de frutos rojos frescos.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["yogurt", "frutas", "saludable"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 46 },
      { size: "grande", price: 62 },
      { size: "medio_litro", price: 85 },
      { size: "litro", price: 148 }
    ],
    nutritionalInfo: ["Contiene probióticos", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  // HELADOS TRADICIONAL
  {
    id: 29,
    name: "Chocolate abuelita",
    category: "helado",
    subcategory: "tradicional",
    description: "Helado con sabor a chocolate tradicional tipo Abuelita, intenso y cremoso.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["chocolate", "tradicional", "cremoso"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 75 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Contiene cacao", "Contiene lácteos"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 30,
    name: "Cajeta",
    category: "helado",
    subcategory: "tradicional",
    description: "Dulce helado de cajeta artesanal, típico sabor mexicano.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["dulce", "tradicional", "mexicano"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 75 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Contiene azúcar", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 31,
    name: "Choco chip",
    category: "helado",
    subcategory: "tradicional",
    description: "Helado de vainilla con trozos crujientes de chocolate.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["vainilla", "chocolate", "crujiente"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 75 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Contiene lácteos", "Contiene chocolate"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 32,
    name: "Fresa",
    category: "helado",
    subcategory: "tradicional",
    description: "Helado clásico de fresa con sabor dulce y fresco.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["fruta", "dulce", "clásico"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 75 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Contiene fruta", "Contiene azúcar"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 33,
    name: "Mamey",
    category: "helado",
    subcategory: "tradicional",
    description: "Helado tradicional con sabor a mamey dulce y cremoso.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["fruta", "cremoso", "tradicional"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 75 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Contiene fruta", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 34,
    name: "Oreo",
    category: "helado",
    subcategory: "tradicional",
    description: "Helado de vainilla con trozos de galleta Oreo.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["galleta", "chocolate", "cremoso"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 75 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Contiene gluten", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 35,
    name: "Pay de limón",
    category: "helado",
    subcategory: "tradicional",
    description: "Helado con sabor a pay de limón, refrescante y cremoso.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["cítrico", "cremoso", "tradicional"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 75 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Contiene lácteos", "Contiene azúcar"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 36,
    isFeatured: false,
    name: "Queso fresco",
    category: "helado",
    subcategory: "tradicional",
    description: "Helado cremoso con sabor a queso fresco tradicional.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["queso", "cremoso", "tradicional"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 75 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Contiene lácteos", "Alto en grasas"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 37,
    name: "Vainilla",
    category: "helado",
    subcategory: "tradicional",
    description: "Helado clásico de vainilla, suave y cremoso.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["vainilla", "clásico", "cremoso"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 75 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Contiene lácteos", "Contiene azúcar"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 38,
    name: "Nuez",
    category: "helado",
    subcategory: "tradicional",
    description: "Helado con trozos de nuez y sabor cremoso y dulce.",
    image: "/pothe-pwa/images/products/helados_pothe.jpg",
    
    tags: ["nueces", "cremoso", "dulce"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 75 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Contiene nuez", "Contiene lácteos"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  // NIEVE ARTESANAL
  {
    id: 39,
    name: "Coco",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve artesanal con sabor a coco fresco y natural.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["coco", "natural", "refrescante"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Bajo en grasas", "Contiene azúcar"],
    seasonal: false,
    featured: false,
    petFriendly: true
  },
  {
    id: 40,
    name: "Durazno",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve artesanal con sabor a durazno fresco y dulce.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["durazno", "fruta", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Contiene azúcar", "Bajo en grasas"],
    seasonal: false,
    featured: false,
    petFriendly: true
  },
  {
    id: 41,
    name: "Explosión tropical",
    category: "nieve",
    subcategory: "artesanal",
    description: "Mezcla tropical de sabores frutales para una experiencia refrescante.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["tropical", "frutas", "refrescante"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Contiene azúcar", "Fuente de vitaminas"],
    seasonal: true,
    featured: true,
    petFriendly: true
  },
  {
    id: 42,
    name: "Fresa",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve artesanal con auténtico sabor a fresa fresca.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["fresa", "natural", "refrescante"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Contiene fruta", "Bajo en grasas"],
    seasonal: false,
    featured: false,
    petFriendly: true
  },
  {
    id: 43,
    name: "Frutos rojos",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve con mezcla de frutos rojos frescos y naturales.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["frutos rojos", "fruta", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Contiene antioxidantes", "Bajo en grasas"],
    seasonal: false,
    featured: false,
    petFriendly: true
  },
  {
    id: 44,
    name: "Garambullo",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve artesanal con sabor a garambullo, fruta típica mexicana.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["fruta", "tradicional", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Contiene azúcar", "Bajo en grasas"],
    seasonal: true,
    featured: false,
    petFriendly: true
  },
  {
    id: 45,
    name: "Guanábana",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve con delicioso sabor a guanábana fresco y natural.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["fruta", "refrescante", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Fuente de vitamina C", "Bajo en grasas"],
    seasonal: false,
    featured: false,
    petFriendly: true
  },
  {
    id: 46,
    name: "Jamaica",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve artesanal con sabor a flor de Jamaica, refrescante y ácido.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["flor de jamaica", "ácido", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Contiene antioxidantes", "Bajo en grasas"],
    seasonal: false,
    featured: false,
    petFriendly: true
  },
  {
    id: 47,
    name: "Guayaba",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve con sabor a guayaba fresca, dulce y natural.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["fruta", "dulce", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Fuente de vitamina C", "Bajo en grasas"],
    seasonal: false,
    featured: false,
    petFriendly: true
  },
  {
    id: 48,
    name: "Jícama",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve fresca y dulce con auténtico sabor a jícama.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["fruta", "refrescante", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Bajo en calorías", "Fuente de fibra"],
    seasonal: true,
    featured: false,
    petFriendly: true
  },
  {
    id: 49,
    name: "Kiwi",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve artesanal con sabor a kiwi, dulce y ligeramente ácido.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["fruta", "ácido", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Fuente de vitamina C", "Bajo en grasas"],
    seasonal: false,
    featured: true,
    petFriendly: true
  },
  {
    id: 50,
    name: "Limón",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve refrescante con intenso sabor a limón natural.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["cítrico", "refrescante", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Contiene vitamina C", "Bajo en grasas"],
    seasonal: false,
    featured: true,
    petFriendly: true
  },
  {
    id: 51,
    name: "Mango",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve artesanal con sabor dulce y tropical de mango.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["fruta", "dulce", "tropical"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Fuente de vitamina A", "Bajo en grasas"],
    seasonal: false,
    featured: false,
    petFriendly: true
  },
  {
    id: 52,
    name: "Hierbabuena",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve refrescante con sabor a hierbabuena natural y fresca.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["menta", "refrescante", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Contiene antioxidantes", "Bajo en calorías"],
    seasonal: false,
    featured: false,
    petFriendly: true
  },
  {
    id: 53,
    name: "Manzana verde",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve con sabor a manzana verde, dulce y ligeramente ácida.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["fruta", "ácido", "dulce"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Bajo en grasas", "Fuente de vitamina C"],
    seasonal: false,
    featured: false,
    petFriendly: true
  },
  {
    id: 54,
    name: "Maracuyá",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve artesanal con sabor a maracuyá, exótico y refrescante.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["fruta", "tropical", "ácido"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Fuente de vitamina C", "Bajo en grasas"],
    seasonal: true,
    featured: true,
    petFriendly: true
  },
  {
    id: 55,
    name: "Pepino",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve fresca y ligera con sabor a pepino natural.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["refrescante", "natural", "ligero"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Bajo en calorías", "Fuente de agua"],
    seasonal: false,
    featured: false,
    petFriendly: true
  },
  {
    id: 56,
    isFeatured: true,
    name: "Pica fresa",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve artesanal con sabor a fresa con toque picante.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["fresa", "picante", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Contiene azúcar", "Contiene chile"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 57,
    name: "Pulparindo",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve inspirada en el sabor del popular dulce Pulparindo, dulce y ácido.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["dulce", "ácido", "tradicional"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Contiene azúcar", "Contiene chile"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 58,
    name: "Tamborcito",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve tradicional con sabor dulce y refrescante de tamborcito.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["dulce", "tradicional", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Contiene azúcar", "Bajo en grasas"],
    seasonal: true,
    featured: false,
    petFriendly: true
  },
  {
    id: 59,
    name: "Zanahoria",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve artesanal con sabor a zanahoria fresca y dulce.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["vegetal", "dulce", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Fuente de vitamina A", "Bajo en grasas"],
    seasonal: true,
    featured: false,
    petFriendly: true
  },
  {
    id: 60,
    name: "Sandía",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve refrescante con sabor a sandía natural y dulce.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["fruta", "refrescante", "natural"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Fuente de agua", "Bajo en calorías"],
    seasonal: false,
    featured: true,
    petFriendly: true
  },
  {
    id: 61,
    name: "Tamarindo",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve con sabor a tamarindo, dulce y ácido, muy tradicional.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["dulce", "ácido", "tradicional"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Contiene azúcar", "Bajo en grasas"],
    seasonal: true,
    featured: true,
    petFriendly: true
  },
  {
    id: 62,
    name: "Piña",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve refrescante con auténtico sabor a piña dulce y ácida.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["fruta", "dulce", "ácido"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Fuente de vitamina C", "Bajo en grasas"],
    seasonal: false,
    featured: true,
    petFriendly: true
  },
  {
    id: 63,
    name: "Naranja",
    category: "nieve",
    subcategory: "artesanal",
    description: "Nieve artesanal con sabor a naranja natural y refrescante.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["cítrico", "natural", "refrescante"],
    sizes: [
      { size: "chico", price: 20 },
      { size: "mediano", price: 35 },
      { size: "grande", price: 50 },
      { size: "medio_litro", price: 70 },
      { size: "litro", price: 120 }
    ],
    nutritionalInfo: ["Fuente de vitamina C", "Bajo en grasas"],
    seasonal: false,
    featured: false,
    petFriendly: true
  },
  // NIEVE CON ALCOHOL
  {
    id: 64,
    name: "Cuba libre",
    category: "nieve",
    subcategory: "con alcohol",
    description: "Nieve artesanal con el clásico sabor a Cuba Libre, mezcla de ron, cola y limón.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpgg",
    
    tags: ["alcohol", "refrescante", "clásico"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 45 },
      { size: "grande", price: 60 },
      { size: "medio_litro", price: 90 },
      { size: "litro", price: 150 }
    ],
    nutritionalInfo: ["Contiene alcohol", "Bajo en calorías"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 65,
    name: "Mojito",
    category: "nieve",
    subcategory: "con alcohol",
    description: "Nieve fresca con el sabor a mojito: ron, hierbabuena y limón.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["alcohol", "menta", "refrescante"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 45 },
      { size: "grande", price: 60 },
      { size: "medio_litro", price: 90 },
      { size: "litro", price: 150 }
    ],
    nutritionalInfo: ["Contiene alcohol", "Fuente de vitamina C"],
    seasonal: false,
    featured: true,
    petFriendly: false
  },
  {
    id: 66,
    name: "Smirnoff tamarindo",
    category: "nieve",
    subcategory: "con alcohol",
    description: "Nieve artesanal con sabor a tamarindo y vodka Smirnoff, dulce y ácido.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["alcohol", "dulce", "ácido"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 45 },
      { size: "grande", price: 60 },
      { size: "medio_litro", price: 90 },
      { size: "litro", price: 150 }
    ],
    nutritionalInfo: ["Contiene alcohol", "Fuente de azúcar"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 67,
    name: "Tequila",
    category: "nieve",
    subcategory: "con alcohol",
    description: "Nieve artesanal con el característico sabor de tequila, ideal para los amantes del agave.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["alcohol", "fuerte", "tradicional"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 45 },
      { size: "grande", price: 60 },
      { size: "medio_litro", price: 90 },
      { size: "litro", price: 150 }
    ],
    nutritionalInfo: ["Contiene alcohol", "Bajo en grasas"],
    seasonal: false,
    featured: false,
    petFriendly: false
  },
  {
    id: 68,
    name: "Clericot",
    category: "nieve",
    subcategory: "con alcohol",
    description: "Nieve artesanal con mezcla de frutas y vino blanco, refrescante y deliciosa.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["alcohol", "frutal", "refrescante"],
    sizes: [
      { size: "chico", price: 30 },
      { size: "mediano", price: 45 },
      { size: "grande", price: 60 },
      { size: "medio_litro", price: 90 },
      { size: "litro", price: 150 }
    ],
    nutritionalInfo: ["Contiene alcohol", "Fuente de vitaminas"],
    seasonal: true,
    featured: true,
    petFriendly: false
  },
  // SABORES DE TEMPORADA
  {
    id: 69,
    name: "Cempasúchil",
    category: "temporada",
    subcategory: "sabores de temporada",
    description: "Nieve artesanal con sabor a cempasúchil, una flor tradicional en temporada de Día de Muertos.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["floral", "tradicional", "único"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 80 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Bajo en calorías", "Natural"],
    seasonal: true,
    featured: true,
    petFriendly: false
  },
  {
    id: 70,
    name: "Chocolate abuelita",
    category: "temporada",
    subcategory: "sabores de temporada",
    description: "Nieve artesanal con sabor a chocolate abuelita, ideal para la temporada de frío.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["chocolate", "tradicional", "dulce"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 80 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Fuente de antioxidantes", "Contiene azúcar"],
    seasonal: true,
    featured: true,
    petFriendly: false
  },
  {
    id: 71,
    name: "Pan de muerto",
    category: "temporada",
    subcategory: "sabores de temporada",
    description: "Nieve artesanal con sabor a pan de muerto, tradicional en la celebración del Día de Muertos.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["tradicional", "dulce", "único"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 80 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Bajo en grasas", "Contiene azúcar"],
    seasonal: true,
    featured: true,
    petFriendly: false
  },
  {
    id: 72,
    name: "Otros",
    category: "temporada",
    subcategory: "sabores de temporada",
    description: "Variedad de sabores especiales disponibles solo en temporada.",
    image: "/pothe-pwa/images/products/nieves_pothe.jpg",
    
    tags: ["temporada", "variedad", "limitado"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 80 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Variable según sabor", "Natural"],
    seasonal: true,
    featured: false,
    petFriendly: false
  },
  // PALETAS
  {
    id: 73,
    isFeatured: true,
    name: "Limón",
    category: "paletas",
    description: "Ingredientes naturales y saludables",
    image: "/pothe-pwa/images/products/paletas_pothe.jpg",
    
    tags: ["refrescante", "único"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 80 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Saludable", "Natural"],
    seasonal: true,
    featured: true,
    petFriendly: false
  },
 // SABORES PET FRIENDLY
  {
    id: 74,
    isFeatured: true,
    name: "Lomitos",
    category: "petfriendly",
    description: "Ingredientes naturales y saludables",
    image: "/pothe-pwa/images/products/pet-friendly_pothe.jpg",
    
    tags: ["refrescante", "mascotas", "único"],
    sizes: [
      { size: "chico", price: 25 },
      { size: "mediano", price: 40 },
      { size: "grande", price: 55 },
      { size: "medio_litro", price: 80 },
      { size: "litro", price: 130 }
    ],
    nutritionalInfo: ["Saludable", "Natural"],
    seasonal: true,
    featured: true,
    petFriendly: false
  }
]