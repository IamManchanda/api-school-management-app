import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType("Lesson")
export class LessonType {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
