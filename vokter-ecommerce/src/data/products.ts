import type { Product } from "@/types"

export const products: Product[] = [
  // 🎧 Manos Libres (1-4)
  {
    id: "1", name: "Music Colores", slug: "music-colores", description: "Manos libres con conector 3.5mm, compatible con la mayoría de dispositivos. Diseño colorido y compacto.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Manos Libres",
    brand: "Vokter", price: 5320, stock: 50, images: ["/images/music_colores.jpeg"], featured: false, rating: 4.0, reviewsCount: 12,
    specifications: [{ label: "Conector", value: "3.5mm" }, { label: "Tipo", value: "Manos Libres" }], createdAt: "2025-01-01",
  },
  {
    id: "2", name: "W-01", slug: "w-01", description: "Manos libres 3.5mm con diseño ergonómico y micrófono integrado.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Manos Libres",
    brand: "Vokter", price: 5320, stock: 45, images: ["/images/w_01.jpeg"], featured: false, rating: 3.8, reviewsCount: 8,
    specifications: [{ label: "Conector", value: "3.5mm" }, { label: "Tipo", value: "Manos Libres" }], createdAt: "2025-01-01",
  },
  {
    id: "3", name: "Z1", slug: "z1", description: "Auriculares manos libres 3.5mm con control de llamadas.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Manos Libres",
    brand: "Vokter", price: 4900, stock: 60, images: ["/images/z1.jpeg"], featured: false, rating: 3.9, reviewsCount: 15,
    specifications: [{ label: "Conector", value: "3.5mm" }, { label: "Tipo", value: "Manos Libres" }], createdAt: "2025-01-01",
  },
  {
    id: "4", name: "Samsung AKG", slug: "samsung-akg", description: "Auriculares AKG originales Samsung con conector 3.5mm. Sonido de alta calidad.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Manos Libres",
    brand: "Samsung", price: 5040, stock: 30, images: ["/images/samsung_akg.jpeg"], featured: false, rating: 4.3, reviewsCount: 22,
    specifications: [{ label: "Conector", value: "3.5mm" }, { label: "Marca", value: "Samsung AKG" }], createdAt: "2025-01-01",
  },

  // 🎧 Balacas Bluetooth (5-7)
  {
    id: "5", name: "Balaca Pro Air", slug: "balaca-pro-air", description: "Balaca Bluetooth de oreja abierta. Diseño ergonómico y sonido envolvente.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Balacas Bluetooth",
    brand: "Vokter", price: 49000, stock: 25, images: ["/images/balaca_pro_air.jpeg"], featured: true, rating: 4.5, reviewsCount: 34,
    specifications: [{ label: "Tipo", value: "Oreja abierta" }, { label: "Conexión", value: "Bluetooth" }], createdAt: "2025-01-01",
  },
  {
    id: "6", name: "Balaca Air Max Imantada", slug: "balaca-air-max-imantada", description: "Balaca Bluetooth over-ear con diseño imantado plegable.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Balacas Bluetooth",
    brand: "Vokter", price: 49000, stock: 20, images: ["/images/balaca_air_max_imantada.jpeg"], featured: true, rating: 4.4, reviewsCount: 28,
    specifications: [{ label: "Tipo", value: "Over-ear" }, { label: "Conexión", value: "Bluetooth" }], createdAt: "2025-01-01",
  },
  {
    id: "7", name: "Balaca Gamer", slug: "balaca-gamer", description: "Diadema gamer con micrófono y sonido envolvente. Ideal para gaming.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Balacas Bluetooth",
    brand: "Vokter", price: 88200, stock: 15, images: ["/images/balaca_gamer.jpeg"], featured: false, rating: 4.6, reviewsCount: 19,
    specifications: [{ label: "Tipo", value: "Diadema Gamer" }, { label: "Conexión", value: "Bluetooth" }], createdAt: "2025-01-01",
  },

  // 🎧 Diademas (8-12)
  {
    id: "8", name: "Sony MDR XB450", slug: "sony-mdr-xb450", description: "Diadema Sony con extra bajos. Conector 3.5mm.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Diademas",
    brand: "Sony", price: 20300, stock: 18, images: ["/images/sony_mdr_xb450.jpeg"], featured: false, rating: 4.2, reviewsCount: 31,
    specifications: [{ label: "Tipo", value: "Diadema 3.5mm" }, { label: "Marca", value: "Sony" }], createdAt: "2025-01-01",
  },
  {
    id: "9", name: "N65BT", slug: "n65bt", description: "Diadema Bluetooth inalámbrica con sonido de alta fidelidad.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Diademas",
    brand: "Vokter", price: 44800, stock: 12, images: ["/images/n65bt.jpeg"], featured: false, rating: 4.1, reviewsCount: 16,
    specifications: [{ label: "Tipo", value: "Diadema Bluetooth" }, { label: "Conexión", value: "Bluetooth" }], createdAt: "2025-01-01",
  },
  {
    id: "10", name: "Sony Bluetooth 450 BT", slug: "sony-bluetooth-450-bt", description: "Diadema Bluetooth Sony con cancelación de ruido pasiva.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Diademas",
    brand: "Sony", price: 35000, stock: 10, images: ["/images/sony_bt_450.jpeg"], featured: false, rating: 4.3, reviewsCount: 25,
    specifications: [{ label: "Tipo", value: "Diadema Bluetooth" }, { label: "Marca", value: "Sony" }], createdAt: "2025-01-01",
  },
  {
    id: "11", name: "P9 Tipo Apple", slug: "p9-tipo-apple", description: "Diadema Bluetooth estilo Apple con diseño premium y sonido envolvente.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Diademas",
    brand: "Vokter", price: 72800, stock: 8, images: ["/images/p9_tipo_apple.jpeg"], featured: true, rating: 4.7, reviewsCount: 42,
    specifications: [{ label: "Tipo", value: "Diadema Bluetooth" }, { label: "Diseño", value: "Premium" }], createdAt: "2025-01-01",
  },
  {
    id: "12", name: "Airpods Max", slug: "airpods-max", description: "Diadema Bluetooth premium con sonido de alta resolución.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Diademas",
    brand: "Apple", price: 72800, stock: 5, images: ["/images/airpods_max.jpeg"], featured: true, rating: 4.8, reviewsCount: 56,
    specifications: [{ label: "Tipo", value: "Diadema Bluetooth" }, { label: "Marca", value: "Apple" }], createdAt: "2025-01-01",
  },

  // 📿 Cuelleras (13-15)
  {
    id: "13", name: "ZON-35", slug: "zon-35", description: "Cuellera Bluetooth con diseño ergonómico y sonido de calidad.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Cuelleras",
    brand: "Vokter", price: 25200, stock: 22, images: ["/images/zon_35.jpeg"], featured: false, rating: 4.0, reviewsCount: 11,
    specifications: [{ label: "Tipo", value: "Cuellera Bluetooth" }, { label: "Conexión", value: "Bluetooth" }], createdAt: "2025-01-01",
  },
  {
    id: "14", name: "F-20", slug: "f-20", description: "Auriculares de conducción ósea Bluetooth. Escucha sin tapar tus oídos.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Cuelleras",
    brand: "Vokter", price: 53200, stock: 10, images: ["/images/f_20.jpeg"], featured: true, rating: 4.4, reviewsCount: 18,
    specifications: [{ label: "Tipo", value: "Conducción Ósea" }, { label: "Conexión", value: "Bluetooth" }], createdAt: "2025-01-01",
  },
  {
    id: "15", name: "F805", slug: "f805", description: "Auriculares de conducción ósea Bluetooth premium.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Cuelleras",
    brand: "Vokter", price: 56000, stock: 8, images: ["/images/f805.jpeg"], featured: false, rating: 4.5, reviewsCount: 14,
    specifications: [{ label: "Tipo", value: "Conducción Ósea" }, { label: "Conexión", value: "Bluetooth" }], createdAt: "2025-01-01",
  },

  // 🔊 Parlantes (16-20)
  {
    id: "16", name: "S410", slug: "s410", description: "Parlante Bluetooth portátil con sonido potente.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Parlantes",
    brand: "Vokter", price: 53200, stock: 15, images: ["/images/s410.jpeg"], featured: false, rating: 4.1, reviewsCount: 20,
    specifications: [{ label: "Tipo", value: "Parlante Bluetooth" }, { label: "Conexión", value: "Bluetooth" }], createdAt: "2025-01-01",
  },
  {
    id: "17", name: "S430", slug: "s430", description: "Parlante Bluetooth portátil con sonido envolvente.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Parlantes",
    brand: "Vokter", price: 105000, stock: 10, images: ["/images/s430.jpeg"], featured: false, rating: 4.3, reviewsCount: 17,
    specifications: [{ label: "Tipo", value: "Parlante Bluetooth portátil" }, { label: "Conexión", value: "Bluetooth" }], createdAt: "2025-01-01",
  },
  {
    id: "18", name: "FL828", slug: "fl828", description: "Parlante Bluetooth recargable con batería de larga duración.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Parlantes",
    brand: "Vokter", price: 119000, stock: 7, images: ["/images/fl828.jpeg"], featured: true, rating: 4.6, reviewsCount: 23,
    specifications: [{ label: "Tipo", value: "Parlante Bluetooth recargable" }, { label: "Batería", value: "Larga duración" }], createdAt: "2025-01-01",
  },
  {
    id: "19", name: "S640", slug: "s640", description: "Parlante Bluetooth portátil compacto.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Parlantes",
    brand: "Vokter", price: 18200, stock: 25, images: ["/images/s640.jpeg"], featured: false, rating: 3.9, reviewsCount: 9,
    specifications: [{ label: "Tipo", value: "Parlante Bluetooth portátil" }, { label: "Conexión", value: "Bluetooth" }], createdAt: "2025-01-01",
  },
  {
    id: "20", name: "S520", slug: "s520", description: "Parlante Bluetooth 12\" con sonido potente y graves profundos.",
    category: { id: "audio", name: "Audio", slug: "audio", description: "", image: "" }, subcategory: "Parlantes",
    brand: "Vokter", price: 119000, stock: 6, images: ["/images/s520.jpeg"], featured: true, rating: 4.7, reviewsCount: 29,
    specifications: [{ label: "Tipo", value: "Parlante Bluetooth 12\"" }, { label: "Potencia", value: "Alta" }], createdAt: "2025-01-01",
  },

  // 🔌 Cables (21-24)
  {
    id: "21", name: "PX-214", slug: "px-214", description: "Cable USB Tipo C 120W para carga rápida.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cables",
    brand: "Vokter", price: 11900, stock: 40, images: ["/images/px_214.jpeg"], featured: false, rating: 4.2, reviewsCount: 33,
    specifications: [{ label: "Tipo", value: "USB Tipo C" }, { label: "Potencia", value: "120W" }], createdAt: "2025-01-01",
  },
  {
    id: "22", name: "PX-400", slug: "px-400", description: "Cable 2 en 1 Tipo C + Lightning. Dos dispositivos en un solo cable.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cables",
    brand: "Vokter", price: 19320, stock: 35, images: ["/images/px_400.jpeg"], featured: false, rating: 4.4, reviewsCount: 27,
    specifications: [{ label: "Tipo", value: "2 en 1 Tipo C + Lightning" }, { label: "Compatibilidad", value: "Universal" }], createdAt: "2025-01-01",
  },
  {
    id: "23a", name: "Xiaomi Tipo C", slug: "xiaomi-tipo-c", description: "Cable USB Tipo C 2A de carga y datos.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cables",
    brand: "Xiaomi", price: 4900, stock: 50, images: ["/images/xiaomi_tipo_c.jpeg"], featured: false, rating: 4.0, reviewsCount: 40,
    specifications: [{ label: "Tipo", value: "USB Tipo C" }, { label: "Amperaje", value: "2A" }], createdAt: "2025-01-01",
  },
  {
    id: "24", name: "Cable RCA 2x1", slug: "cable-rca-2x1", description: "Cable de audio RCA 1.5 metros.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cables",
    brand: "Vokter", price: 6300, stock: 30, images: ["/images/cable_rca_2x1.jpeg"], featured: false, rating: 3.8, reviewsCount: 6,
    specifications: [{ label: "Tipo", value: "Audio RCA" }, { label: "Longitud", value: "1.5m" }], createdAt: "2025-01-01",
  },

  // 🔌 Cargadores de Carro (25-27)
  {
    id: "25", name: "C209", slug: "c209", description: "Cargador plugin para carro 5A. Carga rápida dual.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cargadores de Carro",
    brand: "Vokter", price: 10500, stock: 30, images: ["/images/c209.jpeg"], featured: false, rating: 4.1, reviewsCount: 14,
    specifications: [{ label: "Tipo", value: "Plugin carro" }, { label: "Amperaje", value: "5A" }], createdAt: "2025-01-01",
  },
  {
    id: "26", name: "KLJ-15 (Ainocel)", slug: "klj-15-ainocel", description: "Cargador plugin carro 38W con puerto USB.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cargadores de Carro",
    brand: "Ainocel", price: 13300, stock: 25, images: ["/images/klj_15_ainocel.jpeg"], featured: false, rating: 4.2, reviewsCount: 11,
    specifications: [{ label: "Tipo", value: "Plugin carro" }, { label: "Potencia", value: "38W" }], createdAt: "2025-01-01",
  },
  {
    id: "27", name: "R-01 (Ainocel)", slug: "r-01-ainocel", description: "Cargador plugin carro 67W PD con carga rápida Power Delivery.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cargadores de Carro",
    brand: "Ainocel", price: 18200, stock: 20, images: ["/images/r_01_ainocel.jpeg"], featured: true, rating: 4.5, reviewsCount: 18,
    specifications: [{ label: "Tipo", value: "Plugin carro" }, { label: "Potencia", value: "67W PD" }], createdAt: "2025-01-01",
  },

  // 🔌 Cargadores de Pared (28-35)
  {
    id: "28", name: "CG-06 Technomaster", slug: "cg-06-technomaster", description: "Cargador Tipo C 4.5A para carga rápida.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cargadores de Pared",
    brand: "Technomaster", price: 12600, stock: 35, images: ["/images/cg_06_technomaster.jpeg"], featured: false, rating: 4.0, reviewsCount: 16,
    specifications: [{ label: "Tipo", value: "Cargador Tipo C" }, { label: "Amperaje", value: "4.5A" }], createdAt: "2025-01-01",
  },
  {
    id: "29", name: "CG-16", slug: "cg-16", description: "Cargador Tipo C Quick Charge 3A.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cargadores de Pared",
    brand: "Vokter", price: 8120, stock: 40, images: ["/images/cg_16.jpeg"], featured: false, rating: 3.9, reviewsCount: 20,
    specifications: [{ label: "Tipo", value: "Cargador Tipo C" }, { label: "Amperaje", value: "3A Quick Charge" }], createdAt: "2025-01-01",
  },
  {
    id: "30", name: "Mi 25W PD Adapter", slug: "mi-25w-pd-adapter", description: "Cargador Xiaomi 25W Tipo C con Power Delivery.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cargadores de Pared",
    brand: "Xiaomi", price: 22400, stock: 20, images: ["/images/mi_25w_pd_adapter.jpeg"], featured: false, rating: 4.4, reviewsCount: 28,
    specifications: [{ label: "Tipo", value: "Cargador Tipo C" }, { label: "Potencia", value: "25W PD" }], createdAt: "2025-01-01",
  },
  {
    id: "31", name: "Mi 67W PD Adapter", slug: "mi-67w-pd-adapter", description: "Cargador Xiaomi 67W Tipo C con carga ultra rápida.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cargadores de Pared",
    brand: "Xiaomi", price: 28000, stock: 18, images: ["/images/mi_67w_pd_adapter.jpeg"], featured: true, rating: 4.7, reviewsCount: 35,
    specifications: [{ label: "Tipo", value: "Cargador Tipo C" }, { label: "Potencia", value: "67W PD" }], createdAt: "2025-01-01",
  },
  {
    id: "32", name: "Xiaomi 67W Kit", slug: "xiaomi-67w-kit", description: "Cargador Tipo C 67W + cable incluido. Kit completo de carga rápida.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cargadores de Pared",
    brand: "Xiaomi", price: 30800, stock: 15, images: ["/images/xiaomi_67w_kit.jpeg"], featured: true, rating: 4.8, reviewsCount: 42,
    specifications: [{ label: "Tipo", value: "Kit Cargador + Cable" }, { label: "Potencia", value: "67W PD" }], createdAt: "2025-01-01",
  },
  {
    id: "33", name: "CG-09 20W", slug: "cg-09-20w", description: "Cargador 4A 20W Tipo C compacto.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cargadores de Pared",
    brand: "Vokter", price: 9800, stock: 35, images: ["/images/cg_09_20w.jpeg"], featured: false, rating: 4.0, reviewsCount: 13,
    specifications: [{ label: "Tipo", value: "Cargador Tipo C" }, { label: "Potencia", value: "20W 4A" }], createdAt: "2025-01-01",
  },
  {
    id: "34", name: "Cabeza iPhone 25W", slug: "cabeza-iphone-25w", description: "Cargador iPhone USB-C 25W original.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cargadores de Pared",
    brand: "Apple", price: 12600, stock: 25, images: ["/images/cabeza_iphone_25w.jpeg"], featured: false, rating: 4.3, reviewsCount: 21,
    specifications: [{ label: "Tipo", value: "Cargador USB-C" }, { label: "Potencia", value: "25W" }], createdAt: "2025-01-01",
  },
  {
    id: "35", name: "Cargador 25W Tipo C iPhone", slug: "cargador-25w-tipo-c-iphone", description: "Cargador iPhone 25W + cable incluido.",
    category: { id: "cables-chargers", name: "Cables y Cargadores", slug: "cables-cargadores", description: "", image: "" }, subcategory: "Cargadores de Pared",
    brand: "Apple", price: 21000, stock: 20, images: ["/images/cargador_25w_tipo_c.jpeg"], featured: false, rating: 4.4, reviewsCount: 19,
    specifications: [{ label: "Tipo", value: "Cargador + Cable" }, { label: "Potencia", value: "25W" }], createdAt: "2025-01-01",
  },

  // 📱 Holders (36-40)
  {
    id: "36", name: "RN04 Quick-Snap", slug: "rn04-quick-snap", description: "Holder carro con chupa imán de fijación rápida.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Holders",
    brand: "Vokter", price: 14000, stock: 30, images: ["/images/rn04_quick_snap.jpeg"], featured: false, rating: 4.1, reviewsCount: 15,
    specifications: [{ label: "Tipo", value: "Holder carro chupa imán" }, { label: "Fijación", value: "Imán" }], createdAt: "2025-01-01",
  },
  {
    id: "37", name: "H-022 D&D", slug: "h-022-dd", description: "Holder carro Easy Touch con sujeción segura.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Holders",
    brand: "D&D", price: 13300, stock: 28, images: ["/images/h_022_dd.jpeg"], featured: false, rating: 4.0, reviewsCount: 12,
    specifications: [{ label: "Tipo", value: "Holder carro Easy Touch" }, { label: "Sujeción", value: "Segura" }], createdAt: "2025-01-01",
  },
  {
    id: "38", name: "Soporte Moto Manubrio", slug: "soporte-moto-manubrio", description: "Soporte impermeable para moto, fijación al manubrio.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Holders",
    brand: "Vokter", price: 18200, stock: 15, images: ["/images/soporte_moto_manubrio.jpeg"], featured: false, rating: 4.3, reviewsCount: 9,
    specifications: [{ label: "Tipo", value: "Soporte moto impermeable" }, { label: "Ubicación", value: "Manubrio" }], createdAt: "2025-01-01",
  },
  {
    id: "39", name: "XL+M3 Soporte Moto Espejo", slug: "xl-m3-soporte-moto-espejo", description: "Soporte para moto con fijación al espejo retrovisor.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Holders",
    brand: "Vokter", price: 18200, stock: 12, images: ["/images/xl_m3_soporte_moto_espejo.jpeg"], featured: false, rating: 4.2, reviewsCount: 7,
    specifications: [{ label: "Tipo", value: "Soporte moto espejo" }, { label: "Ubicación", value: "Espejo retrovisor" }], createdAt: "2025-01-01",
  },
  {
    id: "40", name: "H-73 Soporte Moto Manubrio 360°", slug: "h-73-soporte-moto-360", description: "Soporte moto manubrio con rotación 360°.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Holders",
    brand: "Vokter", price: 21000, stock: 10, images: ["/images/h_73_soporte_moto_360.jpeg"], featured: false, rating: 4.4, reviewsCount: 11,
    specifications: [{ label: "Tipo", value: "Soporte moto manubrio" }, { label: "Rotación", value: "360°" }], createdAt: "2025-01-01",
  },

  // 🎙️ Micrófono (41)
  {
    id: "41", name: "K9 Wireless Microphone", slug: "k9-wireless-microphone", description: "Micrófono inalámbrico con alcance amplio y sonido claro.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Micrófonos",
    brand: "Vokter", price: 35000, stock: 12, images: ["/images/k9_wireless_microphone.jpeg"], featured: false, rating: 4.1, reviewsCount: 8,
    specifications: [{ label: "Tipo", value: "Micrófono inalámbrico" }, { label: "Conexión", value: "Inalámbrica" }], createdAt: "2025-01-01",
  },

  // 🔋 Power Banks (42-45)
  {
    id: "42", name: "A-150 Keychain Mini Powerbank", slug: "a-150-keychain-mini-powerbank", description: "Power Bank llavero de 2.300 mAh. Carga de emergencia portátil.",
    category: { id: "power-banks", name: "Power Banks", slug: "power-banks", description: "", image: "" }, subcategory: "Power Banks",
    brand: "Vokter", price: 18200, stock: 30, images: ["/images/a_150_keychain_powerbank.jpeg"], featured: false, rating: 4.0, reviewsCount: 22,
    specifications: [{ label: "Capacidad", value: "2.300 mAh" }, { label: "Tipo", value: "Llavero" }], createdAt: "2025-01-01",
  },
  {
    id: "43", name: "iPhone Battery Pack MagSafe", slug: "iphone-battery-pack-magsafe", description: "Power Bank 5.000 mAh con carga MagSafe para iPhone.",
    category: { id: "power-banks", name: "Power Banks", slug: "power-banks", description: "", image: "" }, subcategory: "Power Banks",
    brand: "Apple", price: 63000, stock: 10, images: ["/images/iphone_battery_magsafe.jpeg"], featured: true, rating: 4.6, reviewsCount: 31,
    specifications: [{ label: "Capacidad", value: "5.000 mAh" }, { label: "Carga", value: "MagSafe" }], createdAt: "2025-01-01",
  },
  {
    id: "44", name: "Ametech Power Bank 10.000 mAh", slug: "ametech-power-bank-10000", description: "Power Bank 10.000 mAh con carga rápida.",
    category: { id: "power-banks", name: "Power Banks", slug: "power-banks", description: "", image: "" }, subcategory: "Power Banks",
    brand: "Ametech", price: 63000, stock: 15, images: ["/images/ametech_powerbank_10000.jpeg"], featured: false, rating: 4.3, reviewsCount: 25,
    specifications: [{ label: "Capacidad", value: "10.000 mAh" }, { label: "Carga rápida", value: "Sí" }], createdAt: "2025-01-01",
  },
  {
    id: "45", name: "WiWU Power Bank 20.000 mAh", slug: "wiwu-power-bank-20000", description: "Power Bank 20.000 mAh de alta capacidad para múltiples cargas.",
    category: { id: "power-banks", name: "Power Banks", slug: "power-banks", description: "", image: "" }, subcategory: "Power Banks",
    brand: "WiWU", price: 77000, stock: 8, images: ["/images/wiwu_powerbank_20000.jpeg"], featured: true, rating: 4.5, reviewsCount: 19,
    specifications: [{ label: "Capacidad", value: "20.000 mAh" }, { label: "Puertos", value: "Múltiples" }], createdAt: "2025-01-01",
  },

  // 🖱️ Accesorios PC (46-50)
  {
    id: "46", name: "Mouse Inalámbrico Optical 1600DPI", slug: "mouse-inalambrico-1600dpi", description: "Mouse inalámbrico 2.4GHz con sensor óptico de 1600 DPI.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Accesorios PC",
    brand: "Vokter", price: 16800, stock: 25, images: ["/images/mouse_inalambrico_1600dpi.jpeg"], featured: false, rating: 4.0, reviewsCount: 16,
    specifications: [{ label: "Tipo", value: "Mouse inalámbrico" }, { label: "DPI", value: "1600" }], createdAt: "2025-01-01",
  },
  {
    id: "47", name: "SJ-100 Mouse Alámbrico", slug: "sj-100-mouse-alambrico", description: "Mouse alámbrico USB económico y funcional.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Accesorios PC",
    brand: "Vokter", price: 7700, stock: 35, images: ["/images/sj_100_mouse_alambrico.jpeg"], featured: false, rating: 3.8, reviewsCount: 10,
    specifications: [{ label: "Tipo", value: "Mouse alámbrico" }, { label: "Conexión", value: "USB" }], createdAt: "2025-01-01",
  },
  {
    id: "48", name: "Combo Gamer T25", slug: "combo-gamer-t25", description: "Combo teclado + mouse gamer con iluminación LED.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Accesorios PC",
    brand: "Vokter", price: 63000, stock: 10, images: ["/images/combo_gamer_t25.jpeg"], featured: true, rating: 4.4, reviewsCount: 24,
    specifications: [{ label: "Tipo", value: "Combo teclado + mouse gamer" }, { label: "LED", value: "Sí" }], createdAt: "2025-01-01",
  },
  {
    id: "49", name: "FC-530 Weibo Teclado Cable", slug: "fc-530-weibo-teclado-cable", description: "Teclado alámbrico USB con diseño ergonómico.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Accesorios PC",
    brand: "Weibo", price: 18200, stock: 20, images: ["/images/fc_530_weibo_teclado.jpeg"], featured: false, rating: 4.1, reviewsCount: 13,
    specifications: [{ label: "Tipo", value: "Teclado alámbrico" }, { label: "Conexión", value: "USB" }], createdAt: "2025-01-01",
  },
  {
    id: "50", name: "Logitech MK220", slug: "logitech-mk220", description: "Teclado + mouse inalámbrico Logitech. Set completo.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Accesorios PC",
    brand: "Logitech", price: 77000, stock: 8, images: ["/images/logitech_mk220.jpeg"], featured: true, rating: 4.6, reviewsCount: 37,
    specifications: [{ label: "Tipo", value: "Teclado + mouse inalámbrico" }, { label: "Marca", value: "Logitech" }], createdAt: "2025-01-01",
  },

  // 🎮 Consolas (51-54)
  {
    id: "51", name: "Consola Blanca Verde Retro", slug: "consola-blanca-verde-retro", description: "Consola retro inalámbrica con juegos integrados.",
    category: { id: "consoles", name: "Consolas y Entretenimiento", slug: "consolas-entretenimiento", description: "", image: "" }, subcategory: "Consolas",
    brand: "Vokter", price: 105000, stock: 5, images: ["/images/consola_blanca_verde_retro.jpeg"], featured: false, rating: 4.2, reviewsCount: 14,
    specifications: [{ label: "Tipo", value: "Consola retro inalámbrica" }, { label: "Juegos", value: "Integrados" }], createdAt: "2025-01-01",
  },
  {
    id: "52", name: "Proyector con Juegos", slug: "proyector-con-juegos", description: "Proyector + consola + mandos incluidos. Diversión en grande.",
    category: { id: "consoles", name: "Consolas y Entretenimiento", slug: "consolas-entretenimiento", description: "", image: "" }, subcategory: "Proyectores",
    brand: "Vokter", price: 259000, stock: 3, images: ["/images/proyector_con_juegos.jpeg"], featured: true, rating: 4.7, reviewsCount: 21,
    specifications: [{ label: "Tipo", value: "Proyector + consola" }, { label: "Incluye", value: "Mandos" }], createdAt: "2025-01-01",
  },
  {
    id: "53", name: "Android TV Stick", slug: "android-tv-stick", description: "TV Stick Android 4K para convertir tu TV en Smart TV.",
    category: { id: "consoles", name: "Consolas y Entretenimiento", slug: "consolas-entretenimiento", description: "", image: "" }, subcategory: "TV Sticks",
    brand: "Vokter", price: 77000, stock: 10, images: ["/images/android_tv_stick.jpeg"], featured: false, rating: 4.1, reviewsCount: 18,
    specifications: [{ label: "Tipo", value: "TV Stick Android" }, { label: "Resolución", value: "4K" }], createdAt: "2025-01-01",
  },
  {
    id: "54", name: "Watch One (ONN Google TV)", slug: "watch-one-onn-google-tv", description: "TV Stick Google TV con sistema operativo Android.",
    category: { id: "consoles", name: "Consolas y Entretenimiento", slug: "consolas-entretenimiento", description: "", image: "" }, subcategory: "TV Sticks",
    brand: "ONN", price: 112000, stock: 7, images: ["/images/onn_google_tv_stick.jpeg"], featured: true, rating: 4.5, reviewsCount: 25,
    specifications: [{ label: "Tipo", value: "TV Stick Google TV" }, { label: "Sistema", value: "Android" }], createdAt: "2025-01-01",
  },

  // 📱 Estuches / Fundas (55-60)
  {
    id: "55", name: "Space Collection", slug: "space-collection", description: "Funda transparente antiácida para iPhone/Android.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Fundas",
    brand: "Vokter", price: 4200, stock: 50, images: ["/images/space_collection.jpeg"], featured: false, rating: 4.0, reviewsCount: 30,
    specifications: [{ label: "Tipo", value: "Funda transparente" }, { label: "Compatibilidad", value: "iPhone/Android" }], createdAt: "2025-01-01",
  },
  {
    id: "56", name: "Silicon iPhone", slug: "silicon-iphone", description: "Funda silicona para iPhone 11/12/14 Plus.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Fundas",
    brand: "Vokter", price: 6300, stock: 40, images: ["/images/silicon_iphone.jpeg"], featured: false, rating: 4.1, reviewsCount: 22,
    specifications: [{ label: "Tipo", value: "Funda silicona" }, { label: "Compatibilidad", value: "iPhone 11/12/14 Plus" }], createdAt: "2025-01-01",
  },
  {
    id: "57", name: "Silicon Android", slug: "silicon-android", description: "Funda silicona para Samsung/Redmi/Motorola.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Fundas",
    brand: "Vokter", price: 7000, stock: 45, images: ["/images/silicon_android.jpeg"], featured: false, rating: 3.9, reviewsCount: 18,
    specifications: [{ label: "Tipo", value: "Funda silicona" }, { label: "Compatibilidad", value: "Samsung/Redmi/Motorola" }], createdAt: "2025-01-01",
  },
  {
    id: "58", name: "Samsung Lujo", slug: "samsung-lujo", description: "Funda lujo para Samsung con diseño premium.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Fundas",
    brand: "Vokter", price: 16800, stock: 20, images: ["/images/samsung_lujo.jpeg"], featured: false, rating: 4.2, reviewsCount: 14,
    specifications: [{ label: "Tipo", value: "Funda lujo" }, { label: "Compatibilidad", value: "Samsung" }], createdAt: "2025-01-01",
  },
  {
    id: "59", name: "Protector Air Pods", slug: "protector-air-pods", description: "Protector para AirPods con diseño de figuras.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Fundas",
    brand: "Vokter", price: 9800, stock: 30, images: ["/images/protector_air_pods.jpeg"], featured: false, rating: 4.3, reviewsCount: 16,
    specifications: [{ label: "Tipo", value: "Protector AirPods" }, { label: "Diseño", value: "Figuras" }], createdAt: "2025-01-01",
  },
  {
    id: "60", name: "Protector de Cargador", slug: "protector-de-cargador", description: "Protector para cabeza de cargador con diseño de figuras.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Fundas",
    brand: "Vokter", price: 9800, stock: 30, images: ["/images/protector_cargador.jpeg"], featured: false, rating: 3.9, reviewsCount: 9,
    specifications: [{ label: "Tipo", value: "Protector cargador" }, { label: "Diseño", value: "Figuras" }], createdAt: "2025-01-01",
  },

  // 🖥️ Accesorios PC/TV (61-63)
  {
    id: "61", name: "Multipuerto USB 3.0", slug: "multipuerto-usb-30", description: "Hub USB multipuerto 3.0 con 4 puertos.",
    category: { id: "accessories", name: "Accesorios", slug: "accesorios", description: "", image: "" }, subcategory: "Accesorios PC",
    brand: "Vokter", price: 27300, stock: 15, images: ["/images/multipuerto_usb_30.jpeg"], featured: false, rating: 4.1, reviewsCount: 11,
    specifications: [{ label: "Tipo", value: "Hub USB" }, { label: "Puertos", value: "4 puertos USB 3.0" }], createdAt: "2025-01-01",
  },
  {
    id: "62", name: "Antena TDT 5M", slug: "antena-tdt-5m", description: "Antena TDT interior para televisión digital.",
    category: { id: "consoles", name: "Consolas y Entretenimiento", slug: "consolas-entretenimiento", description: "", image: "" }, subcategory: "Accesorios TV",
    brand: "Vokter", price: 21000, stock: 12, images: ["/images/antena_tdt_5m.jpeg"], featured: false, rating: 3.8, reviewsCount: 7,
    specifications: [{ label: "Tipo", value: "Antena TDT interior" }, { label: "Alcance", value: "5M" }], createdAt: "2025-01-01",
  },
  {
    id: "63", name: "Codificador TDT HDTV", slug: "codificador-tdt-hdtv", description: "Decodificador TDT para televisión digital HD.",
    category: { id: "consoles", name: "Consolas y Entretenimiento", slug: "consolas-entretenimiento", description: "", image: "" }, subcategory: "Accesorios TV",
    brand: "Vokter", price: 67200, stock: 8, images: ["/images/codificador_tdt_hdtv.jpeg"], featured: false, rating: 4.0, reviewsCount: 6,
    specifications: [{ label: "Tipo", value: "Decodificador TDT" }, { label: "HD", value: "Sí" }], createdAt: "2025-01-01",
  },

  // 👟 Footwear (65-68)
  {
    id: "65-1", name: "LV Skate Sneakers", slug: "lv-skate-sneakers", description: "Calzado Louis Vuitton unisex. Tallas 35-43.",
    category: { id: "footwear", name: "Footwear", slug: "footwear", description: "", image: "" }, subcategory: "Streetwear",
    brand: "Louis Vuitton", price: 270000, stock: 3, images: ["/images/lv_skate.jpeg"], featured: true, rating: 4.9, reviewsCount: 12,
    variants: [{ id: "65-1-v1", productId: "65-1", size: "35-43", sku: "LV-SKATE-001", stock: 3 }],
    specifications: [{ label: "Marca", value: "Louis Vuitton" }, { label: "Tipo", value: "Skate Sneakers" }], createdAt: "2025-01-01",
  },
  {
    id: "65-2", name: "LV Trainer", slug: "lv-trainer", description: "Calzado Louis Vuitton Trainer. Tallas 35-44.",
    category: { id: "footwear", name: "Footwear", slug: "footwear", description: "", image: "" }, subcategory: "Training",
    brand: "Louis Vuitton", price: 180000, stock: 3, images: ["/images/lv_trainer.jpeg"], featured: true, rating: 4.8, reviewsCount: 15,
    specifications: [{ label: "Marca", value: "Louis Vuitton" }, { label: "Tipo", value: "Trainer" }], createdAt: "2025-01-01",
  },
  {
    id: "65-3", name: "LV Archlight Trainer", slug: "lv-archlight-trainer", description: "Calzado Louis Vuitton Archlight. Tallas 36-40.",
    category: { id: "footwear", name: "Footwear", slug: "footwear", description: "", image: "" }, subcategory: "Streetwear",
    brand: "Louis Vuitton", price: 270000, stock: 2, images: ["/images/archlight_trainer.jpeg"], featured: true, rating: 4.7, reviewsCount: 9,
    specifications: [{ label: "Marca", value: "Louis Vuitton" }, { label: "Tipo", value: "Archlight Trainer" }], createdAt: "2025-01-01",
  },
  {
    id: "66-1", name: "Hoka Clifton 10", slug: "hoka-clifton-10", description: "Calzado Hoka Clifton 10. Tallas 36-44.",
    category: { id: "footwear", name: "Footwear", slug: "footwear", description: "", image: "" }, subcategory: "Running",
    brand: "Hoka", price: 240000, stock: 4, images: ["/images/hoka_clifton.jpeg"], featured: true, rating: 4.8, reviewsCount: 22,
    specifications: [{ label: "Marca", value: "Hoka" }, { label: "Modelo", value: "Clifton 10" }], createdAt: "2025-01-01",
  },
  {
    id: "66-2", name: "Hoka Bondi 9", slug: "hoka-bondi-9", description: "Calzado Hoka Bondi 9. Tallas 36-44.",
    category: { id: "footwear", name: "Footwear", slug: "footwear", description: "", image: "" }, subcategory: "Running",
    brand: "Hoka", price: 270000, stock: 3, images: ["/images/hoka_bondi.jpeg"], featured: true, rating: 4.9, reviewsCount: 28,
    specifications: [{ label: "Marca", value: "Hoka" }, { label: "Modelo", value: "Bondi 9" }], createdAt: "2025-01-01",
  },
  {
    id: "66-3", name: "Hoka Skyflow", slug: "hoka-skyflow", description: "Calzado Hoka Skyflow. Tallas 37-42.",
    category: { id: "footwear", name: "Footwear", slug: "footwear", description: "", image: "" }, subcategory: "Running",
    brand: "Hoka", price: 270000, stock: 3, images: ["/images/hoka_skyflow.jpeg"], featured: false, rating: 4.6, reviewsCount: 14,
    specifications: [{ label: "Marca", value: "Hoka" }, { label: "Modelo", value: "Skyflow" }], createdAt: "2025-01-01",
  },
  {
    id: "66-4", name: "Hoka Gaviota", slug: "hoka-gaviota", description: "Calzado Hoka Gaviota. Tallas 36-44.",
    category: { id: "footwear", name: "Footwear", slug: "footwear", description: "", image: "" }, subcategory: "Running",
    brand: "Hoka", price: 260000, stock: 2, images: ["/images/hoka_gaviota.jpeg"], featured: false, rating: 4.5, reviewsCount: 11,
    specifications: [{ label: "Marca", value: "Hoka" }, { label: "Modelo", value: "Gaviota" }], createdAt: "2025-01-01",
  },
  {
    id: "67-1", name: "Skechers Mocasín", slug: "skechers-mocasin", description: "Calzado Skechers estilo mocasín. Tallas 37-41.",
    category: { id: "footwear", name: "Footwear", slug: "footwear", description: "", image: "" }, subcategory: "Streetwear",
    brand: "Skechers", price: 210000, stock: 5, images: ["/images/skechers_mocasin.jpeg"], featured: false, rating: 4.3, reviewsCount: 16,
    specifications: [{ label: "Marca", value: "Skechers" }, { label: "Tipo", value: "Mocasín" }], createdAt: "2025-01-01",
  },
  {
    id: "67-2", name: "Valentino Garavani Diamante", slug: "valentino-garavani-diamante", description: "Calzado Valentino Garavani con detalles diamante. Tallas 36-43.",
    category: { id: "footwear", name: "Footwear", slug: "footwear", description: "", image: "" }, subcategory: "Streetwear",
    brand: "Valentino", price: 170000, stock: 2, images: ["/images/valentino_diamante.jpeg"], featured: true, rating: 4.9, reviewsCount: 8,
    specifications: [{ label: "Marca", value: "Valentino" }, { label: "Modelo", value: "Garavani Diamante" }], createdAt: "2025-01-01",
  },
  {
    id: "67-3", name: "Valentino Open Sneaker", slug: "valentino-open-sneaker", description: "Calzado Valentino Open Sneaker. Tallas 36-40.",
    category: { id: "footwear", name: "Footwear", slug: "footwear", description: "", image: "" }, subcategory: "Streetwear",
    brand: "Valentino", price: 190000, stock: 2, images: ["/images/Valentino_open.jpeg"], featured: true, rating: 4.7, reviewsCount: 6,
    specifications: [{ label: "Marca", value: "Valentino" }, { label: "Modelo", value: "Open Sneaker" }], createdAt: "2025-01-01",
  },
  {
    id: "67-4", name: "Valentino V17n Bond", slug: "valentino-v17n-bond", description: "Calzado Valentino V17n Bond. Tallas 37-43.",
    category: { id: "footwear", name: "Footwear", slug: "footwear", description: "", image: "" }, subcategory: "Streetwear",
    brand: "Valentino", price: 210000, stock: 2, images: ["/images/valentino_v17n.jpeg"], featured: true, rating: 4.8, reviewsCount: 10,
    specifications: [{ label: "Marca", value: "Valentino" }, { label: "Modelo", value: "V17n Bond" }], createdAt: "2025-01-01",
  },
  {
    id: "68", name: "Under Armour Valsetz", slug: "under-armour-valsetz", description: "Calzado táctico Under Armour Valsetz. Tallas 36-44.",
    category: { id: "footwear", name: "Footwear", slug: "footwear", description: "", image: "" }, subcategory: "Outdoor",
    brand: "Under Armour", price: 230000, stock: 4, images: ["/images/under_armour.jpeg"], featured: false, rating: 4.6, reviewsCount: 19,
    specifications: [{ label: "Marca", value: "Under Armour" }, { label: "Modelo", value: "Valsetz" }], createdAt: "2025-01-01",
  },

  // 👕 Apparel (69-85) - Conjuntos deportivos
  {
    id: "69", name: "Puma 3508 Conjunto", slug: "puma-3508-conjunto", description: "Conjunto deportivo hombre Puma. Tallas XL-4XL.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Hombre",
    brand: "Puma", price: 150000, stock: 5, images: ["/images/puma_3508_conjunto.jpeg"], featured: false, rating: 4.2, reviewsCount: 8,
    specifications: [{ label: "Marca", value: "Puma" }, { label: "Modelo", value: "3508" }], createdAt: "2025-01-01",
  },
  {
    id: "70", name: "Nike N8805 Conjunto", slug: "nike-n8805-conjunto", description: "Conjunto deportivo hombre Nike. Tallas XL-4XL.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Hombre",
    brand: "Nike", price: 165000, stock: 5, images: ["/images/nike_n8805_conjunto.jpeg"], featured: true, rating: 4.4, reviewsCount: 14,
    specifications: [{ label: "Marca", value: "Nike" }, { label: "Modelo", value: "N8805" }], createdAt: "2025-01-01",
  },
  {
    id: "71", name: "ON Running 6976 Conjunto", slug: "on-running-6976-conjunto", description: "Conjunto deportivo hombre ON Running. Tallas XL-4XL.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Hombre",
    brand: "ON Running", price: 180000, stock: 4, images: ["/images/on_running_6976_conjunto.jpeg"], featured: true, rating: 4.6, reviewsCount: 11,
    specifications: [{ label: "Marca", value: "ON Running" }, { label: "Modelo", value: "6976" }], createdAt: "2025-01-01",
  },
  {
    id: "72", name: "Under Armour 6976 Conjunto", slug: "under-armour-6976-conjunto", description: "Conjunto deportivo hombre Under Armour. Tallas XL-4XL.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Hombre",
    brand: "Under Armour", price: 170000, stock: 4, images: ["/images/under_armour_6976_conjunto.jpeg"], featured: false, rating: 4.3, reviewsCount: 9,
    specifications: [{ label: "Marca", value: "Under Armour" }, { label: "Modelo", value: "6976" }], createdAt: "2025-01-01",
  },
  {
    id: "73", name: "Nike 6976 Conjunto", slug: "nike-6976-conjunto", description: "Conjunto deportivo hombre Nike. Tallas XL-4XL.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Hombre",
    brand: "Nike", price: 165000, stock: 5, images: ["/images/nike_6976_conjunto.jpeg"], featured: false, rating: 4.3, reviewsCount: 12,
    specifications: [{ label: "Marca", value: "Nike" }, { label: "Modelo", value: "6976" }], createdAt: "2025-01-01",
  },
  {
    id: "74", name: "Puma 3503 Conjunto", slug: "puma-3503-conjunto", description: "Conjunto deportivo hombre Puma. Tallas XL-4XL.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Hombre",
    brand: "Puma", price: 150000, stock: 5, images: ["/images/puma_3503_conjunto.jpeg"], featured: false, rating: 4.1, reviewsCount: 7,
    specifications: [{ label: "Marca", value: "Puma" }, { label: "Modelo", value: "3503" }], createdAt: "2025-01-01",
  },
  {
    id: "75", name: "Jordan 2333 Conjunto", slug: "jordan-2333-conjunto", description: "Conjunto deportivo hombre Jordan. Tallas XL-4XL.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Hombre",
    brand: "Jordan", price: 195000, stock: 3, images: ["/images/jordan_2333_conjunto.jpeg"], featured: true, rating: 4.7, reviewsCount: 16,
    specifications: [{ label: "Marca", value: "Jordan" }, { label: "Modelo", value: "2333" }], createdAt: "2025-01-01",
  },
  {
    id: "76", name: "Lacoste 2335 Conjunto", slug: "lacoste-2335-conjunto", description: "Conjunto deportivo hombre Lacoste. Tallas XL-4XL.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Hombre",
    brand: "Lacoste", price: 185000, stock: 3, images: ["/images/lacoste_2335_conjunto.jpeg"], featured: true, rating: 4.5, reviewsCount: 10,
    specifications: [{ label: "Marca", value: "Lacoste" }, { label: "Modelo", value: "2335" }], createdAt: "2025-01-01",
  },
  {
    id: "77", name: "Nike Conjunto Aqua/Negro", slug: "nike-conjunto-aqua-negro", description: "Conjunto deportivo mujer Nike color aqua/negro.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Mujer",
    brand: "Nike", price: 145000, stock: 5, images: ["/images/nike_aqua_negro.jpeg"], featured: false, rating: 4.4, reviewsCount: 8,
    specifications: [{ label: "Marca", value: "Nike" }, { label: "Género", value: "Mujer" }], createdAt: "2025-01-01",
  },
  {
    id: "78", name: "Nike Conjunto Rosa/Negro", slug: "nike-conjunto-rosa-negro", description: "Conjunto deportivo mujer Nike color rosa/negro.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Mujer",
    brand: "Nike", price: 145000, stock: 5, images: ["/images/nike_rosa_negro.jpeg"], featured: false, rating: 4.3, reviewsCount: 9,
    specifications: [{ label: "Marca", value: "Nike" }, { label: "Género", value: "Mujer" }], createdAt: "2025-01-01",
  },
  {
    id: "79", name: "Nike Conjunto Verde/Negro", slug: "nike-conjunto-verde-negro", description: "Conjunto deportivo mujer Nike color verde/negro.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Mujer",
    brand: "Nike", price: 145000, stock: 5, images: ["/images/nike_verde_negro.jpeg"], featured: false, rating: 4.3, reviewsCount: 7,
    specifications: [{ label: "Marca", value: "Nike" }, { label: "Género", value: "Mujer" }], createdAt: "2025-01-01",
  },
  {
    id: "80", name: "Nike H-89 Conjunto Dama", slug: "nike-h-89-conjunto-dama", description: "Conjunto deportivo mujer Nike H-89 disponible en 6 colores.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Mujer",
    brand: "Nike", price: 150000, stock: 10, images: ["/images/nike_h_89_conjunto_dama.jpeg"], featured: true, rating: 4.5, reviewsCount: 15,
    specifications: [{ label: "Marca", value: "Nike" }, { label: "Modelo", value: "H-89" }], createdAt: "2025-01-01",
  },
  {
    id: "81", name: "Adidas H-685 Conjunto Dama", slug: "adidas-h-685-conjunto-dama", description: "Conjunto deportivo mujer Adidas H-685 disponible en 6 colores.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Mujer",
    brand: "Adidas", price: 150000, stock: 10, images: ["/images/adidas_h_685_conjunto_dama.jpeg"], featured: true, rating: 4.4, reviewsCount: 13,
    specifications: [{ label: "Marca", value: "Adidas" }, { label: "Modelo", value: "H-685" }], createdAt: "2025-01-01",
  },
  {
    id: "82", name: "Nike H-88 Conjunto Dama", slug: "nike-h-88-conjunto-dama", description: "Conjunto deportivo mujer Nike H-88 disponible en 6 colores.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Mujer",
    brand: "Nike", price: 150000, stock: 10, images: ["/images/nike_h_88_conjunto_dama.jpeg"], featured: false, rating: 4.4, reviewsCount: 11,
    specifications: [{ label: "Marca", value: "Nike" }, { label: "Modelo", value: "H-88" }], createdAt: "2025-01-01",
  },
  {
    id: "83", name: "Adidas 3 Franjas Lila", slug: "adidas-3-franjas-lila", description: "Conjunto deportivo mujer Adidas 3 franjas color lila.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Mujer",
    brand: "Adidas", price: 140000, stock: 5, images: ["/images/adidas_3_franjas_lila.jpeg"], featured: false, rating: 4.2, reviewsCount: 6,
    specifications: [{ label: "Marca", value: "Adidas" }, { label: "Género", value: "Mujer" }], createdAt: "2025-01-01",
  },
  {
    id: "84", name: "Adidas 3 Franjas Verde", slug: "adidas-3-franjas-verde", description: "Conjunto deportivo mujer Adidas 3 franjas color verde.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Mujer",
    brand: "Adidas", price: 140000, stock: 5, images: ["/images/adidas_3_franjas_verde.jpeg"], featured: false, rating: 4.2, reviewsCount: 5,
    specifications: [{ label: "Marca", value: "Adidas" }, { label: "Género", value: "Mujer" }], createdAt: "2025-01-01",
  },
  {
    id: "85", name: "Adidas 3 Franjas Teal", slug: "adidas-3-franjas-teal", description: "Conjunto deportivo mujer Adidas 3 franjas color teal.",
    category: { id: "apparel", name: "Apparel", slug: "apparel", description: "", image: "" }, subcategory: "Mujer",
    brand: "Adidas", price: 140000, stock: 5, images: ["/images/adidas_3_franjas_teal.jpeg"], featured: false, rating: 4.1, reviewsCount: 5,
    specifications: [{ label: "Marca", value: "Adidas" }, { label: "Género", value: "Mujer" }], createdAt: "2025-01-01",
  },

  // 🛏️ Sábanas Star Home (86-99)
  {
    id: "86", name: "Star Home Sábana 100% Algodón", slug: "star-home-sabana-algodon", description: "Juego de sábanas Star Home 100% algodón 320 hilos. Estampado azul marino + cuadros terracota.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 10, images: ["/images/star_home_sabana_algodon.jpeg"], featured: false, rating: 4.5, reviewsCount: 22,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }, { label: "Tallas", value: "Sencillo/Semidoble/Doble" }], createdAt: "2025-01-01",
  },
  {
    id: "87", name: "Star Home Sábana Puntos Azul", slug: "star-home-sabana-puntos-azul", description: "Juego de sábanas Star Home con estampado de puntos azul claro sobre fondo blanco.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_puntos_azul.jpeg"], featured: false, rating: 4.4, reviewsCount: 16,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }], createdAt: "2025-01-01",
  },
  {
    id: "88", name: "Star Home Sábana Ondas Grises", slug: "star-home-sabana-ondas-grises", description: "Juego de sábanas Star Home con estampado de ondas grises/beige.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_ondas_grises.jpeg"], featured: false, rating: 4.3, reviewsCount: 14,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }], createdAt: "2025-01-01",
  },
  {
    id: "89", name: "Star Home Sábana Dorado Óvalos", slug: "star-home-sabana-dorado-ovalos", description: "Juego de sábanas Star Home con estampado dorado con óvalos negros.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_dorado_ovalos.jpeg"], featured: true, rating: 4.6, reviewsCount: 20,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }], createdAt: "2025-01-01",
  },
  {
    id: "90", name: "Star Home Sábana Estrellas", slug: "star-home-sabana-estrellas", description: "Juego de sábanas Star Home con estampado de estrellas azul marino/amarillo.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_estrellas.jpeg"], featured: false, rating: 4.4, reviewsCount: 17,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }], createdAt: "2025-01-01",
  },
  {
    id: "91", name: "Star Home Sábana Círculos Grises", slug: "star-home-sabana-circulos-grises", description: "Juego de sábanas Star Home con estampado de círculos grises/azul sobre fondo beige.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_circulos_grises.jpeg"], featured: false, rating: 4.2, reviewsCount: 12,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }], createdAt: "2025-01-01",
  },
  {
    id: "92", name: "Star Home Sábana Geométrico Multicolor", slug: "star-home-sabana-geometrico-multicolor", description: "Juego de sábanas Star Home con estampado geométrico multicolor estilo pop art.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_geometrico_multi.jpeg"], featured: true, rating: 4.7, reviewsCount: 24,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }], createdAt: "2025-01-01",
  },
  {
    id: "93", name: "Star Home Sábana Líneas Camel", slug: "star-home-sabana-lineas-camel", description: "Juego de sábanas Star Home con estampado de líneas camel/azul marino.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_lineas_camel.jpeg"], featured: false, rating: 4.3, reviewsCount: 15,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }], createdAt: "2025-01-01",
  },
  {
    id: "94", name: "Star Home Sábana Hojas Verdes", slug: "star-home-sabana-hojas-verdes", description: "Juego de sábanas Star Home con estampado de hojas verdes y círculos sobre fondo blanco.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_hojas_verdes.jpeg"], featured: false, rating: 4.4, reviewsCount: 13,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }], createdAt: "2025-01-01",
  },
  {
    id: "95", name: "Star Home Sábana Geométrico Azul/Rosa", slug: "star-home-sabana-geometrico-azul-rosa", description: "Juego de sábanas Star Home con estampado geométrico azul/rosa/verde.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_geometrico_azul_rosa.jpeg"], featured: false, rating: 4.3, reviewsCount: 11,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }], createdAt: "2025-01-01",
  },
  {
    id: "96", name: "Star Home Sábana Floral Lila", slug: "star-home-sabana-floral-lila", description: "Juego de sábanas Star Home con estampado floral lila/morado sobre fondo blanco.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_floral_lila.jpeg"], featured: true, rating: 4.5, reviewsCount: 19,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }], createdAt: "2025-01-01",
  },
  {
    id: "97", name: "Star Home Sábana Círculos Grises Líneas", slug: "star-home-sabana-circulos-grises-lineas", description: "Juego de sábanas Star Home con estampado de círculos grises y líneas blancas.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_circulos_grises_lineas.jpeg"], featured: false, rating: 4.2, reviewsCount: 10,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }], createdAt: "2025-01-01",
  },
  {
    id: "98", name: "Star Home Sábana Ondas Beige/Gris", slug: "star-home-sabana-ondas-beige-gris", description: "Juego de sábanas Star Home con estampado de ondas beige/gris.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_ondas_beige_gris.jpeg"], featured: false, rating: 4.1, reviewsCount: 9,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }], createdAt: "2025-01-01",
  },
  {
    id: "99", name: "Star Home Sábana Colección Completa", slug: "star-home-sabana-coleccion", description: "Juego de sábanas Star Home 100% algodón con diseño exclusivo.",
    category: { id: "bedding", name: "Hogar", slug: "hogar", description: "", image: "" }, subcategory: "Sábanas",
    brand: "Star Home", price: 149000, salePrice: 149000, stock: 8, images: ["/images/star_home_sabana_coleccion.jpeg"], featured: true, rating: 4.6, reviewsCount: 21,
    specifications: [{ label: "Material", value: "100% Algodón" }, { label: "Hilos", value: "320" }, { label: "Precio promoción", value: "$149.000 (original $340.000)" }], createdAt: "2025-01-01",
  },
]

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category.slug === categorySlug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.name.toLowerCase().includes(q)
  )
}

export function getProductsByCategoryGroup(slug: string): Product[] {
  const categoryGroups: Record<string, string[]> = {
    "tech-gadgets": ["audio", "cables-cargadores", "power-banks", "accesorios", "consolas-entretenimiento"],
    "gear-essentials": ["apparel", "hogar"],
  }
  const slugs = categoryGroups[slug]
  if (!slugs) return getProductsByCategory(slug)
  return products.filter((p) => slugs.includes(p.category.slug))
}
