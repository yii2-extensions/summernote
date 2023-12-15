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
  'de-DE': {
    font: {
      bold: 'Fett',
      italic: 'Kursiv',
      underline: 'Unterstrichen',
      clear: 'Schriftart entfernen',
      height: 'Zeilenhöhe',
      name: 'Schriftart',
      strikethrough: 'Durchgestrichen',
      subscript: 'Tiefgestellt',
      superscript: 'Hochgestellt',
      size: 'Schriftgröße',
      sizeunit: 'Schriftgröße Einheit'
    },
    image: {
      image: 'Bild',
      insert: 'Bild einfügen',
      resizeFull: 'Vollständige Größe',
      resizeHalf: 'Halbe Größe',
      resizeQuarter: 'Viertel Größe',
      resizeNone: 'Originalgröße',
      floatLeft: 'Links ausrichten',
      floatRight: 'Rechts ausrichten',
      floatNone: 'Ausrichtung aufheben',
      shapeRounded: 'Form: Abgerundet',
      shapeCircle: 'Form: Kreis',
      shapeThumbnail: 'Form: Miniaturansicht',
      shapeNone: 'Form: Keine',
      dragImageHere: 'Bild oder Text hierhin ziehen',
      dropImage: 'Bild oder Text ablegen',
      selectFromFiles: 'Aus Dateien auswählen',
      fileNote: 'Nach dem Ausfüllen der unten stehenden Felder aus Dateien auswählen.',
      maximumFileSize: 'Maximale Dateigröße',
      maximumFileSizeError: 'Maximale Dateigröße überschritten.',
      url: 'Bild-URL',
      remove: 'Entfernen',
      original: 'Original',
      fileBrowser: 'Datei-Browser',
      title: 'Titel',
      alt: 'Alt-Text',
      "class": 'Klasse'
    },
    video: {
      video: 'Video',
      videoLink: 'Video-Link',
      insert: 'Video einfügen',
      url: 'Video-URL',
      providers: '(Bilibi, Dailymotion, Facebook, Google, Instagram, Peertube, QQ, TikTok, Vimeo, WISTIA, Vine, Youku, YouTube)',
      note: 'Hinweis: Nicht alle Optionen sind bei allen Diensten verfügbar...',
      suggested: 'Empfohlene Videos anzeigen, wenn das Video endet',
      controls: 'Player-Steuerung anzeigen',
      autoplay: 'Automatische Wiedergabe',
      loop: 'Schleife',
      aspect: 'Seitenverhältnis',
      captions: 'Untertitel anzeigen',
      quality: 'Videoqualität',
      remove: 'Entfernen'
    },
    link: {
      link: 'Link',
      insert: 'Link einfügen',
      unlink: 'Verknüpfung aufheben',
      edit: 'Bearbeiten',
      textToDisplay: 'Anzuzeigender Text',
      url: 'Link-URL',
      title: 'Titel',
      rel: 'Rel-Option wählen',
      openInNewWindow: 'In neuem Fenster öffnen',
      useProtocol: 'Standardprotokoll verwenden',
      linkList: 'Zusammengestellte Links'
    },
    table: {
      table: 'Tabelle',
      addRowAbove: 'Zeile darüber hinzufügen',
      addRowBelow: 'Zeile darunter hinzufügen',
      addColLeft: 'Spalte links hinzufügen',
      addColRight: 'Spalte rechts hinzufügen',
      delRow: 'Zeile löschen',
      delCol: 'Spalte löschen',
      delTable: 'Tabelle löschen'
    },
    hr: {
      insert: 'Horizontale Linie einfügen'
    },
    block: {
      style: 'Blockelemente',
      address: 'Adresse',
      blockquote: 'Zitat',
      details: 'Details',
      div: 'Division',
      p: 'Absatz',
      pre: 'Code, vorformatierter Text',
      h1: 'Überschrift 1',
      h2: 'Überschrift 2',
      h3: 'Überschrift 3',
      h4: 'Überschrift 4',
      h5: 'Überschrift 5',
      h6: 'Überschrift 6'
    },
    inline: {
      style: 'Inline-Elemente',
      abbr: 'Abkürzung',
      b: 'Fett',
      cite: 'Zitat',
      code: 'Code',
      del: 'Durchgestrichen',
      em: 'Hervorhebung',
      figure: 'Abbildung',
      figcaption: 'Abbildungsbildunterschrift',
      i: 'Kursiv',
      ins: 'Einfügen',
      kbd: 'Tastatur',
      mark: 'Markierung',
      picture: 'Bild',
      q: 'Zitat',
      s: 'Durchgestrichen',
      samp: 'Beispiel',
      small: 'Klein',
      span: 'Spanne',
      strong: 'Stark',
      sub: 'Tiefgestellt',
      sup: 'Hochgestellt',
      time: 'Zeit',
      u: 'Unterstrichen',
      "var": 'Variable'
    },
    zoom: {
      "in": 'Vergrößern',
      value: 'Zoom-Wert',
      out: 'Verkleinern'
    },
    lists: {
      unordered: 'Ungeordnete Liste',
      ordered: 'Geordnete Liste'
    },
    options: {
      help: 'Hilfe',
      fullscreen: 'Vollbild',
      codeview: 'Code-Ansicht'
    },
    paragraph: {
      paragraph: 'Absatz',
      outdent: 'Einzug verkleinern',
      indent: 'Einzug vergrößern',
      left: 'Links ausrichten',
      center: 'Zentriert ausrichten',
      right: 'Rechts ausrichten',
      justify: 'Blocksatz'
    },
    color: {
      recent: 'Aktuelle Farbe',
      more: 'Mehr Farben',
      background: 'Hintergrundfarbe',
      foreground: 'Textfarbe',
      transparent: 'Transparent',
      setTransparent: 'Transparent einstellen',
      reset: 'Zurücksetzen',
      resetToDefault: 'Auf Standard zurücksetzen',
      cpSelect: 'Auswählen'
    },
    shortcut: {
      shortcuts: 'Tastenkombinationen',
      close: 'Schließen',
      textFormatting: 'Textformatierung',
      action: 'Aktion',
      paragraphFormatting: 'Absatzformatierung',
      documentStyle: 'Dokumentenstil',
      extraKeys: 'Zusätzliche Tasten'
    },
    help: {
      'escape': 'Escape/Schließen',
      'insertParagraph': 'Absatz einfügen',
      'undo': 'Rückgängig machen',
      'redo': 'Wiederholen',
      'tab': 'Tabulator',
      'untab': 'Tabulator zurücknehmen',
      'bold': 'Fett',
      'italic': 'Kursiv',
      'underline': 'Unterstrichen',
      'strikethrough': 'Durchgestrichen',
      'removeFormat': 'Stile entfernen',
      'justifyLeft': 'Links ausrichten',
      'justifyCenter': 'Zentriert ausrichten',
      'justifyRight': 'Rechts ausrichten',
      'justifyFull': 'Blocksatz',
      'insertUnorderedList': 'Ungeordnete Liste',
      'insertOrderedList': 'Geordnete Liste',
      'outdent': 'Einzug verkleinern',
      'indent': 'Einzug vergrößern',
      'formatPara': 'Absatz',
      'formatH1': 'Überschrift 1',
      'formatH2': 'Überschrift 2',
      'formatH3': 'Überschrift 3',
      'formatH4': 'Überschrift 4',
      'formatH5': 'Überschrift 5',
      'formatH6': 'Überschrift 6',
      'insertHorizontalRule': 'Horizontale Linie einfügen',
      'linkDialog.show': 'Link-Dialog anzeigen',
      'imageDialog.show': 'Bild-Dialog anzeigen',
      'videoDialog.show': 'Video-Dialog anzeigen',
      'helpDialog.show': 'Hilfe-Dialog anzeigen'
    },
    history: {
      undo: 'Rückgängig machen',
      redo: 'Wiederholen'
    },
    specialChar: {
      specialChar: 'SPEZIALZEICHEN',
      select: 'Spezialzeichen auswählen'
    },
    output: {
      noSelection: 'Keine Auswahl getroffen!'
    }
  }
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-de-DE.js.map