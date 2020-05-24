const _p    =   require('../helpers/simpleAsync');
const _log    =   require('../utils/logger');
const  {createResponse}   =   require('../utils/responseGenerate');

function findNonLex(word) {
	const nonLex = ['to', 'got', 'is', 'have', 'and', 'although', 'or', 'that', 'when', 'while', 'a', 'either', 'more', 'much', 'neither', 'my', 'that', 'the', 'as', 'no', 'nor', 'not', 'at', 'between', 'in', 'of', 'without', 'I', 'you', 'he', 'she', 'it', 'we', 'they', 'anybody', 'one'];
	return nonLex.includes(word);

}

function stringSplitter(str, separator) {
	return str.split(separator).filter((elem) => elem.length);
}

function wordCount(arr) {
	return arr.length;
}

function flatString(str) {
	return stringSplitter(str, '.').map((elem) => stringSplitter(elem, ' ')
		.filter((elem) => elem.length))
		.flat(Infinity);
}

function lexicalDensity(firstNumber, secondNumber) {
	return parseFloat((firstNumber/secondNumber).toFixed(2));
}

function findLexicalDensity(str) {
	return lexicalDensity(wordCount(flatString(str).filter((elem) => !findNonLex(elem))), wordCount(flatString(str)));
}

function lexicalDensityBySentence(str) {
	const srt = stringSplitter(str, '.');
	const lexicalDensityBySentence = [];
	return srt.map((elem) => lexicalDensityBySentence.push(findLexicalDensity(elem)));
}

module.exports.createWord = async (req, res, next) => {

};

module.exports.getComplexity = async (req, res, next) => {
	const text = req.body.text;
	const overallLd = findLexicalDensity(text);
	if(req.query.mode === 'verbose') {
		const sentenceLd = lexicalDensityBySentence(text);
		return res.json(createResponse({sentenceLd, overallLd}));
	}
	return res.json(createResponse({overallLd}));
};