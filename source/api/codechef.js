const username = 'adarshsingh11';
const getCodechefData = async username => {
	const url = 'https://codechef-api-rouge.vercel.app/handle/';
	try {
		const response = await fetch(`${url}${username}`);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error.message);
	}
};
export default getCodechefData;

getCodechefData(username);
