import React from 'react';
import {Text, Box, useStdout, useApp, useInput} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import {Heatmap} from './components/Heatmap.js';

export default function App() {
	const {stdout} = useStdout();
	const terminalWidth = stdout.columns;
	const terminalHeight = stdout.rows;
	const {exit} = useApp();
	useInput((input, key) => {
		if (input === 'q') {
			exit();
		}
	});

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
		leetcodeId: 'c4GNjpavJT',
		codeforces: 'adarshs_',
		codechef: 'adarshsingh11',
	};
	const heatmap = ['codeforces', 'codechef', 'leetcode'];
	const codechefQuestionSolved = [1, 25, 7, 2, 0, 7, 10]; // will fetch from api, testing for now

	return (
		<Box flexDirection="column" marginLeft={5} marginRight={5}>
			<Box justifyContent="center">
				<Gradient name="teen">
					<BigText text={getText()} />
				</Gradient>
			</Box>
			<Box justifyContent="center">
				<Text color={colors.pink}>
					{' '}
					Week:Date:'will calculate from calender'
				</Text>
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
					<Text color={colors.pink}>{usernames.leetcodeId}</Text>
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
			<Box flexDirection="row">
				<Box width={'70%'} flexDirection="column" gap={'0'}>
					{/* <Text>rest of boxes will go here</Text> */}
					<Box borderStyle={'round'} flexDirection="row">
						{/* <Text>heat map and question solved</Text> */}
						<Box width={'60%'} flexDirection="column">
							{/* <Text>heat map </Text> */}
							{heatmap.map(platform => {
								if (platform === 'codechef') {
									return (
										<Heatmap
											key={platform}
											platform={platform}
											codechefQuestionSolved= {codechefQuestionSolved || Array(7).fill(0)}
										/>
									);
								}
								return <Heatmap key={platform} platform={platform} />;
							})}
						</Box>
						<Box borderStyle={'round'} width={'40%'}>
							<Text>
								{' '}
								question solved
								{/* here i fetch all question i do in all 3 platforms  */}
							</Text>
						</Box>
					</Box>
					<Box borderStyle={'round'}>
						{/* <Text>other stuff</Text> */}
						<Box flexDirection="row">
							{heatmap.map(platform => (
								<Box
									key={platform}
									width={'33%'}
									borderColor={colors.blue}
									borderStyle={'round'}
									borderLeft={true}
									borderRight={true}
									borderTop={false}
									borderBottom={false}
								>
									<Text>{`${platform}`}</Text>
									{/* here i will right my future goals and what else do you recommend? */}
								</Box>
							))}
						</Box>
					</Box>
				</Box>
				<Box width={'30%'} borderStyle={'round'} justifyContent="center">
					<Text>TASK LIST</Text>
				</Box>
			</Box>
			<Text justifyContent="center">Press q to exit</Text>
		</Box>
	);
}
