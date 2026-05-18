import { Controller, Get, Param, Post, Body, Patch, UseGuards, Req } from "@nestjs/common"
import { OrdersService } from "./orders.service"
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard"
import { RolesGuard } from "../common/guards/roles.guard"
import { Roles } from "../common/decorators/roles.decorator"

@Controller("orders")
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: any) {
    const isAdmin = req.user.role === "ADMIN"
    return this.ordersService.findAll(isAdmin ? undefined : req.user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findById(@Param("id") id: string) {
    return this.ordersService.findById(id)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: any, @Body() body: { items: any[]; total: number; shippingCost: number }) {
    return this.ordersService.create({
      userId: req.user.id,
      items: body.items,
      total: body.total,
      shippingCost: body.shippingCost,
    })
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Patch(":id/status")
  updateStatus(@Param("id") id: string, @Body() body: { status: string }) {
    return this.ordersService.updateStatus(id, body.status)
  }
}
