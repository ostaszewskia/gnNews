import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          mainPage: {
            title: "Welcome to gnNews",
          },
          footer: {
            articles: "Number of articles: ",
          },
          header: {
            button: "Close",
            popup: {
              title: "Difficulties and pleasures",
              descriptionNegative: "The biggest difficulty in creating the application turned out to be both designing its visual side, so that it was clear, easy to use and friendly to the eye, as well as implementation of RWD so that the application was created in accordance with the principle of pixel perfect.",
              descriptionPositive: "The most enjoyable part of the project turned out to be learning about new libraries (such as react country flag or country list), which significantly improved the readability of the code, looking for solutions to the encountered problems and, of course, coding :)"
            },
            drawer: "Select country"
          },
          canvas: {
            noArticles: "No articles"
          }
        },
      },
      pl: {
        translation: {
          mainPage: {
            title: "Witamy w gnNews",
          },
          footer: {
            articles: "Liczba artykułów: ",
          },
          header: {
            button: "Zamknij",
            popup: {
              title: "Trudności i przyjemności",
              descriptionNegative: "Największą trudnością przy tworzeniu aplikacji okazało się zarówno zaprojektowanie jej strony wizualnej, tak aby była przejrzysta, prosta w obsłudze oraz przyjazna dla oka, jak i implementacja RWD tak aby aplikacja powstała zgodnie z zasadą pixel perfect.",
              descriptionPositive: "Najprzyjemniejszą częścią projektu okazało się poznawanie nowych bibliotek (takich jak react country flag albo country list), które znacząco polepszyły czytelność kodu, szukanie rozwiązań do napotkanych problemów oraz oczywiście kodowanie :)"
            },
            drawer: "Wybierz państwo"
          },
          canvas: {
            noArticles: "Brak artykułów"
          }
        },
      },
    },
  });

export default i18n;
