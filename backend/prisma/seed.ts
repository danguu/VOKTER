import "dotenv/config"
import { PrismaClient } from "../generated/prisma/client.js"
import { PrismaPg } from "@prisma/adapter-pg"
import * as bcrypt from "bcryptjs"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

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

  const admin = await prisma.user.create({
    data: {
      name: "Admin Vokter",
      email: "admin@vokter.com",
      password: adminHash,
      role: "ADMIN",
    },
  })

  const demoUser = await prisma.user.create({
    data: {
      name: "Demo User",
      email: "user@vokter.com",
      password: userHash,
      role: "USER",
    },
  })

  console.log(`  Admin user: admin@vokter.com / admin123`)
  console.log(`  Demo user: user@vokter.com / user123`)

  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Zapatillas",
        slug: "zapatillas",
        description: "Sneakers de alto rendimiento para el día a día",
        image: "/images/categories/zapatillas.jpg",
      },
    }),
    prisma.category.create({
      data: {
        name: "Ropa",
        slug: "ropa",
        description: "Camisetas, hoodies, pants y más",
        image: "/images/categories/ropa.jpg",
      },
    }),
    prisma.category.create({
      data: {
        name: "Accesorios",
        slug: "accesorios",
        description: "Mochilas, gorras, calcetines y complementos",
        image: "/images/categories/accesorios.jpg",
      },
    }),
    prisma.category.create({
      data: {
        name: "Tecnología",
        slug: "tecnologia",
        description: "Gadgets y dispositivos inteligentes",
        image: "/images/categories/tecnologia.jpg",
      },
    }),
    prisma.category.create({
      data: {
        name: "Urban",
        slug: "urban",
        description: "Estilo de vida urbano y cultura street",
        image: "/images/categories/urban.jpg",
      },
    }),
    prisma.category.create({
      data: {
        name: "Deportes",
        slug: "deportes",
        description: "Equipamiento para entrenamiento y deporte",
        image: "/images/categories/deportes.jpg",
      },
    }),
    prisma.category.create({
      data: {
        name: "Ofertas",
        slug: "ofertas",
        description: "Descuentos y promociones especiales",
        image: "/images/categories/ofertas.jpg",
      },
    }),
    prisma.category.create({
      data: {
        name: "Nuevos",
        slug: "nuevos",
        description: "Últimos lanzamientos y novedades",
        image: "/images/categories/nuevos.jpg",
      },
    }),
  ])

  console.log(`  ${categories.length} categories created`)

  const productsData = [
    { name: "Nike Air Force 1 '07", slug: "nike-air-force-1-07", brand: "Nike", categoryName: "Zapatillas", price: 2599, rating: 4.8, stock: 50 },
    { name: "Nike Dunk Low Retro", slug: "nike-dunk-low-retro", brand: "Nike", categoryName: "Zapatillas", price: 2399, rating: 4.7, stock: 35 },
    { name: "Nike Air Max 90", slug: "nike-air-max-90", brand: "Nike", categoryName: "Zapatillas", price: 2899, rating: 4.9, stock: 28 },
    { name: "Nike Air Jordan 1 Mid", slug: "nike-air-jordan-1-mid", brand: "Nike", categoryName: "Zapatillas", price: 3299, rating: 4.8, stock: 20 },
    { name: "Nike Blazer Mid '77", slug: "nike-blazer-mid-77", brand: "Nike", categoryName: "Zapatillas", price: 2199, rating: 4.5, stock: 40 },
    { name: "Nike Air Max 97", slug: "nike-air-max-97", brand: "Nike", categoryName: "Zapatillas", price: 3599, rating: 4.8, stock: 15 },
    { name: "Nike Air Max 270 React", slug: "nike-air-max-270-react", brand: "Nike", categoryName: "Zapatillas", price: 3199, rating: 4.6, stock: 25 },
    { name: "Nike ZoomX Vaporfly Next% 3", slug: "nike-zoomx-vaporfly-next-3", brand: "Nike", categoryName: "Zapatillas", price: 4599, rating: 4.9, stock: 10 },
    { name: "Nike Air Max Plus TN", slug: "nike-air-max-plus-tn", brand: "Nike", categoryName: "Zapatillas", price: 2999, rating: 4.7, stock: 30 },
    { name: "Nike P-6000", slug: "nike-p-6000", brand: "Nike", categoryName: "Zapatillas", price: 1999, rating: 4.4, stock: 45 },
    { name: "Adidas Samba OG", slug: "adidas-samba-og", brand: "Adidas", categoryName: "Zapatillas", price: 2299, rating: 4.8, stock: 38 },
    { name: "Adidas Gazelle", slug: "adidas-gazelle", brand: "Adidas", categoryName: "Zapatillas", price: 2199, rating: 4.7, stock: 42 },
    { name: "Adidas Superstar", slug: "adidas-superstar", brand: "Adidas", categoryName: "Zapatillas", price: 1999, rating: 4.6, stock: 55 },
    { name: "Adidas Forum Low", slug: "adidas-forum-low", brand: "Adidas", categoryName: "Zapatillas", price: 2399, rating: 4.5, stock: 33 },
    { name: "Adidas Ultraboost Light", slug: "adidas-ultraboost-light", brand: "Adidas", categoryName: "Zapatillas", price: 3499, rating: 4.9, stock: 22 },
    { name: "Adidas NMD_R1", slug: "adidas-nmd-r1", brand: "Adidas", categoryName: "Zapatillas", price: 2799, rating: 4.6, stock: 27 },
    { name: "Adidas Yeezy Boost 350 V2", slug: "adidas-yeezy-boost-350-v2", brand: "Adidas", categoryName: "Zapatillas", price: 4599, rating: 4.9, stock: 5 },
    { name: "Adidas Ozweego", slug: "adidas-ozweego", brand: "Adidas", categoryName: "Zapatillas", price: 2599, rating: 4.4, stock: 20 },
    { name: "Adidas Campus 00s", slug: "adidas-campus-00s", brand: "Adidas", categoryName: "Zapatillas", price: 2099, rating: 4.5, stock: 35 },
    { name: "Adidas Spezial", slug: "adidas-spezial", brand: "Adidas", categoryName: "Zapatillas", price: 1899, rating: 4.3, stock: 40 },
    { name: "New Balance 550", slug: "new-balance-550", brand: "New Balance", categoryName: "Zapatillas", price: 2199, rating: 4.7, stock: 30 },
    { name: "New Balance 990v6", slug: "new-balance-990v6", brand: "New Balance", categoryName: "Zapatillas", price: 3299, rating: 4.8, stock: 18 },
    { name: "New Balance 2002R", slug: "new-balance-2002r", brand: "New Balance", categoryName: "Zapatillas", price: 2599, rating: 4.7, stock: 25 },
    { name: "New Balance 574", slug: "new-balance-574", brand: "New Balance", categoryName: "Zapatillas", price: 1799, rating: 4.5, stock: 48 },
    { name: "Vans Old Skool", slug: "vans-old-skool", brand: "Vans", categoryName: "Zapatillas", price: 1599, rating: 4.6, stock: 60 },
    { name: "Vans Sk8-Hi", slug: "vans-sk8-hi", brand: "Vans", categoryName: "Zapatillas", price: 1799, rating: 4.5, stock: 45 },
    { name: "Vans Authentic", slug: "vans-authentic", brand: "Vans", categoryName: "Zapatillas", price: 1399, rating: 4.4, stock: 55 },
    { name: "Converse Chuck Taylor All Star", slug: "converse-chuck-taylor-all-star", brand: "Converse", categoryName: "Zapatillas", price: 1499, rating: 4.7, stock: 70 },
    { name: "Converse Chuck 70", slug: "converse-chuck-70", brand: "Converse", categoryName: "Zapatillas", price: 1899, rating: 4.8, stock: 35 },
    { name: "Puma Suede Classic", slug: "puma-suede-classic", brand: "Puma", categoryName: "Zapatillas", price: 1699, rating: 4.5, stock: 40 },
    { name: "Puma Palermo", slug: "puma-palermo", brand: "Puma", categoryName: "Zapatillas", price: 1899, rating: 4.4, stock: 30 },
    { name: "Reebok Club C 85", slug: "reebok-club-c-85", brand: "Reebok", categoryName: "Zapatillas", price: 1799, rating: 4.6, stock: 35 },
    { name: "Reebok Nano X4", slug: "reebok-nano-x4", brand: "Reebok", categoryName: "Zapatillas", price: 2899, rating: 4.7, stock: 15 },
    { name: "ASICS Gel-Kayano 30", slug: "asics-gel-kayano-30", brand: "ASICS", categoryName: "Zapatillas", price: 3199, rating: 4.8, stock: 20 },
    { name: "ASICS Gel-1130", slug: "asics-gel-1130", brand: "ASICS", categoryName: "Zapatillas", price: 2199, rating: 4.5, stock: 28 },
    { name: "Hoka Clifton 9", slug: "hoka-clifton-9", brand: "Hoka", categoryName: "Zapatillas", price: 2999, rating: 4.8, stock: 18 },
    { name: "Hoka Bondi 8", slug: "hoka-bondi-8", brand: "Hoka", categoryName: "Zapatillas", price: 3399, rating: 4.7, stock: 12 },
    { name: "Saucony Triumph 21", slug: "saucony-triumph-21", brand: "Saucony", categoryName: "Zapatillas", price: 3099, rating: 4.6, stock: 15 },
    { name: "Brooks Ghost 16", slug: "brooks-ghost-16", brand: "Brooks", categoryName: "Zapatillas", price: 2899, rating: 4.7, stock: 20 },
    { name: "DC Shoes Manteca 4", slug: "dc-shoes-manteca-4", brand: "DC Shoes", categoryName: "Zapatillas", price: 1699, rating: 4.3, stock: 25 },
    { name: "Nike Sportswear Club Fleece Hoodie", slug: "nike-club-fleece-hoodie", brand: "Nike", categoryName: "Ropa", price: 1499, rating: 4.6, stock: 45 },
    { name: "Nike Dri-FIT Tee", slug: "nike-dri-fit-tee", brand: "Nike", categoryName: "Ropa", price: 799, rating: 4.5, stock: 60 },
    { name: "Nike Tech Fleece Pants", slug: "nike-tech-fleece-pants", brand: "Nike", categoryName: "Ropa", price: 1899, rating: 4.7, stock: 35 },
    { name: "Adidas Tiro 23 Pants", slug: "adidas-tiro-23-pants", brand: "Adidas", categoryName: "Ropa", price: 1299, rating: 4.5, stock: 40 },
    { name: "Adidas Essentials Hoodie", slug: "adidas-essentials-hoodie", brand: "Adidas", categoryName: "Ropa", price: 1599, rating: 4.6, stock: 38 },
    { name: "Champion Reverse Weave Hoodie", slug: "champion-reverse-weave-hoodie", brand: "Champion", categoryName: "Ropa", price: 1799, rating: 4.8, stock: 30 },
    { name: "Carhartt WIP Hooded Sweatshirt", slug: "carhartt-wip-hooded-sweatshirt", brand: "Carhartt WIP", categoryName: "Ropa", price: 2199, rating: 4.7, stock: 22 },
    { name: "The North Face 1996 Retro Nuptse", slug: "north-face-retro-nuptse", brand: "The North Face", categoryName: "Ropa", price: 4599, rating: 4.9, stock: 10 },
    { name: "Patagonia Better Sweater", slug: "patagonia-better-sweater", brand: "Patagonia", categoryName: "Ropa", price: 2899, rating: 4.8, stock: 15 },
    { name: "Supreme Box Logo Tee", slug: "supreme-box-logo-tee", brand: "Supreme", categoryName: "Ropa", price: 2599, rating: 4.4, stock: 8 },
    { name: "Stüssy Basic Tee", slug: "stussy-basic-tee", brand: "Stüssy", categoryName: "Ropa", price: 1299, rating: 4.5, stock: 40 },
    { name: "Puma x Fenty Hoodie", slug: "puma-x-fenty-hoodie", brand: "Puma", categoryName: "Ropa", price: 2399, rating: 4.6, stock: 18 },
    { name: "Levi's 501 Original Jeans", slug: "levis-501-original", brand: "Levi's", categoryName: "Ropa", price: 2199, rating: 4.7, stock: 35 },
    { name: "Dickies 874 Work Pants", slug: "dickies-874-work-pants", brand: "Dickies", categoryName: "Ropa", price: 1399, rating: 4.6, stock: 42 },
    { name: "Carhartt Beanie", slug: "carhartt-beanie", brand: "Carhartt", categoryName: "Accesorios", price: 599, rating: 4.5, stock: 80 },
    { name: "Nike Elite Socks (3 Pack)", slug: "nike-elite-socks-3pack", brand: "Nike", categoryName: "Accesorios", price: 399, rating: 4.4, stock: 100 },
    { name: "Stance Uncommon Socks", slug: "stance-uncommon-socks", brand: "Stance", categoryName: "Accesorios", price: 299, rating: 4.3, stock: 90 },
    { name: "New Era 59FIFTY Cap", slug: "new-era-59fifty", brand: "New Era", categoryName: "Accesorios", price: 899, rating: 4.6, stock: 45 },
    { name: "Oakley Holbrook Sunglasses", slug: "oakley-holbrook-sunglasses", brand: "Oakley", categoryName: "Accesorios", price: 2599, rating: 4.7, stock: 20 },
    { name: "Herschel Supply Co. Little America Backpack", slug: "herschel-little-america-backpack", brand: "Herschel Supply Co.", categoryName: "Accesorios", price: 2199, rating: 4.8, stock: 25 },
    { name: "Nike SB Backpack", slug: "nike-sb-backpack", brand: "Nike", categoryName: "Accesorios", price: 1599, rating: 4.5, stock: 30 },
    { name: "Apple AirPods Pro 2", slug: "apple-airpods-pro-2", brand: "Apple", categoryName: "Tecnología", price: 4599, rating: 4.8, stock: 30 },
    { name: "Sony WH-1000XM5", slug: "sony-wh-1000xm5", brand: "Sony", categoryName: "Tecnología", price: 5499, rating: 4.9, stock: 15 },
    { name: "Beats by Dre Studio Buds+", slug: "beats-studio-buds-plus", brand: "Beats by Dre", categoryName: "Tecnología", price: 3299, rating: 4.5, stock: 20 },
    { name: "JBL Flip 6", slug: "jbl-flip-6", brand: "JBL", categoryName: "Tecnología", price: 2199, rating: 4.7, stock: 25 },
    { name: "Apple Watch Series 9", slug: "apple-watch-series-9", brand: "Apple", categoryName: "Tecnología", price: 7999, rating: 4.8, stock: 10 },
    { name: "Samsung Galaxy Watch 6", slug: "samsung-galaxy-watch-6", brand: "Samsung", categoryName: "Tecnología", price: 5999, rating: 4.6, stock: 12 },
    { name: "Anker Power Bank 20000mAh", slug: "anker-power-bank-20000", brand: "Anker", categoryName: "Tecnología", price: 899, rating: 4.5, stock: 50 },
    { name: "Google Pixel Buds Pro", slug: "google-pixel-buds-pro", brand: "Google", categoryName: "Tecnología", price: 2999, rating: 4.4, stock: 18 },
    { name: "Nintendo Switch OLED", slug: "nintendo-switch-oled", brand: "Nintendo", categoryName: "Tecnología", price: 6999, rating: 4.9, stock: 8 },
    { name: "Logitech MX Master 3S", slug: "logitech-mx-master-3s", brand: "Logitech", categoryName: "Tecnología", price: 2199, rating: 4.7, stock: 20 },
    { name: "Bape Shark Full Zip Hoodie", slug: "bape-shark-hoodie", brand: "BAPE", categoryName: "Urban", price: 5599, rating: 4.8, stock: 5 },
    { name: "Palace Tri-Ferg Tee", slug: "palace-tri-ferg-tee", brand: "Palace", categoryName: "Urban", price: 1899, rating: 4.5, stock: 15 },
    { name: "Off-White Arrow Tee", slug: "off-white-arrow-tee", brand: "Off-White", categoryName: "Urban", price: 3999, rating: 4.6, stock: 8 },
    { name: "Fear of God Essentials Tee", slug: "fear-of-god-essentials-tee", brand: "Fear of God", categoryName: "Urban", price: 1899, rating: 4.7, stock: 25 },
    { name: "Nike Air Force 1 Low x Off-White", slug: "nike-af1-off-white", brand: "Nike", categoryName: "Urban", price: 8999, rating: 4.9, stock: 3 },
    { name: "Adidas x Gucci Gazelle", slug: "adidas-gucci-gazelle", brand: "Adidas", categoryName: "Urban", price: 25999, rating: 4.8, stock: 2 },
    { name: "Thrasher Flame Tee", slug: "thrasher-flame-tee", brand: "Thrasher", categoryName: "Urban", price: 899, rating: 4.4, stock: 50 },
    { name: "Element Section Tee", slug: "element-section-tee", brand: "Element", categoryName: "Urban", price: 799, rating: 4.3, stock: 45 },
    { name: "Nike Metcon 9", slug: "nike-metcon-9", brand: "Nike", categoryName: "Deportes", price: 2999, rating: 4.8, stock: 20 },
    { name: "Under Armour Project Rock 6", slug: "under-armour-project-rock-6", brand: "Under Armour", categoryName: "Deportes", price: 2899, rating: 4.6, stock: 15 },
    { name: "Lululemon Align Leggings", slug: "lululemon-align-leggings", brand: "Lululemon", categoryName: "Deportes", price: 2199, rating: 4.8, stock: 30 },
    { name: "Gymshark Vital Seamless Leggings", slug: "gymshark-vital-seamless-leggings", brand: "Gymshark", categoryName: "Deportes", price: 1599, rating: 4.6, stock: 35 },
    { name: "Nike Dri-FIT Shorts", slug: "nike-dri-fit-shorts", brand: "Nike", categoryName: "Deportes", price: 699, rating: 4.5, stock: 55 },
    { name: "Adidas Yoga Mat", slug: "adidas-yoga-mat", brand: "Adidas", categoryName: "Deportes", price: 1299, rating: 4.4, stock: 25 },
    { name: "TRX Pro4 Suspension Trainer", slug: "trx-pro4", brand: "TRX", categoryName: "Deportes", price: 3599, rating: 4.9, stock: 10 },
    { name: "Nike LeBron 21", slug: "nike-lebron-21", brand: "Nike", categoryName: "Deportes", price: 3899, rating: 4.7, stock: 12 },
    { name: "Adidas Predator Edge", slug: "adidas-predator-edge", brand: "Adidas", categoryName: "Deportes", price: 3299, rating: 4.6, stock: 8 },
    { name: "Puma Future 7", slug: "puma-future-7", brand: "Puma", categoryName: "Deportes", price: 2899, rating: 4.5, stock: 10 },
    { name: "Nike Dunk Low Retro Black/White (Oferta)", slug: "nike-dunk-low-black-white-oferta", brand: "Nike", categoryName: "Ofertas", price: 2399, salePrice: 1799, rating: 4.7, stock: 15 },
    { name: "Adidas Samba OG (Oferta)", slug: "adidas-samba-og-oferta", brand: "Adidas", categoryName: "Ofertas", price: 2299, salePrice: 1699, rating: 4.8, stock: 20 },
    { name: "Vans Old Skool (Oferta)", slug: "vans-old-skool-oferta", brand: "Vans", categoryName: "Ofertas", price: 1599, salePrice: 1199, rating: 4.6, stock: 25 },
    { name: "Nike Club Fleece Hoodie (Oferta)", slug: "nike-club-fleece-oferta", brand: "Nike", categoryName: "Ofertas", price: 1499, salePrice: 999, rating: 4.6, stock: 30 },
    { name: "Adidas Essentials Hoodie (Oferta)", slug: "adidas-essentials-hoodie-oferta", brand: "Adidas", categoryName: "Ofertas", price: 1599, salePrice: 1099, rating: 4.6, stock: 25 },
    { name: "Carhartt Beanie (Oferta)", slug: "carhartt-beanie-oferta", brand: "Carhartt", categoryName: "Ofertas", price: 599, salePrice: 399, rating: 4.5, stock: 50 },
    { name: "Nike Air Max 90 (Nuevo)", slug: "nike-air-max-90-nuevo", brand: "Nike", categoryName: "Nuevos", price: 2899, rating: 4.9, stock: 28 },
    { name: "ASICS Gel-Kayano 30 (Nuevo)", slug: "asics-gel-kayano-30-nuevo", brand: "ASICS", categoryName: "Nuevos", price: 3199, rating: 4.8, stock: 20 },
    { name: "Bape Shark Full Zip Hoodie (Nuevo)", slug: "bape-shark-hoodie-nuevo", brand: "BAPE", categoryName: "Nuevos", price: 5599, rating: 4.8, stock: 5 },
    { name: "Apple AirPods Pro 2 (Nuevo)", slug: "apple-airpods-pro-2-nuevo", brand: "Apple", categoryName: "Nuevos", price: 4599, rating: 4.8, stock: 30 },
    { name: "Sony WH-1000XM5 (Nuevo)", slug: "sony-wh-1000xm5-nuevo", brand: "Sony", categoryName: "Nuevos", price: 5499, rating: 4.9, stock: 15 },
    { name: "Nike Metcon 9 (Nuevo)", slug: "nike-metcon-9-nuevo", brand: "Nike", categoryName: "Nuevos", price: 2999, rating: 4.8, stock: 20 },
  ]

  let createdCount = 0
  for (const p of productsData) {
    const category = categories.find((c) => c.name === p.categoryName)!
    await prisma.product.create({
      data: {
        title: p.name,
        slug: p.slug,
        description: `${p.name} original 100% auténtico. Diseñado para quienes buscan estilo y rendimiento.`,
        brand: p.brand,
        price: p.price,
        salePrice: p.salePrice ?? null,
        stock: p.stock,
        featured: false,
        reviewsCount: p.reviewsCount,
        categoryId: category.id,
      },
    })
    createdCount++
  }

  console.log(`  ${createdCount} products created`)
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
