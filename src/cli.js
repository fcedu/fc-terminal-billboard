const chalk = require('chalk');

const bgColor = chalk.hex('#554236');
const thmeColor = chalk.hex('#ff9200');
const borderColor = chalk.hex('#EB7A77')

const logoText = `
${borderColor('##')}${borderColor('##################################################################################################')}
${borderColor('#')}MMMMMMMMMMMMMMMMMMMMMMMWWWNNNNNNNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColor('#')}MMMMMMMMMMMMMMMMMWWNXK0OOOkkkkkkkOO00KXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM ${thmeColor('丰橙学院')} MM${borderColor('#')}
${borderColor('#')}MMMMMMMMMMMMMMWNX0OkxxxxxxxxxxxxxxxxxxxkO0XNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColor('#')}MMMMMMMMMMMWNK0kxxxxxxxxxxxxxxxxxxxxxxxxxxxk0XM ${thmeColor('Copyright © 2019 FengCheng. All Rights Reserved')} MM${borderColor('#')}
${borderColor('#')}MMMMMMMMMMNKOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkOKWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColor('#')}MMMMMMMMWKOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxO0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColor('#')}MMMMMMWN0kxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxk0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColor('#')}MMMMMWXOxxxxxxxxxxxx${thmeColor('kO0K0k')}xxxxxxxxxxxxxxxxxxxxxxxxxxONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColor('#')}MMMMWXOxxxxxxxxxxx${thmeColor('k0XWWMNO')}xxxxxxxxxxxxxxxxxxxxxxxxxxxONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColor('#')}MMMMNOxxxxxxxxxxx${thmeColor('OXWMMMMX')}kxxxxxxxxxxxxxxxxxxxxxxxxxxxx0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColor('#')}MMMWKxxxxxxxxxxx${thmeColor('kKWMMMWNO')}xxxxxxxxxxxxxxxxxxxxxxxxxxxxxkKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColor('#')}MMMNOxxxxxxxxxxx${thmeColor('OXWMWNKO')}xxxx${thmeColor('kOOOOOOOOOOOk')}xxxx${thmeColor('kOOOOOOOOOK')}WMM${thmeColor('WWNN')}WMMMMMMMM${thmeColor('WNW')}MMMMMMMMW${thmeColor('NXXXXNN')}WMMMMMM${borderColor('#')}
${borderColor('#')}MMWXkxxxxxxxxxxx${thmeColor('kKXK0k')}xxxxx${thmeColor('OXNNXXXXXXXXK0k')}x${thmeColor('kKNNXXXXXXXXN')}WMM${thmeColor('N0kkK')}NMMMMMMW${thmeColor('Kk0')}WMMMMW${thmeColor('X0OO0000OOOK')}NMMMM${borderColor('#')}
${borderColor('#')}MMWKkxxxxxxxxxxxxkxxxxxxxxx${thmeColor('0NN0kkkkkkk')}xxxxx${thmeColor('OXWK')}kkkkkkkkOXMM${thmeColor('XOkOkO')}NWMMMMW${thmeColor('0x0')}NMMMN${thmeColor('0kOK')}NWWMWW${thmeColor('X0k0')}NMMM${borderColor('#')}
${borderColor('#')}MMWKkxxxxxxxxxxxxxxxxxxxxxx${thmeColor('0NNO')}xxxxxxxxxxxx${thmeColor('OXW0')}xxxxxxxxOXMM${thmeColor('XOOXKOOK')}WMMMW${thmeColor('0x0')}NMMW${thmeColor('0xO')}NMMMMMMMM${thmeColor('WXX')}WMMM${borderColor('#')}
${borderColor('#')}MMMXOxxxxxxxxxxxxxxxxxxxxxx${thmeColor('0NNK0000000Ok')}xxx${thmeColor('OXWX00000000')}KNMM${thmeColor('XOkX')}W${thmeColor('XOk0')}NMMW${thmeColor('0x0')}NMM${thmeColor('XkkK')}WMMMMMMWWWWWMMMM${borderColor('#')}
${borderColor('#')}MMMN0xxxxxxxxxxxxxxxxxxxxxx${thmeColor('0WWXKKKKKKKKO')}xxx${thmeColor('OXWNXKKXKKKX')}NMMM${thmeColor('XOkX')}WMN${thmeColor('0kO')}NWW${thmeColor('0x0')}NMW${thmeColor('XkkX')}MMMMM${thmeColor('NK00000X')}WMM${borderColor('#')}
${borderColor('#')}MMMWXkxxxxxxxxxxxxxxxxxxxxx${thmeColor('0NNO')}xxxxxxxxxxxx${thmeColor('OXWK')}xxxxxxxONMMM${thmeColor('XOkX')}WMMW${thmeColor('KkOXN0x0')}WMM${thmeColor('XOkK')}WMMMM${thmeColor('WNXXXOx0')}WMM${borderColor('#')}
${borderColor('#')}MMMMWKkxxxxxxxxxxxxxxxxxxxx${thmeColor('0NNO')}xxxxxxxxxxxx${thmeColor('OXW0')}xxxxxxkKWMMM${thmeColor('XOkX')}WMMMW${thmeColor('XOk00k0')}NMMW${thmeColor('KkOX')}WMMMMMMW${thmeColor('NOx0')}WMM${borderColor('#')}
${borderColor('#')}MMMMMW0kxxxxxxxxxxxxxxxxxxx${thmeColor('0NXO')}xxxxxxxxxxxx${thmeColor('kXWXOOOOOOK')}WMMMM${thmeColor('XOkX')}WMMMMMN${thmeColor('0kkk0')}NMMMW${thmeColor('KOk0K')}NNNNXK${thmeColor('Okx0')}WMM${borderColor('#')}
${borderColor('#')}MMMMMMWKkxxxxxxxxxxxxxxxxxx${thmeColor('OKKk')}xxxxxxxxxxxx${thmeColor('k0XXXXXXN')}WWMMMMM${thmeColor('NK0')}NMMMMMMMW${thmeColor('X0OK')}WMMMMWW${thmeColor('X00000000KK0K')}WMM${borderColor('#')}
${borderColor('#')}MMMMMMMWXOxxxxxxxxxxxxxxxxxxkxxxxxxxxxxxxxxxxxkkkO0NMMMMMMMMWWMMMMMMMMMMWWWMMMMMMMMMWWWWWWMMMWWMMM${borderColor('#')}
${borderColor('#')}MMMMMMMMWNKOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxOKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColor('#')}MMMMMMMMMMWNKOkxxxxxxxxxxxxxxxxxxxxxxxxxxxxxkOKNMMMMMMMMMMMMMMMMMMM ${thmeColor('知识改变命运，丰橙成就未来!')} MM${borderColor('#')}
${borderColor('#')}MMMMMMMMMMMMMWXKOkxxxxxxxxxxxxxxxxxxxxxxxkOKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColor('#')}MMMMMMMMMMMMMMMMWNK0Okkxxxxxxxxxxxxxk ${thmeColor('Knowledge changes your life，FengCheng makes your future!')} MM${borderColor('#')}
${borderColor('#')}MMMMMMMMMMMMMMMMMMMMWNNXXKKK000KKKKXNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM${borderColor('#')}
${borderColor('#')}${borderColor('###################################################')}${borderColor('################################################')}
`;

logoText.split(/\n/g).reduce((rs, text, index) => {
	return rs.then(() => {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log(bgColor(text));
				resolve();
			}, 20);
		});
	});
}, Promise.resolve())