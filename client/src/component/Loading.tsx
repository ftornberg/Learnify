import { Spin } from 'antd';

const Loading = () => {
	return (
		<div className="loading">
			<Spin size="large" tip="Loading..."></Spin>
		</div>
	);
};

export default Loading;
