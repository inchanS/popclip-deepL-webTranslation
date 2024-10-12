// languages list comes from https://api-free.deepl.com/v2/languages
const langs = require('./langs.json').langs;
// sort the languages by name
langs.sort((a, b) => {
    return a.name.localeCompare(b.name);
});

function webTranslate(text, lang) {
    // escape backslash before encoding (DeepL website needs this or it truncates at the slash)
    const escapedText = text.replace(/\//g, '\\/');
    const url = `https://www.deepl.com/translator#en/${lang}/${encodeURIComponent(escapedText)}`;
    popclip.openUrl(url);
}

// our action
exports.actions = [{
    requirements: ['text'],
    code: (input, options) => {
        webTranslate(input.text, options.destlang);
    }
}];

// the dynamically generated extension options
exports.options = (() => {
    const { names, codes } = languageList();
    const languageOption = {
        identifier: 'destlang',
        label: 'Website Output Language',
        type: 'multiple',
        valueLabels: names,
        values: codes,
        defaultValue: 'EN-US',
        description: "Select the target language for DeepL Website translation."
    };
    return [languageOption];
})();

// build the language list from the json file
function languageList() {
    const result = { codes: [], names: [] };
    for (const lang of langs) {
        result.names.push(lang.name);
        result.codes.push(lang.language);
    }
    return result;
}