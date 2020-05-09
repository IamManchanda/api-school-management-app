import { Entity, PrimaryColumn, Column, ObjectIdColumn } from "typeorm";

@Entity({ name: "students" })
export class Student {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
