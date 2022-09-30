import { Button, Form, Input, InputNumber, notification, Select } from 'antd';
import DropdownButton from 'antd/lib/dropdown/dropdown-button';
import { Content } from 'antd/lib/layout/layout';
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import agent from '../actions/agent';
import { Category } from '../models/category';
import { RegisterCourse } from '../models/course';
import { categoriesSelector } from '../redux/slice/categorySlice';
import { useAppSelector } from '../redux/store/configureStore';

const CreateCourse = () => {
	const [values, setValues] = useState<RegisterCourse>({
		title: '',
		subTitle: '',
		description: '',
		price: 0,
		categoryId: 0,
		level: '',
		language: '',
	});

	const { title, subTitle, description, price, categoryId, level, language } =
		values;

	const categories = useAppSelector(categoriesSelector.selectAll);
	const { Option } = Select;
	const history = useHistory();

	const getSelectCategories = () => {
		const catArray: { value: number; label: string }[] = [];

		if (categories) {
			categories.forEach((category: Category) => {
				catArray.push({ value: category.id, label: category.name });
			});
		}
		return catArray;
	};

	const [form] = Form.useForm();

	const formItemLayout = {
		lavelCol: {
			xs: { span: 24 },
			sm: { span: 16 },
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 16 },
		},
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async () => {
		const response = await agent.Courses.create(values);
		notification.success({
			message: response,
		});
		history.push('/instructor');
	};

	return (
		<Content className="create-a-course">
			<div className="create-a-course__header">
				<h1>Create Course</h1>
			</div>
			<div className="create-a-course__form">
				<Form {...formItemLayout} form={form} name="course" onFinish={onSubmit}>
					<Form.Item
						name="title"
						label="Course Title"
						rules={[
							{
								min: 10,
								message: 'Title should have alteast 10 characters',
							},
							{
								required: true,
								message: 'Please mention the title of the course',
							},
						]}
					>
						<Input onChange={handleChange} name="title" value={title} />
					</Form.Item>
					<Form.Item
						name="subTitle"
						label="Course Subtitle"
						rules={[
							{
								min: 10,
								message: 'Subtitle should have alteast 10 characters',
							},
							{
								required: true,
								message: 'Please mention the subtitle of the course',
							},
						]}
					>
						<Input onChange={handleChange} name="subTitle" value={subTitle} />
					</Form.Item>
					<Form.Item
						name="description"
						label="Course description"
						rules={[
							{
								min: 10,
								message: 'Description should have alteast 10 characters',
							},
							{
								required: true,
								message: 'Please mention the description of the course',
							},
						]}
					>
						<Input.TextArea
							onChange={handleChange}
							name="description"
							value={description}
						/>
					</Form.Item>
					<Form.Item
						name="price"
						label="Course Price"
						rules={[
							{
								required: true,
								message: 'Please mention the price of the course',
							},
						]}
					>
						<InputNumber
							name="price"
							placeholder="Course Price"
							value={price}
							onChange={(value) =>
								setValues({
									...values,
									price: value,
								})
							}
						/>
					</Form.Item>
					<Form.Item
						name="category"
						label="Course category"
						rules={[
							{
								required: true,
								message: 'Please mention the category of the course',
							},
						]}
					>
						<Select
							options={getSelectCategories()}
							value={categoryId}
							placeholder="Select the category"
							onChange={(value) => setValues({ ...values, categoryId: value })}
						/>
					</Form.Item>
					<Form.Item
						name="level"
						label="Course level"
						rules={[
							{
								required: true,
								message: 'Please choose a level',
							},
						]}
					>
						<Select
							value={level}
							placeholder="Choose a level"
							onChange={(value) => setValues({ ...values, level: value })}
						>
							<Option value="Beginner">Beginner</Option>
							<Option value="Intermediate">Intermediate</Option>
							<Option value="Advanced">Advanced</Option>
						</Select>
					</Form.Item>
					<Form.Item
						name="language"
						label="Course language"
						rules={[
							{
								required: true,
								message: 'Please choose a language',
							},
						]}
					>
						<Select
							value={language}
							placeholder="Choose a language"
							onChange={(value) => setValues({ ...values, language: value })}
						>
							<Option value="English">English</Option>
							<Option value="Spanish">Spanish</Option>
							<Option value="Hindi">Hindi</Option>
							<Option value="Japanese">Japanese</Option>
							<Option value="Swedish">Swedish</Option>
						</Select>
					</Form.Item>
					<Form.Item>
						<Button type="primary" onClick={onSubmit}>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</Content>
	);
};

export default CreateCourse;
