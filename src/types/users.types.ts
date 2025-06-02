import type { BaseModel } from "./base.types";

export type UserRole = "Reader" | "Manager" | "Admin";

export interface User extends BaseModel {
    companyId: string;
    role: UserRole;
    email: string;
}

export interface UserCreation extends Omit<User, keyof BaseModel> {
    password: string;
}