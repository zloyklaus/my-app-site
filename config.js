// Настройки сайта My_App. Меняются в одном месте.
window.MY_APP = {
  // Адрес функции оплаты (Supabase Edge Function "pay")
  payUrl: "https://vhocmevgvinpfezwpaqc.supabase.co/functions/v1/pay",

  // Адрес функции лицензий (страница «Мои бонусы»)
  licenseUrl: "https://vhocmevgvinpfezwpaqc.supabase.co/functions/v1/license",

  // Реферальная программа: бонусные дни (должны совпадать с секретами REF_* на сервере)
  referral: { inviterDays: 7, friendDays: 7, capDays: 90 },

  // Ссылки на скачивание. Файлы загружаются в хранилище Supabase (бакет "downloads") или на ваш хостинг.
  downloadWindows: "https://github.com/zloyklaus/my-app-site/releases/download/v1.0.1/My_App_Setup_1.0.1.exe",
  downloadMac: "", // пока пусто: кнопка для macOS отключена

  version: "1.0.1",
  // Цены в рублях: запасные значения на случай, если сервер недоступен. Актуальные цены сайт берёт у функции pay
  // (таблица prices в базе), поэтому при смене цены править этот файл не обязательно.
  prices: { month: 799, half: 3830, year: 6710 },
  months: { month: 1, half: 6, year: 12 },

  // Контакты для поддержки (заполните)
  supportEmail: "my_app@internet.ru"
};
