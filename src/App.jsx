import React, { useState, useEffect, useRef } from "react";
import {
  Plus,
  Trash2,
  Play,
  CheckCircle,
  XCircle,
  BookOpen,
  Save,
  RefreshCcw,
  ArrowRight,
  Edit3,
  FileText,
  Download,
  AlertCircle,
  Sparkles,
  Loader2,
  MessageSquare,
  BrainCircuit,
  Upload,
  CloudDownload,
  Filter,
  Trophy,
  Home,
} from "lucide-react";

// =================================================================================
// TU WKLEJ SWOJĄ BAZĘ PYTAŃ
// Oznacz poprawną odpowiedź dodając gwiazdkę (*) przed literą, np. "*a." lub "* a."
// =================================================================================
const BAZA_PYTAN_TEKST = `
1. Ochroną wspólnotowych wzorów przemysłowych zajmuje się:
   a. Urząd Publikacji UE.
   b. Międzynarodowy Urząd Patenatowy.
   *c. Urząd Harmonizacji Rynku Wewnętrznego.
   d. Europejski Inspektor Ochrony Danych.

2. Wzór użytkowy jest określany również jako:
   a. Wzór przemysłowy.
   b. Znak towarowy.
   c. Wynalazek.
   *d. Żaden z wymienionych w pozostałych punktach.

3. Co nie jest zarejestrowanym chronionym oznaczeniem geograficznym?
   a. Ser Koryciński.
   b. Kiełbasa lisiecka.
   *c. Olej konopny.
   d. Rogal Świętomarciński.

4. Co oznacza symbol TM?
   a. Oryginalny produkt.
   *b. Znak towarowy.
   c. Zarejestrowany znak towarowy.
   d. Znak usługowy.

5. Według ustawy o prawie autorskim i prawach pokrewnych cechy utworu to:
   a. musi być wartościowy.
   *b. każdy przejaw działalności twórczej o indywidualnym charakterze.
   c. jest dobrem wyłącznie intelektualnym.
   d. jest dobrem materialnym.

6. W którym wieku zarejestrowano pierwszy patent.
   a. XVII wiek
   b. XIV wiek
   c. XVIII wiek
   *d. XV wiek

7. Czym chronione są wynalazki?
   a. Znakiem towarowym.
   *b. Patentem.
   c. Prawem ochronnym na wynalazek.
   d. Prawami ochronnymi.

8. Czy można korzystać z printscreenów stron WWW w publikacjach?
   *a. Tylko na użytek osobisty bądź zgodnie z prawem cytatu.
   b. Tak.
   c. Tak, ale nie w celach komercyjnych.
   d. Nie.

9. Wskaż zdanie niezgodne z ustawą o prawie autorskim i prawach pokrewnych:
   a. Uczelni w rozumieniu przepisów o szkolnictwie wyższym przysługuje pierwszeństwo w opublikowaniu pracy dyplomowej studenta.
   *b. Utwór jest przedmiotem prawa autorskiego od chwili ustalenia ale musi mieć postać ukończoną.
   c. Ochrona przysługuje twórcy niezależnie od spełnienia jakichkolwiek formalności.
   d. Utwór jest przedmiotem prawa autorskiego od chwili ustalenia, chociażby miał postać nieukończoną.

10. Prawo "sui generis" dotyczy":
   a. książek.
   b. nie ma takiego prawa.
   *c. baz danych.
   d. utworów muzycznych

11. W którym roku Polska spełniła wymogi porozumienia TRIPS?
   *a. 2000
   b. 2004
   c. 1998
   d. 2001

12. Kto może korzystać z miedzynarodowej procedury uzyskiwania patentów w wielu państwach na świecie jednocześnie (Patent Cooperation Treaty - PCT)?
   a. Obywatele krajów europejskich.
   b. Narodowość nie ma znaczenia.
   c. Obywatele UE.
   *d. Obywatele lub rezydenci państw członkowskich Układu PCT.

13. Znak towarowy, celem ochrony, należy zgłosić w:
   a. Urzędzie Miasta.
   *b. Urzędzie Patentowym RP.
   c. Urzędzie Skarbowym.
   d. ZAiKSie.

14. Co to jest wynalazek?
   *a. Nowy produkt lub proces stanowiący rozwiązanie problemu technicznego.
   b. Rzecz codziennego użytku.
   c. Coś istniejącego w przyrodzie.
   d. Oczywiste rozwiązanie problemu.

15. Czego nie zaliczamy do aktów prawnych regulujących prawo do właśności intelektualnej?
   a. Ustawa o zwalczaniu nieuczciwej konkurencji.
   b. Ustawa o prawie autorskim i prawach pokrewnych.
   c. Ustawa o ochronie baz danych.
   *d. Ustawa o finansowaniu wynalazków.

16. Po ilu latach wygasają majątkowe prawa autorskie?
   a. Nigdy.
   *b. Po 70 latach od śmierci twórcy.
   c. Po 70 latach od utworzenia.
   d. Po 50 latach od śmierci twórcy.

17. Długość trwania pojedynczego okresu ochronnego na wzór przemysłowy wynosi:
   a. 25 lat.
   *b. 5 lat.
   c. 10 lat.
   d. 20 lat.

18. Kodu opartego na licencji GNU GPL nie wolno:
   *a. używać w programach na innej licencji.
   b. analizować, jak działa.
   c. zmieniać.
   d. publicznie upowszechniać.

19. Co dzieje się z utworem z chwilą zakończenia okresu ochrony prawnoautorskiej?
   a. Staje się dobrem publicznym, jednak jego reprodukcja uwarunkowana jest przymusem uiszczenia opłaty.
   b. Nic się z nim nie dzieje.
   *c. Staje się domeną publiczną i jego reprodukcja od tej chwili nie wymaga płacenia tantiem.
   d. Prawa autorskie są dziedziczone przez spadkobierców autora.

20. Aby rozwiązanie mogło być uznane za wzór użytkowy powinno m.in.:
   *a. być użyteczne i mieć charakter techniczny.
   b. być bardzo zaawansowane technicznie.
   c. posiadać odpowiedni poziom wynalazczy.
   d. być lepsze od innego istniejącego.

21. Z którego roku jest Konwencja Berneńska o ochronie dzieł literackich i artystycznych?
   *a. Druga połowa XIX w.
   b. Druga połowa XVIII w.
   c. Pierwsza połowa XX w.
   d. Pierwsza połowa XIX w.

22. Za wynalazek biotechnologiczny nie uważa się:
   a. Materiału biologicznego, który jest wyizolowany ze swojego naturalnego środowiska lub wytworzony sposobem technicznym, nawet jeżeli poprzednio występował w naturze.
   *b. Ciała ludzkiego w różnych jego stadiach formowania się i rozwoju, ani zwykłego odkrycia jednego z jego elementów, włącznie z sekwencją lub częściową sekwencją genu.
   c. Elementu wyizolowanego z ciała ludzkiego lub w inny sposób wytworzonego sposobem technicznym, włącznie z sekwencją lub częściową sekwencją genu.
   d. Wynalazku dotyczącego roślin lub zwierząt, jeżeli możliwości techniczne stosowania wynalazku nie ograniczają się do szczególnej odmiany roślin lub rasy zwierząt.

23. Co nie jest tzw. "dozwolonym użytkiem publicznym"?
   a. Korzystanie z utworów dla celów bezpieczeństwa publicznego.
   b. Niezarobkowe korzystanie z utworu dla dobra niepełnosprawnych.
   c. Publiczne wykonywanie utworów podczas ceremonii religijnych lub uroczystości szkolnych.
   *d. Korzystanie z utworu na blogu.

24. Na jakiej podstawie urząd patentowy RP dokonuje rejestracji wzoru przemysłowego?
   *a. Na podstawie badania formalnego.
   b. Na podstawie wniesonej opłaty.
   c. Tylko na podstawie opisu.
   d. Na podstawie schematu działania.

25. Co jest warunkiem trwania prawa ochronnego?
   *a. Tylko uiszczanie opłaty okresowej.
   b. Uiszczanie opłaty okresowej oraz  coroczna rejestracja.
   c. Uiszczanie opłaty okresowej oraz aktualizacja wzoru.
   d. Tylko coroczna aktualizacja wzoru.

26. Współtwórcom na mocy ustawy nie przysługuje:
   a. prawo autorskie wspólnie.
   b. prawo dochodzenia roszczeń z tytułu naruszenia prawa autorskiego do całości utworu.
   *c. prawo autorskie do całości utworu bez koniecznej zgody wszystkich współtwórców.
   d. prawo określenia wielkości udziałów przez sąd, na podstawie wkładów pracy twórczej.

27. Czego zabrania licencja freeware?
   a. zarabiania na produktach stworzonych przy użyciu programu na tej licencji.
   b. ujawniania kodu źródłowego.
   c. używania w celach komercyjnych.
   *d. czerpania korzyści z programu objętą tę licencją przez osoby trzecie.

28. Czy opracowanie cudzego utworu może być przedmiotem prawa autorskiego?
   a. Tak, nawet jeśli twórca utworu pierwotnego na to nie zezwolił.
   b. Tak, nawet jeśli utwór powstał tylko w wyniku inspiracji.
   c. Nie, ponieważ utwór jest cudzy.
   *d. Tak, w szczególności tłumaczenie, przeróbka, adaptacja.

29. Ile istnieje klas usługowych dotyczących znaków towarowych?
   a. 24
   b. 34
   *c. 11
   d. 28

30. Które kryterium zdolności patentowej wynalazku nie jest formalnie brane pod uwagę przy przyznawaniu patentu?
   a. Kryterium nowości.
   b. Kryterium nieoczywistości.
   *c. Kryterium wartości.
   d. Kryterium przemysłowej stosowalności.

31. Kiedy bez obaw możemy kopiować treści zawarte w Internecie?
   a. Wyłącznie gdy treść należy do domeny publicznej.
   b. Wyłącznie gdy gdy treść jest oparta na licencji GPL.
   *c. Wszystkie odpowiedzi są poprawne.
   d. Wyłącznie za zgodą autora.

32. Co jest w szczególności celem oznaczeń geograficznych?
   a. Nie mają praktycznie żadnego znaczenia, to tylko ich pełna nazwa.
   *b. Ochrona interesów przedsiębiorców, którzy oferują towary opatrzone oznaczeniami wskazującymi na ich pochodzenie z danego obszaru geograficznego, a także jakość (cech i właściwości) tych towarów.
   c. Nadanie nazwy produktowi, aby producenci z innych rejonów mogli korzystać z unikalności tych towarów.
   d. Urozmaicenie nazw towarów, aby były atrakcyjniejsze dla konsumenta.

33. Autorskie prawo osobiste jest:
   a. nie ma takiego prawa.
   b. ograniczone w czasie.
   *c. niezbywalne.
   d. zbywalne.

34. Autorskie prawa majątkowe w przypadku utworu audiowizualnego (np.filmu), wygasają w ciągu 70lat od:
   a. od śmierci pierwszego zmarłego współtwórcy.
   b. premiery filmu.
   c. od śmierci reżysera.
   *d. od śmierci najpóźniej zmarłej z wymienionych osób: głównego reżysera, autora scenariusza, autora dialogów, kompozytora muzyki skomponowanej do utworu audiowizualnego.

35. Co charakteryzują wzory użytkowe?
   a. Strukturę, materiał wytworu.
   *b. Zestawienie przedmiotów.
   c. Kształt produktu.
   d. Ornamentację, kolorystykę, układ linii.

36. Prawo autorskie chroni bazy danych:
   a. zawierające utwory.
   *b. będące utworami.
   c. nie zawierające utworów.
   d. prawo autorskie nie obejmuje baz danych.

37. Wzory przemysłowe chronione na terenie Unii Europejskiej są zapisane w:
   *a. Rejestrze Wzorów Wspólnotowych.
   b. Rejestrze Wzorów Przemysłowych.
   c. Rejestrze znaków towarowych.
   d. Rejestrze Wzorów Użytkowych.

38. Co to jest odkrycie naukowe?
   a. Nowy proces technologiczny.
   b. Nowe urządzenie.
   *c. Obserwacja nieznanego zjawiska w przyrodzie.
   d. Nowa koncepcja, idea, pomysł.

39. Co oznacza symbol (R) (litera R w okręgu)?
   a. Chronione oznaczenie geograficzne.
   b. Oryginalny produkt.
   *c. Zarejestrowany znak towarowy.
   d. Oznaczenie zastrzeżonych praw autorskich.

40. Gdzie i od kiedy chronione są wynalazki?
   a. Rzym, 1470 rok
   *b. Wenecja, 1474 rok.
   c. Paryż, 1574 rok.
   d. Londyn, 1574 rok.

41. Co reguluje porozumienie TRIPS?
   a. Handel międzynarodowy.
   *b. Ochronę praw autorskich i pokrewnych.
   c. Ochronę przed nieuczciwą konkurencją.
   d. Ochronę i sposób przekazywania wiedzy hnow-how.

42. Ile kryteriów musi spełniać wynalazek by go opatentować?
   a. 2
   b. 4
   *c. 3
   d. 1

43. Które z poniższych stwierdzeń dotyczących ochrony programów komputerowych są prawdziwe?
   *a. Dozwolone jest sporządzenie kopii zapasowej programu przez licencjobiorcę.
   b. Zasady rozpowszechniania programu przez jego twórcę regulują stosowne instytucje.
   c. Ochronie podlegają idee będące podstawą działania stworzonego programu.
   d. Prawa majątkowe do programu stworzonego w ramach stosunku pracy przechodzą zawsze na pracodawcę.

44. Jak długo może trwać  maksymalnie ochrona patentowa  liczona od daty dokonania zgłoszenia wynalazku w Urzędzie Patentowym RP?
   a. 25 lat
   *b. 20 lat
   c. 10 lat
   d. 15 lat

45. Co jest objęte prawem autorskim?
   a. Idee i procedury.
   *b. Programy komputerowe.
   c. Metody i zasady działania.
   d. Koncepcje matematyczne.

46. Czego nie należy uczynić, aby otrzymać wzór użytkowy?
   *a. Dokonać odgórnej płatności na 10 lat.
   b. Sporządzić szkic / rysunek.
   c. Opisać zastrzeżenia ochronne.
   d. Sporządzić skrót / streszczenie wzoru.

47. Co oznacza rejestracja znaku towarowego w OHIM?
   a. W OHIM nie rejestruje się znaków towarowych.
   b. Ochrona znaku jest skuteczna w Polsce.
   c. Ochrona znaku jest skuteczna na całym świecie.
   *d. Ochrona znaku jest skuteczna na terytorium UE.

48. Co musi charakteryzować wzór przemysłowy, aby mógł uzyskać ochronę w Urzędzie Patentowym?
   *a. Musi być nowy oraz mieć indywidualny charakter.
   b. Wystarczy, aby był nowy.
   c. Wystarczy, aby miał indywidualny charakter.
   d. Musi być nowy lub mieć indywidualny charakter.

49. Autor utworu może się zrzec praw osobistych na rzecz:
   a. wydawców.
   b. współtwórców.
   *c. nie może się zrzec.
   d. najbliższej rodziny.

50. Gdzie jest zawarta opłata reprograficzna związania z wykorzystywaniem utworów w ramach dozwolonego użytku publicznego?
   a. W cenie komputerów.
   b. W cenie książek i czasopism.
   *c. W cenie urządzeń i nośników służących kopiowaniu.
   d. Nie pobiera się takich opłat.

51. Ile czasu ma twórca na rejestrację wzoru przemysłowego od chwili powszechnego udostępnienia?
   a. 18 miesięcy.
   *b. 12 miesięcy.
   c. 2 lata.
   d. 6 miesięcy.

52. Co oznaczamy znakiem (c) (literaz C w okręgu)?
   *a. Prawa autorskie dla dzieł innych niż nagrania muzyczne.
   b. Prawa autorskie dla dzieł muzycznych.
   c. Znak handlowy.
   d. Prawa autorskie dla rysunków oraz szkiców.

53. Co daje podstawę do ochrony towaru oznaczeniem geograficznym?
   a. Specyficzna, oryginalna nazwa wymyślona przez osobę z danego regionu.
   b. Specyficzna, oryginalna procedura wytwarzania towaru wymyślona przez osobę z danego regionu.
   c. W danym regione produkuje się ten towar w większych ilościach niż w pozostałych regionach danego kraju.
   *d. Określona jakość, cechy towaru wynikające bezpośrednio z geograficznego pochodzenia towaru.

54. Ile istnieje klas towarowych dotyczących znaków towarowych?
   a. 11
   *b. 34
   c. 28
   d. 24

55. Posiadając stronę internetową na zagranicznym serwerze, pod prawo którego kraju podlegamy w odniesieniu do jej zawartości?
   a. W tym przypadku jest się bezkarnym.
   b. Prawo kraju, w którym fizycznie znajduje się serwer.
   *c. Prawo kraju, w którym mieszkamy.
   d. Prawo dowolnego kraju, z którego może wywodzić się ewentualna pokrzywdzona przez nas osoba.

56. Jak się zmienia opłata za ochronę wynalazku za każdy kolejny rok po 3 roku ochrony?
   a. Maleje.
   *b. Wzrasta.
   c. To zależy od wynalazku.
   d. Nie zmienia się.

57. Co jest wzorem użytkowym?
   a. Użyteczne odkrycie naukowe
   b. Użyteczny program do maszyny cyfrowej.
   c. Użyteczna metoda matematyczna.
   *d. Użyteczne rozwiązanie o charakterze technicznym dotyczące kształtu.

58. Które zdanie, dotyczące polskich praw autorskich do filmów, jest prawdziwe?
   *a. Prawa autorskie są oddzielne do scenariusza i soundtracku.
   b. Wszystkie prawa autorskie należą tylko do producenta filmu.
   c. Prawa autorskie należą wyłącznie do sponsorów filmu.
   d. Prawa autorskie należą tylko do autora scenariusza.

59. Jaką formę powinna przyjąć baza danych, aby podlegać prawnej ochronie w Polsce?
   *a. dowolną.
   b. elektroniczną.
   c. papierową.
   d. specjalnie zdefiniowaną.

60. Spory dotyczące naruszeń praw ochronnych znaków towarowych rozpatrywane są przez:
   a. Trybunał Konstytucyjny.
   *b. Sądy.
   c. Trybunał Stanu.
   d. Urząd Patentowt RP.

61. Ile wynosi czas trwania ochrony baz danych?
   a. 10 lat.
   b. 20 lat.
   c. 5 lat.
   *d. 15 lat.

62. Jak domyślnie rozdzielane są prawa do dzieła w przypadku kilku autorów?
   a. Główny autor 50%, reszta po równo.
   b. Przez specjalną komisję powołaną przez Urząd Patentowy.
   *c. Po równo dla każdego twórcy.
   d. Przez sąd.

63. Co nie odnosi się do wzoru użytkowego?
   a. Innowacyjność pod kątem technicznym i konstrukcyjnym.
   *b. Indywidualny charakter wytworu, nadany mu przez kolorystykę lub strukturę.
   c. Praktyczność użytkowania w życiu odziennym.
   d. Użyteczne roziązanie otyczące zestawienia przedmiotu o trwałej postaci.

64. Jak długo maksymalnie może trwać ochrona wzoru przemysłowego w Polsce?
   a. 20
   *b. 25
   c. 10
   d. 15

65. Jaka jest odpowiedzialność karna za naruszenie prawa autorskiego?
   a. Tylko kara ograniczenia wolności.
   b. Tylko grzywna.
   *c. Kara pozbawienia wolności do lat 3.
   d. Wszystkie odpowiedzi są poprawne.

66. Współtwórcą utworu audiowizualnego nie jest:
   a. reżyser.
   b. operator obrazu.
   c. twórca scenariusza.
   *d. kierownik produkcji.

67. Co chronią oznaczenia geograficzne?
   a. Usługi.
   b. Firmy regionalne.
   c. Wytwórnie danych produktów.
   *d. Towary.

68. Koszt każdego następnego okresu ochrony na wzór przemysłowy:
   a. maleje.
   b. jest zależny od wzoru.
   *c. rośnie.
   d. nie zmienia się.

69. Która z poniżej wymienionych rzeczy nie jest uważana za wzór użytkowy?
   *a. Gra.
   b. Butelka.
   c. Okno.
   d. Wiertarka.

70. Światowa Organizacja Własności Intelektualnej ang. skrót WIPO zrzesza (wybierz przedział):
   a. 186-188 państw.
   b. 182-185 państwa.
   c. 189-192 państwa.
   *d. 193-196 państwa

71. Prawo ochronne posiada znak towarowy, w którego sąsiedztwie znajduje się w okręgu litera:
   a. Z
   b. C
   *c. R
   d. Q

72. Czy jest różnica między oznaczeniem geograficznym nazw regionalnych, a oznaczeniem pochodzenia?
   a. Nie ma między nimi różnicy.
   b. Tak, oznaczenia geograficzne służą do oznaczenia towarów pochodzących z określonego terenu, które zostały wytworzone lub przetworzone na terenie wskazanym oznaczeniem, natomiast oznaczenia pochodzenia dotyczą towarów, które zostały wytworzone lub przetworzone na terenie wskazanym oznaczeniem.
   c. Tak, oznaczenia pochodzenia służą do oznaczenia towarów pochodzących z określonego terenu, które zostały wytworzone lub przetworzone na terenie wskazanym oznaczeniem, natomiast oznaczenia geograficzne dotyczą towarów, które zostały wytworzone lub przetworzone na terenie wskazanym oznaczeniem.
   *d. Tak, oznaczenia geograficzne dotyczą towarów, które zawdzięczają swoje właściwości oddziaływaniu środowiska geograficznego, natomiast przy oznaczeniach pochodzenia szczególne walory produktów przypisywane są miejscu pochodzenia.

73. Prawa autorskie chronią:
   a. koncepcje matematyczne.
   *b. programy komputerowe.
   c. Idee.
   d. Procedury.

74. Czy można na łamach portalu/strony udostępniać miniatury grafik znalezionych w Google?
   a. Nie.
   b. To zależy od rozmiaru grafiki.
   c. Tak, bezwarunkowo.
   *d. Tylko pod warunkiem, że autor grafiki wyraża na to zgodę.

75. Jak długo trwa najkrótszy okres ochrony znaku towarowego?
   *a. 10 lat
   b. 5 lat
   c. 15 lat
   d. 20 lat

76. Od kiedy utwór jest przedmiotem prawa autorskiego?
   a. Od pierwszego wykonania.
   b. Od upublicznienia.
   *c. Od ustalenia.
   d. Od opublikowania.

77. Ile wynosi czas trwania prawa ochronnego na wzór użytkowy?
   a. 25 lat.
   *b. 10 lat.
   c. Bezterminowo.
   d. 20 lat.

78. Prawa autorskie dzielimy na:
   *a. osobiste i majątkowe.
   b. tymczasowe.
   c. zbiorowe.
   d. indywidualne.

79. Wzorem przemysłowym nie jest:
   a. wzór ozdobenj czcionki.
   b. wzór przemysłowy okna.
   c. fason sukienki.
   *d. gwint nakrętki.

80. Co może być utworem (w rozumieniu praw autorskich)?
   a. Procedury ale wyłącznie technologiczne, biurowe lub z zakresu administracji państwowej.
   *b. Każdy przejaw działalności twórczej niezależnie od wartości i przeznaczenia.
   c. Nowe przepisy kulinarne.
   d. Metody i zasady działania.

81. Co jest tzw. "dozwolonym użytkiem osobistym"?
   a. Korzystanie w celu zarobkowym z elektronicznych baz danych, spełniających cechy utworu.
   *b. Nieodpłatne korzystanie z już rozpowszechnionego utworu w zakresie własnego użytku osobistego.
   c. Kopiowanie treści z cudzych stron internetowych i zamieszczanie ich na swojej.
   d. Umieszczenie cudzego utworu w internecie.

82. Twórcom z kwoty uzyskanej z tytułu opłat ze sprzedaży magnetofonów i innych podobnych urządzeń oraz związanych z nimi czystych nośników przypada:
   a. 75%
   b. 60%
   *c. 50%
   d. 25%

83. Co nie nadaje wzorowi przemysłowemu jego indywidualnego charakteru?
   a. kolorystyka.
   b. kontury.
   *c. schemat działania.
   d. ornamentacja.

84. Umowa o przeniesieniu praw majątkowych wymaga zachowania:
   *a. formy pisemnej pod rygorem nieważności.
   b. formy notarialnej.
   c. formy ustnej.
   d. formy pisemnej potwierdzonej przez Urząd Patentowy.

85. Jak długo trwa ochrona topografii układów scalonych?
   *a. 10 lat
   b. 5 lat
   c. 15 lat
   d. 20 lat

86. Nieprawdą jest, że w prawie własności intelektualnej ograniczenie monopolu właściciela praw autorskich lub patentowych polegające na zezwoleniu na korzystanie bez konieczności uzyskiwania jego zgody z już rozpowszechnionego utworu pod ściśle określonymi warunkami i w ściśle określonych sytuacjach nazywane jest
   *a. taka zasada nie istnieje.
   b. zasadą fair-use.
   c. zasadą dozwolonego użytku.
   d. odpowiedzi "zasadą fair-use" i "zasadą dozwolonego użytku" są prawidłowe.

87. Co nie stanowi przedmiotu prawa autorskiego?
   a. Obraz.
   *b. Akt normatywny.
   c. Rzeźba
   d. Powieść

88. Czy anonimowemu twórcy przysługują osobiste prawa autorskie?
   *a. Tak.
   b. Zależy od utworu.
   c. Nie.
   d. Nie istnieje anonimowy twórca.

89. Jakie kraje obejmuje porozumienie TRIPS?
   a. Kraje Unii Europejskiej.
   *b. Cały świat.
   c. Kraje europejskie.
   d. Cały świat z wyjątkiem USA.

90. Czym jest organizacja Creative Commons? Wybierz jedną odpowiedź:
  *a. Amerykańska organizacja typu non-profit, która postawiła sobie za zadanie uzyskanie kompromisu pomiędzy pełną ochroną praw autorskich a dzieleniem się twórczością z innymi.
  b.Europejska (obejmująca kraje UE) organizacja typu non-profit, dbająca o ochronę baz danych i ich twórców.
  c. Japońska organizacja typu non-profit, mająca na celu zrzeszać wynalazców i bronić ich praw.
  d. Angielska organizacja typu non-profit, dbająca o prawa patentowe i wynalazców.

91. Jak długo może trwać  maksymalnie ochrona patentowa  liczona od daty dokonania zgłoszenia wynalazku w Urzędzie Patentowym RP?
Pytanie 6Wybierz jedną odpowiedź:
  a. 10 lat
  *b. 20 lat
  c. 25 lat
  d. 15 lat

92. Jak długo może trwać  maksymalnie ochrona patentowa  liczona od daty dokonania zgłoszenia wynalazku w Urzędzie Patentowym RP? Wybierz jedną odpowiedź:
  a. 15 lat
  *b. 20 lat
  c. 10 lat
  d. 25 lat

1. Co jest warunkiem trwania prawa ochronnego?
Wybierz jedną odpowiedź:
*a. Tylko uiszczanie opłaty okresowej.
b. Uiszczanie opłaty okresowej oraz  coroczna rejestracja.
c. Tylko coroczna aktualizacja wzoru.
d. Uiszczanie opłaty okresowej oraz aktualizacja wzoru.

2. Jakiego warunku nie musi spełniać wynalazek?
Wybierz jedną odpowiedź:
a. Musi posiadać poziom wynalazczy.
b. Nadaje się do przemysłowego zastosowania.
c. Musi być nowy.
*d. Musi być użyteczny.

3. Prawo ochronne posiada znak towarowy, w którego sąsiedztwie znajduje się w okręgu litera:
Wybierz jedną odpowiedź:
*a. R
b. C
c. Q
d. Z

4. Twórca może udzielić upoważnienia do korzystania z utworu na wymienionych w umowie polach eksploatacji z określeniem:
Wybierz jedną odpowiedź:
*a. zarówmo zakresu, miejsca jak i czasu tego wykorzystania.
b. tylko czasu wykorzystania
c. tylko zakresu wykorzystania.
d. tylko miejsca wykorzystania.

5. Europejski system ochrony produktów regionalnychi tradycyjnych nie zarejestruje produktu jako:
Wybierz jedną odpowiedź:
a. chronione oznaczenie geograficzne.
b. chroniona nazwa pochodzenia.
c. gwarantowana tradycyjna specjalność.
*d. chroniona tradycyjna jakość.

6. Ile wynosi czas trwania ochrony bazy danych?
Wybierz jedną odpowiedź:
*a. 15 lat następujących po roku, w którym baza danych została sporządzona lub udostępniona publicznie po raz pierwszy.
b. 10 lat następujących po roku, w którym baza danych została sporządzona lub udostępniona publicznie po raz pierwszy.
c. 15 lat następujących po roku, w którym baza danych została sporządzona.
d. 5 lat następujących po roku, w którym baza danych została sporządzona.

7. Jaka jest odpowiedzialność karna za naruszenie prawa autorskiego?
Wybierz jedną odpowiedź:
*a. Wszystkie odpowiedzi są poprawne.
b. Tylko kara ograniczenia wolności.
c. Tylko grzywna.
d. Kara pozbawienia wolności do lat 3.

8. Współtwórcą utworu audiowizualnego nie jest:
Wybierz jedną odpowiedź:
a. twórca scenariusza.
*b. kierownik produkcji.
c. operator obrazu.
d. reżyser.

9. Za wynalazek biotechnologiczny nie uważa się:
Wybierz jedną odpowiedź:
*a. Ciała ludzkiego w różnych jego stadiach formowania się i rozwoju, ani zwykłego odkrycia jednego z jego elementów, włącznie z sekwencją lub częściową sekwencją genu.
b. Materiału biologicznego, który jest wyizolowany ze swojego naturalnego środowiska lub wytworzony sposobem technicznym, nawet jeżeli poprzednio występował w naturze.
c. Wynalazku dotyczącego roślin lub zwierząt, jeżeli możliwości techniczne stosowania wynalazku nie ograniczają się do szczególnej odmiany roślin lub rasy zwierząt.
d. Elementu wyizolowanego z ciała ludzkiego lub w inny sposób wytworzonego sposobem technicznym, włącznie z sekwencją lub częściową sekwencją genu.

10. Długość trwania pojedynczego okresu ochronnego na wzór przemysłowy wynosi:
Wybierz jedną odpowiedź:
*a. 5 lat.
b. 10 lat.
c. 25 lat.
d. 20 lat.

11. Co oznacza rejestracja znaku towarowego w OHIM?
Wybierz jedną odpowiedź:
a. W OHIM nie rejestruje się znaków towaroeych.
*b. Ochrona znaku jest skuteczna na terytorium UE.
c. Ochrona znaku jest skuteczna w Polsce.
d. Ochrona znaku jest skuteczna na całym świecie.

12. Wśród produktów, stanowiących przedmiot prawa autorskiego są:
Wybierz jedną odpowiedź:
*a. utwory muzyczne, słowno-muzyczne, plastyczne i fotograficzne.
b. proste informacje prasowe, informacje pogodowe, wiadomości lokalne.
c. urzędowe dokumenty, materiały, znaki i symbole.
d. akty normatywne lub ich urzędowe projekty.

13. W którym wieku zarejestrowano pierwszy patent.
Wybierz jedną odpowiedź:
*a. XV wiek
b. XVII wiek
c. XIV wiek
d. XVIII wiek

14. Co może być utworem (w rozumieniu praw autorskich)?
Wybierz jedną odpowiedź:
*a. Każdy przejaw działalności twórczej niezależnie od wartości i przeznaczenia.
b. Metody i zasady działania.
c. Nowe przepisy kulinarne.
d. Procedury ale wyłącznie technologiczne, biurowe lub z zakresu administracji państwowej.

15. Za naruszenie praw do bazy danych grozi:
Wybierz jedną odpowiedź:
a. ograniczenie wolności oraz kara grzywny.
*b. usunięcie skutków naruszenia lub naprawienie wyrządzonej szkody oraz kara grzywny.
c. usunięcie skutków naruszenia lub naprawienie wyrządzonej szkody oraz pozbawienie wolności do lat 5.
d. pozbawienie wolności do lat 5 oraz kara grzywny.

16. Ile trwa ochrona wzoru użytkowego?
Wybierz jedną odpowiedź:
a. 25 lat od daty zgłoszenia.
b. Dożywotnio.
c. 20 lat od daty zgłoszenia.
*d. 10 lat od daty zgłoszenia.

17. Kto może korzystać z miedzynarodowej procedury uzyskiwania patentów w wielu państwach na świecie jednocześnie (Patent Cooperation Treaty - PCT)?
Wybierz jedną odpowiedź:
*a. Obywatele lub rezydenci państw członkowskich Układu PCT.
b. Narodowość nie ma znaczenia.
c. Obywatele krajów europejskich.
d. Obywatele UE.

18. Co nie jest tzw. "dozwolonym użytkiem publicznym"?
Wybierz jedną odpowiedź:
a. Publiczne wykonywanie utworów podczas ceremonii religijnych lub uroczystości szkolnych.
*b. Korzystanie z utworu na blogu.
c. Korzystanie z utworów dla celów bezpieczeństwa publicznego.
d. Niezarobkowe korzystanie z utworu dla dobra niepełnosprawnych.

19. Wzory przemysłowe chronione na terenie Unii Europejskiej są zapisane w:
Wybierz jedną odpowiedź:
*a. Rejestrze Wzorów Wspólnotowych.
b. Rejestrze Wzorów Użytkowych.
c. Rejestrze znaków towarowych.
d. Rejestrze Wzorów Przemysłowych.

20. Komu przysługuje prawo do stosownego wynagrodzenia w przypadku nadawania, reemitowania lub odtwarzania wprowadzonego do obrotu fonogramu lub wideogramu?
Wybierz jedną odpowiedź:
*a. Producentowi.
b. Artystom wykonawcom.
c. Twórcy.
d. Wszystkim uczestniczącym w tworzeniu wideogramu.

21. Ile istnieje klas towarowych dotyczących znaków towarowych?
Wybierz jedną odpowiedź:
a. 11
b. 24
c. 28
*d. 34

22. Który z przykładów jest wynalazkiem?
Wybierz jedną odpowiedź:
*a. Piorunochron.
b. Odkrycie natury piorunów.
c. Antybiotyk.
d. Pole bioenergii kosmicznej.

23. Czy posiadając stronę na zagranicznym serwerze podlegam pod prawo tego kraju czy prawo polskie? Które zdanie jest prawdziwe?
Wybierz jedną odpowiedź:
a. Tylko wówczas, gdy mieszkamy za granicą i serwer też jest umieszczony za granicą obowiązuje nas prawo zagraniczne.
b. Tylko wówczas, gdy mieszkamy w Polsce i serwer też jest umieszczony w Polsce obowiązuje nas prawo polskie.
*c. Jeśli mieszkamy w Polsce, a serwer jest umieszczony za granicą obowiązuje nas prawo polskie.
d. Jeśli mieszkamy za granicą, a serwer jest umieszczony w Polsce obowiązuje nas prawo polskie.

24. Co chronią prawa autorskie w stosunku do programów komputerowych?
Wybierz jedną odpowiedź:
*a. Kod zapisany w jakimś języku programowania.
b. Wynik działania programu.
c. Ideę programu.
d. Zastosowanie programu.

25. Czy można korzystać z printscreenów stron WWW w publikacjach?
Wybierz jedną odpowiedź:
*a. Tylko na użytek osobisty bądź zgodnie z prawem cytatu.
b. Nie.
c. Tak.
d. Tak, ale nie w celach komercyjnych.

26. Jak długo trwa ochrona topografii układów scalonych?
Wybierz jedną odpowiedź:
a. 5 lat
b. 20 lat
c. 15 lat
*d. 10 lat

27. Jak długo maksymalnie może trwać ochrona wzoru przemysłowego w Polsce?
Wybierz jedną odpowiedź:
a. 10
b. 15
c. 20
*d. 25

28. Co to jest wzór użytkowy?
Wybierz jedną odpowiedź:
*a. Nowe i użyteczne rozwiązanie o charakterze technicznym, dotyczące kształtu, budowy lub zestawienia przedmiotu o trwałej postaci.
b. Każde nowe rozwiązanie techniczne – wytwór, konstrukcja.
c. Nowa postać wytworu charakteryzująca jego kształt, ornamentację, kolorystykę.
d. Nowe rozwiązanie techniczne posiadające poziom wynalazczy i nadające się do przemysłowego stosowania.

29. Od kiedy obowiązuje ochrona prawna na wynalazek lub wzór użytkowy?
Wybierz jedną odpowiedź:
a. Od czasu zgłoszenia do Urzędu Patentowego.
b. Miesiąc od zgłoszenia wynalazku lub wzoru użytkowego w Urzędzie Patentowym.
*c. Od dnia wydania decyzji o udzieleniu patentu lub ochrony.
d. Od chwili uiszczenia wszystkich opłat związanych z udzieleniem i utrzymaniem ochrony wynalazku.

30. Czy można na łamach portalu/strony udostępniać miniatury grafik znalezionych w Google?
Wybierz jedną odpowiedź:
a. NIe.
b. Tak, bezwarunkowo.
c. To zależy od rozmiaru grafiki.
*d. Tylko pod warunkiem, że autor grafiki wyraża na to zgodę.

31. Ile można zgłosić znaków towarowych do rejestracji w jednym podaniu?
Wybierz jedną odpowiedź:
a. Nie ma ograniczeń.
*b. 1
c. 5
d. 2

32. Nie stanowią przedmiotu prawa autorskiego:
Wybierz jedną odpowiedź:
a. programy komputerowe.
*b. urzędowe dokumenty.
c. bazy danych.
d. utwory plastyczne.

33. Od kiedy utwór jest przedmiotem prawa autorskiego?
Wybierz jedną odpowiedź:
a. Od opublikowania.
*b. Od ustalenia.
c. Od pierwszego wykonania.
d. Od upublicznienia.

34. Ochroną wspólnotowych wzorów przemysłowych zajmuje się:
Wybierz jedną odpowiedź:
a. Międzynarodowy Urząd Patenatowy.
b. Urząd Publikacji UE.
c. Europejski Inspektor Ochrony Danych.
*d. Urząd Harmonizacji Rynku Wewnętrznego.

35. Na co zezwala licencja GNU GPL?
Wybierz jedną odpowiedź:
*a. Darmowe korzystanie z pełnego oprogramowania.
b. Sprzedaż oprogramowania.
c. Modyfikowanie kodu źródłowego programu.
d. Testowanie programu przez określony czas.

36. Wskaż zdanie prawdziwe.
Wybierz jedną odpowiedź:
a. Unijne prawo konkurencji obowiązuje zawsze, nawet jeśli określona praktyka narusza handel tylko w obrębie jednego państwa członkowskiego.
*b. Unijne prawo konkurencji obowiązuje, jeśli praktyka antykonkurencyjna ma faktyczny wpływ na handel.
c. Unijne prawo konkurencji obowiązuje tylko jeśli dana praktyka ma wpływ na handel wszystkich państw członkowskich.
d. Unijne prawo konkurencji obowiązuje tylko jeśli w sposób faktyczny, wpływ praktyki antykonkurencyjnej narusza handel między państwami członkowskimi.

37. Według ustawy o prawie autorskim i prawach pokrewnych cechy utworu to:
Wybierz jedną odpowiedź:
a. jest dobrem wyłącznie intelektualnym.
*b. każdy przejaw działalności twórczej o indywidualnym charakterze.
c. jest dobrem materialnym.
d. musi być wartościowy.

38. Ile kryteriów musi spełniać wynalazek by go opatentować?
Wybierz jedną odpowiedź:
a. 1
b. 4
c. 2
*d. 3

39. Która z poniżej wymienionych rzeczy nie jest uważana za wzór użytkowy?
Wybierz jedną odpowiedź:
a. Okno.
b. Butelka.
c. Wiertarka.
*d. Gra.

40. Jak się zmienia opłata za ochronę wynalazku za każdy kolejny rok po 3 roku ochrony?
Wybierz jedną odpowiedź:
a. Maleje.
b. Nie zmienia się.
*c. Wzrasta.
d. To zależy od wynalazku.

41. Co reguluje porozumienie TRIPS?
Wybierz jedną odpowiedź:
*a. Ochronę praw autorskich i pokrewnych.
b. Ochronę przed nieuczciwą konkurencją.
c. Handel międzynarodowy.
d. Ochronę i sposób przekazywania wiedzy hnow-how.

42. Czy w znaku towarowym można dokonywać zmian i rozszerzać wykaz towarów dla których ten znak został zarejestrowany?
Wybierz jedną odpowiedź:
a. Nie można dokonywać zmian w znaku ale można rozszerzyć wykaz towarów.
b. Można dokonać zmian w znaku ale nie można rozszerzać towarów.
*c. Nie można dokonywać zmian ani rozszerzać wykazu towarów.
d. Można dokonywać zmian i można rozszerzać wykaz towarów.

43. Koszt każdego następnego okresu ochrony na wzór przemysłowy:
Wybierz jedną odpowiedź:
a. jest zależny od wzoru.
*b. rośnie.
c. nie zmienia się.
d. maleje.

44. Czym jest wynalazek?
Wybierz jedną odpowiedź:
a. Nowe i użyteczne rozwiązanie o charakterze technicznym, dotyczące kształtu, budowy lub zestawienia przedmiotu o trwałej postaci.
*b. Nowe rozwiązanie techniczne posiadające poziom wynalazczy i nadające się do przemysłowego stosowania.
c. Nowe i użyteczne rozwiązanie techniczne - wytwór, konstrukcja.
d. Nowa postać wytworu charakteryzująca jego kształt, ornamentację, kolorystykę.

45. Czy anonimowemu twórcy przysługują osobiste prawa autorskie?
Wybierz jedną odpowiedź:
a. Nie.
b. Zależy od utworu.
*c. Tak.
d. Nie istnieje anonimowy twórca.

46. Kiedy bez obaw możemy kopiować treści zawarte w Internecie?
Wybierz jedną odpowiedź:
a. Wyłącznie gdy gdy treść jest oparta na licencji GPL.
b. Wyłącznie gdy treść należy do domeny publicznej.
*c. Wszystkie odpowiedzi są poprawne.
d. Wyłącznie za zgodą autora.

47. Co to jest wynalazek?
Wybierz jedną odpowiedź:
a. Coś istniejącego w przyrodzie.
*b. Nowy produkt lub proces stanowiący rozwiązanie problemu technicznego.
c. Oczywiste rozwiązanie problemu.
d. Rzecz codziennego użytku.

48. Czego zabrania licencja freeware?
Wybierz jedną odpowiedź:
a. ujawniania kodu źródłowego.
b. używania w celach komercyjnych.
c. zarabiania na produktach stworzonych przy użyciu programu na tej licencji.
*d. czerpania korzyści z programu objętą tę licencją przez osoby trzecie.

49. Prawo do najmu oraz użyczania fonogramu oraz wideogramu wygasa po upływie:
Wybierz jedną odpowiedź:
a. 20 lat
*b. 50 lat
c. 30 lat
d. 70 lat

50. Ile wynosi czas trwania prawa ochronnego na wzór użytkowy?
Wybierz jedną odpowiedź:
a. 5 lat.
b. Bezterminowo.
*c. 10 lat.
d. 20 lat.

51. Co jest wzorem użytkowym?
Wybierz jedną odpowiedź:
a. Użyteczne odkrycie naukowe
b. Użyteczny program do maszyny cyfrowej.
c. Użyteczna metoda matematyczna.
*d. Użyteczne rozwiązanie o charakterze technicznym dotyczące kształtu.

52. Umowa o przeniesienie autorskich praw majątkowych:
Wybierz jedną odpowiedź:
a. może być w formie pisemnej ale nie musi.
b. nie jest wymagana.
c. może być w formie ustnej.
*d. jest wymagana w formie pisemnej pod rygorem nieważności.

53. Czym chronione są wynalazki?
Wybierz jedną odpowiedź:
*a. Patentem.
b. Prawem ochronnym na wynalazek.
c. Znakiem towarowym.
d. Prawami ochronnymi.

54. Co oznacza symbol (R) (litera R w okręgu)?
Wybierz jedną odpowiedź:
a. Chronione oznaczenie geograficzne.
b. Oznaczenie zastrzeżonych praw autorskich.
c. Oryginalny produkt.
*d. Zarejestrowany znak towarowy.

55. Zezwolenie na rozpowszechnianie wizerunku jest potrzebne, gdy:
Wybierz jedną odpowiedź:
a. chodzi o wizerunek osoby powszechnie znanej.
b. wizerunek wykonano w związku z pełnioną przez osobę funkcję publiczną w szczególności polityczną.
*c. publikuje się wizerunek osoby niepublicznej, wyraźnie widocznej na fotografii.
d. dotyczy osoby stanowiącej szczegół większej całości, np. znajdującej się w tłumie.

56. Programy komputerowe podlegają ochronie jak utwory
Wybierz jedną odpowiedź:
*a. literackie.
b. muzyczne.
c. fotograficzne.
d. plastyczne.

57. Umowa o przeniesieniu praw majątkowych wymaga zachowania:
Wybierz jedną odpowiedź:
a. formy pisemnej potwierdzonej przez Urząd Patentowy.
b. formy ustnej.
*c. formy pisemnej pod rygorem nieważności.
d. formy notarialnej.

58. Co to jest wzór przemysłowy?
Wybierz jedną odpowiedź:
a. Nowe i użyteczne rozwiązanie techniczne - wytwór, konstrukcja.
b. Nowe i użyteczne rozwiązanie o charakterze technicznym, dotyczące kształtu, budowy lub zestawienia przedmiotu o trwałej postaci.
*c. Nowa postać wytworu charakteryzująca jego kształt, ornamentację, kolorystykę.
d. Nowe rozwiązanie techniczne posiadające poziom wynalazczy i nadające się do przemysłowego stosowania.

59. Co nie jest plagiatem?
Wybierz jedną odpowiedź:
a. Wykorzystanie muzyki z utworu muzycznego, dodanie swoich słów i podawanie się za autora.
b. Zrobienie fotografii na wzór innej, która była wcześniej opublikowana.
*c. Twórczość równoległa - dzieło, które po¬wstaje w wy¬niku zu¬peł¬nie od¬ręb¬nego, nie¬za¬leż-nego pro¬cesu twór¬czego, na¬wet je¬żeli po¬siada treść i formę bar¬dzo zbli¬żoną do in¬nego utworu.
d. Użycie fragmentu cudzego utworu bez użycia cudzysłowu.

60. Jak długo może trwać  maksymalnie ochrona patentowa  liczona od daty dokonania zgłoszenia wynalazku w Urzędzie Patentowym RP?
Wybierz jedną odpowiedź:
*a. 20 lat
b. 25 lat
c. 15 lat
d. 10 lat

61. Kodu opartego na licencji GNU GPL nie wolno:
Wybierz jedną odpowiedź:
*a. używać w programach na innej licencji. 
b. zmieniać.
c. publicznie upowszechniać.
d. analizować, jak działa.

62. Czym jest patent na wynalazek?
Wybierz jedną odpowiedź:
a. Prawo do wykorzystywania wynalazku tylko we własnym zakresie.
b. Opis pomysłu na wynalazek.
c. Prawo do wyłącznego korzystania z wynalazku przez nieokreślony czas.
*d. Prawo do wyłącznego korzystania z wynalazku przez określony czas. 

63. Organem rejestrującym oznaczenia geograficzne na produkty przemysłowe na szczeblu krajowym jest:
Wybierz jedną odpowiedź:
a. Rada Ministrów.
b. Minister Gospodarki.
*c. Urząd Patentowy RP. 
d. Minister ds. Rolnictwa i Rozwoju Wsi.

64. Prawa pokrewne to prawa podmiotowe powstające obok praw autorskich, które są:
Wybierz jedną odpowiedź:
a. niezbywalne i bezwzględne.
*b. zbywalne i bezwzględne. 
c. zbywalne i względne.
d. niezbywalne i względne.

65. Które kryterium zdolności patentowej wynalazku nie jest formalnie brane pod uwagę przy przyznawaniu patentu?
Wybierz jedną odpowiedź:
a. Kryterium nowości.
*b. Kryterium wartości.
c. Kryterium nieoczywistości.
d. Kryterium przemysłowej stosowalności.

66. Kiedy program komputerowy jest chroniony przez prawa autorskie?
Wybierz jedną odpowiedź:
*a. Jego postać nie jest ściśle zdeterminowana przez wymogi techniczne.
b. Programista musi wykazać się ponadprzeciętnymi umiejętnościami programistycznymi.
c. Jest prawdopodobne, że może powstać program identyczny.
d. Pragram stanowi optymalne rozwiązanie problemu.

67. W jakim akcie prawnym zawarta jest definicja wzoru użytkowego?
Wybierz jedną odpowiedź:
a. Prawo własności użytkowej.
*b. Prawo własności przemysłowej.
c. Ustawa o ochronie konkurencji i konsumentów.
d. Ustawa o prawie autorskim.

68. Co jest tzw. "dozwolonym użytkiem osobistym"?
Wybierz jedną odpowiedź:
a. Umieszczenie cudzego utworu w internecie.
*b. Nieodpłatne korzystanie z już rozpowszechnionego utworu w zakresie własnego użytku osobistego.
c. Korzystanie w celu zarobkowym z elektronicznych baz danych, spełniających cechy utworu.
d. Kopiowanie treści z cudzych stron internetowych i zamieszczanie ich na swojej.

69. Autor utworu może się zrzec praw osobistych na rzecz:
Wybierz jedną odpowiedź:
*a. nie może się zrzec.
b. najbliższej rodziny.
c. współtwórców.
d. wydawców.

70. Jeżeli ustawa nie stanowi inaczej, autorskie prawo osobiste chronią nieograniczone w czasie i nie podlegające zrzeczeniu się lub zbyciu więź twórcy z utworem, a w szczególności prawo do:
Wybierz jedną odpowiedź:
a. naruszalności treści i formy utworu oraz jego rzetelnego wykorzystania.
*b. oznaczenia utworu swoim nazwiskiem.
c. braku nadzoru nad sposobem korzystania z utworu.
d. nie możności o decydowaniu o pierwszym udostępnieniu utworu publiczności.

71. "Zapewnia wyłączność używania temu podmiotowi, na którego rzecz jest on zarejestrowany."

Definicja ta odnosi się do:
Wybierz jedną odpowiedź:
a. znaku towarowego przeznaczonego do równoczesnego używania przez kilku niezależnych przedsiębiorców.
b. żadna z odp. nie jest poprawna.
c. wspólnego znaku towarowego.
*d. znaku towarowego indywidualnego.

72. Na jakiej podstawie urząd patentowy RP dokonuje rejestracji wzoru przemysłowego?
Wybierz jedną odpowiedź:
a. Na podstawie wniesonej opłaty.
b. Tylko na podstawie opisu.
c. Na podstawie schematu działania.
*d. Na podstawie badania formalnego.

73. Gdzie i od kiedy chronione są wynalazki?
Wybierz jedną odpowiedź:
a. Rzym, 1470 rok
b. Paryż, 1574 rok.
*c. Wenecja, 1474 rok.
d. Londyn, 1574 rok.

74. Co dzieje się z utworem z chwilą zakończenia okresu ochrony prawnoautorskiej?
Wybierz jedną odpowiedź:
*a. Staje się domeną publiczną i jego reprodukcja od tej chwili nie wymaga płacenia tantiemów.
b. Prawa autorskie są dziedziczone przez spadkobierców autora.
c. Nic się z nim nie dzieje.
d. Staje się dobrem publicznym, jednak jego reprodukcja uwarunkowana jest przymusem uiszczenia opłaty.

75. Ile czasu ma twórca na rejestrację wzoru przemysłowego od chwili powszechnego udostępnienia?
Wybierz jedną odpowiedź:
*a. 12 miesięcy.
b. 2 lata.
c. 18 miesięcy.
d. 6 miesięcy.

76. Co to jest odkrycie naukowe?
Wybierz jedną odpowiedź:
a. Nowy proces technologiczny.
b. Nowe urządzenie.
*c. Obserwacja nieznanego zjawiska w przyrodzie.
d. Nowa koncepcja, idea, pomysł.

77. Znakiem (R) (litera R w okręgu) oznaczamy
Wybierz jedną odpowiedź:
a. wzór przemysłowyzarejestrowany w odpowiednim Urzędzie Patentowym.
b. prawo autorskiezarejestrowane w odpowiednim Urzędzie Patentowym.
c. znak usługowyzarejestrowany w odpowiednim Urzędzie Patentowym.
*d. znak towarowy zarejestrowany w odpowiednim Urzędzie Patentowym.

78. Prawa autorskie dzielimy na:
Wybierz jedną odpowiedź:
a. zbiorowe.
b. indywidualne.
*c. osobiste i majątkowe.
d. tymczasowe.

79. Jak długo trwa najkrótszy okres ochrony znaku towarowego?
Wybierz jedną odpowiedź:
a. 15 lat
b. 5 lat
c. 20 lat
*d. 10 lat

80. Gdzie wprowadzono najstarszy znak towarowy na świecie?
Wybierz jedną odpowiedź:
a. Chiny
b. Wielka Brytania
*c. Stany Zjednoczone 
d. Niemcy

81. Co to jest Reemisja?
Wybierz jedną odpowiedź:
a. Element dzieła muzycznego, określający siłędźwięku.
b. Publiczne udostępnienie utworu, na które twórca wyraził zgodę.
c. Zapisanie utworu na nośniku, np. na papierze, płycie DVD, błonach filmowych lub fotograficznych.
*d. Rozpowszechnianie utworu przez inny podmiot niż ten, który nadaje go pierwotnie.

82. Czego nie należy uczynić, aby otrzymać wzór użytkowy?
Wybierz jedną odpowiedź:
a. Sporządzić skrót / streszczenie wzoru.
b. Sporządzić szkic / rysunek.
c. Opisać zastrzeżenia ochronne.
*d. Dokonać odgórnej płatności na 10 lat.

83. Ile wynosi czas trwania ochrony baz danych?
Wybierz jedną odpowiedź:
a. 5 lat.
*b. 15 lat.
c. 10 lat.
d. 20 lat.

84. Autor umieszczający w swoim programie reklamy bazuje na licencji:
Wybierz jedną odpowiedź:
a. GPL.
b. Demo.
*c. Adware. 
d. Freemium.

85. Co jest objęte prawem autorskim?
Wybierz jedną odpowiedź:
a. Metody i zasady działania.
b. Idee i procedury.
*c. Programy komputerowe. 
d. Koncepcje matematyczne.

86. Jaką formę powinna przyjąć baza danych, aby podlegać prawnej ochronie w Polsce?
Wybierz jedną odpowiedź:
a. specjalnie zdefiniowaną.
b. papierową.
*c. dowolną. 
d. elektroniczną.

87. Co musi charakteryzować wzór przemysłowy, aby mógł uzyskać ochronę w Urzędzie Patentowym?
Wybierz jedną odpowiedź:
a. Wystarczy, aby był nowy.
*b. Musi być nowy oraz mieć indywidualny charakter. 
c. Wystarczy, aby miał indywidualny charakter.
d. Musi być nowy lub mieć indywidualny charakter.

88. Prawo bezpłatnego przytaczania urywków nie przysługuje, jeśli:
Wybierz jedną odpowiedź:
a. fragment występuje w podręczniku albo czasopiśmie popularnonaukowym.
b. na przykładzie jakiegoś utwory wyrażamy własną opinię.
c. tworzymy karykaturę cudzego utworu.
*d. rozpowszechnia się drobne utwory lub fragmenty większych utworów w podręcznikach, wypisach i antologiach w celu naukowym i dydaktycznym. 

89. Znak towarowy, celem ochrony, należy zgłosić w:
Wybierz jedną odpowiedź:
a. Urzędzie Skarbowym.
*b. Urzędzie Patentowym RP.
c. Urzędzie Miasta.
d. ZUSie.

90. Po ilu latach wygasają majątkowe prawa autorskie?
Wybierz jedną odpowiedź:
a. Nigdy.
b. Po 50 latach od śmierci twórcy.
c. Po 70 latach od utworzenia.
*d. Po 70 latach od śmierci twórcy.

91. Plagiatem nie jest:
Wybierz jedną odpowiedź:
a. przejęcie całości lub fragmentu cudzego utworu i opatrzeniu go własnym nazwiskiem.
b. wykorzystaniu obcego utworu w zmienionej formie bez podania źródła.
c. skopiowanie melodii innego twórcy i podpisanie własnym nazwiskiem.
*d. znalezienie właściwych treści oraz skopiowanie ich na własną stronę internetową podając przy tym autora tych treści.

92. Które zdanie, dotyczące polskich praw autorskich do filmów, jest prawdziwe?
Wybierz jedną odpowiedź:
a. Wszystkie prawa autorskie należą tylko do producenta filmu.
b. Prawa autorskie należą tylko do autora scenariusza.
c. Prawa autorskie należą wyłącznie do sponsorów filmu.
*d. Prawa autorskie są oddzielne do scenariusza i soundtracku.

93. Oprogramowanie bezpłatnie rozpowszechniane, ale wymaga od użytkownika wniesienia opłat po pewnym okresie użytkowania bazuje na licencji:
Wybierz jedną odpowiedź:
a. GPL.
b. Freemium.
c. Public Domain.
*d. Shareware.

94. Wzory użytkowe chronione są:
Wybierz jedną odpowiedź:
a. prawami z rejestracji.
b. wyrokami Sądu o Ochronie Wzoru.
c. patentami.
*d. prawami ochronnymi.

95. Wzór przemysłowy charakteryzują:
Wybierz jedną odpowiedź:
a. Opis przeznaczenia.
*b. Kształt produktu i jego ornamentacja.
c. Opis zastosowanych technologii.
d. Cechy techniczne projektu.

96. Aby rozwiązanie mogło być uznane za wzór użytkowy powinno m.in.:
Wybierz jedną odpowiedź:
a. posiadać odpowiedni poziom wynalazczy.
*b. być użyteczne i mieć charakter techniczny.
c. być lepsze od innego istniejącego.
d. być bardzo zaawansowane technicznie.

97. Utwór jest przedmiotem praw autorskich od momentu:
Wybierz jedną odpowiedź:
a. napisania.
b. pierwszego wykonania.
*c. ustalenia.
d. opublikowania.

98. Wzorem przemysłowym nie jest:
Wybierz jedną odpowiedź:
a. wzór ozdobenj czcionki.
b. fason sukienki.
c. wzór przemysłowy okna.
*d. gwint nakrętki.

99. Które z poniższych stwierdzeń dotyczących ochrony programów komputerowych są prawdziwe?
Wybierz jedną odpowiedź:
*a. Dozwolone jest sporządzenie kopii zapasowej programu przez licencjobiorcę.
b. Zasady rozpowszechniania programu przez jego twórcę regulują stosowne instytucje.
c. Ochronie podlegają idee będące podstawą działania stworzonego programu.
d. Prawa majątkowe do programu stworzonego w ramach stosunku pracy przechodzą zawsze na pracodawcę.

100. Co nie jest zarejestrowanym chronionym oznaczeniem geograficznym?
Wybierz jedną odpowiedź:
a. Rogal Świętomarciński.
b. Ser Koryciński.
c. Kiełbasa lisiecka.
*d. Olej konopny.

101. Twórcom z kwoty uzyskanej z tytułu opłat ze sprzedaży magnetofonów i innych podobnych urządzeń oraz związanych z nimi czystych nośników przypada:
Wybierz jedną odpowiedź:
a. 60%
*b. 50%
c. 25%
d. 75%

102. Wskaż zdanie niezgodne z ustawą o prawie autorskim i prawach pokrewnych:
Wybierz jedną odpowiedź:
a. Uczelni w rozumieniu przepisów o szkolnictwie wyższym przysługuje pierwszeństwo w opublikowaniu pracy dyplomowej studenta.
b. Ochrona przysługuje twórcy niezależnie od spełnienia jakichkolwiek formalności.
c. Utwór jest przedmiotem prawa autorskiego od chwili ustalenia, chociażby miał postać nieukończoną.
*d. Utwór jest przedmiotem prawa autorskiego od chwili ustalenia ale musi mieć postać ukończoną.

103. Posiadając stronę internetową na zagranicznym serwerze, pod prawo którego kraju podlegamy w odniesieniu do jej zawartości?
Wybierz jedną odpowiedź:
a. W tym przypadku jest się bezkarnym.
*b. Prawo kraju, w którym mieszkamy.
c. Prawo kraju, w którym fizycznie znajduje się serwer.
d. Prawo dowolnego kraju, z którego może wywodzić się ewentualna pokrzywdzona przez nas osoba.

104. Jak należy chronić wzór przemysłowy?
Wybierz jedną odpowiedź:
a. Zarejestrować  wzór w Sądzie.
*b. Złożyć wniosek w Urzędzie Patentowym.
c. Złożyć wniosek w Komisji ds. Ochrony Wzorów Przemysłowych.
d. Złożyć wniosek o ochronę w Urzędzie Wojewódzkim.

105. Spory dotyczące naruszeń praw ochronnych znaków towarowych rozpatrywane są przez:
Wybierz jedną odpowiedź:
a. Trybunał Konstytucyjny.
b. Trybunał Stanu.
*c. Sądy.
d. Urząd Patentowt RP.

106. Czego nie zaliczamy do aktów prawnych regulujących prawo do właśności intelektualnej?
Wybierz jedną odpowiedź:
a. Ustawa o prawie autorskim i prawach pokrewnych.
b. Ustawa o ochronie baz danych.
*c. Ustawa o finansowaniu wynalazków.
d. Ustawa o zwalczaniu nieuczciwej konkurencji.

107. Co to jest  Droit de suite?
Wybierz jedną odpowiedź:
a. Autorskie prawo majątkowe i osobiste.
*b. Autorskie prawo majątkowe.
c. Autorskie prawo osobiste.
d. Przedmiot prawa autorskiego.

108. Co nie odnosi się do wzoru użytkowego?
Wybierz jedną odpowiedź:
a. Użyteczne roziązanie otyczące zestawienia przedmiotu o trwałej postaci.
b. Innowacyjność pod kątem technicznym i konstrukcyjnym.
c. Praktyczność użytkowania w życiu odziennym.
*d. Indywidualny charakter wytworu, nadany mu przez kolorystykę lub strukturę.

109. Co oznacza symbol TM?
Wybierz jedną odpowiedź:
a. Oryginalny produkt.
b. Znak usługowy.
c. Zarejestrowany znak towarowy.
*d. Znak towarowy.

110. Znakiem (c) (litera C w okręgu) oznaczamy
Wybierz jedną odpowiedź:
*a. prawo autorskie.
b. wzór przemysłowy.
c. znak towarowy zarejestrowany w odpowiednim Urzędzie Patentowym.
d. znak usługowy.

111. Autorskie prawa majątkowe w przypadku utworu audiowizualnego (np.filmu), wygasają w ciągu 70lat od:
Wybierz jedną odpowiedź:
a. od śmierci reżysera.
*b. od śmierci najpóźniej zmarłej z wymienionych osób: głównego reżysera, autora scenariusza, autora dialogów, kompozytora muzyki skomponowanej do utworu audiowizualnego.
c. premiery filmu.
d. od śmierci pierwszego zmarłego współtwórcy.

112. Co to jest fonogram?
Wybierz jedną odpowiedź:
a. Skopiowanie utrwalonej warstwy dźwiękowej wykonanego utworu albo innych zjawiska akustycznego.
b. Skopiowanie  utrwalonej sekwencji ruchomych obrazów, z dźwiękiem lub bez.
c. Pierwsze utrwalenie sekwencji ruchomych obrazów, z dźwiękiem lub bez, niezależnie od tego, czy stanowi ono utwór audiowizualny.
*d. Pierwsze utrwalenie warstwy dźwiękowej wykonania utworu albo innych zjawisk akustycznych.

113. Współtwórcom na mocy ustawy nie przysługuje:
Wybierz jedną odpowiedź:
a. prawo dochodzenia roszczeń z tytułu naruszenia prawa autorskiego do całości utworu.
*b. prawo autorskie do całości utworu bez koniecznej zgody wszystkich współtwórców.
c. prawo autorskie wspólnie.
d. prawo określenia wielkości udziałów przez sąd, na podstawie wkładów pracy twórczej.

114. Co nie nadaje wzorowi przemysłowemu jego indywidualnego charakteru?
Wybierz jedną odpowiedź:
a. ornamentacja.
b. kolorystyka.
c. kontury.
*d. schemat działania.

115. Za wzór użytkowy nie uważa się:
Wybierz jedną odpowiedź:
a. oprawy lampy oświetleniowej.
*b. programu do maszyny cyfrowej.
c. skrzynki transportowwej.
d. wszystkie odpowiedzi są poprawne.

116. Wniosek o rejestrację wzoru przemysłowego nie musi zawierać
Wybierz jedną odpowiedź:
a. listy produktów, w których wzór ma być zawarty lub zastosowany.
b. informacje identyfikujące zgłaszającego.
c. dokumentacji umożliwiającej jego odtwarzanie.
*d. prototypu rejestrowanego wzoru.

117. Urząd uznaje zgłoszenie za dokonane, jeżeli zawiera ono co najmniej:
Wybierz jedną odpowiedź:
a. wykaz towarów, dla których ten znak jest przeznaczony.
*b. wszystkie odpowiedzi są poprawne.
c. dane Zgłaszającego.
d. określenie znaku towarowego.

118. Jeśli nie postanowiono inaczej, umowa licencyjna uprawnia do korzystania z utworu w okresie:
Wybierz jedną odpowiedź:
a. okresie 10  lat na terytorium państwa, w którym licencjobiorca ma swoją siedzibę.
*b. okresie 5 lat na terytorium państwa, w którym licencjobiorca ma swoją siedzibę.
c. okresie 10  lat na terytorium państwa, w którym licencjodawca ma swoją siedzibę.
d. okresie 5 lat na terytorium państwa, w którym licencjodawca ma swoją siedzibę.

119. Wzór użytkowy jest określany również jako:
Wybierz jedną odpowiedź:
*a. Żaden z wymienionych w pozostałych punktach.
b. Wzór przemysłowy.
c. Znak towarowy.
d. Wynalazek.

120. Co nie jest przykładem naruszenia zakazu porozumień ograniczających konkurencję?
Wybierz jedną odpowiedź:
a. Ograniczanie przedsiębiorstwom nieobjętych porozumieniem dostępu do rynku.
b. Zmowy cenowe - ustalanie pomiędzy przedsiębiorstwami cen i innych warunków zakupu lub sprzedaży towarów.
c. Ograniczanie lub kontrolowanie przez przedsiębiorstwa produkcji lub zbytu oraz postępu technicznego lub inwestycji.
*d. Próba doskonalenia przez przedsiębiorstwo sprzedawanego przez nie produktu, aby stał się on najbardziej porządany przez konsumentów i przez to dominujący na rynku.

121. O autorskich prawach osobistych nie powiemy, że:
Wybierz jedną odpowiedź:
*a. autor nie ma prawa do przedstawienia utworu pod pseudonimem lub anonimowo.
b. obejmuje prawo do zachowania niezmienionej treści i formy utworu.
c. prawo to nigdy nie wygasa i jest niezbywalne.
d. obejmują prawo autora do wiązania jego nazwiska z dziełem.

122. Gdzie jest zawarta opłata reprograficzna związania z wykorzystywaniem utworów w ramach dozwolonego użytku publicznego?
Wybierz jedną odpowiedź:
*a. W cenie urządzeń i nośników służących kopiowaniu.
b. Nie pobiera się takich opłat.
c. W cenie książek i czasopism.
d. W cenie komputerów.

123. Co charakteryzują wzory użytkowe?
Wybierz jedną odpowiedź:
a. Strukturę, materiał wytworu.
*b. Zestawienie przedmiotów.
c. Kształt produktu.
d. Ornamentację, kolorystykę, układ linii.

124. Jaka może być kara za używanie nielegalnej kopii oprogramowania?
Wybierz jedną odpowiedź:
a. Pozbawienie wolności do lat 3 oraz odszkodowanie.
b. Pozbawienie wolności do lat 3 bądź ograniczenie wolności.
c. Nakaz kupna oprogramowania i ograniczenie wolności.
*d. Pozbawienie wolności do lat 5 lub ograniczenie wolności oraz odszkodowanie.

125. Autorskie prawa majątkowe wygasają.
Wybierz jedną odpowiedź:
a. Nigdy nie wygasają.
b. Po 20 latach.
*c. Po 70 latach.
d. Po 50 latach.

126. Czy opracowanie cudzego utworu może być przedmiotem prawa autorskiego?
Wybierz jedną odpowiedź:
a. Tak, nawet jeśli utwór powstał tylko w wyniku inspiracji.
b. Tak, nawet jeśli twórca utworu pierwotnego na to nie zezwolił.
c. Nie, ponieważ utwór jest cudzy.
*d. Tak, w szczególności tłumaczenie, przeróbka, adaptacja.

127. Jaki dokument potwierdza uzyskanie ochrony wzoru przemysłowego?
Wybierz jedną odpowiedź:
a. Wyrok Sądu o Rejestracji Wzoru.
b. Prawo ochronne.
*c. Świadectwo Rejestracji.
d. Patent.

128. Nieprawdą jest, że w prawie własności intelektualnej ograniczenie monopolu właściciela praw autorskich lub patentowych polegające na zezwoleniu na korzystanie bez konieczności uzyskiwania jego zgody z już rozpowszechnionego utworu pod ściśle określonymi warunkami i w ściśle określonych sytuacjach nazywane jest
Wybierz jedną odpowiedź:
a. zasadą fair-use.
*b. taka zasada nie istnieje.
c. odpowiedzi "zasadą fair-use" i "zasadą dozwolonego użytku" są prawidłowe.
d. zasadą dozwolonego użytku.

129. Co daje podstawę do ochrony towaru oznaczeniem geograficznym?
Wybierz jedną odpowiedź:
a. Specyficzna, oryginalna procedura wytwarzania towaru wymyślona przez osobę z danego regionu.
*b. Określona jakość, cechy towaru wynikające bezpośrednio z geograficznego pochodzenia towaru.
c. Specyficzna, oryginalna nazwa wymyślona przez osobę z danego regionu.
d. W danym regione produkuje się ten towar w większych ilościach niż w pozostałych regionach danego kraju.

130. Prawo "sui generis" dotyczy":
Wybierz jedną odpowiedź:
a. utworów muzycznych
b. nie ma takiego prawa.
*c. baz danych.
d. książek.

131. Organizacje radiowe i telewizyjne mają prawo nadawać opublikowane drobne utwory muzyczne, słowne i słowno-muzyczne:
Wybierz jedną odpowiedź:
a. żadna z odpowiedzi nie jest prawidłowa.
b. nie posiadając żadnej zgody organizacji posiadającej prawa autorskie.
c. w przypadku, gdy emitują one utwory autora, posiadającego obytalstwo danego kraju nie muszą posiadać żadnej zgody; w przeciwnym przypadku (gdy prawa autorskie należą do organizacji zagranicznej) mają obowiązek uzyskać zgodę na emisję.
*d. wyłącznie na podstawie umowy zawartej z organizacją zbiorowego zarządzania prawami autorskimi, chyba że prawo do nadania utworów zamówionych przez organizację radiową lub telewizyjną przysługuje jej na podstawie odrębnej umowy.

132. Ktróre zdanie nie jest prawdziwe?
Wybierz jedną odpowiedź:
a. Wymagane jest aby utwór został ustalony.
b. Utwór musi charakteryzować działalność twórcza.
*c. Nie jest wymagane, aby utwór miał indywidualny charakter.
d. Utwór musi być rezultatem działalności człowieka.

133. Światowa Organizacja Własności Intelektualnej ang. skrót WIPO zrzesza (wybierz przedział):
Wybierz jedną odpowiedź:
a. 186-188 państw.
b. 189-192 państwa.
c. 182-185 państwa.
*d. 193-196 państwa

134. Prawo ochronne jest udzielane na:
Wybierz jedną odpowiedź:
a. wzór przemysłowy i wzór użytkowy.
b. wynalazek
*c. znak towarowy i wzór użytkowy.
d. wzór przemysłowy.

135. Czym jest organizacja Creative Commons?
Wybierz jedną odpowiedź:
*a. Amerykańska organizacja typu non-profit, która postawiła sobie za zadanie uzyskanie kompromisu pomiędzy pełną ochroną praw autorskich a dzieleniem się twórczością z innymi.
b. Europejska (obejmująca kraje UE) organizacja typu non-profit, dbająca o ochronę baz danych i ich twórców.
c. Angielska organizacja typu non-profit, dbająca o prawa patentowe i wynalazców.
d. Japońska organizacja typu non-profit, mająca na celu zrzeszać wynalazców i bronić ich praw.

136. Prawa autorskie chronią:
Wybierz jedną odpowiedź:
a. Procedury.
*b. programy komputerowe.
c. Idee.
d. koncepcje matematyczne.

137. Co to jest wideogram?
Wybierz jedną odpowiedź:
a. Skopiowanie  utrwalonej sekwencji ruchomych obrazów, z dźwiękiem lub bez.
*b. Pierwsze utrwalenie sekwencji ruchomych obrazów, z dźwiękiem lub bez, niezależnie od tego, czy stanowi ono utwór audiowizualny.
c. Pierwsze utrwalenie warstwy dźwiękowej wykonania utworu albo innych zjawisk akustycznych.
d. Skopiowanie utrwalonej warstwy dźwiękowej wykonanego utworu albo innych zjawiska akustycznego.

138. Jak domyślnie rozdzielane są prawa do dzieła w przypadku kilku autorów?
Wybierz jedną odpowiedź:
a. Przez sąd.
b. Główny autor 50%, reszta po równo.
c. Przez specjalną komisję powołaną przez Urząd Patentowy.
*d. Po równo dla każdego twórcy.

139. Autorskie prawo osobiste jest:
Wybierz jedną odpowiedź:
a. nie ma takiego prawa.
*b. niezbywalne.
c. zbywalne.
d. ograniczone w czasie.

140. Prawo autorskie chroni bazy danych:
Wybierz jedną odpowiedź:
a. zawierające utwory.
*b. będące utworami.
c. nie zawierające utworów.
d. prawo autorskie nie obejmuje baz danych.

141. Co chronią oznaczenia geograficzne?
Wybierz jedną odpowiedź:
a. Wytwórnie danych produktów.
b. Usługi.
c. Firmy regionalne.
*d. Towary.

142. Co nie stanowi przedmiotu prawa autorskiego?
Wybierz jedną odpowiedź:
a. Rzeźba
*b. Akt normatywny.
c. Obraz.
d. Powieść

143. Czy jest różnica między oznaczeniem geograficznym nazw regionalnych, a oznaczeniem pochodzenia?
Wybierz jedną odpowiedź:
*a. Tak, oznaczenia geograficzne dotyczą towarów, które zawdzięczają swoje właściwości oddziaływaniu środowiska geograficznego, natomiast przy oznaczeniach pochodzenia szczególne walory produktów przypisywane są miejscu pochodzenia.
b. Tak, oznaczenia pochodzenia służą do oznaczenia towarów pochodzących z określonego terenu, które zostały wytworzone lub przetworzone na terenie wskazanym oznaczeniem, natomiast oznaczenia geograficzne dotyczą towarów, które zostały wytworzone lub przetworzone na terenie wskazanym oznaczeniem.
c. Nie ma między nimi różnicy.
d. Tak, oznaczenia geograficzne służą do oznaczenia towarów pochodzących z określonego terenu, które zostały wytworzone lub przetworzone na terenie wskazanym oznaczeniem, natomiast oznaczenia pochodzenia dotyczą towarów, które zostały wytworzone lub przetworzone na terenie wskazanym oznaczeniem.

144. Licencja Freeware pozwala na:
Wybierz jedną odpowiedź:
a. modyfikację oprogramowania.
b. sprzedaż oprogramowania.
*c. używanie oprogramowania.
d. ujawnianie kodu źródłowego.

145. Z którego roku jest Konwencja Berneńska o ochronie dzieł literackich i artystycznych?
Wybierz jedną odpowiedź:
a. Druga połowa XVIII w.
*b. Druga połowa XIX w.
c. Pierwsza połowa XIX w.
d. Pierwsza połowa XX w.

146. Znakiem ™ oznaczamy:
Wybierz jedną odpowiedź:
a. prawo autorskie.
b. znak usługowy.
c. wzór przemysłowy.
*d. znak towarowy.

147. Co oznaczamy znakiem (c) (literaz C w okręgu)?
Wybierz jedną odpowiedź:
*a. Prawa autorskie dla dzieł innych niż nagrania muzyczne.
b. Prawa autorskie dla dzieł muzycznych.
c. Prawa autorskie dla rysunków oraz szkiców.
d. Znak handlowy.

148. W którym roku Polska spełniła wymogi porozumienia TRIPS?
Wybierz jedną odpowiedź:
a. 1998
b. 2004
c. 2001
*d. 2000

149. Czy zakaz porozumień ograniczających konkurencję dotyczy małych przedsiębiorców?
Wybierz jedną odpowiedź:
*a. Nie dotyczy.
b. Tak dotyczy porozumień między niekonkurencyjnymi ze sobą podmiotami, gdy udział w rynku któregokolwiek z nich nie przekracza 10%.
c. Tak, są to tzw. porozumienia bagatelne.
d. Tak, dla porozumień miedzy konkurentami, których łączny udział rynkowy nie przekracza 5%.

150. Jakie kraje obejmuje porozumienie TRIPS?
Wybierz jedną odpowiedź:
*a. Kraje Unii Europejskiej.
b. Kraje europejskie.
c. Cały świat.
d. Cały świat z wyjątkiem USA.

151. Co jest w szczególności celem oznaczeń geograficznych?
Wybierz jedną odpowiedź:
*a. Ochrona interesów przedsiębiorców, którzy oferują towary opatrzone oznaczeniami wskazującymi na ich pochodzenie z danego obszaru geograficznego, a także jakość (cech i właściwości) tych towarów.
b. Nadanie nazwy produktowi, aby producenci z innych rejonów mogli korzystać z unikalności tych towarów.
c. Nie mają praktycznie żadnego znaczenia, to tylko ich pełna nazwa.
d. Urozmaicenie nazw towarów, aby były atrakcyjniejsze dla konsumenta.

152. Jak długo trwa ochrona oznaczenia geograficznego?
Wybierz jedną odpowiedź:
*a. Bezterminowo od dnia zgłoszenia.
b. 10 lat od daty zgłoszenia lub 15 lat od momentu przyznania jeśli produkt nie był w sprzedaży.
c. 10 lat od dnia zgłoszenia.
d. 20 lat od dnia zgłoszenia.

`;
// =================================================================================

export default function App() {
  const apiKey = ""; // Klucz API zostanie podstawiony automatycznie przez środowisko

  // --- Helper do generowania bezpiecznych, unikalnych ID ---
  const generateId = () => {
    return `${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  };

  // --- Parser Tekstu (obsługuje gwiazdki *) ---
  const parseQuestionsFromText = (rawText) => {
    if (!rawText || !rawText.trim()) return [];

    const lines = rawText.split("\n");
    const parsed = [];
    let currentQ = null;
    let mode = "none";
    let currentOptionIndex = -1;

    const saveCurrent = () => {
      if (currentQ && currentQ.text) {
        currentQ.text = currentQ.text.trim();
        currentQ.options = currentQ.options.map((o) => o.trim());
        parsed.push(currentQ);
      }
    };

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      const qMatch = line.match(/^(\d+)\.\s*(.*)/);
      if (qMatch) {
        saveCurrent();
        currentQ = {
          id: generateId(),
          text: qMatch[2] || "",
          options: ["", "", "", ""],
          correctIndex: null,
        };
        mode = "question";
        return;
      }

      const optMatch = line.match(/^\s*(\*?)\s*([a-d])\.\s*(.*)/i);

      if (optMatch && currentQ) {
        const isCorrectMarked = optMatch[1] === "*";
        const letter = optMatch[2].toLowerCase();
        const content = optMatch[3];

        const index = letter.charCodeAt(0) - 97;

        if (index >= 0 && index <= 3) {
          currentOptionIndex = index;
          currentQ.options[index] = content || "";

          if (isCorrectMarked) {
            currentQ.correctIndex = index;
          }

          mode = "option";
          return;
        }
      }

      if (currentQ) {
        if (mode === "question") {
          currentQ.text += (currentQ.text ? " " : "") + trimmed;
        } else if (mode === "option" && currentOptionIndex !== -1) {
          currentQ.options[currentOptionIndex] +=
            (currentQ.options[currentOptionIndex] ? " " : "") + trimmed;
        }
      }
    });

    saveCurrent();
    return parsed;
  };

  // --- Stan aplikacji ---
  const [questions, setQuestions] = useState(() => {
    try {
      const saved = localStorage.getItem("studentQuizQuestions");
      let parsed = saved ? JSON.parse(saved) : [];

      if (parsed.length === 0 && BAZA_PYTAN_TEKST.trim()) {
        console.log("Ładowanie bazy wbudowanej...");
        parsed = parseQuestionsFromText(BAZA_PYTAN_TEKST);
      }

      const seenIds = new Set();
      parsed = parsed.map((q) => {
        if (!q.id || seenIds.has(q.id)) {
          const newId = generateId();
          seenIds.add(newId);
          return { ...q, id: newId };
        }
        seenIds.add(q.id);
        return q;
      });
      return parsed;
    } catch (e) {
      console.error("Błąd odczytu z LocalStorage", e);
      return parseQuestionsFromText(BAZA_PYTAN_TEKST);
    }
  });

  const [view, setView] = useState("editor"); // 'editor', 'import', 'quiz', 'results'
  const [newQuestionText, setNewQuestionText] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const [importText, setImportText] = useState("");
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  // Nowy stan dla filtrowania wyników
  const [resultFilter, setResultFilter] = useState("all"); // 'all', 'incorrect', 'correct'

  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [aiExplanation, setAiExplanation] = useState({});
  const [explainingId, setExplainingId] = useState(null);
  const fileInputRef = useRef(null);

  // --- Efekty ---
  useEffect(() => {
    localStorage.setItem("studentQuizQuestions", JSON.stringify(questions));
  }, [questions]);

  // --- Funkcje Logiki Backup/Import ---
  const handleExportBackup = () => {
    if (questions.length === 0) {
      alert("Baza jest pusta.");
      return;
    }
    const dataStr = JSON.stringify(questions, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `quiz_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportBackupTrigger = () => fileInputRef.current.click();

  const handleImportFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (Array.isArray(importedData)) {
          if (
            confirm(
              `Znaleziono ${importedData.length} pytań. Zastąpić obecną bazę?`
            )
          ) {
            const sanitized = importedData.map((q) => ({
              ...q,
              id: generateId(),
            }));
            setQuestions(sanitized);
            alert("Baza wczytana!");
          }
        }
      } catch (error) {
        alert("Błąd pliku backupu.");
      }
    };
    reader.readAsText(file);
    event.target.value = null;
  };

  const loadHardcodedQuestions = () => {
    if (!BAZA_PYTAN_TEKST.trim()) {
      alert("Baza wbudowana w kodzie jest pusta.");
      return;
    }
    if (
      confirm(
        "Czy przywrócić pytania z kodu? Obecna baza w przeglądarce zostanie nadpisana."
      )
    ) {
      const parsed = parseQuestionsFromText(BAZA_PYTAN_TEKST);
      setQuestions(parsed);
      alert(`Przywrócono ${parsed.length} pytań z kodu.`);
    }
  };

  // --- Funkcje AI ---
  const callGemini = async (prompt, systemInstruction = "") => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] },
            generationConfig: { responseMimeType: "application/json" },
          }),
        }
      );
      if (!response.ok) throw new Error(response.status);
      const data = await response.json();
      return JSON.parse(data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error(error);
      alert("Błąd AI.");
      return null;
    }
  };

  const autoFillAnswersWithAI = async () => {
    const missingAnswers = questions.filter((q) => q.correctIndex === null);
    if (missingAnswers.length === 0) {
      alert("Wszystkie pytania mają odpowiedzi!");
      return;
    }
    const batch = missingAnswers.slice(0, 15);
    if (!confirm(`AI przeanalizuje ${batch.length} pytań. Kontynuować?`))
      return;

    setIsAiProcessing(true);
    const prompt = `
      Analyze multiple choice questions. Step-by-step reasoning first.
      Schema: [{ "id": "${generateId()}", "reasoning": "string", "correctIndex": number }]
      correctIndex: 0=A, 1=B, 2=C, 3=D.
      Questions: ${JSON.stringify(
        batch.map((q) => ({ id: q.id, text: q.text, options: q.options }))
      )}
    `;
    const result = await callGemini(prompt, "You are an expert tutor.");

    if (result && Array.isArray(result)) {
      const updatedQuestions = questions.map((q) => {
        const found = result.find((r) => r.id === q.id);
        if (found && found.correctIndex >= 0)
          return { ...q, correctIndex: found.correctIndex };
        return q;
      });
      setQuestions(updatedQuestions);
      alert(`AI uzupełniło ${result.length} odpowiedzi.`);
    }
    setIsAiProcessing(false);
  };

  const explainQuestionWithAI = async (question) => {
    setExplainingId(question.id);
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Pytanie: "${
                      question.text
                    }"\nOpcje: ${question.options.join(", ")}\nPoprawna: ${
                      question.options[question.correctIndex]
                    }\nWyjaśnij dlaczego.`,
                  },
                ],
              },
            ],
          }),
        }
      );
      const data = await response.json();
      setAiExplanation((prev) => ({
        ...prev,
        [question.id]: data.candidates?.[0]?.content?.parts?.[0]?.text,
      }));
    } catch (e) {
      alert("Błąd wyjaśnienia.");
    } finally {
      setExplainingId(null);
    }
  };

  // --- Funkcje Quizu/Edytora ---
  const addQuestion = () => {
    if (
      !newQuestionText.trim() ||
      answers.some((a) => !a.trim()) ||
      correctAnswerIndex === null
    ) {
      alert("Wypełnij wszystkie pola.");
      return;
    }
    setQuestions([
      ...questions,
      {
        id: generateId(),
        text: newQuestionText,
        options: answers,
        correctIndex: correctAnswerIndex,
      },
    ]);
    setNewQuestionText("");
    setAnswers(["", "", "", ""]);
    setCorrectAnswerIndex(null);
  };

  const updateQuestionCorrectAnswer = (id, index) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, correctIndex: index } : q))
    );
  };

  const deleteQuestion = (id) => {
    if (confirm("Usunąć?")) setQuestions(questions.filter((q) => q.id !== id));
  };

  const clearAllQuestions = () => {
    if (confirm("Usunąć wszystko?")) setQuestions([]);
  };

  const parseAndImportQuestionsInline = () => {
    if (!importText.trim()) return;
    const parsed = parseQuestionsFromText(importText);
    if (parsed.length > 0) {
      setQuestions((prev) => [...prev, ...parsed]);
      setImportText("");
      setView("editor");
      alert(`Zaimportowano ${parsed.length} pytań.`);
    } else {
      alert("Błąd formatu.");
    }
  };

  const startQuiz = () => {
    const valid = questions.filter((q) => q.correctIndex !== null);
    if (valid.length === 0) {
      alert("Brak gotowych pytań.");
      return;
    }
    const selected = [...valid].sort(() => 0.5 - Math.random()).slice(0, 30);
    setQuizQuestions(selected);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setResultFilter("all"); // Reset filtra przy nowym quizie
    setView("quiz");
  };

  const handleSelectAnswer = (idx) => {
    // Sprawdzamy czy użytkownik już odpowiedział na to pytanie.
    // Jeśli tak - blokujemy możliwość zmiany (return).
    if (userAnswers[quizQuestions[currentQuestionIndex].id] !== undefined) {
      return;
    }
    setUserAnswers({
      ...userAnswers,
      [quizQuestions[currentQuestionIndex].id]: idx,
    });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    else {
      let s = 0;
      quizQuestions.forEach((q) => {
        if (userAnswers[q.id] === q.correctIndex) s++;
      });
      setScore(s);
      setView("results");
    }
  };

  const restartApp = () => {
    setView("editor");
    setAiExplanation({});
  };

  const validCount = questions.filter((q) => q.correctIndex !== null).length;

  // Funkcje pomocnicze dla widoku wyników
  const getFeedbackMessage = (percent) => {
    if (percent === 100) return "Perfekcyjnie! Jesteś mistrzem! 🏆";
    if (percent >= 90) return "Świetny wynik! 🌟";
    if (percent >= 70) return "Dobra robota, zaliczone. 👍";
    if (percent >= 50) return "Udało się, ale warto powtórzyć. 📚";
    return "Musisz jeszcze trochę popracować. Nie poddawaj się! 💪";
  };

  const filteredResults = quizQuestions.filter((q) => {
    const isCorrect = userAnswers[q.id] === q.correctIndex;
    if (resultFilter === "correct") return isCorrect;
    if (resultFilter === "incorrect") return !isCorrect;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-2 md:p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden min-h-[85vh] flex flex-col">
        <header className="bg-gradient-to-r from-indigo-700 to-indigo-600 text-white p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="w-8 h-8" /> Asystent Zaliczeniowy{" "}
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-2 flex items-center gap-1">
                <BrainCircuit className="w-3 h-3" /> AI
              </span>
            </h1>
            <p className="text-indigo-100 text-sm mt-1">
              Importer Pytań & Symulator Egzaminu
            </p>
          </div>
          <div className="flex gap-2 items-center flex-wrap justify-end">
            {view === "editor" && (
              <>
                <button
                  onClick={loadHardcodedQuestions}
                  className="p-2 bg-indigo-800/50 hover:bg-white/20 rounded text-xs font-medium flex gap-1"
                  title="Załaduj z kodu"
                >
                  <RefreshCcw className="w-4 h-4" /> Reset
                </button>
                <button
                  onClick={handleExportBackup}
                  className="p-2 bg-indigo-800/50 hover:bg-white/20 rounded text-xs font-medium flex gap-1"
                  title="Pobierz"
                >
                  <CloudDownload className="w-4 h-4" /> Backup
                </button>
                <button
                  onClick={handleImportBackupTrigger}
                  className="p-2 bg-indigo-800/50 hover:bg-white/20 rounded text-xs font-medium flex gap-1"
                  title="Wgraj"
                >
                  <Upload className="w-4 h-4" /> Wgraj
                </button>
                <input
                  type="file"
                  accept=".json"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleImportFileChange}
                />
              </>
            )}
            <div className="ml-2 text-right text-xs">
              <div>
                Pytania: <b>{questions.length}</b>
              </div>
            </div>
          </div>
        </header>

        {view !== "quiz" && view !== "results" && (
          <div className="flex border-b bg-slate-50">
            <button
              onClick={() => setView("editor")}
              className={`flex-1 py-3 font-semibold flex justify-center gap-2 ${
                view === "editor"
                  ? "bg-white border-t-2 border-indigo-600 text-indigo-700"
                  : "text-slate-500"
              }`}
            >
              <Edit3 className="w-4 h-4" /> Baza
            </button>
            <button
              onClick={() => setView("import")}
              className={`flex-1 py-3 font-semibold flex justify-center gap-2 ${
                view === "import"
                  ? "bg-white border-t-2 border-indigo-600 text-indigo-700"
                  : "text-slate-500"
              }`}
            >
              <FileText className="w-4 h-4" /> Import
            </button>
          </div>
        )}

        <main className="flex-grow p-4 overflow-hidden">
          {view === "import" && (
            <div className="max-w-3xl mx-auto animate-in">
              <div className="bg-blue-50 p-4 rounded mb-4 text-sm text-blue-800">
                <b>Instrukcja:</b> Wklej pytania w formacie{" "}
                <code>1. Pytanie... a. Odp...</code>. Aby oznaczyć poprawną
                odpowiedź, dodaj gwiazdkę przed literą:{" "}
                <code>*a. Poprawna</code>.
              </div>
              <textarea
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                className="w-full h-80 p-4 border rounded font-mono text-sm mb-4"
                placeholder={`1. Pytanie...\n*a. Poprawna\nb. Błędna...`}
              />
              <button
                onClick={parseAndImportQuestionsInline}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded flex justify-center gap-2"
              >
                <Download className="w-5 h-5" /> Importuj
              </button>
            </div>
          )}

          {view === "editor" && (
            <div className="flex flex-col lg:flex-row gap-6 h-full">
              <div className="flex-grow flex flex-col min-h-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Baza Pytań</h3>
                  {questions.length > 0 && (
                    <button
                      onClick={clearAllQuestions}
                      className="text-xs text-red-500"
                    >
                      Wyczyść
                    </button>
                  )}
                </div>
                {questions.length - validCount > 0 && (
                  <div className="bg-yellow-50 p-3 rounded mb-3 flex gap-2 items-center text-sm border border-yellow-200">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    <div className="flex-grow">
                      Brakuje odpowiedzi w {questions.length - validCount}{" "}
                      pytaniach.
                    </div>
                    <button
                      onClick={autoFillAnswersWithAI}
                      disabled={isAiProcessing}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs flex gap-1 items-center"
                    >
                      {isAiProcessing ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <Sparkles className="w-3 h-3" />
                      )}{" "}
                      Auto-Uzupełnij (AI)
                    </button>
                  </div>
                )}
                <div className="flex-grow overflow-y-auto pr-2 space-y-3 custom-scrollbar min-h-[300px]">
                  {questions.length === 0 ? (
                    <div className="text-center py-10 text-slate-400">
                      Brak pytań. Wklej je w kodzie lub zaimportuj.
                    </div>
                  ) : (
                    questions
                      .slice()
                      .reverse()
                      .map((q) => (
                        <div
                          key={q.id}
                          className={`p-3 rounded border-2 ${
                            q.correctIndex === null
                              ? "border-yellow-300 bg-yellow-50"
                              : "border-slate-100 bg-white"
                          }`}
                        >
                          <div className="flex justify-between gap-2">
                            <div className="flex-grow">
                              <p className="font-medium text-sm mb-2">
                                {q.text}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                {q.options.map((opt, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() =>
                                      updateQuestionCorrectAnswer(q.id, idx)
                                    }
                                    className={`text-left p-1.5 rounded border flex items-center gap-2 ${
                                      q.correctIndex === idx
                                        ? "bg-green-100 border-green-500 text-green-900"
                                        : "bg-white border-slate-200"
                                    }`}
                                  >
                                    <span
                                      className={`w-4 h-4 flex items-center justify-center font-bold text-[10px] rounded-full border ${
                                        q.correctIndex === idx
                                          ? "bg-green-500 text-white border-green-500"
                                          : "bg-slate-100"
                                      }`}
                                    >
                                      {String.fromCharCode(65 + idx)}
                                    </span>{" "}
                                    <span className="truncate">{opt}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                            <button
                              onClick={() => deleteQuestion(q.id)}
                              className="text-slate-300 hover:text-red-500 h-6 w-6"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))
                  )}
                </div>
              </div>
              <div className="lg:w-72 flex-shrink-0 flex flex-col gap-4">
                <div className="bg-white p-4 rounded border shadow-sm">
                  <h3 className="font-bold mb-2">Test</h3>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Gotowe:</span>
                    <b>{validCount}</b>
                  </div>
                  <button
                    onClick={startQuiz}
                    disabled={validCount === 0}
                    className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded flex justify-center gap-2 disabled:bg-slate-300"
                  >
                    <Play className="w-4 h-4" /> Start
                  </button>
                </div>
                <div className="bg-slate-50 p-4 rounded border">
                  <h3 className="font-bold text-sm mb-2">Dodaj</h3>
                  <input
                    className="w-full p-2 text-sm border rounded mb-2"
                    placeholder="Pytanie"
                    value={newQuestionText}
                    onChange={(e) => setNewQuestionText(e.target.value)}
                  />
                  <div className="grid grid-cols-2 gap-1 mb-2">
                    {answers.map((a, i) => (
                      <div key={i} className="flex">
                        <button
                          onClick={() => setCorrectAnswerIndex(i)}
                          className={`w-6 text-xs font-bold border ${
                            correctAnswerIndex === i
                              ? "bg-green-500 text-white"
                              : "bg-slate-200"
                          }`}
                        >
                          {String.fromCharCode(65 + i)}
                        </button>
                        <input
                          className="w-full p-1 text-xs border"
                          value={a}
                          onChange={(e) => {
                            const n = [...answers];
                            n[i] = e.target.value;
                            setAnswers(n);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={addQuestion}
                    className="w-full py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded"
                  >
                    Dodaj
                  </button>
                </div>
              </div>
            </div>
          )}

          {view === "quiz" && quizQuestions.length > 0 && (
            <div className="max-w-2xl mx-auto">
              <div className="mb-4 flex justify-between text-sm text-slate-500">
                <span>
                  Pytanie {currentQuestionIndex + 1}/{quizQuestions.length}
                </span>
              </div>
              <div className="bg-slate-200 h-2 rounded-full mb-6">
                <div
                  className="bg-indigo-600 h-full transition-all"
                  style={{
                    width: `${
                      ((currentQuestionIndex + 1) / quizQuestions.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <div className="bg-white p-5 mb-4 rounded shadow-sm border">
                <h2 className="text-lg font-bold">
                  {quizQuestions[currentQuestionIndex].text}
                </h2>
              </div>
              <div className="space-y-2">
                {quizQuestions[currentQuestionIndex].options.map((opt, idx) => {
                  // Logika natychmiastowego feedbacku
                  const currentQ = quizQuestions[currentQuestionIndex];
                  const userAnswer = userAnswers[currentQ.id]; // Czy użytkownik już odpowiedział?
                  const hasAnswered = userAnswer !== undefined;
                  const isCorrect = currentQ.correctIndex === idx;
                  const isSelected = userAnswer === idx;

                  let buttonClass =
                    "border-slate-200 hover:bg-slate-50 text-slate-700";
                  let iconClass = "bg-white text-slate-500 border-slate-300";

                  if (hasAnswered) {
                    // Jeśli użytkownik już odpowiedział, zmieniamy style
                    if (isCorrect) {
                      buttonClass =
                        "border-green-500 bg-green-100 text-green-900 font-bold ring-1 ring-green-500";
                      iconClass = "bg-green-500 text-white border-green-500";
                    } else if (isSelected) {
                      buttonClass =
                        "border-red-500 bg-red-100 text-red-900 font-bold";
                      iconClass = "bg-red-500 text-white border-red-500";
                    } else {
                      buttonClass = "border-slate-200 opacity-50"; // Wygaszenie pozostałych
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectAnswer(idx)}
                      disabled={hasAnswered}
                      className={`w-full text-left p-3 rounded border flex gap-3 transition-colors ${buttonClass}`}
                    >
                      <div
                        className={`w-6 h-6 flex items-center justify-center font-bold text-xs rounded-full border flex-shrink-0 ${iconClass}`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={nextQuestion}
                  disabled={
                    userAnswers[quizQuestions[currentQuestionIndex].id] ===
                    undefined
                  }
                  className="py-2 px-6 bg-indigo-600 text-white font-bold rounded disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:bg-indigo-700 shadow-md"
                >
                  {currentQuestionIndex < quizQuestions.length - 1
                    ? "Następne"
                    : "Zakończ"}
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </button>
              </div>
            </div>
          )}

          {view === "results" && (
            <div className="max-w-4xl mx-auto pb-10 animate-in fade-in duration-500">
              {/* 1. Header z wynikami */}
              <div className="bg-slate-800 text-white rounded-2xl p-8 mb-8 text-center shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-2">Quiz Zakończony</h2>
                  <div className="text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-400">
                    {score} / {quizQuestions.length}
                  </div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-indigo-100 font-medium text-lg mb-4">
                    {Math.round((score / quizQuestions.length) * 100)}%
                    Poprawnych
                  </div>
                  <p className="text-indigo-200 font-medium text-lg">
                    {getFeedbackMessage(
                      Math.round((score / quizQuestions.length) * 100)
                    )}
                  </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 to-slate-900 opacity-50 z-0"></div>
                <Trophy className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
              </div>

              {/* 2. Filtrowanie */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-700 text-xl">
                  Przegląd Odpowiedzi
                </h3>
                <div className="flex bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
                  <button
                    onClick={() => setResultFilter("all")}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                      resultFilter === "all"
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    Wszystkie
                  </button>
                  <button
                    onClick={() => setResultFilter("incorrect")}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                      resultFilter === "incorrect"
                        ? "bg-red-100 text-red-700"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    Tylko Błędy
                  </button>
                  <button
                    onClick={() => setResultFilter("correct")}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                      resultFilter === "correct"
                        ? "bg-green-100 text-green-700"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    Tylko Poprawne
                  </button>
                </div>
              </div>

              {/* 3. Lista pytań */}
              <div className="space-y-6">
                {filteredResults.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300 text-slate-400">
                    Brak pytań spełniających kryteria filtra.
                  </div>
                ) : (
                  filteredResults.map((q, idx) => {
                    const userAnswerIdx = userAnswers[q.id];
                    const isCorrectAnswer = userAnswerIdx === q.correctIndex;
                    const originalIndex = quizQuestions.findIndex(
                      (orig) => orig.id === q.id
                    );

                    return (
                      <div
                        key={q.id}
                        className={`bg-white rounded-xl shadow-sm border-2 overflow-hidden transition-all ${
                          isCorrectAnswer
                            ? "border-green-100"
                            : "border-red-100"
                        }`}
                      >
                        {/* Pytanie Header */}
                        <div
                          className={`p-4 border-b flex gap-3 ${
                            isCorrectAnswer ? "bg-green-50/50" : "bg-red-50/50"
                          }`}
                        >
                          <div className="mt-1">
                            {isCorrectAnswer ? (
                              <CheckCircle className="w-6 h-6 text-green-500" />
                            ) : (
                              <XCircle className="w-6 h-6 text-red-500" />
                            )}
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider opacity-60 block mb-1">
                              Pytanie {originalIndex + 1}
                            </span>
                            <h4 className="font-bold text-slate-800 text-lg">
                              {q.text}
                            </h4>
                          </div>
                        </div>

                        {/* Odpowiedzi Grid */}
                        <div className="p-4 bg-white">
                          <div className="grid grid-cols-1 gap-2">
                            {q.options.map((opt, optIdx) => {
                              // Logika kolorowania:
                              const isSelected = userAnswerIdx === optIdx;
                              const isCorrect = q.correctIndex === optIdx;

                              let buttonClass =
                                "border-slate-200 bg-white text-slate-500"; // Domyślny styl

                              if (isCorrect) {
                                buttonClass =
                                  "border-green-500 bg-green-100 text-green-900 font-bold ring-1 ring-green-500"; // Poprawna odpowiedź (zawsze zielona)
                              } else if (isSelected && !isCorrect) {
                                buttonClass =
                                  "border-red-500 bg-red-100 text-red-900 font-bold"; // Błędny wybór użytkownika (czerwony)
                              } else {
                                buttonClass = "opacity-60"; // Pozostałe opcje nieco wygaszone
                              }

                              return (
                                <div
                                  key={optIdx}
                                  className={`p-3 rounded-lg border flex items-center gap-3 text-sm transition-colors ${buttonClass}`}
                                >
                                  <div
                                    className={`w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold border ${
                                      isCorrect
                                        ? "border-green-600 bg-green-500 text-white"
                                        : isSelected
                                        ? "border-red-500 bg-red-500 text-white"
                                        : "border-slate-300"
                                    }`}
                                  >
                                    {String.fromCharCode(65 + optIdx)}
                                  </div>
                                  <span>{opt}</span>
                                  {isCorrect && (
                                    <span className="ml-auto text-xs font-bold text-green-700 uppercase tracking-wider">
                                      Poprawna
                                    </span>
                                  )}
                                  {isSelected && !isCorrect && (
                                    <span className="ml-auto text-xs font-bold text-red-700 uppercase tracking-wider">
                                      Twój wybór
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* AI Action Area */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
                            {!aiExplanation[q.id] ? (
                              <button
                                onClick={() => explainQuestionWithAI(q)}
                                disabled={explainingId === q.id}
                                className="text-indigo-600 text-sm font-semibold hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
                              >
                                {explainingId === q.id ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                  <BrainCircuit className="w-4 h-4" />
                                )}
                                {explainingId === q.id
                                  ? "Generowanie..."
                                  : "Wyjaśnij dlaczego"}
                              </button>
                            ) : (
                              <div className="w-full bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-sm text-indigo-900 animate-in fade-in">
                                <div className="flex items-start gap-2">
                                  <BrainCircuit className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                                  <div className="flex-grow">
                                    <p className="font-bold mb-1 text-indigo-700">
                                      Wyjaśnienie AI:
                                    </p>
                                    <p className="leading-relaxed">
                                      {aiExplanation[q.id]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* 4. Footer z przyciskiem powrotu */}
              <div className="mt-12 text-center sticky bottom-6 z-20">
                <button
                  onClick={restartApp}
                  className="py-4 px-10 bg-slate-900 hover:bg-black text-white font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-3 mx-auto"
                >
                  <Home className="w-5 h-5" />
                  Wróć do Menu Głównego
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
