// Настройки сайта My_App. Меняются в одном месте.
window.MY_APP = {
  // Адрес функции оплаты (Supabase Edge Function "pay")
  payUrl: "https://vhocmevgvinpfezwpaqc.supabase.co/functions/v1/pay",

  // Адрес функции лицензий (страница «Мои бонусы»)
  licenseUrl: "https://vhocmevgvinpfezwpaqc.supabase.co/functions/v1/license",

  // Реферальная программа: бонусные дни (должны совпадать с секретами REF_* на сервере)
  referral: { inviterDays: 7, friendDays: 7, capDays: 90 },

  // Ссылки на скачивание. Файлы загружаются в хранилище Supabase (бакет "downloads") или на ваш хостинг.
  downloadWindows: "https://vhocmevgvinpfezwpaqc.supabase.co/storage/v1/object/public/downloads/My_App_Setup_2.0.0.exe",
  downloadMac: "", // пока пусто: кнопка для macOS отключена

  version: "2.0.0",
  // Цены в рублях и срок в месяцах (должны совпадать с ценами в функции pay)
  prices: { month: 699, half: 3350, year: 5890 },
  months: { month: 1, half: 6, year: 12 },

  // Контакты для поддержки (заполните)
  supportEmail: "my_app@internet.ru"
};
