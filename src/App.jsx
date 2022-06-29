import { Box } from '@mui/material';
import React from 'react';
import Post from './components/post/Post';

function App() {
	const [states, setStates] = React.useState([
		{
			type: 'bug',
		},
		{
			type: 'bug',
		},
		{
			type: 'plant',
		},
		{
			type: 'bug',
		},
	]);

	return (
		<div className='App'>
			<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
				{states.map((state, i) => (
					<Post type={state.type} key={i + 1} />
				))}
			</Box>
		</div>
	);
}

export default App;
