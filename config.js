// Настройки сайта My_App. Меняются в одном месте.
window.MY_APP = {
  // Адрес функции оплаты (Supabase Edge Function "pay")
  payUrl: "https://vhocmevgvinpfezwpaqc.supabase.co/functions/v1/pay",

  // Адрес функции лицензий (страница «Мои бонусы»)
  licenseUrl: "https://vhocmevgvinpfezwpaqc.supabase.co/functions/v1/license",

  // Реферальная программа: бонусные дни (должны совпадать с секретами REF_* на сервере)
  referral: { inviterDays: 7, friendDays: 7, capDays: 90 },

  // Ссылки на скачивание. Файлы загружаются в хранилище Supabase (бакет "downloads") или на ваш хостинг.
  downloadWindows: "https://github.com/zloyklaus/my-app-site/releases/download/v1.2.6/My_App_Setup_1.2.6.exe",
  downloadMac: {
    arm64: "https://github.com/zloyklaus/my-app-site/releases/download/v1.2.6/My_App_1.2.6_mac_arm64.dmg", // Apple Silicon (M1 и новее)
    amd64: "https://github.com/zloyklaus/my-app-site/releases/download/v1.2.6/My_App_1.2.6_mac_amd64.dmg"  // Intel
  },

  version: "1.2.6",
  // Цены в рублях: запасные значения на случай, если сервер недоступен. Актуальные цены сайт берёт у функции pay
  // (таблица prices в базе), поэтому при смене цены править этот файл не обязательно.
  prices: { month: 599, half: 2870, year: 5030 },
  months: { month: 1, half: 6, year: 12 },

  // Контакты для поддержки (заполните)
  supportEmail: "my_app@internet.ru"
};
