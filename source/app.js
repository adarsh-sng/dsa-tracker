import React from 'react';
import {Text, Box, useStdout} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

export default function App() {
	const {stdout} = useStdout();
	const terminalWidth = stdout.columns;

	// Catppuccin Mocha color palette
	const colors = {
		mauve: '#cba6f7',
		pink: '#f5c2e7',
		blue: '#89b4fa',
		text: '#cdd6f4',
		surface0: '#313244',
		base: '#1e1e2e',
	};

	const getText = () => {
		if (terminalWidth < 80) return 'Wrap';
		return 'Week Wrap!';
	};
	// Placeholder usernames - will be replaced with API data
	const usernames = {
		leetcode: 'adarshsingh11',
		codeforces: 'adarshsingh11',
		codechef: 'adarshsingh11',
	};
	const heatmap = ['codeforces', 'codechef', 'leetcode'];

	return (
		<Box flexDirection="column" marginLeft={5} marginRight={5}>
			<Box justifyContent="center">
				<Gradient name="teen">
					<BigText text={getText()} />
				</Gradient>
			</Box>
			<Box justifyContent="center">
				<Text color={colors.pink}> Week:Date:'will calculate from calender'</Text>
			</Box>

			<Box
				flexDirection="row"
				borderStyle="round"
				borderColor={colors.mauve}
				paddingLeft={2}
				paddingRight={2}
				gap={1}
				justifyContent="space-around"
			>
				<Text color={colors.text}>
					LeetCode Username:{' '}
					<Text color={colors.pink}>{usernames.leetcode}</Text>
				</Text>
				<Text color={colors.text}>
					Codeforces Username:{' '}
					<Text color={colors.pink}>{usernames.codeforces}</Text>
				</Text>
				<Text color={colors.text}>
					CodeChef Username:{' '}
					<Text color={colors.pink}>{usernames.codechef}</Text>
				</Text>
			</Box>
			<Box flexDirection="row" >
				<Box width={'70%'}  flexDirection="column" gap={'0'}>
					{/* <Text>rest of boxes will go here</Text> */}
					<Box borderStyle={'round'} flexDirection="row">
						{/* <Text>heat map and question solved</Text> */}
						<Box  width={'60%'}  flexDirection='column' >
							{/* <Text>heat map </Text> */}
							{heatmap.map(platform => (
								<Box key={platform}  borderColor={colors.blue} borderStyle={'round'} >
									<Text>{`${platform}`}</Text>
								</Box>
							))}
						</Box>
						<Box borderStyle={'round'} width={'40%'}>
							<Text> question solved</Text>
						</Box>
					</Box>
					<Box borderStyle={'round'}>
						{/* <Text>other stuff</Text> */}
						
					</Box>
				</Box>
				<Box width={'30%'} borderStyle={'round'} justifyContent="center">
					<Text>TASK LIST</Text>
				</Box>
			</Box>
		</Box>
	);
}
