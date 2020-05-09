/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./create-lesson.input";
import { AddStudentsToLessonInput } from "./add-students-to-lesson.input";
import { Lesson } from "./lesson.entity";
import { StudentService } from "../student/student.service";

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

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
  addStudentsToLesson(
    @Args("addStudentsToLessonInput")
    addStudentsToLessonInput: AddStudentsToLessonInput,
  ) {
    const { lessonId, studentIds } = addStudentsToLessonInput;
    return this.lessonService.addStudentsToLesson(lessonId, studentIds);
  }

  @ResolveField()
  students(@Parent() lesson: Lesson) {
    return this.studentService.readManyStudents(lesson.students);
  }
}
