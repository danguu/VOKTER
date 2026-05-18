import { Controller, Get, Post, Put, Delete, Param, Body, Query, UseGuards } from "@nestjs/common"
import { ProductsService } from "./products.service"
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard"
import { RolesGuard } from "../common/guards/roles.guard"
import { Roles } from "../common/decorators/roles.decorator"

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  findAll(@Query() query: { category?: string; search?: string; featured?: string; brand?: string; minPrice?: string; maxPrice?: string }) {
    return this.productsService.findAll({
      category: query.category,
      search: query.search,
      featured: query.featured === "true",
      brand: query.brand,
      minPrice: query.minPrice ? parseInt(query.minPrice) : undefined,
      maxPrice: query.maxPrice ? parseInt(query.maxPrice) : undefined,
    })
  }

  @Get(":slug")
  findBySlug(@Param("slug") slug: string) {
    return this.productsService.findBySlug(slug)
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Post()
  create(@Body() body: {
    title: string
    slug: string
    description?: string
    categoryId: string
    brand: string
    price: number
    salePrice?: number
    stock?: number
    featured?: boolean
  }) {
    return this.productsService.create(body)
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Put(":id")
  update(@Param("id") id: string, @Body() body: any) {
    return this.productsService.update(id, body)
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.productsService.delete(id)
  }
}
