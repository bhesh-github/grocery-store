import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
	return (
		<div className="loading-comp">
			<Box sx={{ display: 'flex' }}>
				<CircularProgress className="progress-indicator" />
			</Box>
		</div>
	);
}
