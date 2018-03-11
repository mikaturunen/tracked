import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

export interface User {
  id: number;
  email: string;
}

/**
 * Represents a single logged in User in the service. This is strictly service level User and does
 * directly contain any personal information, other than through relations.
 */
@Entity()
export default class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 80
  })
  email: string;

  public toJson(): User {
    return {
      id: this.id,
      email: this.email
    }
  }
}
