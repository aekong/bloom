import { OmitType } from "@nestjs/swagger"
import { User } from "../entities/user.entity"
import { Expose, Type } from "class-transformer"
import { IsDate, IsDefined, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator"
import { ValidationsGroupsEnum } from "../../shared/validations-groups.enum"
import { AddressCreateDto, AddressUpdateDto } from "../../shared/dto/address.dto"
import { IdDto } from "../../lib/id.dto"

export class UserDto extends OmitType(User, [
  "applications",
  "isAdmin",
  "leasingAgentInListings",
  "passwordHash",
] as const) {
  @Expose()
  @IsOptional()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default], each: true })
  @Type(() => IdDto)
  leasingAgentInListings?: IdDto[] | null
}

export class UserBasicDto extends OmitType(User, [
  "applications",
  "dob",
  "isAdmin",
  "leasingAgentInListings",
  "passwordHash",
  "roles",
] as const) {}

export class UserDtoWithAccessToken extends UserDto {
  @Expose()
  accessToken: string
}

export class UserCreateDto extends OmitType(UserDto, [
  "id",
  "createdAt",
  "updatedAt",
  "leasingAgentInListings",
  "roles",
] as const) {
  @Expose()
  @IsDate({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Date)
  dob: Date

  @Expose()
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  password: string

  @Expose()
  @IsOptional()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => AddressCreateDto)
  address?: AddressCreateDto | null
}

export class UserUpdateDto extends OmitType(UserDto, [
  "id",
  "createdAt",
  "updatedAt",
  "email",
  "leasingAgentInListings",
  "roles",
] as const) {
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsUUID(4, { groups: [ValidationsGroupsEnum.default] })
  id?: string

  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsDate({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Date)
  createdAt?: Date

  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsDate({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Date)
  updatedAt?: Date

  @Expose()
  @IsDate({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Date)
  dob: Date

  @Expose()
  @IsOptional()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => AddressUpdateDto)
  address?: AddressUpdateDto | null
}
