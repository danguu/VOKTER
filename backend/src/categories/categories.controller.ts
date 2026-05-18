import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from "@nestjs/common"
import { CategoriesService } from "./categories.service"
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard"
import { RolesGuard } from "../common/guards/roles.guard"
import { Roles } from "../common/decorators/roles.decorator"

@Controller("categories")
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll()
  }

  @Get(":slug")
  findBySlug(@Param("slug") slug: string) {
    return this.categoriesService.findBySlug(slug)
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Post()
  create(@Body() body: { name: string; slug: string; description?: string; image?: string }) {
    return this.categoriesService.create(body)
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Put(":id")
  update(@Param("id") id: string, @Body() body: { name?: string; slug?: string; description?: string; image?: string }) {
    return this.categoriesService.update(id, body)
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.categoriesService.delete(id)
  }
}
