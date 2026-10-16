// Настройки сайта My_App. Меняются в одном месте.
window.MY_APP = {
  // Адрес функции оплаты (Supabase Edge Function "pay")
  payUrl: "https://vhocmevgvinpfezwpaqc.supabase.co/functions/v1/pay",

  // Ссылки на скачивание. Файлы загружаются в хранилище Supabase (бакет "downloads") или на ваш хостинг.
  downloadWindows: "https://vhocmevgvinpfezwpaqc.supabase.co/storage/v1/object/public/downloads/My_App_Setup_2.0.0.exe",
  downloadMac: "", // пока пусто: кнопка для macOS отключена

  version: "2.0.0",
  priceMonth: 699,
  priceYear: 2499,

  // Контакты для поддержки (заполните)
  supportEmail: "my_app@internet.ru"
};
