import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Lesson } from "./lesson.entity";
import { Repository } from "typeorm";
import { v4 as uuid } from "uuid";

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async readLessonById(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ id });
  }

  async createNewLesson(name, startDate, endDate): Promise<Lesson> {
    const lesson = await this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }
}
