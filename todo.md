
# TODO

Stwórz komponent o nazwie FeedPreview.

Wytyczne komponentu:
- jako agrument props przyjmuje url do kanale rss.
- komponent ma pokazywac podglad aktualnych tresci w kanale rss
- ostyluj html tak, aby był przyjazdny dla internauty
- komponent ma posiadac pole input do szukania wsrórd wpisow po tytule elementu
- komponent zintegruj z tym projektem, korzystaj z zasad zawartych w README.md
- komponent ma byc do uzycia przez kod: 
    ```html
    <feed-preview :url="https://www.gamespot.com/feeds/mashup/"></feed-preview>
    ```
- kiedy nie mozna pobrac danych pod danym adresem url,
  ma się wyswietlic komunikat o bledzie pobieraniu pliku i przycik do ponowienia pobrania
