import { Controller, Get, Post, Body, UseGuards, Req } from "@nestjs/common"
import { WishlistService } from "./wishlist.service"
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard"

@Controller("wishlist")
@UseGuards(JwtAuthGuard)
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

  @Get()
  findAll(@Req() req: any) {
    return this.wishlistService.findAll(req.user.id)
  }

  @Post()
  toggle(@Req() req: any, @Body() body: { productId: string }) {
    return this.wishlistService.toggle({ userId: req.user.id, productId: body.productId })
  }
}
