// src/data/categories.js
import { IceCream, Snowflake, Lollipop, Heart, Coffee, Utensils, Coffee as Drink } from 'lucide-react';

// Categorías principales para navegación
export const MAIN_CATEGORIES = {
  HELADOS: {
    id: 'helados',
    name: 'Helados',
    slug: 'helados',
    icon: IceCream,
    description: 'Helados cremosos y artesanales',
    color: 'morado',
    order: 1
  },
  NIEVES: {
    id: 'nieves',
    name: 'Nieves',
    slug: 'nieves',
    icon: Snowflake,
    description: 'Nieves refrescantes y naturales',
    color: 'salmon',
    order: 2
  },
  PALETAS: {
    id: 'paletas',
    name: 'Paletas',
    slug: 'paletas',
    icon: Lollipop,
    description: 'Paletas artesanales y naturales',
    color: 'crema',
    order: 3
  },
  PET_FRIENDLY: {
    id: 'pet-friendly',
    name: 'Pet Friendly',
    slug: 'pet-friendly',
    icon: Heart,
    description: 'Helados seguros para mascotas',
    color: 'morado',
    order: 4,
    special: true
  }
};

// Subcategorías de helados
export const HELADO_SUBCATEGORIES = {
  GOURMET: {
    id: 'helado-gourmet',
    name: 'Gourmet',
    slug: 'gourmet',
    parent: 'helados',
    description: 'Sabores únicos y sofisticados',
    premium: true,
    order: 1
  },
  PREMIUM: {
    id: 'helado-premium',
    name: 'Premium',
    slug: 'premium',
    parent: 'helados',
    description: 'Calidad superior con ingredientes selectos',
    premium: true,
    order: 2
  },
  TRADICIONAL: {
    id: 'helado-tradicional',
    name: 'Tradicional',
    slug: 'tradicional',
    parent: 'helados',
    description: 'Sabores clásicos de siempre',
    premium: false,
    order: 3
  }
};

// Subcategorías de nieves
export const NIEVE_SUBCATEGORIES = {
  ARTESANAL: {
    id: 'nieve-artesanal',
    name: 'Artesanal',
    slug: 'artesanal',
    parent: 'nieves',
    description: 'Nieves naturales hechas a mano',
    order: 1
  },
  CON_ALCOHOL: {
    id: 'nieve-alcohol',
    name: 'Con Alcohol',
    slug: 'con-alcohol',
    parent: 'nieves',
    description: 'Solo para adultos',
    alcoholic: true,
    ageRestricted: true,
    order: 2
  },
  TEMPORADA: {
    id: 'nieve-temporada',
    name: 'De Temporada',
    slug: 'temporada',
    parent: 'nieves',
    description: 'Sabores especiales por temporada',
    seasonal: true,
    order: 3
  }
};

// Categorías para móvil - Delicias
export const DELICIAS_CATEGORIES = {
  CAFE: {
    id: 'cafe',
    name: 'Café',
    slug: 'cafe',
    icon: Coffee,
    description: 'Bebidas calientes y frías de café',
    color: 'morado',
    order: 1
  },
  CREPAS: {
    id: 'crepas',
    name: 'Crepas',
    slug: 'crepas',
    icon: Utensils,
    description: 'Crepas dulces y saladas',
    color: 'salmon',
    order: 2
  },
  BEBIDAS: {
    id: 'bebidas',
    name: 'Bebidas Envasadas',
    slug: 'bebidas-envasadas',
    icon: Drink,
    description: 'Bebidas frías envasadas',
    color: 'crema',
    order: 3
  }
};

// Todas las categorías combinadas
export const ALL_CATEGORIES = {
  ...MAIN_CATEGORIES,
  ...HELADO_SUBCATEGORIES,
  ...NIEVE_SUBCATEGORIES,
  ...DELICIAS_CATEGORIES
};

// Etiquetas especiales para productos
export const PRODUCT_TAGS = {
  // Nutricionales
  SIN_AZUCAR: {
    id: 'sin-azucar',
    name: 'Sin Azúcar',
    slug: 'sin-azucar',
    color: 'green',
    icon: '🚫🍭',
    nutritional: true
  },
  VEGANO: {
    id: 'vegano',
    name: 'Vegano',
    slug: 'vegano',
    color: 'green',
    icon: '🌱',
    nutritional: true
  },
  SIN_LACTOSA: {
    id: 'sin-lactosa',
    name: 'Sin Lactosa',
    slug: 'sin-lactosa',
    color: 'blue',
    icon: '🥛',
    nutritional: true
  },
  ALTO_PROTEINA: {
    id: 'alto-proteina',
    name: 'Alto en Proteína',
    slug: 'alto-proteina',
    color: 'orange',
    icon: '💪',
    nutritional: true
  },
  
  // Especiales
  CON_ALCOHOL: {
    id: 'con-alcohol',
    name: 'Con Alcohol',
    slug: 'con-alcohol',
    color: 'red',
    icon: '🍺',
    ageRestricted: true,
    special: true
  },
  PET_SAFE: {
    id: 'pet-safe',
    name: 'Pet Friendly',
    slug: 'pet-safe',
    color: 'purple',
    icon: '🐾',
    special: true
  },
  TEMPORADA: {
    id: 'temporada',
    name: 'De Temporada',
    slug: 'temporada',
    color: 'yellow',
    icon: '⭐',
    seasonal: true,
    special: true
  },
  EDICION_LIMITADA: {
    id: 'edicion-limitada',
    name: 'Edición Limitada',
    slug: 'edicion-limitada',
    color: 'pink',
    icon: '💎',
    limited: true,
    special: true
  },
  
  // Sabores destacados
  BESTSELLER: {
    id: 'bestseller',
    name: 'Más Vendido',
    slug: 'bestseller',
    color: 'gold',
    icon: '🏆',
    featured: true
  },
  NUEVO: {
    id: 'nuevo',
    name: 'Nuevo',
    slug: 'nuevo',
    color: 'cyan',
    icon: '✨',
    featured: true
  },
  RECOMENDADO: {
    id: 'recomendado',
    name: 'Recomendado',
    slug: 'recomendado',
    color: 'indigo',
    icon: '👍',
    featured: true
  }
};

// Tamaños disponibles
export const PRODUCT_SIZES = {
  CHICO: {
    id: 'chico',
    name: 'Chico',
    slug: 'chico',
    volume: '100ml',
    order: 1
  },
  MEDIANO: {
    id: 'mediano',
    name: 'Mediano',
    slug: 'mediano',
    volume: '200ml',
    order: 2
  },
  GRANDE: {
    id: 'grande',
    name: 'Grande',
    slug: 'grande',
    volume: '300ml',
    order: 3
  },
  MEDIO_LITRO: {
    id: 'medio-litro',
    name: 'Medio Litro',
    slug: 'medio-litro',
    volume: '500ml',
    order: 4,
    takeaway: true
  },
  UN_LITRO: {
    id: 'un-litro',
    name: 'Un Litro',
    slug: 'un-litro',
    volume: '1000ml',
    order: 5,
    takeaway: true
  }
};

// Categorías jerarquizadas para navegación
export const CATEGORY_HIERARCHY = {
  helados: {
    main: MAIN_CATEGORIES.HELADOS,
    subcategories: [
      HELADO_SUBCATEGORIES.GOURMET,
      HELADO_SUBCATEGORIES.PREMIUM,
      HELADO_SUBCATEGORIES.TRADICIONAL
    ]
  },
  nieves: {
    main: MAIN_CATEGORIES.NIEVES,
    subcategories: [
      NIEVE_SUBCATEGORIES.ARTESANAL,
      NIEVE_SUBCATEGORIES.CON_ALCOHOL,
      NIEVE_SUBCATEGORIES.TEMPORADA
    ]
  },
  paletas: {
    main: MAIN_CATEGORIES.PALETAS,
    subcategories: []
  },
  'pet-friendly': {
    main: MAIN_CATEGORIES.PET_FRIENDLY,
    subcategories: []
  }
};

// Funciones helper
export const getCategoryById = (id) => {
  return ALL_CATEGORIES[id] || null;
};

export const getCategoriesByParent = (parentId) => {
  return Object.values(ALL_CATEGORIES).filter(cat => cat.parent === parentId);
};

export const getMainCategories = () => {
  return Object.values(MAIN_CATEGORIES);
};

export const getDeliciasCategories = () => {
  return Object.values(DELICIAS_CATEGORIES);
};

export const getCategoryHierarchy = (categoryId) => {
  return CATEGORY_HIERARCHY[categoryId] || null;
};

export const getTagById = (tagId) => {
  return PRODUCT_TAGS[tagId] || null;
};

export const getNutritionalTags = () => {
  return Object.values(PRODUCT_TAGS).filter(tag => tag.nutritional);
};

export const getSpecialTags = () => {
  return Object.values(PRODUCT_TAGS).filter(tag => tag.special);
};

export const getFeaturedTags = () => {
  return Object.values(PRODUCT_TAGS).filter(tag => tag.featured);
};

// Configuración de colores por categoría
export const CATEGORY_COLORS = {
  helados: {
    primary: 'morado-500',
    secondary: 'morado-100',
    accent: 'morado-700'
  },
  nieves: {
    primary: 'salmon-500',
    secondary: 'salmon-100',
    accent: 'salmon-700'
  },
  paletas: {
    primary: 'crema-500',
    secondary: 'crema-100',
    accent: 'crema-700'
  },
  'pet-friendly': {
    primary: 'morado-400',
    secondary: 'morado-50',
    accent: 'morado-600'
  },
  cafe: {
    primary: 'amber-600',
    secondary: 'amber-100',
    accent: 'amber-800'
  },
  crepas: {
    primary: 'orange-500',
    secondary: 'orange-100',
    accent: 'orange-700'
  },
  bebidas: {
    primary: 'cyan-500',
    secondary: 'cyan-100',
    accent: 'cyan-700'
  }
};

export default {
  MAIN_CATEGORIES,
  HELADO_SUBCATEGORIES,
  NIEVE_SUBCATEGORIES,
  DELICIAS_CATEGORIES,
  ALL_CATEGORIES,
  PRODUCT_TAGS,
  PRODUCT_SIZES,
  CATEGORY_HIERARCHY,
  CATEGORY_COLORS,
  getCategoryById,
  getCategoriesByParent,
  getMainCategories,
  getDeliciasCategories,
  getCategoryHierarchy,
  getTagById,
  getNutritionalTags,
  getSpecialTags,
  getFeaturedTags
};