import { ParseIntPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Course } from 'src/graphql';
@Resolver()
export class CoursesResolver {
  @Query('courses')
  async findAll(): Promise<Course[]> {
    return [];
  }

  @Query('course')
  async findOne(@Args('id', ParseIntPipe) id: number): Promise<Course[]> {
    return null;
  }
}
