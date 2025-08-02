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

	// Adjust text based on terminal width
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

	return (
		<Box flexDirection="column" marginLeft={5} marginRight={5}>
			<Box justifyContent="center" marginBottom={2}>
				<Gradient name="teen">
					<BigText text={getText()}  />
				</Gradient>
			</Box>
			<Box
				flexDirection="row"
				borderStyle="round"
				borderColor={colors.mauve}
				paddingLeft={2}
				paddingRight={2}
				paddingTop={1}
				paddingBottom={1}
				gap={1}
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
		</Box>
	);
}
