import { Module } from "@nestjs/common"
import { PrismaModule } from "./prisma/prisma.module"
import { AuthModule } from "./auth/auth.module"
import { UsersModule } from "./users/users.module"
import { ProductsModule } from "./products/products.module"
import { CategoriesModule } from "./categories/categories.module"
import { OrdersModule } from "./orders/orders.module"
import { ReviewsModule } from "./reviews/reviews.module"
import { WishlistModule } from "./wishlist/wishlist.module"
import { CouponsModule } from "./coupons/coupons.module"
import { AdminModule } from "./admin/admin.module"

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    ProductsModule,
    CategoriesModule,
    OrdersModule,
    ReviewsModule,
    WishlistModule,
    CouponsModule,
    AdminModule,
  ],
})
export class AppModule {}
