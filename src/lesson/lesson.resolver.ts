/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(returns => LessonType)
  lesson(@Args("id") id: string) {
    return this.lessonService.readLessonById(id);
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args("createLessonInput") createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createNewLesson(createLessonInput);
  }
}
