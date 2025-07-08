export const joys = [
  // CAFÉ
    {
        "id": 1,
        "isFeatured": true,
        "name": "Café Capuccino",
        "category": "cafés",
        "description": "Un delicioso capuccino con una mezcla perfecta de espresso, leche vaporizada y espuma de leche cremosa. Ideal para un momento de relajación o para acompañar una conversación.",
        "image": "../public/images/products/joys/cafe.jpg",
        "tags": ["espresso", "cremoso", "leche vaporizada", "suave", "caliente"],
        "sizes": [
            { "size": "chico", "price": 28 },
            { "size": "mediano", "price": 40 },
            { "size": "grande", "price": 52 }
        ],
        "nutritionalInfo": ["Contiene cafeína", "Contiene lácteos", "Bajo en calorías", "Contiene gluten"],
        "isNew": false,
        "isTrending": true,
        "seasonal": false,
        "featured": true
    },
    {
        "id": 2,
        "isFeatured": false,
        "name": "Café Moka",
        "category": "cafés",
        "description": "Una mezcla indulgente de espresso con un toque de chocolate y leche vaporizada, cubierta con crema batida. Perfecto para quienes disfrutan de un café dulce y reconfortante.",
        "image": "../public/images/products/joys/cafe.jpg",
        "tags": ["chocolate", "espresso", "dulce", "cremoso", "caliente"],
        "sizes": [
            { "size": "chico", "price": 32 },
            { "size": "mediano", "price": 45 },
            { "size": "grande", "price": 58 }
        ],
        "nutritionalInfo": ["Contiene cafeína", "Contiene lácteos", "Alto en azúcares", "Contiene gluten"],
        "isNew": false,
        "isTrending": false,
        "seasonal": false,
        "featured": false
    },
    {
        "id": 3,
        "isFeatured": true,
        "name": "Café Expresso",
        "category": "cafés",
        "description": "Un espresso puro, fuerte y concentrado. Para los amantes del café intenso que buscan una dosis rápida de energía y sabor en cada sorbo.",
        "image": "../public/images/products/joys/cafe.jpg",
        "tags": ["intenso", "espresso", "fuerte", "concentrado", "caliente"],
        "sizes": [
            { "size": "chico", "price": 20 },
            { "size": "mediano", "price": 30 },
            { "size": "grande", "price": 40 }
        ],
        "nutritionalInfo": ["Contiene cafeína", "Bajo en calorías", "Sin lácteos", "Contiene gluten"],
        "isNew": false,
        "isTrending": false,
        "seasonal": false,
        "featured": true
    },
  // CREPAS DULCES
    {
        "id": 4,
        "isFeatured": true,
        "name": "Crepa de Nutella",
        "category": "crepaDulce",
        "description": "Una deliciosa crepa rellena con la más suave y rica Nutella, acompañada de una capa de crema batida. Ideal para un antojo dulce.",
        "image": "../public/images/products/joys/crepa.jpg",
        "tags": ["dulce", "cremoso", "chocolate", "nutella", "postre"],
        "sizes": [
            { "size": "chico", "price": 30 },
            { "size": "mediano", "price": 46 },
            { "size": "grande", "price": 62 }
        ],
        "nutritionalInfo": ["Contiene lácteos", "Alto en azúcares", "Contiene gluten"],
        "isNew": false,
        "isTrending": true,
        "seasonal": false,
        "featured": true
    },
    {
        "id": 5,
        "isFeatured": false,
        "name": "Crepa de Chocolate",
        "category": "crepaDulce",
        "description": "Una crepa rellena con chocolate derretido, con la opción de agregar crema batida o frutas frescas. Perfecta para los amantes del chocolate.",
        "image": "../public/images/products/joys/crepa.jpg",
        "tags": ["dulce", "chocolate", "cremoso", "postre", "caliente"],
        "sizes": [
            { "size": "chico", "price": 32 },
            { "size": "mediano", "price": 47 },
            { "size": "grande", "price": 62 }
        ],
        "nutritionalInfo": ["Contiene lácteos", "Alto en azúcares", "Contiene gluten"],
        "isNew": false,
        "isTrending": false,
        "seasonal": false,
        "featured": false
    },
    {
        "id": 6,
        "isFeatured": true,
        "name": "Crepa de Fresa y Crema",
        "category": "crepaDulce",
        "description": "Una crepa suave rellena con fresas frescas y crema chantilly, perfecta para un toque dulce y refrescante.",
        "image": "../public/images/products/joys/crepa.jpg",
        "tags": ["dulce", "fresa", "cremoso", "fruta", "postre"],
        "sizes": [
            { "size": "chico", "price": 28 },
            { "size": "mediano", "price": 42 },
            { "size": "grande", "price": 55 }
        ],
        "nutritionalInfo": ["Contiene lácteos", "Contiene gluten"],
        "isNew": false,
        "isTrending": false,
        "seasonal": false,
        "featured": true
    },
// CREPAS SALADAS
    {
        "id": 7,
        "isFeatured": false,
        "name": "Crepa de Jamón y Queso",
        "category": "crepaSalada",
        "description": "Una crepa salada con jamón y queso derretido, perfecta para una comida rápida y deliciosa.",
        "image": "../public/images/products/joys/crepa.jpg",
        "tags": ["salada", "queso", "jamón", "rápido", "sabroso"],
        "sizes": [
            { "size": "chico", "price": 30 },
            { "size": "mediano", "price": 45 },
            { "size": "grande", "price": 58 }
        ],
        "nutritionalInfo": ["Contiene lácteos", "Contiene gluten"],
        "isNew": false,
        "isTrending": false,
        "seasonal": false,
        "featured": false
    },
    {
        "id": 8,
        "isFeatured": false,
        "name": "Crepa Mexicana",
        "category": "crepaSalada",
        "description": "Una crepa rellena de carne de res o pollo, guacamole, y salsa picante, perfecta para los amantes de la comida mexicana.",
        "image": "../public/images/products/joys/crepa.jpg",
        "tags": ["salada", "mexicana", "carne", "pollo", "picante"],
        "sizes": [
            { "size": "chico", "price": 35 },
            { "size": "mediano", "price": 50 },
            { "size": "grande", "price": 65 }
        ],
        "nutritionalInfo": ["Contiene gluten", "Bajo en calorías", "Pico de picante"],
        "isNew": false,
        "isTrending": true,
        "seasonal": false,
        "featured": false
    },
  //BEBIDAS
    {
        "id": 9,
        "isFeatured": false,
        "name": "Agua Natural",
        "category": "bebidas",
        "description": "Agua purificada ideal para mantenerte hidratado todo el día.",
        "image": "../public/images/products/joys/bebidas.jpg",
        "tags": ["agua", "natural", "sin gas", "hidratación"],
        "sizes": [
            { "size": "500ml", "price": 15 },
            { "size": "1L", "price": 20 }
        ],
        "nutritionalInfo": ["Sin calorías", "Sin azúcar", "Sin sodio"],
        "isNew": false,
        "isTrending": false,
        "seasonal": false,
        "featured": false
    },
    {
        "id": 10,
        "isFeatured": false,
        "name": "Coca-Cola",
        "category": "bebidas",
        "description": "Refresco carbonatado clásico con un sabor inconfundible.",
        "image": "../public/images/products/joys/bebidas.jpg",
        "tags": ["refresco", "carbonatado", "clásico", "azúcar"],
        "sizes": [
            { "size": "355ml", "price": 18 },
            { "size": "600ml", "price": 22 },
            { "size": "2L", "price": 35 }
        ],
        "nutritionalInfo": ["Alto en azúcar", "Contiene cafeína"],
        "isNew": false,
        "isTrending": true,
        "seasonal": false,
        "featured": false
    },
    {
        "id": 11,
        "isFeatured": false,
        "name": "Fuze Tea",
        "category": "bebidas",
        "description": "Té helado con sabores frutales, refrescante y ligero.",
        "image": "../public/images/products/joys/bebidas.jpg",
        "tags": ["té", "frutas", "refrescante", "ligero"],
        "sizes": [
            { "size": "600ml", "price": 20 }
        ],
        "nutritionalInfo": ["Bajo en calorías", "Contiene azúcar"],
        "isNew": false,
        "isTrending": true,
        "seasonal": false,
        "featured": false
    },
    {
        "id": 12,
        "isFeatured": false,
        "name": "Jugo Jumex de Durazno",
        "category": "bebidas",
        "description": "Jugo de durazno natural con sabor dulce y suave.",
        "image": "../public/images/products/joys/bebidas.jpg",
        "tags": ["jumex", "durazno", "jugo", "fruta"],
        "sizes": [
            { "size": "355ml", "price": 17 }
        ],
        "nutritionalInfo": ["Contiene azúcar", "Sin gas"],
        "isNew": false,
        "isTrending": false,
        "seasonal": false,
        "featured": false
    },
    {
        "id": 13,
        "isFeatured": false,
        "name": "Jugo Jumex de Mango",
        "category": "bebidas",
        "description": "Delicioso jugo de mango con sabor tropical.",
        "image": "../public/images/products/joys/bebidas.jpg",
        "tags": ["jumex", "mango", "jugo", "fruta", "tropical"],
        "sizes": [
            { "size": "355ml", "price": 17 }
        ],
        "nutritionalInfo": ["Contiene azúcar", "Sin gas"],
        "isNew": false,
        "isTrending": false,
        "seasonal": false,
        "featured": false
    },
    {
        "id": 14,
        "isFeatured": false,
        "name": "Jugo Jumex de Manzana",
        "category": "bebidas",
        "description": "Jugo 100% manzana, ideal para toda la familia.",
        "image": "../public/images/products/joys/bebidas.jpg",
        "tags": ["jumex", "manzana", "jugo", "fruta"],
        "sizes": [
            { "size": "355ml", "price": 17 }
        ],
        "nutritionalInfo": ["Contiene azúcar", "Sin gas"],
        "isNew": false,
        "isTrending": false,
        "seasonal": false,
        "featured": false
    },
    {
        "id": 15,
        "isFeatured": false,
        "name": "Powerade",
        "category": "bebidas",
        "description": "Bebida deportiva para hidratar y reponer electrolitos.",
        "image": "../public/images/products/joys/bebidas.jpg",
        "tags": ["deportiva", "electrolitos", "hidratación", "energía"],
        "sizes": [
            { "size": "600ml", "price": 22 }
        ],
        "nutritionalInfo": ["Contiene sodio", "Contiene azúcar"],
        "isNew": false,
        "isTrending": true,
        "seasonal": false,
        "featured": false
    }
]