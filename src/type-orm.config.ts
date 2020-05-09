import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Lesson } from "./lesson/lesson.entity";
import { Student } from "./student/student.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mongodb",
  url: process.env.MONGO_URL || "mongodb://localhost/school",
  synchronize: true,
  useUnifiedTopology: true,
  entities: [Lesson, Student],
};
