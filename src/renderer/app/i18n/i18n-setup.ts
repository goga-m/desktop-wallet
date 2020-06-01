import { I18N } from "@config";
import { readFileSync } from "fs";

import { i18n } from "@/app/i18n";

const loadedLanguages = {
	[I18N.defaultLocale]: true,
};

const unloadLanguage = (locale) => {
	// @ts-ignore
	i18n.setLocaleMessage(locale, undefined);
	// @ts-ignore
	i18n.setDateTimeFormat(locale, undefined);
	// @ts-ignore
	i18n.setNumberFormat(locale, undefined);

	loadedLanguages[locale] = false;
};

const setLanguage = (locale) => {
	for (const loadedLanguage of Object.keys(loadedLanguages)) {
		if (loadedLanguage !== I18N.defaultLocale && loadedLanguage !== locale) {
			unloadLanguage(loadedLanguage);
		}
	}

	i18n.locale = locale;
};

const loadLanguage = (languageName, pluginLanguage) => {
	if (!pluginLanguage || i18n.locale === languageName) {
		return;
	}

	// @ts-ignore
	const language = JSON.parse(readFileSync(pluginLanguage.languagePath));

	if (!loadedLanguages[languageName]) {
		i18n.setLocaleMessage(languageName, language.messages);
		i18n.setDateTimeFormat(languageName, language.dateTimeFormats);
		i18n.setNumberFormat(languageName, language.numberFormats);

		loadedLanguages[languageName] = true;
	}

	setLanguage(languageName);
};

export default {
	loadLanguage,
	unloadLanguage,
	setLanguage,
};
