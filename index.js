const chalk = require('chalk');

const bgColor = chalk.hex('#554236');
const thmeColor = chalk.hex('#ff9200'); // #ff9200
const saoColor = chalk.hex('##F4A7B9')
const borderColor = chalk.hex('#EB7A77')
const borderColorTwo = borderColor
const borderColorThree = borderColor
const borderColorFour = borderColor

const logoText = `
${borderColorThree('##')}${borderColor('##################################################################################################')}
${borderColorThree('#')}MMMMMMMMMMMMMMMMMMMMMMMWWWNNNNNNNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColorThree('#')}MMMMMMMMMMMMMMMMMWWNXK0OOOkkkkkkkOO00KXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM ${thmeColor('丰橙学院')} MM${borderColor('#')}
${borderColorThree('#')}MMMMMMMMMMMMMMWNX0OkxxxxxxxxxxxxxxxxxxxkO0XNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColorThree('#')}MMMMMMMMMMMWNK0kxxxxxxxxxxxxxxxxxxxxxxxxxxxk0XM ${thmeColor('Copyright © 2019 FengCheng. All Rights Reserved')} MM${borderColor('#')}
${borderColorThree('#')}MMMMMMMMMMNKOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkOKWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColorThree('#')}MMMMMMMMWKOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxO0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColorThree('#')}MMMMMMWN0kxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxk0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColorThree('#')}MMMMMWXOxxxxxxxxxxxx${thmeColor('kO0K0k')}xxxxxxxxxxxxxxxxxxxxxxxxxxONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColorTwo('#')}
${borderColorThree('#')}MMMMWXOxxxxxxxxxxx${thmeColor('k0XWWMNO')}xxxxxxxxxxxxxxxxxxxxxxxxxxxONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColorTwo('#')}
${borderColorThree('#')}MMMMNOxxxxxxxxxxx${thmeColor('OXWMMMMX')}kxxxxxxxxxxxxxxxxxxxxxxxxxxxx0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColorTwo('#')}
${borderColorThree('#')}MMMWKxxxxxxxxxxx${thmeColor('kKWMMMWNO')}xxxxxxxxxxxxxxxxxxxxxxxxxxxxxkKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColorTwo('#')}
${borderColorThree('#')}MMMNOxxxxxxxxxxx${thmeColor('OXWMWNKO')}xxxx${thmeColor('kOOOOOOOOOOOk')}xxxx${thmeColor('kOOOOOOOOOK')}WMM${thmeColor('WWNN')}WMMMMMMMM${thmeColor('WNW')}MMMMMMMMW${thmeColor('NXXXXNN')}WMMMMMM${borderColorTwo('#')}
${borderColorThree('#')}MMWXkxxxxxxxxxxx${thmeColor('kKXK0k')}xxxxx${thmeColor('OXNNXXXXXXXXK0k')}x${thmeColor('kKNNXXXXXXXXN')}WMM${thmeColor('N0kkK')}NMMMMMMW${thmeColor('Kk0')}WMMMMW${thmeColor('X0OO0000OOOK')}NMMMM${borderColorTwo('#')}
${borderColorThree('#')}MMWKkxxxxxxxxxxxxkxxxxxxxxx${thmeColor('0NN0kkkkkkk')}xxxxx${thmeColor('OXWK')}kkkkkkkkOXMM${thmeColor('XOkOkO')}NWMMMMW${thmeColor('0x0')}NMMMN${thmeColor('0kOK')}NWWMWW${thmeColor('X0k0')}NMMM${borderColorTwo('#')}
${borderColorThree('#')}MMWKkxxxxxxxxxxxxxxxxxxxxxx${thmeColor('0NNO')}xxxxxxxxxxxx${thmeColor('OXW0')}xxxxxxxxOXMM${thmeColor('XOOXKOOK')}WMMMW${thmeColor('0x0')}NMMW${thmeColor('0xO')}NMMMMMMMM${thmeColor('WXX')}WMMM${borderColorTwo('#')}
${borderColorThree('#')}MMMXOxxxxxxxxxxxxxxxxxxxxxx${thmeColor('0NNK0000000Ok')}xxx${thmeColor('OXWX00000000')}KNMM${thmeColor('XOkX')}W${thmeColor('XOk0')}NMMW${thmeColor('0x0')}NMM${thmeColor('XkkK')}WMMMMMMWWWWWMMMM${borderColorTwo('#')}
${borderColorThree('#')}MMMN0xxxxxxxxxxxxxxxxxxxxxx${thmeColor('0WWXKKKKKKKKO')}xxx${thmeColor('OXWNXKKXKKKX')}NMMM${thmeColor('XOkX')}WMN${thmeColor('0kO')}NWW${thmeColor('0x0')}NMW${thmeColor('XkkX')}MMMMM${thmeColor('NK00000X')}WMM${borderColorTwo('#')}
${borderColorThree('#')}MMMWXkxxxxxxxxxxxxxxxxxxxxx${thmeColor('0NNO')}xxxxxxxxxxxx${thmeColor('OXWK')}xxxxxxxONMMM${thmeColor('XOkX')}WMMW${thmeColor('KkOXN0x0')}WMM${thmeColor('XOkK')}WMMMM${thmeColor('WNXXXOx0')}WMM${borderColorTwo('#')}
${borderColorFour('#')}MMMMWKkxxxxxxxxxxxxxxxxxxxx${thmeColor('0NNO')}xxxxxxxxxxxx${thmeColor('OXW0')}xxxxxxkKWMMM${thmeColor('XOkX')}WMMMW${thmeColor('XOk00k0')}NMMW${thmeColor('KkOX')}WMMMMMMW${thmeColor('NOx0')}WMM${borderColorTwo('#')}
${borderColorFour('#')}MMMMMW0kxxxxxxxxxxxxxxxxxxx${thmeColor('0NXO')}xxxxxxxxxxxx${thmeColor('kXWXOOOOOOK')}WMMMM${thmeColor('XOkX')}WMMMMMN${thmeColor('0kkk0')}NMMMW${thmeColor('KOk0K')}NNNNXK${thmeColor('Okx0')}WMM${borderColorTwo('#')}
${borderColorFour('#')}MMMMMMWKkxxxxxxxxxxxxxxxxxx${thmeColor('OKKk')}xxxxxxxxxxxx${thmeColor('k0XXXXXXN')}WWMMMMM${thmeColor('NK0')}NMMMMMMMW${thmeColor('X0OK')}WMMMMWW${thmeColor('X00000000KK0K')}WMM${borderColorTwo('#')}
${borderColorFour('#')}MMMMMMMWXOxxxxxxxxxxxxxxxxxxkxxxxxxxxxxxxxxxxxkkkO0NMMMMMMMMWWMMMMMMMMMMWWWMMMMMMMMMWWWWWWMMMWWMMM${borderColorTwo('#')}
${borderColorFour('#')}MMMMMMMMWNKOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxOKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColorTwo('#')}
${borderColorFour('#')}MMMMMMMMMMWNKOkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkOKNMMMMMMMMMMMMMMMMMMM ${thmeColor('知识改变命运，丰橙成就未来!')} MM${borderColorTwo('#')}
${borderColorFour('#')}MMMMMMMMMMMMMWXKOkxxxxxxxxxxxxxxxxxxxxxxxkOKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColorTwo('#')}
${borderColorFour('#')}MMMMMMMMMMMMMMMMWNK0Okkxxxxxxxxxxxxxk ${thmeColor('Knowledge changes your life，FengCheng makes your future!')} MM${borderColorTwo('#')}
${borderColorFour('#')}MMMMMMMMMMMMMMMMMMMMWNNXXKKK000KKKKXNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColorTwo('#')}
${borderColorFour('#')}${borderColorFour('###################################################')}${borderColorTwo('################################################')}
`;

logoText.split(/\n/g).reduce((rs, text, index) => {
	return rs.then(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log(bgColor(text));
				resolve();
			}, 10);
		});
	});
}, Promise.resolve())