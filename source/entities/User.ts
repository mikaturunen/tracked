import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

/**
 * Represents a single logged in User in the service. This is strictly service level User and does
 * directly contain any personal information, other than through relations.
 */
@Entity()
export class User {
  /**
   * Unique primary_key ID for the User
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The email of the user.
   */
  @Column({
    length: 80
  })
  email: string;
}
