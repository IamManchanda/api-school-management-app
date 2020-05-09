/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { StudentType } from "./student.type";
import { StudentService } from "./student.service";
import { CreateStudentInput } from "./create-student.input";

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(returns => [StudentType])
  students() {
    return this.studentService.readStudents();
  }

  @Query(returns => StudentType)
  student(@Args("id") id: string) {
    return this.studentService.readStudentById(id);
  }

  @Mutation(returns => StudentType)
  createStudent(
    @Args("createStudentInput") createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createNewStudent(createStudentInput);
  }
}
