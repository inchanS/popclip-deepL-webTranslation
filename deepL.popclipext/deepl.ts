// languages list comes from https://api-free.deepl.com/v2/languages
import { langs } from './langs.json'
// sort the languages by name
langs.sort((a, b) => {
  return a.name.localeCompare(b.name)
})

// 2025년. 여름 이후 DeepL 웹사이트에서는 URL Get 방식의 파라미터를 완전히 지원하지 않게 되었다.
// 이에 아래와 같이 방식을 바꾸었다. (이 방식이 싫다면 DeepL 앱을 설치 후, Popclip 공식 익스텐션을 설치하여 사용할 수 있다.)
// PopClip 액션: 클립보드 복사 및 DeepL 웹사이트 열기

export const actions: Action[] = [{
    title: 'DeepL',
    icon: 'iconify:simple-icons:deepl',
    requirements: ['text'],
  code: (input, options) => {
      popclip.copyText(input.text);

      const lang = options.destlang;
      const url = `https://www.deepl.com/${lang.toLowerCase()}/translator`;

      popclip.openUrl(url);
  }
}]

// the dynamically generated extension options
export const options: Option[] = (() => {
  const { names, codes } = languageList()
  const languageOption: Option = {
    identifier: 'destlang',
    label: 'Website Output Language',
    type: 'multiple',
    valueLabels: names,
    values: codes,
    defaultValue: 'KO',
    description: "Select the target language for DeepL Website translation."
  }
  return [languageOption]
})()

// build the language list from the json file
function languageList (): { names: string[], codes: string[] } {
  const result = { codes: [] as string[], names: [] as string[] }
  for (const lang of langs) {
    result.names.push(lang.name)
    result.codes.push(lang.language)
  }
  return result
}