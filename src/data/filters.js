import { 
  IceCream2, 
  Snowflake, 
  Candy, 
  Heart, 
  Leaf, 
  Zap, 
  Wine, 
  Shield, 
  Star,
  Sparkles,
  TreePine,
  Clock
} from 'lucide-react';

// Categorías principales de productos
export const PRODUCT_CATEGORIES = [
  {
    id: 'helados',
    label: 'Helados',
    icon: IceCream2,
    description: 'Helados cremosos artesanales',
    color: 'morado',
    subcategories: ['gourmet', 'premium', 'tradicional']
  },
  {
    id: 'nieves',
    label: 'Nieves',
    icon: Snowflake,
    description: 'Nieves frescas y naturales',
    color: 'salmon',
    subcategories: ['artesanal', 'con-alcohol']
  },
  {
    id: 'paletas',
    label: 'Paletas',
    icon: Candy,
    description: 'Paletas heladas artesanales',
    color: 'crema',
    subcategories: ['agua', 'leche', 'premium']
  },
  {
    id: 'pet-friendly',
    label: 'Pet Friendly',
    icon: Heart,
    description: 'Seguros para tus mascotas',
    color: 'salmon',
    special: true
  }
];

// Subcategorías de helados
export const HELADO_SUBCATEGORIES = [
  {
    id: 'gourmet',
    label: 'Gourmet',
    parent: 'helados',
    icon: Star,
    description: 'Sabores únicos y sofisticados'
  },
  {
    id: 'premium',
    label: 'Premium',
    parent: 'helados',
    icon: Sparkles,
    description: 'Ingredientes de alta calidad'
  },
  {
    id: 'tradicional',
    label: 'Tradicional',
    parent: 'helados',
    icon: Heart,
    description: 'Sabores clásicos y familiares'
  }
];

// Subcategorías de nieves
export const NIEVE_SUBCATEGORIES = [
  {
    id: 'artesanal',
    label: 'Artesanal',
    parent: 'nieves',
    icon: Leaf,
    description: 'Nieves naturales sin conservadores'
  },
  {
    id: 'con-alcohol',
    label: 'Con Alcohol',
    parent: 'nieves',
    icon: Wine,
    description: 'Solo para mayores de edad',
    restriction: 'adults-only'
  }
];

// Filtros especiales/características
export const SPECIAL_FILTERS = [
  {
    id: 'sin-azucar',
    label: 'Sin Azúcar',
    icon: Shield,
    description: 'Endulzados naturalmente',
    color: 'green',
    badge: 'Sugar Free'
  },
  {
    id: 'vegano',
    label: 'Vegano',
    icon: Leaf,
    description: 'Sin ingredientes de origen animal',
    color: 'green',
    badge: 'Vegan'
  },
  {
    id: 'sin-lactosa',
    label: 'Sin Lactosa',
    icon: Shield,
    description: 'Libre de lactosa',
    color: 'blue',
    badge: 'Lactose Free'
  },
  {
    id: 'alto-proteina',
    label: 'Alto en Proteína',
    icon: Zap,
    description: 'Enriquecido con proteínas',
    color: 'orange',
    badge: 'High Protein'
  },
  {
    id: 'con-alcohol',
    label: 'Con Alcohol',
    icon: Wine,
    description: 'Solo para mayores de edad',
    color: 'red',
    badge: 'Adults Only',
    restriction: 'adults-only'
  },
  {
    id: 'temporada',
    label: 'De Temporada',
    icon: TreePine,
    description: 'Sabores de temporada limitada',
    color: 'purple',
    badge: 'Limited Edition'
  },
  {
    id: 'nuevo',
    label: 'Nuevo',
    icon: Sparkles,
    description: 'Sabores recién agregados',
    color: 'pink',
    badge: 'New'
  }
];

// Opciones de ordenamiento
export const SORT_OPTIONS = [
  {
    value: 'name',
    label: 'Nombre A-Z',
    icon: null,
    sortFn: (a, b) => a.name.localeCompare(b.name)
  },
  {
    value: 'name-desc',
    label: 'Nombre Z-A',
    icon: null,
    sortFn: (a, b) => b.name.localeCompare(a.name)
  },
  {
    value: 'rating',
    label: 'Mejor Valorados',
    icon: Star,
    sortFn: (a, b) => (b.rating || 0) - (a.rating || 0)
  },
  {
    value: 'popular',
    label: 'Más Populares',
    icon: Heart,
    sortFn: (a, b) => (b.popularity || 0) - (a.popularity || 0)
  },
  {
    value: 'newest',
    label: 'Más Recientes',
    icon: Clock,
    sortFn: (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
  },
  {
    value: 'category',
    label: 'Por Categoría',
    icon: null,
    sortFn: (a, b) => {
      const categoryOrder = ['helados', 'nieves', 'paletas'];
      const aIndex = categoryOrder.indexOf(a.category);
      const bIndex = categoryOrder.indexOf(b.category);
      if (aIndex !== bIndex) return aIndex - bIndex;
      return a.name.localeCompare(b.name);
    }
  }
];

// Configuración de colores por categoría
export const CATEGORY_COLORS = {
  helados: {
    primary: 'morado',
    light: 'morado-100',
    dark: 'morado-600',
    text: 'morado-700'
  },
  nieves: {
    primary: 'salmon',
    light: 'salmon-100',
    dark: 'salmon-600',
    text: 'salmon-700'
  },
  paletas: {
    primary: 'crema',
    light: 'crema-100',
    dark: 'crema-600',
    text: 'crema-700'
  },
  'pet-friendly': {
    primary: 'salmon',
    light: 'salmon-100',
    dark: 'salmon-600',
    text: 'salmon-700'
  }
};

// Configuración de badges
export const BADGE_STYLES = {
  'Sugar Free': 'bg-green-100 text-green-800 border-green-200',
  'Vegan': 'bg-green-100 text-green-800 border-green-200',
  'Lactose Free': 'bg-blue-100 text-blue-800 border-blue-200',
  'High Protein': 'bg-orange-100 text-orange-800 border-orange-200',
  'Adults Only': 'bg-red-100 text-red-800 border-red-200',
  'Limited Edition': 'bg-purple-100 text-purple-800 border-purple-200',
  'New': 'bg-pink-100 text-pink-800 border-pink-200',
  'Pet Friendly': 'bg-salmon-100 text-salmon-800 border-salmon-200'
};

// Función helper para obtener todos los filtros
export const getAllFilters = () => {
  return [
    ...PRODUCT_CATEGORIES,
    ...HELADO_SUBCATEGORIES,
    ...NIEVE_SUBCATEGORIES,
    ...SPECIAL_FILTERS
  ];
};

// Función helper para obtener filtros por categoría
export const getFiltersByCategory = (category) => {
  const allFilters = getAllFilters();
  return allFilters.filter(filter => 
    filter.parent === category || filter.id === category
  );
};

// Función helper para obtener el color de una categoría
export const getCategoryColor = (category) => {
  return CATEGORY_COLORS[category] || CATEGORY_COLORS.helados;
};

// Función helper para obtener el estilo de un badge
export const getBadgeStyle = (badge) => {
  return BADGE_STYLES[badge] || 'bg-gray-100 text-gray-800 border-gray-200';
};

export default {
  PRODUCT_CATEGORIES,
  HELADO_SUBCATEGORIES,
  NIEVE_SUBCATEGORIES,
  SPECIAL_FILTERS,
  SORT_OPTIONS,
  CATEGORY_COLORS,
  BADGE_STYLES,
  getAllFilters,
  getFiltersByCategory,
  getCategoryColor,
  getBadgeStyle
};