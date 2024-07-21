import { abusiveWordsDetection } from "./AbusiveWordsDetection";

describe('Abusive Word Detection', () => {
    it('abusive word detection', () => {
        const list = ['bitch', 'fuck', 'shit'];
        const abcd = abusiveWordsDetection("bitch shit ter", list);
        expect(abcd).toStrictEqual(['bitch', 'shit']);
    });

    it('abusive word detection1', () => {
        const list = ['bitch', 'fuck', 'shit'];
        const abcd = abusiveWordsDetection("fuck you dear", list);
        expect(abcd).toStrictEqual(['fuck']);
    });
});