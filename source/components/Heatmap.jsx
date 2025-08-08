import React from 'react';
import {Text, Box} from 'ink';
import {colors} from '../themes/catpuccin.js';
export const Heatmap = props => {
	const questionArray = props.codechefQuestionSolved || Array(7).fill(0);
	const heatmapColors = [
		'#e6f4ea', // Very light green (no activity)
		'#a3d9a5', // Light green
		'#66bc66', // Medium green (medium activity)
		'#2a914a', // Darker green
		'#17692c', // Dark green (highest activity)
	];

	const getBackgroundColor = count => {
		if (count === 0) {
			return heatmapColors[0];
		} else if (count === 1) {
			return heatmapColors[1];
		} else if (count <= 3) {
			return heatmapColors[2];
		} else if (count <= 5) {
			return heatmapColors[3];
		} else {
			return heatmapColors[4];
		}
	};
	return (
		<Box
			borderColor={'blue'}
			borderStyle={'round'}
			flexDirection="row"
			alignItems="center"
			justifyContent="space-between"
		>
			<Text bold color={colors.mauve}>
				{props.platform}
			</Text>
			<Box>
				{questionArray.map((questionSolved, index) => (
					<Box
						key={index}
						borderStyle="round"
						alignItems="center"
						borderColor={getBackgroundColor(questionSolved)}
						justifyContent="center"
					>
						<Text backgroundColor={getBackgroundColor(questionSolved)}>
							{'  '}
						</Text>
					</Box>
				))}
			</Box>
		</Box>
	);
};
