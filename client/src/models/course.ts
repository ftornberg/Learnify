export interface Course {
	id: string;
	title: string;
	price: number;
	instructor: string;
	image: string;
	rating: number;
	description: string;
	category: string;
	language: string;
	level: string;
	students: number;
	subTitle: string;
	learnings: Learning[] | [];
	requirements: Requirement[] | [];
	lastUpdated: Date;
}
export interface Learning {
	id: number;
	name: string;
}
export interface Requirement {
	id: number;
	name: string;
}

export interface CourseParams {
	sort: string;
	search?: string;
	pageIndex: number;
	pageSize: number;
	category?: number;
}

export interface RegisterCourse {
	title: string;
	subTitle: string;
	price: number;
	description: string;
	language: string;
	categoryId: number;
	level: string;
}
