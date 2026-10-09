const produtos = [
    {
        id: 1,
        nome: "Galão de Água Mineral 20L",
        categoria: "agua",
        preco: 17.50,
        simbolo: "💧",
        imagem: "imagens/galao-agua-recorte.png",
        classeImagem: "produto-galao"
    },
    {
        id: 2,
        nome: "Botijão de Gás P13",
        categoria: "gas",
        preco: 120.00,
        simbolo: "P13",
        imagem: "imagens/gas-p13-recorte.png",
        classeImagem: "produto-p13"
    },
    {
        id: 3,
        nome: "Botijão de Gás P45",
        categoria: "gas",
        preco: 445.00,
        simbolo: "P45",
        imagem: "imagens/gas-p45-recorte.png",
        classeImagem: "produto-p45"
    },
    {
        id: 4,
        nome: "Coca-Cola 2L",
        categoria: "bebidas",
        preco: 12.99,
        simbolo: "🥤",
        imagem: "imagens/coca-cola-2l.webp",
    },
    {
        id: 5,
        nome: "Água Mineral 500ml",
        categoria: "agua",
        preco: 3.50,
        simbolo: "💧",
        imagem: "imagens/agua-mineral-500ml.png",
    },
    {
        id: 6,
        nome: "Doritos",
        categoria: "conveniencia",
        preco: 10.00,
        simbolo: "🌽",
        imagem: "imagens/doritos.png",
    },
    // --- BEBIDAS ALCOÓLICAS EXISTENTES ATUALIZADAS ---
    {
        id: 9,
        nome: "Whisky Old Parr 12 anos",
        categoria: "alcoolicas",
        preco: 169.90,
        imagem: "imagens/old-parr-12-anos.png",
        simbolo: "🥃"
    },
    {
        id: 10,
        nome: "Jack Daniels BlackBerry",
        categoria: "alcoolicas",
        preco: 189.90,
        imagem: "imagens/jack-daniels-blackberry.webp",
        simbolo: "🥃"
    },
    {
        id: 11,
        nome: "Jack Daniels Whiskey (Tradicional)",
        categoria: "alcoolicas",
        preco: 169.90,
        imagem: "imagens/jack-daniels-whiskey.webp",
        simbolo: "🥃"
    },
    {
        id: 12,
        nome: "Jack Daniels Apple",
        categoria: "alcoolicas",
        preco: 169.90,
        imagem: "imagens/jack-daniels-apple.png",
        simbolo: "🥃"
    },
    {
        id: 13,
        nome: "Jack Daniels Fire",
        categoria: "alcoolicas",
        preco: 169.90,
        imagem: "imagens/jack-daniels-fire.png",
        simbolo: "🥃"
    },
    {
        id: 14,
        nome: "Jack Daniels Honey",
        categoria: "alcoolicas",
        preco: 169.90,
        imagem: "imagens/jack-daniels-honey.webp",
        simbolo: "🥃"
    },
    {
        id: 15,
        nome: "Jim Beam Bourbon",
        categoria: "alcoolicas",
        preco: 109.90,
        imagem: "imagens/jim-beam-bourbon.webp",
        simbolo: "🥃"
    },
    {
        id: 16,
        nome: "Whisky Chivas 12 anos",
        categoria: "alcoolicas",
        preco: 179.90,
        imagem: "imagens/chivas-12-anos.png",
        simbolo: "🥃"
    },
    {
        id: 17,
        nome: "Whisky Red Label",
        categoria: "alcoolicas",
        preco: 109.90,
        imagem: "imagens/whisky-red-label.png",
        simbolo: "🥃"
    },
    {
        id: 18,
        nome: "Whisky Black Label",
        categoria: "alcoolicas",
        preco: 179.00,
        imagem: "imagens/whisky-black-label.png",
        simbolo: "🥃"
    },
    {
        id: 19,
        nome: "FireBall",
        categoria: "alcoolicas",
        preco: 109.90,
        imagem: "imagens/fireball.webp",
        simbolo: "🔥"
    },
    {
        id: 20,
        nome: "Whisky White Horse",
        categoria: "alcoolicas",
        preco: 79.90,
        imagem: "imagens/whisky-white-horse.png",
        simbolo: "🥃"
    },
    {
        id: 21,
        nome: "Whiskey Jameson",
        categoria: "alcoolicas",
        preco: 109.90,
        imagem: "imagens/whiskey-jameson.png",
        simbolo: "🥃"
    },
    {
        id: 22,
        nome: "Don Luis",
        categoria: "alcoolicas",
        preco: 89.90,
        imagem: "imagens/don-luis.png",
        simbolo: "🥃"
    },
    {
        id: 23,
        nome: "Licor 43 Original",
        categoria: "alcoolicas",
        preco: 169.90,
        imagem: "imagens/licor-43.webp",
        simbolo: "🍸"
    },
    {
        id: 24,
        nome: "Licor 43 Chocolate",
        categoria: "alcoolicas",
        preco: 169.90,
        imagem: "imagens/licor-43-chocolate.webp",
        simbolo: "🍸"
    },
    {
        id: 25,
        nome: "Licor Ballena",
        categoria: "alcoolicas",
        preco: 119.90,
        imagem: "imagens/licor-ballena.webp",
        simbolo: "🍓"
    },
    {
        id: 26,
        nome: "Gin Tanqueray",
        categoria: "alcoolicas",
        preco: 109.90,
        imagem: "imagens/gin-tanqueray.webp",
        simbolo: "🍸"
    },
    {
        id: 27,
        nome: "Campari",
        categoria: "alcoolicas",
        preco: 79.90,
        imagem: "imagens/campari.webp",
        simbolo: "🍷"
    },
    {
        id: 28,
        nome: "Vinho Campo Largo Suave",
        categoria: "alcoolicas",
        preco: 18.99,
        imagem: "imagens/vinho-campo-largo-suave.webp",
        simbolo: "🍷"
    },
    {
        id: 29,
        nome: "Vinho Campo Largo Seco",
        categoria: "alcoolicas",
        preco: 18.99,
        imagem: "imagens/vinho-campo-largo-seco.webp",
        simbolo: "🍷"
    },
    {
        id: 30,
        nome: "Quentão Campo Largo",
        categoria: "alcoolicas",
        preco: 18.99,
        imagem: "imagens/quentao-campo-largo.png",
        simbolo: "☕"
    },
    {
        id: 31,
        nome: "Quentão Del Rei",
        categoria: "alcoolicas",
        preco: 18.99,
        imagem: "imagens/quentao-del-rei.webp",
        simbolo: "☕"
    },
    {
        id: 32,
        nome: "Vinho Caballo Chileno Sauvignon Blanc",
        categoria: "alcoolicas",
        preco: 34.90,
        imagem: "imagens/vinho-caballo-chinelo.png",
        simbolo: "🍷"
    },
    {
        id: 33,
        nome: "Vinho Concha Y Toro Reservado Cabernet Sauvignon",
        categoria: "alcoolicas",
        preco: 34.90,
        imagem: "imagens/vinho-concha-y-toro-carmenere.webp",
        simbolo: "🍷"
    },
    {
        id: 34,
        nome: "Vinho Toro Negro El Secreto",
        categoria: "alcoolicas",
        preco: 29.90,
        imagem: "imagens/vinho-toro-negro-el-secreto.png",
        simbolo: "🍷"
    },
    {
        id: 35,
        nome: "Vinho Toro Negro Cabernet Sauvignon",
        categoria: "alcoolicas",
        preco: 29.90,
        imagem: "imagens/vinho-toro-negro-cabernet-sauvignon.png",
        simbolo: "🍷"
    },
    {
        id: 36,
        nome: "Vinho Toro Negro Malbec",
        categoria: "alcoolicas",
        preco: 29.90,
        imagem: "imagens/vinho-toro-negro-malbec.png",
        simbolo: "🍷"
    },
    {
        id: 37,
        nome: "Cerveja Long Neck Corona",
        categoria: "alcoolicas",
        preco: 8.99,
        imagem: "imagens/cerveja-long-neck-corona.png",
        simbolo: "🍺"
    },
    {
        id: 38,
        nome: "Cerveja Long Neck Heineken",
        categoria: "alcoolicas",
        preco: 8.99,
        imagem: "imagens/cerveja-long-neck-heineken.png",
        simbolo: "🍺"
    },
    {
        id: 39,
        nome: "Cerveja Long Neck Sol",
        categoria: "alcoolicas",
        preco: 7.99,
        imagem: "imagens/cerveja-long-neck-sol.png",
        simbolo: "🍺"
    },
    {
        id: 40,
        nome: "Cerveja Long Neck Praya Sem Glúten",
        categoria: "alcoolicas",
        preco: 7.99,
        imagem: "imagens/cerveja-long-neck-praya.png",
        simbolo: "🍺"
    },
    {
        id: 41,
        nome: "Cerveja Long Neck Amstel Ultra",
        categoria: "alcoolicas",
        preco: 7.99,
        imagem: "imagens/cerveja-long-neck-amstel-ultra.png",
        simbolo: "🍺"
    },
    {
        id: 42,
        nome: "Cerveja Long Neck Patagonia IPA",
        categoria: "alcoolicas",
        preco: 8.99,
        imagem: "imagens/cerveja-long-neck-patagonia-ipa.webp",
        simbolo: "🍺"
    },
    {
        id: 43,
        nome: "Cerveja Long Neck Patagonia Weiss",
        categoria: "alcoolicas",
        preco: 8.99,
        imagem: "imagens/cerveja-long-neck-patagonia-weiss.png",
        simbolo: "🍺"
    },
    {
        id: 44,
        nome: "Cerveja Long Neck Patagonia Amber Lager",
        categoria: "alcoolicas",
        preco: 8.99,
        imagem: "imagens/cerveja-long-neck-patagonia-amber-lager.png",
        simbolo: "🍺"
    },
    // --- NOVOS PRODUTOS ADICIONADOS ---
    {
        id: 45,
        nome: "Daga Mé da Ilha",
        categoria: "alcoolicas",
        preco: 59.90,
        imagem: "imagens/daga-me-da-ilha.png",
        simbolo: "🍸"
    },
    {
        id: 46,
        nome: "Jägermeister",
        categoria: "alcoolicas",
        preco: 159.90,
        imagem: "imagens/jagermeister.webp",
        simbolo: "🥃"
    },
    {
        id: 47,
        nome: "Bombay Sapphire Gin",
        categoria: "alcoolicas",
        preco: 109.90,
        imagem: "imagens/bombay-sapphire-gin.png",
        simbolo: "🍸"
    },
    {
        id: 48,
        nome: "Rock's Gin",
        categoria: "alcoolicas",
        preco: 49.90,
        imagem: "imagens/rocks-gin.png",
        simbolo: "🍸"
    },
    {
        id: 49,
        nome: "Rock's Gin Rosé",
        categoria: "alcoolicas",
        preco: 49.90,
        imagem: "imagens/rocks-gin-rose.webp",
        simbolo: "🍸"
    },
    {
        id: 50,
        nome: "Voxx Gin",
        categoria: "alcoolicas",
        preco: 25.99,
        imagem: "imagens/voxx-gin.png",
        simbolo: "🍸"
    },
    {
        id: 51,
        nome: "Dierva",
        categoria: "alcoolicas",
        preco: 39.90,
        imagem: "imagens/dierva.png",
        simbolo: "🌿"
    },
    {
        id: 52,
        nome: "Toro Negro Espumante Sweet",
        categoria: "alcoolicas",
        preco: 49.90,
        imagem: "imagens/toro-negro-espumante-sweet.png",
        simbolo: "🍾"
    },
    {
        id: 53,
        nome: "Toro Negro Espumante brut",
        categoria: "alcoolicas",
        preco: 49.90,
        imagem: "imagens/toro-negro-espumante-brut.png",
        simbolo: "🍾"
    },
    {
        id: 54,
        nome: "Vodka Absolut",
        categoria: "alcoolicas",
        preco: 99.90,
        imagem: "imagens/vodka-absolut.webp",
        simbolo: "🍸"
    },
    {
        id: 55,
        nome: "Brasilberg",
        categoria: "alcoolicas",
        preco: 69.90,
        imagem: "imagens/brasilberg.webp",
        simbolo: "🥃"
    },
    {
        id: 56,
        nome: "Daga Jambu",
        categoria: "alcoolicas",
        preco: 69.90,
        imagem: "imagens/daga-jambu.png",
        simbolo: "🍸"
    },
    {
        id: 57,
        nome: "Motor Rocks Cataia da Malaia",
        categoria: "alcoolicas",
        preco: 69.90,
        imagem: "imagens/motor-rocks-cataia-da-malaia.png",
        simbolo: "🥃"
    },
    {
        id: 58,
        nome: "Jurupinga",
        categoria: "alcoolicas",
        preco: 29.90,
        imagem: "imagens/jurupinga.webp",
        simbolo: "🍷"
    },
    {
        id: 59,
        nome: "Vodka Natasha",
        categoria: "alcoolicas",
        preco: 29.90,
        imagem: "imagens/vodka-natasha.png",
        simbolo: "🍸"
    },
    {
        id: 60,
        nome: "Vodka Smirnoff 998ml",
        categoria: "alcoolicas",
        preco: 42.90,
        imagem: "imagens/vodka-smirnoff-998ml.webp",
        simbolo: "🍸"
    },
    {
        id: 61,
        nome: "Cynar",
        categoria: "alcoolicas",
        preco: 37.90,
        imagem: "imagens/cynar.png",
        simbolo: "🥃"
    },
    {
        id: 62,
        nome: "Daga Castanheira",
        categoria: "alcoolicas",
        preco: 74.90,
        imagem: "imagens/daga-castanheira.png",
        simbolo: "🥃"
    },
    {
        id: 63,
        nome: "Cachaça Ypióca Ouro",
        categoria: "alcoolicas",
        preco: 33.90,
        imagem: "imagens/cachaca-ypioca-ouro.png",
        simbolo: "🥃"
    },
    {
        id: 64,
        nome: "Cachaça Ypióca Prata",
        categoria: "alcoolicas",
        preco: 29.90,
        imagem: "imagens/cachaca-ypioca-prata.png",
        simbolo: "🥃"
    },
    {
        id: 65,
        nome: "Cachaça 51",
        categoria: "alcoolicas",
        preco: 19.90,
        imagem: "imagens/cachaca-51.png",
        simbolo: "🥃"
    },
    {
        id: 66,
        nome: "Presidente",
        categoria: "alcoolicas",
        preco: 22.90,
        imagem: "imagens/presidente.png",
        simbolo: "🥃"
    },
    {
        id: 67,
        nome: "Busca Brisa",
        categoria: "alcoolicas",
        preco: 49.90,
        imagem: "imagens/busca-brisa.png",
        simbolo: "🍸"
    },
    {
        id: 68,
        nome: "Vinho Toro Negro Suave",
        categoria: "alcoolicas",
        preco: 29.90,
        imagem: "imagens/vinho-toro-negro-suave.png",
        simbolo: "🍷"
    },
    {
        id: 69,
        nome: "Vinho Toro Negro Bonarda",
        categoria: "alcoolicas",
        preco: 29.90,
        imagem: "imagens/vinho-toro-negro-bonarda.png",
        simbolo: "🍷"
    },
    {
        id: 70,
        nome: "Vinho Toro Negro Carmenere",
        categoria: "alcoolicas",
        preco: 29.90,
        imagem: "imagens/vinho-toro-negro-carmenere.png",
        simbolo: "🍷"
    },
    {
        id: 71,
        nome: "Vinho Toro Negro Merlot",
        categoria: "alcoolicas",
        preco: 29.90,
        imagem: "imagens/vinho-toro-negro-merlot.png",
        simbolo: "🍷"
    },
    {
        id: 72,
        nome: "Vinho Toro Negro Pedro Jimenez",
        categoria: "alcoolicas",
        preco: 29.90,
        imagem: "imagens/vinho-toro-negro-pedro-jimenez.png",
        simbolo: "🍷"
    },
    {
        id: 73,
        nome: "Vinho Gran Amigo Ultra",
        categoria: "alcoolicas",
        preco: 74.90,
        imagem: "imagens/vinho-gran-amigo-ultra.png",
        simbolo: "🍷"
    },
    {
        id: 74,
        nome: "Vinho Cordero con Piel de Lobo Cabernet Sauvignon",
        categoria: "alcoolicas",
        preco: 69.90,
        imagem: "imagens/vinho-cordero-con-piel-de-lobo-cabernet-sauvignon.webp",
        simbolo: "🍷"
    },
    {
        id: 75,
        nome: "Vinho Cordero con Piel de Lobo Malbec",
        categoria: "alcoolicas",
        preco: 69.90,
        imagem: "imagens/vinho-cordero-con-piel-de-lobo-malbec.webp",
        simbolo: "🍷"
    },
    {
        id: 76,
        nome: "Vinho Mi Amor",
        categoria: "alcoolicas",
        preco: 69.90,
        imagem: "imagens/vinho-mi-amor.webp",
        simbolo: "🍷"
    },
    {
        id: 77,
        nome: "Vinho Monte Cepas Malbec",
        categoria: "alcoolicas",
        preco: 69.90,
        imagem: "imagens/vinho-monte-cepas-malbec.webp",
        simbolo: "🍷"
    },
    {
        id: 78,
        nome: "Vinho Viento del Sur Cabernet Sauvignon",
        categoria: "alcoolicas",
        preco: 69.90,
        imagem: "imagens/vinho-viento-del-sur-cabernet-sauvignon.webp",
        simbolo: "🍷"
    },
    {
        id: 79,
        nome: "Vinho Viento del Sur Malbec",
        categoria: "alcoolicas",
        preco: 69.90,
        imagem: "imagens/vinho-viento-del-sur-malbec.png",
        simbolo: "🍷"
    },
    {
        id: 80,
        nome: "Vinho Sinergia Malbec",
        categoria: "alcoolicas",
        preco: 69.90,
        imagem: "imagens/vinho-sinergia-malbec.webp",
        simbolo: "🍷"
    },
    {
        id: 81,
        nome: "Vinho Sinergia Cabernet Sauvignon",
        categoria: "alcoolicas",
        preco: 69.90,
        imagem: "imagens/vinho-sinergia-cabernet-sauvignon.webp",
        simbolo: "🍷"
    },
    {
        id: 82,
        nome: "Vinho Sinergia Branco",
        categoria: "alcoolicas",
        preco: 69.90,
        imagem: "imagens/vinho-sinergia-branco.webp",
        simbolo: "🍷"
    },
    {
        id: 83,
        nome: "Cerveja Long Neck Stella Artois",
        categoria: "alcoolicas",
        preco: 7.99,
        imagem: "imagens/cerveja-long-neck-stella-artois.png",
        simbolo: "🍺"
    },
    {
        id: 84,
        nome: "Cerveja Long Neck Stella Artois Sem Glúten",
        categoria: "alcoolicas",
        preco: 8.99,
        imagem: "imagens/cerveja-long-neck-stella-artois-sem-gluten.png",
        simbolo: "🍺"
    },
    {
        id: 85,
        nome: "Cerveja Long Neck Corona Cero",
        categoria: "alcoolicas",
        preco: 8.99,
        imagem: "imagens/cerveja-long-neck-corona-cero.webp",
        simbolo: "🍺"
    },
    {
        id: 86,
        nome: "Cerveja Long Neck Heineken 0.0",
        categoria: "alcoolicas",
        preco: 8.99,
        imagem: "imagens/cerveja-long-neck-heineken-0.0.png",
        simbolo: "🍺"
    },
    {
        id: 87,
        nome: "Cerveja Long Neck Amstel",
        categoria: "alcoolicas",
        preco: 6.99,
        imagem: "imagens/cerveja-long-neck-amstel.png",
        simbolo: "🍺"
    },
    {
        id: 88,
        nome: "Cerveja Long Neck 1906",
        categoria: "alcoolicas",
        preco: 10.99,
        imagem: "imagens/cerveja-long-neck-1906.webp",
        simbolo: "🍺"
    },
    {
        id: 89,
        nome: "Cerveja Latão Patagonia IPA",
        categoria: "alcoolicas",
        preco: 8.99,
        imagem: "imagens/cerveja-latao-patagonia-ipa.png",
        simbolo: "🍺"
    },
    {
        id: 90,
        nome: "Smirnoff Ice Long Neck",
        categoria: "alcoolicas",
        preco: 8.99,
        imagem: "imagens/smirnoff-ice-long-neck.png",
        simbolo: "🍾"
    },
    {
        id: 91,
        nome: "Skol Beats Long Neck",
        categoria: "alcoolicas",
        preco: 8.99,
        imagem: "imagens/skol-beats-long-neck.webp",
        simbolo: "🍾"
    },
    {
        id: 92,
        nome: "Fardo Cerveja Brahma 12x350ml",
        categoria: "alcoolicas",
        preco: 49.90,
        imagem: "imagens/fardo-cerveja-brahma-12x350ml.png",
        simbolo: "📦"
    },
    {
        id: 93,
        nome: "Fardo Cerveja Original 12x350ml",
        categoria: "alcoolicas",
        preco: 59.90,
        imagem: "imagens/fardo-cerveja-original-12x350ml.png",
        simbolo: "📦"
    },
    {
        id: 94,
        nome: "Fardo Cerveja Antarctica 12x350ml",
        categoria: "alcoolicas",
        preco: 49.90,
        imagem: "imagens/fardo-cerveja Antarctica-12x350ml.png",
        simbolo: "📦"
    },
    {
        id: 95,
        nome: "Fardo Cerveja Amstel 12x350ml",
        categoria: "alcoolicas",
        preco: 49.90,
        imagem: "imagens/fardo-cerveja-amstel-12x350ml.png",
        simbolo: "📦"
    },
    {
        id: 96,
        nome: "Monster Energy Lata 473ml",
        categoria: "bebidas",
        preco: 10.99,
        imagem: "imagens/monster-energy-lata-473ml.png",
        simbolo: "⚡"
    },
    {
        id: 97,
        nome: "Red Bull Lata 250ml",
        categoria: "bebidas",
        preco: 10.99,
        imagem: "imagens/red-bull-lata-250ml.png",
        simbolo: "⚡"
    },
    {
        id: 98,
        nome: "Água de Coco Campo Largo 900ml",
        categoria: "bebidas",
        preco: 15.90,
        imagem: "imagens/agua-de-coco-campo-largo-900ml.png",
        simbolo: "🥥"
    },
    {
        id: 99,
        nome: "Água Tônica Lata",
        categoria: "bebidas",
        preco: 5.49,
        imagem: "imagens/agua-tonica-lata.png",
        simbolo: "🥤"
    },
    {
        id: 100,
        nome: "Água Tônica Lata Zero",
        categoria: "bebidas",
        preco: 5.49,
        imagem: "imagens/agua-tonica-lata-zero.png",
        simbolo: "🥤"
    },
    {
        id: 101,
        nome: "Sprite Lata",
        categoria: "bebidas",
        preco: 5.49,
        imagem: "imagens/sprite-lata.png",
        simbolo: "🥤"
    },
    {
        id: 102,
        nome: "Sprite Lata Zero",
        categoria: "bebidas",
        preco: 5.49,
        imagem: "imagens/sprite-lata-zero.png",
        simbolo: "🥤"
    },
    {
        id: 103,
        nome: "Guaraná Antarctica Lata",
        categoria: "bebidas",
        preco: 5.49,
        imagem: "imagens/guarana-antarctica-lata.png",
        simbolo: "🥤"
    },
    {
        id: 104,
        nome: "Guaraná Antarctica Lata Zero",
        categoria: "bebidas",
        preco: 5.49,
        imagem: "imagens/guarana-antarctica-lata-zero.webp",
        simbolo: "🥤"
    },
    {
        id: 105,
        nome: "Coca-Cola Lata",
        categoria: "bebidas",
        preco: 5.49,
        imagem: "imagens/coca-cola-lata.png",
        simbolo: "🥤"
    },
    {
        id: 106,
        nome: "Coca-Cola Lata Zero",
        categoria: "bebidas",
        preco: 5.49,
        imagem: "imagens/coca-cola-lata-zero.png",
        simbolo: "🥤"
    },
    {
        id: 107,
        nome: "Coca-Cola Mini 200ml",
        categoria: "bebidas",
        preco: 2.99,
        imagem: "imagens/coca-cola-mini-200ml.webp",
        simbolo: "🥤"
    },
    {
        id: 108,
        nome: "Coca-Cola café Lata",
        categoria: "bebidas",
        preco: 4.49,
        imagem: "imagens/coca-cola-cafe-lata.webp",
        simbolo: "☕"
    },
    {
        id: 109,
        nome: "Suco Kapo Morango",
        categoria: "bebidas",
        preco: 3.99,
        imagem: "imagens/suco-kapo-morango.webp",
        simbolo: "🧃"
    },
    {
        id: 110,
        nome: "Suco Kapo Uva",
        categoria: "bebidas",
        preco: 3.99,
        imagem: "imagens/suco-kapo-uva.webp",
        simbolo: "🧃"
    },
    {
        id: 111,
        nome: "Café do Ponto Tradicional",
        categoria: "conveniencia",
        preco: 38.90,
        imagem: "imagens/cafe-do-ponto-tradicional.png",
        simbolo: "☕"
    },
    {
        id: 112,
        nome: "Matte Leão Original 1.5L",
        categoria: "bebidas",
        preco: 9.99,
        imagem: "imagens/matte-leao-original-1.5l.png",
        simbolo: "🥤"
    },
    {
        id: 113,
        nome: "Matte Leão Limão 1.5L",
        categoria: "bebidas",
        preco: 9.99,
        imagem: "imagens/matte-leao-limao-1.5l.png",
        simbolo: "🥤"
    },
    {
        id: 114,
        nome: "Ice Tea 1.5L",
        categoria: "bebidas",
        preco: 9.99,
        imagem: "imagens/ice-tea-1.5l.png",
        simbolo: "🥤"
    },
    {
        id: 115,
        nome: "Fanta Laranja 2L",
        categoria: "bebidas",
        preco: 10.99,
        imagem: "imagens/fanta-laranja-2l.png",
        simbolo: "🥤"
    },
    {
        id: 116,
        nome: "Guaraná Antarctica 2L",
        categoria: "bebidas",
        preco: 10.99,
        imagem: "imagens/guarana-antarctica-2l.webp",
        simbolo: "🥤"
    },
    {
        id: 117,
        nome: "Guaraná Antarctica 2L Zero",
        categoria: "bebidas",
        preco: 10.99,
        imagem: "imagens/guarana-antarctica-2l-zero.png",
        simbolo: "🥤"
    },
    {
        id: 118,
        nome: "Pepsi Black 2L",
        categoria: "bebidas",
        preco: 10.00,
        imagem: "imagens/pepsi-black-2l.png",
        simbolo: "🥤"
    },
    {
        id: 119,
        nome: "Coca-Cola Zero Açúcar 2L",
        categoria: "bebidas",
        preco: 12.99,
        imagem: "imagens/coca-cola-zero-acucar-2l.png",
        simbolo: "🥤"
    },
    {
        id: 120,
        nome: "Cini Laranjinha 2L",
        categoria: "bebidas",
        preco: 7.99,
        imagem: "imagens/cini-laranjinha-2l.png",
        simbolo: "🥤"
    },
    {
        id: 121,
        nome: "Cini Citrus 2L",
        categoria: "bebidas",
        preco: 7.99,
        imagem: "imagens/cini-citrus-2l.png",
        simbolo: "🥤"
    },
    {
        id: 122,
        nome: "Cini Guaraná 2L",
        categoria: "bebidas",
        preco: 7.99,
        imagem: "imagens/cini-guarana-2l.png",
        simbolo: "🥤"
    },
    {
        id: 123,
        nome: "Cini Framboesa 2L",
        categoria: "bebidas",
        preco: 7.99,
        imagem: "imagens/cini-framboesa-2l.png",
        simbolo: "🥤"
    },
    {
        id: 124,
        nome: "Cini Cola Limão 2L",
        categoria: "bebidas",
        preco: 7.99,
        imagem: "imagens/cini-cola-limao-2l.png",
        simbolo: "🥤"
    },
    {
        id: 125,
        nome: "Cini Gengibirra 2L",
        categoria: "bebidas",
        preco: 7.99,
        imagem: "imagens/cini-gengibirra-2l.png",
        simbolo: "🥤"
    },
    {
        id: 126,
        nome: "Cini Abacaxi 2L",
        categoria: "bebidas",
        preco: 7.99,
        imagem: "imagens/cini-abacaxi-2l.webp",
        simbolo: "🥤"
    },
    {
        id: 127,
        nome: "Energético Bally Tradicional 2L",
        categoria: "bebidas",
        preco: 14.99,
        imagem: "imagens/bally-2l-tradicional.png",
        simbolo: "⚡"
    },
    {
        id: 128,
        nome: "Energético Bally Maçã Verde 2L",
        categoria: "bebidas",
        preco: 14.99,
        imagem: "imagens/bally-2l-maca-verde.png",
        simbolo: "⚡"
    },
    {
        id: 129,
        nome: "Energético Red Horse Tradicional 2L",
        categoria: "bebidas",
        preco: 14.99,
        imagem: "imagens/red-horse-lata-473ml.webp",
        simbolo: "⚡"
    },
    {
        id: 130,
        nome: "Água Mineral Font Life 5L",
        categoria: "agua",
        preco: 9.99,
        imagem: "imagens/font-life-5l.png",
        simbolo: "💧"
    },
    {
        id: 131,
        nome: "Água Mineral Font Life 10L",
        categoria: "agua",
        preco: 16.90,
        imagem: "imagens/font-life-10l.png",
        simbolo: "💧"
    },
    {
        id: 132,
        nome: "Água Mineral Sferriê 5L",
        categoria: "agua",
        preco: 14.90,
        imagem: "imagens/sferrie-5l.png",
        simbolo: "💧"
    },
    {
        id: 133,
        nome: "Galão de Água Mineral Royal Fit 20L",
        categoria: "agua",
        preco: 17.50,
        imagem: "imagens/royal-fit-20l.png",
        simbolo: "💧"
    },
    {
        id: 134,
        nome: "Galão de Água Mineral Requinte 20L",
        categoria: "agua",
        preco: 18.50,
        imagem: "imagens/requinte-20l.webp",
        simbolo: "💧"
    },
    {
        id: 135,
        nome: "Galão de Água Mineral Font Life 20L",
        categoria: "agua",
        preco: 18.50,
        imagem: "imagens/font-life-20l.png",
        simbolo: "💧"
    },
    {
        id: 136,
        nome: "Galão de Água Mineral Ouro Fino 20L",
        categoria: "agua",
        preco: 18.50,
        imagem: "imagens/ouro-fino-20l.png",
        simbolo: "💧"
    },
    {
        id: 137,
        nome: "Galão de Água Mineral Rárida 20L",
        categoria: "agua",
        preco: 50.00,
        imagem: "imagens/rarida-20l.png",
        simbolo: "💧"
    },
    {
        id: 138,
        nome: "Galão de Água Mineral Ibirá 20L",
        categoria: "agua",
        preco: 50.00,
        imagem: "imagens/ibira-20l.webp",
        simbolo: "💧"
    },
    {
        id: 139,
        nome: "Trident Menta Verde 8g",
        categoria: "conveniencia",
        preco: 3.49,
        imagem: "imagens/trident-menta-verde.webp",
        simbolo: "🍬"
    },
    {
        id: 140,
        nome: "Trident Morango 8g",
        categoria: "conveniencia",
        preco: 3.49,
        imagem: "imagens/trident-morango.png",
        simbolo: "🍬"
    },
    {
        id: 141,
        nome: "Trident Hortelã 8g",
        categoria: "conveniencia",
        preco: 3.49,
        imagem: "imagens/trident-hortela.png",
        simbolo: "🍬"
    },
    {
        id: 142,
        nome: "Trident Canela 8g",
        categoria: "conveniencia",
        preco: 3.49,
        imagem: "imagens/trident-canela.png",
        simbolo: "🍬"
    },
    {
        id: 143,
        nome: "Mentos Mint",
        categoria: "conveniencia",
        preco: 3.49,
        imagem: "imagens/mentos-mint.png",
        simbolo: "🍬"
    },
    {
        id: 144,
        nome: "Mentos Fruit",
        categoria: "conveniencia",
        preco: 3.49,
        imagem: "imagens/mentos-fruit.webp",
        simbolo: "🍬"
    },
    {
        id: 145,
        nome: "Bananinha Palmital Tradicional Cremosa",
        categoria: "conveniencia",
        preco: 3.99,
        imagem: "imagens/bananinha-palmital.png",
        simbolo: "🍌"
    },
    {
        id: 146,
        nome: "Bananada Banoffee Zero",
        categoria: "conveniencia",
        preco: 4.49,
        imagem: "imagens/bananada-banoffee-zero.png",
        simbolo: "🍌"
    },
    {
        id: 147,
        nome: "Ovomaltine Rocks 170g",
        categoria: "conveniencia",
        preco: 16.99,
        imagem: "imagens/ovomaltine-rocks.png",
        simbolo: "🍫"
    },
    {
        id: 148,
        nome: "Lacta Chocolate ao Leite 50,1g",
        categoria: "conveniencia",
        preco: 6.99,
        imagem: "imagens/lacta-chocolate-ao-leite.png",
        simbolo: "🍫"
    },
    {
        id: 149,
        nome: "Lacta Chocolate Branco 50,1g",
        categoria: "conveniencia",
        preco: 6.99,
        imagem: "imagens/lacta-chocolate-branco.webp",
        simbolo: "🍫"
    },
    {
        id: 150,
        nome: "Kinder Bueno White",
        categoria: "conveniencia",
        preco: 10.99,
        imagem: "imagens/kinder-bueno-white.png",
        simbolo: "🍫"
    },
    {
        id: 151,
        nome: "Nutella B-ready",
        categoria: "conveniencia",
        preco: 5.99,
        imagem: "imagens/nutella-b-ready.png",
        simbolo: "🍫"
    },
    {
        id: 152,
        nome: "Twix 15g",
        categoria: "conveniencia",
        preco: 2.49,
        imagem: "imagens/twix.webp",
        simbolo: "🍫"
    },
    {
        id: 153,
        nome: "Halls Extra Forte",
        categoria: "conveniencia",
        preco: 2.49,
        imagem: "imagens/halls-extra-forte.png",
        simbolo: "🍬"
    },
    {
        id: 154,
        nome: "Halls Cereja",
        categoria: "conveniencia",
        preco: 2.49,
        imagem: "imagens/halls-cereja.png",
        simbolo: "🍬"
    },
    {
        id: 155,
        nome: "Halls Menta",
        categoria: "conveniencia",
        preco: 2.49,
        imagem: "imagens/halls-menta.png",
        simbolo: "🍬"
    },
    {
        id: 156,
        nome: "Oliveira Encanto – Doce de Coco com Cobertura Sabor Chocolate",
        categoria: "conveniencia",
        preco: 2.99,
        imagem: "imagens/oliveira-encanto-sabor-chocolate.png",
        simbolo: "🍫"
    },
    {
        id: 157,
        nome: "Snickers Tradicional",
        categoria: "conveniencia",
        preco: 5.99,
        imagem: "imagens/snickers-tradicional.webp",
        simbolo: "🍫"
    },
    {
        id: 158,
        nome: "Snickers Cappuccino",
        categoria: "conveniencia",
        preco: 5.99,
        imagem: "imagens/snickers-cappuccino.webp",
        simbolo: "🍫"
    },
    {
        id: 159,
        nome: "Snickers Dark",
        categoria: "conveniencia",
        preco: 5.99,
        imagem: "imagens/snickers-dark.png",
        simbolo: "🍫"
    },
    {
        id: 160,
        nome: "Snickers Branco",
        categoria: "conveniencia",
        preco: 5.99,
        imagem: "imagens/snickers-branco.png",
        simbolo: "🍫"
    },
    {
        id: 161,
        nome: "Club Social Snack Queijo Parmesão 68g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/club-social-queijo-parmesao.png",
        simbolo: "🥨"
    },
    {
        id: 162,
        nome: "Club Social Snack Pizza Marguerita 68g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/club-social-snack-pizza-marguerita.png",
        simbolo: "🥨"
    },
    {
        id: 163,
        nome: "Roots To Go Chips de Batata-Doce Teriyaki",
        categoria: "conveniencia",
        preco: 12.99,
        imagem: "imagens/roots-to-go-teriyaki.webp",
        simbolo: "🥔"
    },
    {
        id: 164,
        nome: "Roots To Go Chips de Batata-Doce Mostarda Dijon",
        categoria: "conveniencia",
        preco: 12.99,
        imagem: "imagens/roots-to-go-mostarda-dijon.webp",
        simbolo: "🥔"
    },
    {
        id: 165,
        nome: "Bon Gouter Queijo Tipo Suíço 75g",
        categoria: "conveniencia",
        preco: 6.99,
        imagem: "imagens/bon-gouter-queijo-tipo-suico.png",
        simbolo: "🥨"
    },
    {
        id: 166,
        nome: "Paçoquita Chocoberta Santa Helena 18g",
        categoria: "conveniencia",
        preco: 3.49,
        imagem: "imagens/pacoquita-chocoberta-santa-helena.png",
        simbolo: "🍫"
    },
    {
        id: 167,
        nome: "Paçoquita Original Santa Helena 20g",
        categoria: "conveniencia",
        preco: 1.50,
        imagem: "imagens/pacoquita-santa-helena.png",
        simbolo: "🥜"
    },
    {
        id: 168,
        nome: "Traquinas Chocolate 126g",
        categoria: "conveniencia",
        preco: 4.49,
        imagem: "imagens/traquinas-chocolate.png",
        simbolo: "🍪"
    },
    {
        id: 169,
        nome: "Traquinas Morango 126g",
        categoria: "conveniencia",
        preco: 4.49,
        imagem: "imagens/traquinas-morango.png",
        simbolo: "🍪"
    },
    {
        id: 170,
        nome: "Traquinas Meio a Meio Chocolate Branco e Preto 126g",
        categoria: "conveniencia",
        preco: 4.49,
        imagem: "imagens/traquinas-branco-e-preto.webp",
        simbolo: "🍪"
    },
    {
        id: 171,
        nome: "Amendupã Snacks Cebola 40g",
        categoria: "conveniencia",
        preco: 2.99,
        imagem: "imagens/amendupa-snacks-cebola.png",
        simbolo: "🥜"
    },
    {
        id: 172,
        nome: "Amendupã Snacks Costelinha Suína temperada com limão 40g",
        categoria: "conveniencia",
        preco: 2.99,
        imagem: "imagens/amendupa-com-limao.png",
        simbolo: "🥜"
    },
    {
        id: 173,
        nome: "Amendupã Snacks Churrasco 40g",
        categoria: "conveniencia",
        preco: 2.99,
        imagem: "imagens/amendupa-snacks-churrasco.png",
        simbolo: "🥜"
    },
    {
        id: 174,
        nome: "Dori Pettiz Special Amendoim Japonês 50g",
        categoria: "conveniencia",
        preco: 3.99,
        imagem: "imagens/dori-pettiz-amendoim-japones.png",
        simbolo: "🥜"
    },
    {
        id: 175,
        nome: "Dori Pettiz Special Amendoim Torrado Salgado sem Pele 50g",
        categoria: "conveniencia",
        preco: 3.99,
        imagem: "imagens/dori-pettiz-amendoim-sem-pele.png",
        simbolo: "🥜"
    },
    {
        id: 176,
        nome: "Marshmallow Fini Torção 80g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/marshmallow-fini-torcao.png",
        simbolo: "🍡"
    },
    {
        id: 177,
        nome: "Marshmallow Fini Camping 80g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/marshmallow-fini-camping.png",
        simbolo: "🍡"
    },
    {
        id: 178,
        nome: "Haribo Ursinhos de Ouro 80g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/haribo-ursinhos-de-ouro.webp",
        simbolo: "🍬"
    },
    {
        id: 179,
        nome: "Haribo Balla Sticks Ácido Morango 80g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/haribo-balla-sticks-acido-morango.webp",
        simbolo: "🍬"
    },
    {
        id: 180,
        nome: "Fini Chicle Melancia Azedinha 80g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/fini-chicle-melancia-azedinha.webp",
        simbolo: "🍬"
    },
    {
        id: 181,
        nome: "Fini Chicle Ovos de Dinossauro Azedinhos 80g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/fini-chicle-ovos-de-dinossauro-azedinhos.png",
        simbolo: "🍬"
    },
    {
        id: 182,
        nome: "Fini Gelatinas Melancia em Fatias Azedinho Extremo 80g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/fini-gelatinas-melancia-em-fatias-azedinho-extremo.webp",
        simbolo: "🍬"
    },
    {
        id: 183,
        nome: "Fini Gelatinas Dentaduras 80g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/fini-gelatinas-dentaduras.webp",
        simbolo: "🍬"
    },
    {
        id: 184,
        nome: "Fini Gelatinas Beijos 80g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/fini-gelatinas-beijos.png",
        simbolo: "🍬"
    },
    {
        id: 185,
        nome: "Fini Gelatinas Minhocas 80g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/fini-gelatinas-minhocas.png",
        simbolo: "🍬"
    },
    {
        id: 186,
        nome: "Fini Gelatinas Amoras 80g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/fini-gelatinas-amoras.png",
        simbolo: "🍬"
    },
    {
        id: 187,
        nome: "Fini Gelatinas Ursinhos 80g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/fini-gelatinas-ursinhos.png",
        simbolo: "🍬"
    },
    {
        id: 188,
        nome: "Lacta Bis Xtra Original 45g",
        categoria: "conveniencia",
        preco: 4.99,
        imagem: "imagens/lacta-bis-xtra-original.webp",
        simbolo: "🍫"
    },
    {
        id: 189,
        nome: "Lacta Bis Original 100,8g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/lacta-bis-original.png",
        simbolo: "🍫"
    },
    {
        id: 190,
        nome: "Lacta Bis Branco 100,8g",
        categoria: "conveniencia",
        preco: 7.99,
        imagem: "imagens/lacta-bis-branco.png",
        simbolo: "🍫"
    }
];