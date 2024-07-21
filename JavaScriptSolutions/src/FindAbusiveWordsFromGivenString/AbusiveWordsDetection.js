export const abusiveWordsDetection = (input, listofwords) => {
    
    try { 
        if (input === null || input === '') {
            return null;
        }
        let emptyArray = [];
        if (listofwords !== null || listofwords !== undefined) {
            const pattern = new RegExp(`\\b(?:${listofwords.join('|')})\\b`, 'gi');
            const foundWords = input.match(pattern);
            emptyArray = emptyArray.concat(foundWords);
        }
        return emptyArray[0] ? emptyArray : null;
    } catch(error){
        return null;
    }
};

export const testCode = () => {
    const list = ['bitch', 'fuck', 'shit'];
    const abcd = abusiveWordsDetection("bitch shit ter", list);
    console.log(abcd);
}
