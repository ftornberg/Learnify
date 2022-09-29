import { Button, Card } from 'antd';
import { match } from 'assert';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { courseSlice } from '../redux/slice/courseSlice';
import { getUnpublishedCourses } from '../redux/slice/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/store/configureStore';

const SectionPage = ({ match }: RouteComponentProps<any>) => {
	const [sectionName, setSectionName] = useState<string>('');
	const [lectureForm, setLectureForm] = useState<any>([]);

	const { unpublishedCourses } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	const currentCourse = unpublishedCourses.find(
		(course: any) => course.id === match.params.course
	);

	useEffect(() => {
		if (!unpublishedCourses) dispatch(getUnpublishedCourses());
	}, [dispatch, unpublishedCourses]);

	const prevIsValid = () => {
		if (lectureForm.length === 0) {
			return true;
		}

		const someEmpty = lectureForm.some(
			(item: any) => item.Url === '' || item.Title === ''
		);

		if (someEmpty) {
			lectureForm.forEach((item: any, index: number) => {
				const allPrev = [...lectureForm];

				if (lectureForm[index].Title === '') {
					allPrev[index].errors.Title = 'Title is required';
				}
				setLectureForm(allPrev);
			});
		}
		return !someEmpty;
	};

	const handleAddLink = (event: any) => {
		event.preventDefault();

		const inputState = {
			Title: '',
			Url: '',

			errors: {
				Title: null,
				Url: null,
			},
		};

		if (prevIsValid()) {
			setLectureForm((prev: any) => [...prev, inputState]);
		}
	};

	const handleRemoveField = (event: any, index: number) => {
		event.preventDefault();

		setLectureForm((prev: any) =>
			prev.filter((item: any) => item !== prev[index])
		);
	};

	const handleChange = (index: number, event: any) => {
		setLectureForm((prev: any) => {
			return prev.map((item: any, i: number) => {
				if (i !== index) {
					return item;
				}

				return {
					...item,
					[event.target.name]: event.target.value,
					errors: {
						...item.errors,
						[event.target.name]:
							event.target.value.length > 0
								? null
								: [event.target.name] + ' is required',
					},
				};
			});
		});
	};

	return (
		<div className="section-page">
			<h1>Create Sections {currentCourse?.title}</h1>
			<Card>
				<input
					className="input-seection"
					placeholder="Section Name"
					value={sectionName}
					required={true}
					onChange={(e) => setSectionName(e.target.value)}
				/>
				{lectureForm.map((item: any, index: number) => (
					<div key={`item-${index}`} className="section-page__lectures">
						<div className="section-page__lecture__item">
							<input
								name="Title"
								className="input-lecture"
								placeholder="Lecture Title"
								value={item.Title}
								required={true}
								onChange={(e) => handleChange(index, e)}
							/>
							{item.errors.Title && (
								<div className="invalid-feedback">{item.errors.Title}</div>
							)}
						</div>
						<div className="section-page__lecture__item">
							<input
								name="Url"
								className="input-lecture"
								placeholder="Lecture Url"
								value={item.Url}
								required={true}
								onChange={(e) => handleChange(index, e)}
							/>
							{item.errors.Url && (
								<div className="invalid-feedback">{item.errors.Url}</div>
							)}
						</div>
						<Button
							type="primary"
							danger
							onClick={(e) => handleRemoveField(e, index)}
						>
							Temp
						</Button>
					</div>
				))}
			</Card>
		</div>
	);
};

export default SectionPage;
