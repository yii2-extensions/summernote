/*!
 * 
 * Summernote Skunkworks
 *
 * The Super simple WYSIWYG editor.
 *
 * https://summernote.org
 *
 * Copyright 2013- Alan Hong and Contributors
 * Summernote may be freely distributed under the MIT license.
 *
 * Date: 2023-12-15T15:47Z
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, (__WEBPACK_EXTERNAL_MODULE__549__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 549:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__549__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(549);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

(jquery__WEBPACK_IMPORTED_MODULE_0___default().summernote) = (jquery__WEBPACK_IMPORTED_MODULE_0___default().summernote) || {
  lang: {}
};
jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(true, (jquery__WEBPACK_IMPORTED_MODULE_0___default().summernote).lang, {
  'pl-PL': {
    font: {
      bold: 'Pogrubienie',
      italic: 'Kursywa',
      underline: 'Podkreślenie',
      clear: 'Usuń styl czcionki',
      height: 'Wysokość linii',
      name: 'Rodzina czcionek',
      strikethrough: 'Przekreślenie',
      subscript: 'Indeks dolny',
      superscript: 'Indeks górny',
      size: 'Rozmiar czcionki',
      sizeunit: 'Jednostka rozmiaru czcionki'
    },
    image: {
      image: 'Obraz',
      insert: 'Wstaw obraz',
      resizeFull: 'Zmień rozmiar na pełny',
      resizeHalf: 'Zmień rozmiar na połowę',
      resizeQuarter: 'Zmień rozmiar na jedną czwartą',
      resizeNone: 'Oryginalny rozmiar',
      floatLeft: 'Wyrównaj do lewej',
      floatRight: 'Wyrównaj do prawej',
      floatNone: 'Usuń wyrównanie',
      shapeRounded: 'Kształt: zaokrąglony',
      shapeCircle: 'Kształt: okrąg',
      shapeThumbnail: 'Kształt: miniatura',
      shapeNone: 'Kształt: brak',
      dragImageHere: 'Przeciągnij obraz lub tekst tutaj',
      dropImage: 'Upuść obraz lub tekst',
      selectFromFiles: 'Wybierz z plików',
      fileNote: 'Wybierz z plików po wypełnieniu poniższych pól.',
      maximumFileSize: 'Maksymalny rozmiar pliku',
      maximumFileSizeError: 'Przekroczono maksymalny rozmiar pliku.',
      url: 'Adres URL obrazu',
      remove: 'Usuń',
      original: 'Oryginalny',
      fileBrowser: 'Przeglądarka plików',
      title: 'Tytuł',
      alt: 'Tekst alternatywny',
      "class": 'Klasa'
    },
    video: {
      video: 'Wideo',
      videoLink: 'Link do wideo',
      insert: 'Wstaw wideo',
      url: 'Adres URL wideo',
      providers: '(Bilibi, Dailymotion, Facebook, Google, Instagram, Peertube, QQ, TikTok, Vimeo, WISTIA, Vine, Youku, YouTube)',
      note: 'Uwaga: Nie wszystkie opcje są dostępne we wszystkich usługach...',
      suggested: 'Pokaż sugerowane filmy po zakończeniu filmu',
      controls: 'Pokaż kontrolki odtwarzacza',
      autoplay: 'Autoodtwarzanie',
      loop: 'Powtarzanie',
      aspect: 'Proporcje',
      captions: 'Pokaż napisy',
      quality: 'Jakość wideo',
      remove: 'Usuń'
    },
    link: {
      link: 'Link',
      insert: 'Wstaw link',
      unlink: 'Usuń link',
      edit: 'Edytuj',
      textToDisplay: 'Tekst do wyświetlenia',
      url: 'Adres URL linku',
      title: 'Tytuł',
      rel: 'Wybierz opcję rel do użycia',
      openInNewWindow: 'Otwórz w nowym oknie',
      useProtocol: 'Użyj domyślnego protokołu',
      linkList: 'Wybrane linki'
    },
    table: {
      table: 'Tabela',
      addRowAbove: 'Dodaj wiersz powyżej',
      addRowBelow: 'Dodaj wiersz poniżej',
      addColLeft: 'Dodaj kolumnę po lewej',
      addColRight: 'Dodaj kolumnę po prawej',
      delRow: 'Usuń wiersz',
      delCol: 'Usuń kolumnę',
      delTable: 'Usuń tabelę'
    },
    hr: {
      insert: 'Wstaw poziomą linię'
    },
    block: {
      style: 'Elementy blokowe',
      address: 'Adres',
      blockquote: 'Cytat blokowy',
      details: 'Szczegóły',
      div: 'Podział',
      p: 'Akapit',
      pre: 'Kod, tekst sformatowany',
      h1: 'Nagłówek 1',
      h2: 'Nagłówek 2',
      h3: 'Nagłówek 3',
      h4: 'Nagłówek 4',
      h5: 'Nagłówek 5',
      h6: 'Nagłówek 6'
    },
    inline: {
      style: 'Elementy w linii',
      abbr: 'Skrót',
      b: 'Pogrubienie',
      cite: 'Cytat',
      code: 'Kod',
      del: 'Usunięte',
      em: 'Podkreślenie',
      figure: 'Figura',
      figcaption: 'Podpis figury',
      i: 'Kursywa',
      ins: 'Wstawione',
      kbd: 'Klawiatura',
      mark: 'Zaznaczenie',
      picture: 'Obraz',
      q: 'Cytat',
      s: 'Przekreślenie',
      samp: 'Przykład',
      small: 'Mały',
      span: 'Span',
      strong: 'Wytłuszczenie',
      sub: 'Indeks dolny',
      sup: 'Indeks górny',
      time: 'Czas',
      u: 'Podkreślenie',
      "var": 'Zmienna'
    },
    zoom: {
      "in": 'Powiększ',
      value: 'Wartość powiększenia',
      out: 'Pomniejsz'
    },
    lists: {
      unordered: 'Lista nieuporządkowana',
      ordered: 'Lista uporządkowana'
    },
    options: {
      help: 'Pomoc',
      fullscreen: 'Pełny ekran',
      codeview: 'Widok kodu'
    },
    paragraph: {
      paragraph: 'Akapit',
      outdent: 'Zmniejsz wcięcie',
      indent: 'Zwiększ wcięcie',
      left: 'Wyrównaj do lewej',
      center: 'Wyrównaj do środka',
      right: 'Wyrównaj do prawej',
      justify: 'Wyjustuj'
    },
    color: {
      recent: 'Ostatni kolor',
      more: 'Więcej kolorów',
      background: 'Kolor tła',
      foreground: 'Kolor tekstu',
      transparent: 'Przezroczysty',
      setTransparent: 'Ustaw jako przezroczysty',
      reset: 'Resetuj',
      resetToDefault: 'Resetuj do domyślnego',
      cpSelect: 'Wybierz'
    },
    shortcut: {
      shortcuts: 'Skróty klawiaturowe',
      close: 'Zamknij',
      textFormatting: 'Formatowanie tekstu',
      action: 'Akcja',
      paragraphFormatting: 'Formatowanie akapitu',
      documentStyle: 'Styl dokumentu',
      extraKeys: 'Dodatkowe klawisze'
    },
    help: {
      'escape': 'Escape/Zamknij',
      'insertParagraph': 'Akapit',
      'undo': 'Cofnij',
      'redo': 'Ponów',
      'tab': 'Tabulacja',
      'untab': 'Usuń tabulację',
      'bold': 'Pogrubienie',
      'italic': 'Kursywa',
      'underline': 'Podkreślenie',
      'strikethrough': 'Przekreślenie',
      'removeFormat': 'Usuń style',
      'justifyLeft': 'Wyrównaj do lewej',
      'justifyCenter': 'Wyrównaj do środka',
      'justifyRight': 'Wyrównaj do prawej',
      'justifyFull': 'Wyrównaj do lewej i prawej',
      'insertUnorderedList': 'Lista nieuporządkowana',
      'insertOrderedList': 'Lista uporządkowana',
      'outdent': 'Zmniejsz wcięcie',
      'indent': 'Zwiększ wcięcie',
      'formatPara': 'Akapit',
      'formatH1': 'Nagłówek 1',
      'formatH2': 'Nagłówek 2',
      'formatH3': 'Nagłówek 3',
      'formatH4': 'Nagłówek 4',
      'formatH5': 'Nagłówek 5',
      'formatH6': 'Nagłówek 6',
      'insertHorizontalRule': 'Wstaw poziomą linię',
      'linkDialog.show': 'Pokaż okno dialogowe linku',
      'imageDialog.show': 'Pokaż okno dialogowe obrazu',
      'videoDialog.show': 'Pokaż okno dialogowe wideo',
      'helpDialog.show': 'Pokaż okno dialogowe pomocy'
    },
    history: {
      undo: 'Cofnij',
      redo: 'Ponów'
    },
    specialChar: {
      specialChar: 'ZNAKI SPECJALNE',
      select: 'Wybierz znaki specjalne'
    },
    output: {
      noSelection: 'Brak zaznaczenia!'
    }
  }
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-pl-PL.js.map