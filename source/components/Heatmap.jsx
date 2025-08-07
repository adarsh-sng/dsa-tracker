import React from 'react';
import {Text, Box} from 'ink';
import {colors} from '../themes/catpuccin.js';
export const Heatmap = props => {
	return (
		<Box
			borderColor={'blue'}
			borderStyle={'round'}
			flexDirection="row"
			alignItems="center"
			justifyContent="space-between"
		>
			<Text bold color={colors.mauve}>{props.platform}</Text>
			<Box>
			{Array(7)
				.fill(0)
				.map((_, index) => (
					<Box
						key={index}
						width={5}
						height={3}
						borderStyle="round"
						alignItems="center"
						borderColor={"green"}
					>
						<Text backgroundColor={'green'}>{index + 1}</Text>
						<Text backgroundColor={'green'}>{index + 1}</Text>
						<Text backgroundColor={'green'}>{index + 1}</Text>
					</Box>
				))}
			</Box>
		</Box>
	);
};
