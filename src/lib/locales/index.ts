import i18n, { type Config } from 'sveltekit-i18n';

/*
 * Project: kodestatistika
 * Created by Suastika Adinata on Friday, 28th April 2023
 * Copyright (c) - 2023
 */

const config: Config = {
  loaders: [
    {
      locale: 'id',
      key: 'home',
      loader: async () => (await import('./id/index.json')).default,
    },
    {
      locale: 'en',
      key: 'home',
      loader: async () => (await import('./id/index.json')).default,
    }
  ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);