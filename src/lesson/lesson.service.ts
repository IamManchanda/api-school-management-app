import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Lesson } from "./lesson.entity";
import { Repository } from "typeorm";
import { v4 as uuid } from "uuid";
import { CreateLessonInput } from "./lesson.input";

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async readLessonById(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ id });
  }

  async createNewLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;
    const lesson = await this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }
}
