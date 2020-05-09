import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Lesson } from "./lesson/lesson.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mongodb",
  url: process.env.MONGO_URL || "mongodb://localhost/school",
  synchronize: true,
  useUnifiedTopology: true,
  entities: [Lesson],
};
