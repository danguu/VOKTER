import { Controller, Get, Post, Param, Body, UseGuards, Req } from "@nestjs/common"
import { ReviewsService } from "./reviews.service"
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard"

@Controller("reviews")
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Get("product/:productId")
  findByProduct(@Param("productId") productId: string) {
    return this.reviewsService.findByProduct(productId)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: any, @Body() body: { productId: string; rating: number; comment?: string; image?: string }) {
    return this.reviewsService.create({ ...body, userId: req.user.id })
  }
}
