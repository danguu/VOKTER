import "dotenv/config"
import { PrismaClient } from "../generated/prisma/client.js"
import { PrismaPg } from "@prisma/adapter-pg"
import * as bcrypt from "bcryptjs"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

type ProductSeed = {
  id: string
  name: string
  slug: string
  description: string
  categoryId: string
  brand: string
  price: number
  salePrice?: number
  stock: number
  featured: boolean
  rating: number
  images: string[]
  createdAt: string
}

const productsData: ProductSeed[] = [
  {
    "id": "1",
    "name": "Music Colores",
    "slug": "music-colores",
    "description": "Manos libres con conector 3.5mm, compatible con la mayoría de dispositivos. Diseño colorido y compacto.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 5320,
    "stock": 50,
    "featured": false,
    "rating": 4,
    "images": [
      "/images/music_colores.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "2",
    "name": "W-01",
    "slug": "w-01",
    "description": "Manos libres 3.5mm con diseño ergonómico y micrófono integrado.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 5320,
    "stock": 45,
    "featured": false,
    "rating": 3.8,
    "images": [
      "/images/w_01.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "3",
    "name": "Z1",
    "slug": "z1",
    "description": "Auriculares manos libres 3.5mm con control de llamadas.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 4900,
    "stock": 60,
    "featured": false,
    "rating": 3.9,
    "images": [
      "/images/z1.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "4",
    "name": "Samsung AKG",
    "slug": "samsung-akg",
    "description": "Auriculares AKG originales Samsung con conector 3.5mm. Sonido de alta calidad.",
    "categoryId": "audio",
    "brand": "Samsung",
    "price": 5040,
    "stock": 30,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/samsung_akg.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "5",
    "name": "Balaca Pro Air",
    "slug": "balaca-pro-air",
    "description": "Balaca Bluetooth de oreja abierta. Diseño ergonómico y sonido envolvente.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 49000,
    "stock": 25,
    "featured": true,
    "rating": 4.5,
    "images": [
      "/images/balaca_pro_air.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "6",
    "name": "Balaca Air Max Imantada",
    "slug": "balaca-air-max-imantada",
    "description": "Balaca Bluetooth over-ear con diseño imantado plegable.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 49000,
    "stock": 20,
    "featured": true,
    "rating": 4.4,
    "images": [
      "/images/balaca_air_max_imantada.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "7",
    "name": "Balaca Gamer",
    "slug": "balaca-gamer",
    "description": "Diadema gamer con micrófono y sonido envolvente. Ideal para gaming.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 88200,
    "stock": 15,
    "featured": false,
    "rating": 4.6,
    "images": [
      "/images/balaca_gamer.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "8",
    "name": "Sony MDR XB450",
    "slug": "sony-mdr-xb450",
    "description": "Diadema Sony con extra bajos. Conector 3.5mm.",
    "categoryId": "audio",
    "brand": "Sony",
    "price": 20300,
    "stock": 18,
    "featured": false,
    "rating": 4.2,
    "images": [
      "/images/sony_mdr_xb450.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "9",
    "name": "N65BT",
    "slug": "n65bt",
    "description": "Diadema Bluetooth inalámbrica con sonido de alta fidelidad.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 44800,
    "stock": 12,
    "featured": false,
    "rating": 4.1,
    "images": [
      "/images/n65bt.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "10",
    "name": "Sony Bluetooth 450 BT",
    "slug": "sony-bluetooth-450-bt",
    "description": "Diadema Bluetooth Sony con cancelación de ruido pasiva.",
    "categoryId": "audio",
    "brand": "Sony",
    "price": 35000,
    "stock": 10,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/sony_bt_450.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "11",
    "name": "P9 Tipo Apple",
    "slug": "p9-tipo-apple",
    "description": "Diadema Bluetooth estilo Apple con diseño premium y sonido envolvente.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 72800,
    "stock": 8,
    "featured": true,
    "rating": 4.7,
    "images": [
      "/images/p9_tipo_apple.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "12",
    "name": "Airpods Max",
    "slug": "airpods-max",
    "description": "Diadema Bluetooth premium con sonido de alta resolución.",
    "categoryId": "audio",
    "brand": "Apple",
    "price": 72800,
    "stock": 5,
    "featured": true,
    "rating": 4.8,
    "images": [
      "/images/airpods_max.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "13",
    "name": "ZON-35",
    "slug": "zon-35",
    "description": "Cuellera Bluetooth con diseño ergonómico y sonido de calidad.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 25200,
    "stock": 22,
    "featured": false,
    "rating": 4,
    "images": [
      "/images/zon_35.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "14",
    "name": "F-20",
    "slug": "f-20",
    "description": "Auriculares de conducción ósea Bluetooth. Escucha sin tapar tus oídos.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 53200,
    "stock": 10,
    "featured": true,
    "rating": 4.4,
    "images": [
      "/images/f_20.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "15",
    "name": "F805",
    "slug": "f805",
    "description": "Auriculares de conducción ósea Bluetooth premium.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 56000,
    "stock": 8,
    "featured": false,
    "rating": 4.5,
    "images": [
      "/images/f805.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "16",
    "name": "S410",
    "slug": "s410",
    "description": "Parlante Bluetooth portátil con sonido potente.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 53200,
    "stock": 15,
    "featured": false,
    "rating": 4.1,
    "images": [
      "/images/s410.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "17",
    "name": "S430",
    "slug": "s430",
    "description": "Parlante Bluetooth portátil con sonido envolvente.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 105000,
    "stock": 10,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/s430.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "18",
    "name": "FL828",
    "slug": "fl828",
    "description": "Parlante Bluetooth recargable con batería de larga duración.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 119000,
    "stock": 7,
    "featured": true,
    "rating": 4.6,
    "images": [
      "/images/fl828.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "19",
    "name": "S640",
    "slug": "s640",
    "description": "Parlante Bluetooth portátil compacto.",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 18200,
    "stock": 25,
    "featured": false,
    "rating": 3.9,
    "images": [
      "/images/s640.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "20",
    "name": "S520",
    "slug": "s520",
    "description": "Parlante Bluetooth 12\\",
    "categoryId": "audio",
    "brand": "Vokter",
    "price": 119000,
    "stock": 6,
    "featured": true,
    "rating": 4.7,
    "images": [
      "/images/s520.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "21",
    "name": "PX-214",
    "slug": "px-214",
    "description": "Cable USB Tipo C 120W para carga rápida.",
    "categoryId": "cables-chargers",
    "brand": "Vokter",
    "price": 11900,
    "stock": 40,
    "featured": false,
    "rating": 4.2,
    "images": [
      "/images/px_214.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "22",
    "name": "PX-400",
    "slug": "px-400",
    "description": "Cable 2 en 1 Tipo C + Lightning. Dos dispositivos en un solo cable.",
    "categoryId": "cables-chargers",
    "brand": "Vokter",
    "price": 19320,
    "stock": 35,
    "featured": false,
    "rating": 4.4,
    "images": [
      "/images/px_400.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "23a",
    "name": "Xiaomi Tipo C",
    "slug": "xiaomi-tipo-c",
    "description": "Cable USB Tipo C 2A de carga y datos.",
    "categoryId": "cables-chargers",
    "brand": "Xiaomi",
    "price": 4900,
    "stock": 50,
    "featured": false,
    "rating": 4,
    "images": [
      "/images/xiaomi_tipo_c.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "24",
    "name": "Cable RCA 2x1",
    "slug": "cable-rca-2x1",
    "description": "Cable de audio RCA 1.5 metros.",
    "categoryId": "cables-chargers",
    "brand": "Vokter",
    "price": 6300,
    "stock": 30,
    "featured": false,
    "rating": 3.8,
    "images": [
      "/images/cable_rca_2x1.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "25",
    "name": "C209",
    "slug": "c209",
    "description": "Cargador plugin para carro 5A. Carga rápida dual.",
    "categoryId": "cables-chargers",
    "brand": "Vokter",
    "price": 10500,
    "stock": 30,
    "featured": false,
    "rating": 4.1,
    "images": [
      "/images/c209.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "26",
    "name": "KLJ-15 (Ainocel)",
    "slug": "klj-15-ainocel",
    "description": "Cargador plugin carro 38W con puerto USB.",
    "categoryId": "cables-chargers",
    "brand": "Ainocel",
    "price": 13300,
    "stock": 25,
    "featured": false,
    "rating": 4.2,
    "images": [
      "/images/klj_15_ainocel.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "27",
    "name": "R-01 (Ainocel)",
    "slug": "r-01-ainocel",
    "description": "Cargador plugin carro 67W PD con carga rápida Power Delivery.",
    "categoryId": "cables-chargers",
    "brand": "Ainocel",
    "price": 18200,
    "stock": 20,
    "featured": true,
    "rating": 4.5,
    "images": [
      "/images/r_01_ainocel.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "28",
    "name": "CG-06 Technomaster",
    "slug": "cg-06-technomaster",
    "description": "Cargador Tipo C 4.5A para carga rápida.",
    "categoryId": "cables-chargers",
    "brand": "Technomaster",
    "price": 12600,
    "stock": 35,
    "featured": false,
    "rating": 4,
    "images": [
      "/images/cg_06_technomaster.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "29",
    "name": "CG-16",
    "slug": "cg-16",
    "description": "Cargador Tipo C Quick Charge 3A.",
    "categoryId": "cables-chargers",
    "brand": "Vokter",
    "price": 8120,
    "stock": 40,
    "featured": false,
    "rating": 3.9,
    "images": [
      "/images/cg_16.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "30",
    "name": "Mi 25W PD Adapter",
    "slug": "mi-25w-pd-adapter",
    "description": "Cargador Xiaomi 25W Tipo C con Power Delivery.",
    "categoryId": "cables-chargers",
    "brand": "Xiaomi",
    "price": 22400,
    "stock": 20,
    "featured": false,
    "rating": 4.4,
    "images": [
      "/images/mi_25w_pd_adapter.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "31",
    "name": "Mi 67W PD Adapter",
    "slug": "mi-67w-pd-adapter",
    "description": "Cargador Xiaomi 67W Tipo C con carga ultra rápida.",
    "categoryId": "cables-chargers",
    "brand": "Xiaomi",
    "price": 28000,
    "stock": 18,
    "featured": true,
    "rating": 4.7,
    "images": [
      "/images/mi_67w_pd_adapter.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "32",
    "name": "Xiaomi 67W Kit",
    "slug": "xiaomi-67w-kit",
    "description": "Cargador Tipo C 67W + cable incluido. Kit completo de carga rápida.",
    "categoryId": "cables-chargers",
    "brand": "Xiaomi",
    "price": 30800,
    "stock": 15,
    "featured": true,
    "rating": 4.8,
    "images": [
      "/images/xiaomi_67w_kit.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "33",
    "name": "CG-09 20W",
    "slug": "cg-09-20w",
    "description": "Cargador 4A 20W Tipo C compacto.",
    "categoryId": "cables-chargers",
    "brand": "Vokter",
    "price": 9800,
    "stock": 35,
    "featured": false,
    "rating": 4,
    "images": [
      "/images/cg_09_20w.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "34",
    "name": "Cabeza iPhone 25W",
    "slug": "cabeza-iphone-25w",
    "description": "Cargador iPhone USB-C 25W original.",
    "categoryId": "cables-chargers",
    "brand": "Apple",
    "price": 12600,
    "stock": 25,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/cabeza_iphone_25w.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "35",
    "name": "Cargador 25W Tipo C iPhone",
    "slug": "cargador-25w-tipo-c-iphone",
    "description": "Cargador iPhone 25W + cable incluido.",
    "categoryId": "cables-chargers",
    "brand": "Apple",
    "price": 21000,
    "stock": 20,
    "featured": false,
    "rating": 4.4,
    "images": [
      "/images/cargador_25w_tipo_c.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "36",
    "name": "RN04 Quick-Snap",
    "slug": "rn04-quick-snap",
    "description": "Holder carro con chupa imán de fijación rápida.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 14000,
    "stock": 30,
    "featured": false,
    "rating": 4.1,
    "images": [
      "/images/rn04_quick_snap.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "37",
    "name": "H-022 D&D",
    "slug": "h-022-dd",
    "description": "Holder carro Easy Touch con sujeción segura.",
    "categoryId": "accessories",
    "brand": "D&D",
    "price": 13300,
    "stock": 28,
    "featured": false,
    "rating": 4,
    "images": [
      "/images/h_022_dd.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "38",
    "name": "Soporte Moto Manubrio",
    "slug": "soporte-moto-manubrio",
    "description": "Soporte impermeable para moto, fijación al manubrio.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 18200,
    "stock": 15,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/soporte_moto_manubrio.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "39",
    "name": "XL+M3 Soporte Moto Espejo",
    "slug": "xl-m3-soporte-moto-espejo",
    "description": "Soporte para moto con fijación al espejo retrovisor.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 18200,
    "stock": 12,
    "featured": false,
    "rating": 4.2,
    "images": [
      "/images/xl_m3_soporte_moto_espejo.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "40",
    "name": "H-73 Soporte Moto Manubrio 360°",
    "slug": "h-73-soporte-moto-360",
    "description": "Soporte moto manubrio con rotación 360°.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 21000,
    "stock": 10,
    "featured": false,
    "rating": 4.4,
    "images": [
      "/images/h_73_soporte_moto_360.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "41",
    "name": "K9 Wireless Microphone",
    "slug": "k9-wireless-microphone",
    "description": "Micrófono inalámbrico con alcance amplio y sonido claro.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 35000,
    "stock": 12,
    "featured": false,
    "rating": 4.1,
    "images": [
      "/images/k9_wireless_microphone.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "42",
    "name": "A-150 Keychain Mini Powerbank",
    "slug": "a-150-keychain-mini-powerbank",
    "description": "Power Bank llavero de 2.300 mAh. Carga de emergencia portátil.",
    "categoryId": "power-banks",
    "brand": "Vokter",
    "price": 18200,
    "stock": 30,
    "featured": false,
    "rating": 4,
    "images": [
      "/images/a_150_keychain_powerbank.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "43",
    "name": "iPhone Battery Pack MagSafe",
    "slug": "iphone-battery-pack-magsafe",
    "description": "Power Bank 5.000 mAh con carga MagSafe para iPhone.",
    "categoryId": "power-banks",
    "brand": "Apple",
    "price": 63000,
    "stock": 10,
    "featured": true,
    "rating": 4.6,
    "images": [
      "/images/iphone_battery_magsafe.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "44",
    "name": "Ametech Power Bank 10.000 mAh",
    "slug": "ametech-power-bank-10000",
    "description": "Power Bank 10.000 mAh con carga rápida.",
    "categoryId": "power-banks",
    "brand": "Ametech",
    "price": 63000,
    "stock": 15,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/ametech_powerbank_10000.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "45",
    "name": "WiWU Power Bank 20.000 mAh",
    "slug": "wiwu-power-bank-20000",
    "description": "Power Bank 20.000 mAh de alta capacidad para múltiples cargas.",
    "categoryId": "power-banks",
    "brand": "WiWU",
    "price": 77000,
    "stock": 8,
    "featured": true,
    "rating": 4.5,
    "images": [
      "/images/wiwu_powerbank_20000.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "46",
    "name": "Mouse Inalámbrico Optical 1600DPI",
    "slug": "mouse-inalambrico-1600dpi",
    "description": "Mouse inalámbrico 2.4GHz con sensor óptico de 1600 DPI.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 16800,
    "stock": 25,
    "featured": false,
    "rating": 4,
    "images": [
      "/images/mouse_inalambrico_1600dpi.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "47",
    "name": "SJ-100 Mouse Alámbrico",
    "slug": "sj-100-mouse-alambrico",
    "description": "Mouse alámbrico USB económico y funcional.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 7700,
    "stock": 35,
    "featured": false,
    "rating": 3.8,
    "images": [
      "/images/sj_100_mouse_alambrico.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "48",
    "name": "Combo Gamer T25",
    "slug": "combo-gamer-t25",
    "description": "Combo teclado + mouse gamer con iluminación LED.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 63000,
    "stock": 10,
    "featured": true,
    "rating": 4.4,
    "images": [
      "/images/combo_gamer_t25.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "49",
    "name": "FC-530 Weibo Teclado Cable",
    "slug": "fc-530-weibo-teclado-cable",
    "description": "Teclado alámbrico USB con diseño ergonómico.",
    "categoryId": "accessories",
    "brand": "Weibo",
    "price": 18200,
    "stock": 20,
    "featured": false,
    "rating": 4.1,
    "images": [
      "/images/fc_530_weibo_teclado.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "50",
    "name": "Logitech MK220",
    "slug": "logitech-mk220",
    "description": "Teclado + mouse inalámbrico Logitech. Set completo.",
    "categoryId": "accessories",
    "brand": "Logitech",
    "price": 77000,
    "stock": 8,
    "featured": true,
    "rating": 4.6,
    "images": [
      "/images/logitech_mk220.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "51",
    "name": "Consola Blanca Verde Retro",
    "slug": "consola-blanca-verde-retro",
    "description": "Consola retro inalámbrica con juegos integrados.",
    "categoryId": "consoles",
    "brand": "Vokter",
    "price": 105000,
    "stock": 5,
    "featured": false,
    "rating": 4.2,
    "images": [
      "/images/consola_blanca_verde_retro.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "52",
    "name": "Proyector con Juegos",
    "slug": "proyector-con-juegos",
    "description": "Proyector + consola + mandos incluidos. Diversión en grande.",
    "categoryId": "consoles",
    "brand": "Vokter",
    "price": 259000,
    "stock": 3,
    "featured": true,
    "rating": 4.7,
    "images": [
      "/images/proyector_con_juegos.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "53",
    "name": "Android TV Stick",
    "slug": "android-tv-stick",
    "description": "TV Stick Android 4K para convertir tu TV en Smart TV.",
    "categoryId": "consoles",
    "brand": "Vokter",
    "price": 77000,
    "stock": 10,
    "featured": false,
    "rating": 4.1,
    "images": [
      "/images/android_tv_stick.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "54",
    "name": "Watch One (ONN Google TV)",
    "slug": "watch-one-onn-google-tv",
    "description": "TV Stick Google TV con sistema operativo Android.",
    "categoryId": "consoles",
    "brand": "ONN",
    "price": 112000,
    "stock": 7,
    "featured": true,
    "rating": 4.5,
    "images": [
      "/images/onn_google_tv_stick.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "55",
    "name": "Space Collection",
    "slug": "space-collection",
    "description": "Funda transparente antiácida para iPhone/Android.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 4200,
    "stock": 50,
    "featured": false,
    "rating": 4,
    "images": [
      "/images/space_collection.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "56",
    "name": "Silicon iPhone",
    "slug": "silicon-iphone",
    "description": "Funda silicona para iPhone 11/12/14 Plus.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 6300,
    "stock": 40,
    "featured": false,
    "rating": 4.1,
    "images": [
      "/images/silicon_iphone.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "57",
    "name": "Silicon Android",
    "slug": "silicon-android",
    "description": "Funda silicona para Samsung/Redmi/Motorola.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 7000,
    "stock": 45,
    "featured": false,
    "rating": 3.9,
    "images": [
      "/images/silicon_android.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "58",
    "name": "Samsung Lujo",
    "slug": "samsung-lujo",
    "description": "Funda lujo para Samsung con diseño premium.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 16800,
    "stock": 20,
    "featured": false,
    "rating": 4.2,
    "images": [
      "/images/samsung_lujo.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "59",
    "name": "Protector Air Pods",
    "slug": "protector-air-pods",
    "description": "Protector para AirPods con diseño de figuras.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 9800,
    "stock": 30,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/protector_air_pods.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "60",
    "name": "Protector de Cargador",
    "slug": "protector-de-cargador",
    "description": "Protector para cabeza de cargador con diseño de figuras.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 9800,
    "stock": 30,
    "featured": false,
    "rating": 3.9,
    "images": [
      "/images/protector_cargador.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "61",
    "name": "Multipuerto USB 3.0",
    "slug": "multipuerto-usb-30",
    "description": "Hub USB multipuerto 3.0 con 4 puertos.",
    "categoryId": "accessories",
    "brand": "Vokter",
    "price": 27300,
    "stock": 15,
    "featured": false,
    "rating": 4.1,
    "images": [
      "/images/multipuerto_usb_30.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "62",
    "name": "Antena TDT 5M",
    "slug": "antena-tdt-5m",
    "description": "Antena TDT interior para televisión digital.",
    "categoryId": "consoles",
    "brand": "Vokter",
    "price": 21000,
    "stock": 12,
    "featured": false,
    "rating": 3.8,
    "images": [
      "/images/antena_tdt_5m.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "63",
    "name": "Codificador TDT HDTV",
    "slug": "codificador-tdt-hdtv",
    "description": "Decodificador TDT para televisión digital HD.",
    "categoryId": "consoles",
    "brand": "Vokter",
    "price": 67200,
    "stock": 8,
    "featured": false,
    "rating": 4,
    "images": [
      "/images/codificador_tdt_hdtv.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "65-1-v1",
    "name": "LV Skate Sneakers",
    "slug": "lv-skate-sneakers",
    "description": "Calzado Louis Vuitton unisex. Tallas 35-43.",
    "categoryId": "footwear",
    "brand": "Louis Vuitton",
    "price": 270000,
    "stock": 3,
    "featured": true,
    "rating": 4.9,
    "images": [
      "/images/lv_skate.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "65-2",
    "name": "LV Trainer",
    "slug": "lv-trainer",
    "description": "Calzado Louis Vuitton Trainer. Tallas 35-44.",
    "categoryId": "footwear",
    "brand": "Louis Vuitton",
    "price": 180000,
    "stock": 3,
    "featured": true,
    "rating": 4.8,
    "images": [
      "/images/lv_trainer.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "65-3",
    "name": "LV Archlight Trainer",
    "slug": "lv-archlight-trainer",
    "description": "Calzado Louis Vuitton Archlight. Tallas 36-40.",
    "categoryId": "footwear",
    "brand": "Louis Vuitton",
    "price": 270000,
    "stock": 2,
    "featured": true,
    "rating": 4.7,
    "images": [
      "/images/archlight_trainer.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "66-1",
    "name": "Hoka Clifton 10",
    "slug": "hoka-clifton-10",
    "description": "Calzado Hoka Clifton 10. Tallas 36-44.",
    "categoryId": "footwear",
    "brand": "Hoka",
    "price": 240000,
    "stock": 4,
    "featured": true,
    "rating": 4.8,
    "images": [
      "/images/hoka_clifton.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "66-2",
    "name": "Hoka Bondi 9",
    "slug": "hoka-bondi-9",
    "description": "Calzado Hoka Bondi 9. Tallas 36-44.",
    "categoryId": "footwear",
    "brand": "Hoka",
    "price": 270000,
    "stock": 3,
    "featured": true,
    "rating": 4.9,
    "images": [
      "/images/hoka_bondi.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "66-3",
    "name": "Hoka Skyflow",
    "slug": "hoka-skyflow",
    "description": "Calzado Hoka Skyflow. Tallas 37-42.",
    "categoryId": "footwear",
    "brand": "Hoka",
    "price": 270000,
    "stock": 3,
    "featured": false,
    "rating": 4.6,
    "images": [
      "/images/hoka_skyflow.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "66-4",
    "name": "Hoka Gaviota",
    "slug": "hoka-gaviota",
    "description": "Calzado Hoka Gaviota. Tallas 36-44.",
    "categoryId": "footwear",
    "brand": "Hoka",
    "price": 260000,
    "stock": 2,
    "featured": false,
    "rating": 4.5,
    "images": [
      "/images/hoka_gaviota.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "67-1",
    "name": "Skechers Mocasín",
    "slug": "skechers-mocasin",
    "description": "Calzado Skechers estilo mocasín. Tallas 37-41.",
    "categoryId": "footwear",
    "brand": "Skechers",
    "price": 210000,
    "stock": 5,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/skechers_mocasin.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "67-2",
    "name": "Valentino Garavani Diamante",
    "slug": "valentino-garavani-diamante",
    "description": "Calzado Valentino Garavani con detalles diamante. Tallas 36-43.",
    "categoryId": "footwear",
    "brand": "Valentino",
    "price": 170000,
    "stock": 2,
    "featured": true,
    "rating": 4.9,
    "images": [
      "/images/valentino_diamante.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "67-3",
    "name": "Valentino Open Sneaker",
    "slug": "valentino-open-sneaker",
    "description": "Calzado Valentino Open Sneaker. Tallas 36-40.",
    "categoryId": "footwear",
    "brand": "Valentino",
    "price": 190000,
    "stock": 2,
    "featured": true,
    "rating": 4.7,
    "images": [
      "/images/Valentino_open.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "67-4",
    "name": "Valentino V17n Bond",
    "slug": "valentino-v17n-bond",
    "description": "Calzado Valentino V17n Bond. Tallas 37-43.",
    "categoryId": "footwear",
    "brand": "Valentino",
    "price": 210000,
    "stock": 2,
    "featured": true,
    "rating": 4.8,
    "images": [
      "/images/valentino_v17n.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "68",
    "name": "Under Armour Valsetz",
    "slug": "under-armour-valsetz",
    "description": "Calzado táctico Under Armour Valsetz. Tallas 36-44.",
    "categoryId": "footwear",
    "brand": "Under Armour",
    "price": 230000,
    "stock": 4,
    "featured": false,
    "rating": 4.6,
    "images": [
      "/images/under_armour.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "69",
    "name": "Puma 3508 Conjunto",
    "slug": "puma-3508-conjunto",
    "description": "Conjunto deportivo hombre Puma. Tallas XL-4XL.",
    "categoryId": "apparel",
    "brand": "Puma",
    "price": 150000,
    "stock": 5,
    "featured": false,
    "rating": 4.2,
    "images": [
      "/images/puma_3508_conjunto.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "70",
    "name": "Nike N8805 Conjunto",
    "slug": "nike-n8805-conjunto",
    "description": "Conjunto deportivo hombre Nike. Tallas XL-4XL.",
    "categoryId": "apparel",
    "brand": "Nike",
    "price": 165000,
    "stock": 5,
    "featured": true,
    "rating": 4.4,
    "images": [
      "/images/nike_n8805_conjunto.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "71",
    "name": "ON Running 6976 Conjunto",
    "slug": "on-running-6976-conjunto",
    "description": "Conjunto deportivo hombre ON Running. Tallas XL-4XL.",
    "categoryId": "apparel",
    "brand": "ON Running",
    "price": 180000,
    "stock": 4,
    "featured": true,
    "rating": 4.6,
    "images": [
      "/images/on_running_6976_conjunto.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "72",
    "name": "Under Armour 6976 Conjunto",
    "slug": "under-armour-6976-conjunto",
    "description": "Conjunto deportivo hombre Under Armour. Tallas XL-4XL.",
    "categoryId": "apparel",
    "brand": "Under Armour",
    "price": 170000,
    "stock": 4,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/under_armour_6976_conjunto.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "73",
    "name": "Nike 6976 Conjunto",
    "slug": "nike-6976-conjunto",
    "description": "Conjunto deportivo hombre Nike. Tallas XL-4XL.",
    "categoryId": "apparel",
    "brand": "Nike",
    "price": 165000,
    "stock": 5,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/nike_6976_conjunto.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "74",
    "name": "Puma 3503 Conjunto",
    "slug": "puma-3503-conjunto",
    "description": "Conjunto deportivo hombre Puma. Tallas XL-4XL.",
    "categoryId": "apparel",
    "brand": "Puma",
    "price": 150000,
    "stock": 5,
    "featured": false,
    "rating": 4.1,
    "images": [
      "/images/puma_3503_conjunto.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "75",
    "name": "Jordan 2333 Conjunto",
    "slug": "jordan-2333-conjunto",
    "description": "Conjunto deportivo hombre Jordan. Tallas XL-4XL.",
    "categoryId": "apparel",
    "brand": "Jordan",
    "price": 195000,
    "stock": 3,
    "featured": true,
    "rating": 4.7,
    "images": [
      "/images/jordan_2333_conjunto.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "76",
    "name": "Lacoste 2335 Conjunto",
    "slug": "lacoste-2335-conjunto",
    "description": "Conjunto deportivo hombre Lacoste. Tallas XL-4XL.",
    "categoryId": "apparel",
    "brand": "Lacoste",
    "price": 185000,
    "stock": 3,
    "featured": true,
    "rating": 4.5,
    "images": [
      "/images/lacoste_2335_conjunto.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "77",
    "name": "Nike Conjunto Aqua/Negro",
    "slug": "nike-conjunto-aqua-negro",
    "description": "Conjunto deportivo mujer Nike color aqua/negro.",
    "categoryId": "apparel",
    "brand": "Nike",
    "price": 145000,
    "stock": 5,
    "featured": false,
    "rating": 4.4,
    "images": [
      "/images/nike_aqua_negro.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "78",
    "name": "Nike Conjunto Rosa/Negro",
    "slug": "nike-conjunto-rosa-negro",
    "description": "Conjunto deportivo mujer Nike color rosa/negro.",
    "categoryId": "apparel",
    "brand": "Nike",
    "price": 145000,
    "stock": 5,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/nike_rosa_negro.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "79",
    "name": "Nike Conjunto Verde/Negro",
    "slug": "nike-conjunto-verde-negro",
    "description": "Conjunto deportivo mujer Nike color verde/negro.",
    "categoryId": "apparel",
    "brand": "Nike",
    "price": 145000,
    "stock": 5,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/nike_verde_negro.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "80",
    "name": "Nike H-89 Conjunto Dama",
    "slug": "nike-h-89-conjunto-dama",
    "description": "Conjunto deportivo mujer Nike H-89 disponible en 6 colores.",
    "categoryId": "apparel",
    "brand": "Nike",
    "price": 150000,
    "stock": 10,
    "featured": true,
    "rating": 4.5,
    "images": [
      "/images/nike_h_89_conjunto_dama.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "81",
    "name": "Adidas H-685 Conjunto Dama",
    "slug": "adidas-h-685-conjunto-dama",
    "description": "Conjunto deportivo mujer Adidas H-685 disponible en 6 colores.",
    "categoryId": "apparel",
    "brand": "Adidas",
    "price": 150000,
    "stock": 10,
    "featured": true,
    "rating": 4.4,
    "images": [
      "/images/adidas_h_685_conjunto_dama.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "82",
    "name": "Nike H-88 Conjunto Dama",
    "slug": "nike-h-88-conjunto-dama",
    "description": "Conjunto deportivo mujer Nike H-88 disponible en 6 colores.",
    "categoryId": "apparel",
    "brand": "Nike",
    "price": 150000,
    "stock": 10,
    "featured": false,
    "rating": 4.4,
    "images": [
      "/images/nike_h_88_conjunto_dama.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "83",
    "name": "Adidas 3 Franjas Lila",
    "slug": "adidas-3-franjas-lila",
    "description": "Conjunto deportivo mujer Adidas 3 franjas color lila.",
    "categoryId": "apparel",
    "brand": "Adidas",
    "price": 140000,
    "stock": 5,
    "featured": false,
    "rating": 4.2,
    "images": [
      "/images/adidas_3_franjas_lila.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "84",
    "name": "Adidas 3 Franjas Verde",
    "slug": "adidas-3-franjas-verde",
    "description": "Conjunto deportivo mujer Adidas 3 franjas color verde.",
    "categoryId": "apparel",
    "brand": "Adidas",
    "price": 140000,
    "stock": 5,
    "featured": false,
    "rating": 4.2,
    "images": [
      "/images/adidas_3_franjas_verde.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "85",
    "name": "Adidas 3 Franjas Teal",
    "slug": "adidas-3-franjas-teal",
    "description": "Conjunto deportivo mujer Adidas 3 franjas color teal.",
    "categoryId": "apparel",
    "brand": "Adidas",
    "price": 140000,
    "stock": 5,
    "featured": false,
    "rating": 4.1,
    "images": [
      "/images/adidas_3_franjas_teal.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "86",
    "name": "Star Home Sábana 100% Algodón",
    "slug": "star-home-sabana-algodon",
    "description": "Juego de sábanas Star Home 100% algodón 320 hilos. Estampado azul marino + cuadros terracota.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 10,
    "featured": false,
    "rating": 4.5,
    "images": [
      "/images/star_home_sabana_algodon.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "87",
    "name": "Star Home Sábana Puntos Azul",
    "slug": "star-home-sabana-puntos-azul",
    "description": "Juego de sábanas Star Home con estampado de puntos azul claro sobre fondo blanco.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": false,
    "rating": 4.4,
    "images": [
      "/images/star_home_sabana_puntos_azul.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "88",
    "name": "Star Home Sábana Ondas Grises",
    "slug": "star-home-sabana-ondas-grises",
    "description": "Juego de sábanas Star Home con estampado de ondas grises/beige.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/star_home_sabana_ondas_grises.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "89",
    "name": "Star Home Sábana Dorado Óvalos",
    "slug": "star-home-sabana-dorado-ovalos",
    "description": "Juego de sábanas Star Home con estampado dorado con óvalos negros.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": true,
    "rating": 4.6,
    "images": [
      "/images/star_home_sabana_dorado_ovalos.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "90",
    "name": "Star Home Sábana Estrellas",
    "slug": "star-home-sabana-estrellas",
    "description": "Juego de sábanas Star Home con estampado de estrellas azul marino/amarillo.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": false,
    "rating": 4.4,
    "images": [
      "/images/star_home_sabana_estrellas.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "91",
    "name": "Star Home Sábana Círculos Grises",
    "slug": "star-home-sabana-circulos-grises",
    "description": "Juego de sábanas Star Home con estampado de círculos grises/azul sobre fondo beige.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": false,
    "rating": 4.2,
    "images": [
      "/images/star_home_sabana_circulos_grises.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "92",
    "name": "Star Home Sábana Geométrico Multicolor",
    "slug": "star-home-sabana-geometrico-multicolor",
    "description": "Juego de sábanas Star Home con estampado geométrico multicolor estilo pop art.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": true,
    "rating": 4.7,
    "images": [
      "/images/star_home_sabana_geometrico_multi.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "93",
    "name": "Star Home Sábana Líneas Camel",
    "slug": "star-home-sabana-lineas-camel",
    "description": "Juego de sábanas Star Home con estampado de líneas camel/azul marino.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/star_home_sabana_lineas_camel.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "94",
    "name": "Star Home Sábana Hojas Verdes",
    "slug": "star-home-sabana-hojas-verdes",
    "description": "Juego de sábanas Star Home con estampado de hojas verdes y círculos sobre fondo blanco.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": false,
    "rating": 4.4,
    "images": [
      "/images/star_home_sabana_hojas_verdes.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "95",
    "name": "Star Home Sábana Geométrico Azul/Rosa",
    "slug": "star-home-sabana-geometrico-azul-rosa",
    "description": "Juego de sábanas Star Home con estampado geométrico azul/rosa/verde.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": false,
    "rating": 4.3,
    "images": [
      "/images/star_home_sabana_geometrico_azul_rosa.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "96",
    "name": "Star Home Sábana Floral Lila",
    "slug": "star-home-sabana-floral-lila",
    "description": "Juego de sábanas Star Home con estampado floral lila/morado sobre fondo blanco.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": true,
    "rating": 4.5,
    "images": [
      "/images/star_home_sabana_floral_lila.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "97",
    "name": "Star Home Sábana Círculos Grises Líneas",
    "slug": "star-home-sabana-circulos-grises-lineas",
    "description": "Juego de sábanas Star Home con estampado de círculos grises y líneas blancas.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": false,
    "rating": 4.2,
    "images": [
      "/images/star_home_sabana_circulos_grises_lineas.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "98",
    "name": "Star Home Sábana Ondas Beige/Gris",
    "slug": "star-home-sabana-ondas-beige-gris",
    "description": "Juego de sábanas Star Home con estampado de ondas beige/gris.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": false,
    "rating": 4.1,
    "images": [
      "/images/star_home_sabana_ondas_beige_gris.jpeg"
    ],
    "createdAt": "2025-01-01"
  },
  {
    "id": "99",
    "name": "Star Home Sábana Colección Completa",
    "slug": "star-home-sabana-coleccion",
    "description": "Juego de sábanas Star Home 100% algodón con diseño exclusivo.",
    "categoryId": "bedding",
    "brand": "Star Home",
    "price": 149000,
    "salePrice": 149000,
    "stock": 8,
    "featured": true,
    "rating": 4.6,
    "images": [
      "/images/star_home_sabana_coleccion.jpeg"
    ],
    "createdAt": "2025-01-01"
  }
]

async function main() {
  console.log("Seeding database...")

  await prisma.wishlist.deleteMany()
  await prisma.review.deleteMany()
  await prisma.payment.deleteMany()
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.productImage.deleteMany()
  await prisma.variant.deleteMany()
  await prisma.specification.deleteMany()
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()
  await prisma.user.deleteMany()

  const adminHash = await bcrypt.hash("admin123", 10)
  const userHash = await bcrypt.hash("user123", 10)

  await prisma.user.create({
    data: {
      name: "Admin Vokter",
      email: "admin@vokter.com",
      password: adminHash,
      role: "ADMIN",
    },
  })

  await prisma.user.create({
    data: {
      name: "Demo User",
      email: "user@vokter.com",
      password: userHash,
      role: "USER",
    },
  })

  console.log("  Admin user: admin@vokter.com / admin123")
  console.log("  Demo user: user@vokter.com / user123")

  const categoriesData = [
    { name: "Audio", slug: "audio", description: "Audifonos, balacas, diademas y mas", image: "/images/audio.jpg" },
    { name: "Cables y Cargadores", slug: "cables-cargadores", description: "Cables, cargadores de pared y carro", image: "/images/cables.jpg" },
    { name: "Power Banks", slug: "power-banks", description: "Baterias portatiles", image: "/images/powerbanks.jpg" },
    { name: "Accesorios", slug: "accesorios", description: "Holders, soportes, fundas y mas", image: "/images/accessories.jpg" },
    { name: "Footwear", slug: "footwear", description: "Sneakers premium", image: "/images/footwear.jpg" },
    { name: "Apparel", slug: "apparel", description: "Conjuntos deportivos", image: "/images/apparel.jpg" },
    { name: "Hogar", slug: "hogar", description: "Sabanas Star Home 100% algodon", image: "/images/bedding.jpg" },
    { name: "Consolas y Entretenimiento", slug: "consolas-entretenimiento", description: "Consolas retro, proyectores y TV Sticks", image: "/images/consoles.jpg" },
  ]

  const categories = await Promise.all(
    categoriesData.map((c) => prisma.category.create({ data: c }))
  )

  const catMap: Record<string, string> = {}
  for (const c of categories) {
    catMap[c.slug] = c.id
  }

  console.log("  " + categories.length + " categories created")

  let createdCount = 0
  for (const p of productsData) {
    const catId = catMap[p.categoryId] || catMap["accesorios"]

    const product = await prisma.product.create({
      data: {
        title: p.name,
        slug: p.slug,
        description: p.description || p.name + " original 100% autentico.",
        brand: p.brand || "Vokter",
        price: p.price || 0,
        salePrice: p.salePrice ?? undefined,
        stock: p.stock ?? 0,
        featured: p.featured ?? false,
        rating: p.rating ?? 0,
        categoryId: catId,
        createdAt: p.createdAt ? new Date(p.createdAt) : new Date(),
      },
    })

    if (p.images && p.images.length > 0) {
      await prisma.productImage.createMany({
        data: p.images.map((url: string, idx: number) => ({
          productId: product.id,
          url: url,
          order: idx,
        })),
      })
    }

    createdCount++
  }

  console.log("  " + createdCount + " products created")
  console.log("\nDatabase seeded successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
