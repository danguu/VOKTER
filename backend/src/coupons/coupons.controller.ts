import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from "@nestjs/common"
import { CouponsService } from "./coupons.service"
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard"
import { RolesGuard } from "../common/guards/roles.guard"
import { Roles } from "../common/decorators/roles.decorator"

@Controller("coupons")
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles("ADMIN")
export class CouponsController {
  constructor(private couponsService: CouponsService) {}

  @Get()
  findAll() { return this.couponsService.findAll() }

  @Get(":id")
  findById(@Param("id") id: string) { return this.couponsService.findById(id) }

  @Post()
  create(@Body() body: { code: string; discount: number; type?: string; maxUses?: number; expiresAt?: string }) {
    return this.couponsService.create(body)
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() body: { code?: string; discount?: number; type?: string; maxUses?: number; expiresAt?: string; isActive?: boolean }) {
    return this.couponsService.update(id, body)
  }

  @Delete(":id")
  delete(@Param("id") id: string) { return this.couponsService.delete(id) }
}
