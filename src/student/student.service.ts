import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "./student.entity";
import { Repository } from "typeorm";
import { v4 as uuid } from "uuid";
import { CreateStudentInput } from "./create-student.input";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  readStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  readStudentById(id: string): Promise<Student> {
    return this.studentRepository.findOne({ id });
  }

  readManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        },
      },
    });
  }

  createNewStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });
    return this.studentRepository.save(student);
  }
}
