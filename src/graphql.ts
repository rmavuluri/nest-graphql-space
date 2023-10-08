
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Course {
    id: number;
    name: string;
    brand: string;
    flavors: string[];
}

export abstract class IQuery {
    courses: Course[];
    course?: Nullable<Course>;
}

type Nullable<T> = T | null;
