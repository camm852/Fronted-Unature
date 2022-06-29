import './post.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Post({ type, david }) {
	const navigate = useNavigate();
	React.useEffect(() => {
		console.log(david);
	}, []);
	return (
		<>
			<div className='card'>
				<div className='card-header'>
					<img
						src='https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg'
						alt='rover'
					/>
				</div>
				<div className='card-body'>
					<span className={`tag ${type === 'plant' ? 'tag-plant' : 'tag-bug'}`}>
						{type}
					</span>
					<h4>Why is the Tesla Cybertruck designed the way it is?</h4>
					<p>An exploration into the truck's polarising design</p>
					<div className='user'>
						<img
							src='https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo'
							alt='user'
						/>
						<div className='user-info'>
							<h5>July Dec</h5>
							<small>2h ago</small>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
