export interface Image {
    image: string;
    width: number;
    height: number;
}

export interface Lesson_small
 {
    id: string;
    name: string;
}

export interface Lesson_big {
    id: string;
    name: string;
    image_set: Image[];
}

export const CAHCE_KEY_LESSON = ['Lesson']
export const CAHCE_KEY_LESSONS = ['Lessons']