import type { LayoutLoad } from './$types';
import { locale, loadTranslations } from '$locales';

export const load: LayoutLoad = async ({ url }) => {
  const { pathname } = url;
  const defaultLocale = 'id';
  const initLocale = locale.get() || defaultLocale;
  await loadTranslations(initLocale, pathname);
  return {};
};
