/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputType, Field, ID } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID("4")
  @Field(type => ID)
  lessonId: string;

  @IsUUID("4", { each: true })
  @Field(type => [ID])
  studentIds: string[];
}
