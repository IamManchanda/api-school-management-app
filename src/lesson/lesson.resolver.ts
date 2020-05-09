/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./create-lesson.input";
import { AssignStudentsToLessonInput } from "./assign-students-to-lesson.input";

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(returns => [LessonType])
  lessons() {
    return this.lessonService.readLessons();
  }

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

  @Mutation(returns => LessonType)
  assignStudentsToLesson(
    @Args("assignStudentsToLessonInput")
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
}
