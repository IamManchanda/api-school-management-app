/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { StudentType } from "./student.type";
import { StudentService } from "./student.service";
import { CreateStudentInput } from "./create-student.input";

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation(returns => StudentType)
  createStudent(
    @Args("createStudentInput") createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createNewStudent(createStudentInput);
  }
}
