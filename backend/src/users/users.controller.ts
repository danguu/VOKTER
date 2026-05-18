import { Controller, Get, Param, Patch, Body, UseGuards } from "@nestjs/common"
import { UsersService } from "./users.service"
import { JwtAuthGuard } from "../common/guards/jwt-auth.guard"

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findById(@Param("id") id: string) {
    return this.usersService.findById(id)
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() body: { name?: string; image?: string }) {
    return this.usersService.update(id, body)
  }
}
