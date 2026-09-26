import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { CoursesModule } from './courses/courses.module';
import { CourseOpinionsModule } from './course_opinions/course_opinions.module';
import { DormsModule } from './dorms/dorms.module';
import { LecturerOpinionsModule } from './lecturer_opinions/lecturer_opinions.module';
import { LecturersModule } from './lecturers/lecturers.module';
import { LecturerClassesModule } from './lecturer_classes/lecturer_classes.module';
import { LecturersFacultyModule } from './lecturers_faculty/lecturers_faculty.module';
import { FacultiesModule } from './faculties/faculties.module';
import { FieldsOfStudyModule } from './fields_of_study/fields_of_study.module';
import { DormOpinionsModule } from './dorm_opinions/dorm_opinions.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    CoursesModule,
    CourseOpinionsModule,
    DormsModule,
    LecturerOpinionsModule,
    LecturersModule,
    LecturerClassesModule,
    LecturersFacultyModule,
    FacultiesModule,
    FieldsOfStudyModule,
    DormOpinionsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
