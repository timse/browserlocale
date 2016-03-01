// based on http://blog.ksol.fr/user-locale-detection-browser-javascript/
// and because (https://www.npmjs.com/package/browser-locale) looks inactive and doesn't work properly for `navigator.languages`

export default function getLocale() {
    if (navigator.languages) {
        const langs = [...navigator.languages];
        while (langs.length) {
            let lang = langs.shift();
            if (/[-_]/.test(lang)) {
                return lang;
            }
        }
    }

    if (navigator.language) {
        return navigator.language;
    }

    return navigator.browserLanguage;
}
