import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType("Student")
export class StudentType {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field(type => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
