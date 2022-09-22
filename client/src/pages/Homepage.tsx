import React, { useEffect } from 'react';
import { Course } from '../models/course';
import ShowCourses from '../component/ShowCourses';
import { Card, Col, Radio, Row } from 'antd';
import { useAppDispatch, useAppSelector } from '../redux/store/configureStore';
import { coursesSelector, getCoursesAsync } from '../redux/slice/courseSlice';

const Homepage = () => {
	const courses = useAppSelector(coursesSelector.selectAll);
	const dispatch = useAppDispatch();
	const { coursesLoaded } = useAppSelector((state) => state.course);

	useEffect(() => {
		if (!coursesLoaded) dispatch(getCoursesAsync());
	}, [coursesLoaded, dispatch]);

	return (
		<div className="course">
			<div className="course__header">
				<h1>What to learn next?</h1>
				<h2>New Courses Just For You...</h2>
			</div>
			<Row gutter={[24, 32]}>
				<Col span={4}>
					<Card title="Sorting Oprions">
						<Radio.Group
						// TIMESTAMP @ 02:15, video: 9.14
						/>
					</Card>
				</Col>
				<Col span={20}>
					<Row gutter={[24, 32]}>
						{courses &&
							courses.map((course: Course, index: number) => {
								return <ShowCourses key={index} course={course} />;
							})}
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default Homepage;
