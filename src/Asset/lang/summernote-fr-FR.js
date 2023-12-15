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
  'fr-FR': {
    font: {
      bold: 'Gras',
      italic: 'Italique',
      underline: 'Souligné',
      clear: 'Supprimer le style de police',
      height: 'Hauteur de ligne',
      name: 'Famille de police',
      strikethrough: 'Barré',
      subscript: 'Indice',
      superscript: 'Exposant',
      size: 'Taille de police',
      sizeunit: 'Unité de taille de police'
    },
    image: {
      image: 'Image',
      insert: 'Insérer une image',
      resizeFull: 'Taille réelle',
      resizeHalf: 'Taille à moitié',
      resizeQuarter: 'Taille au quart',
      resizeNone: 'Taille originale',
      floatLeft: 'Aligner à gauche',
      floatRight: 'Aligner à droite',
      floatNone: 'Supprimer l\'alignement',
      shapeRounded: 'Forme : Arrondie',
      shapeCircle: 'Forme : Cercle',
      shapeThumbnail: 'Forme : Vignette',
      shapeNone: 'Forme : Aucune',
      dragImageHere: 'Glisser une image ou un texte ici',
      dropImage: 'Déposer une image ou un texte',
      selectFromFiles: 'Sélectionner depuis les fichiers',
      fileNote: 'Sélectionner depuis les fichiers après avoir rempli les champs ci-dessous.',
      maximumFileSize: 'Taille maximale du fichier',
      maximumFileSizeError: 'Taille maximale du fichier dépassée.',
      url: 'URL de l\'image',
      remove: 'Supprimer',
      original: 'Original',
      fileBrowser: 'Explorateur de fichiers',
      title: 'Titre',
      alt: 'Texte alternatif',
      "class": 'Classe'
    },
    video: {
      video: 'Vidéo',
      videoLink: 'Lien de la vidéo',
      insert: 'Insérer une vidéo',
      url: 'URL de la vidéo',
      providers: '(Bilibi, Dailymotion, Facebook, Google, Instagram, Peertube, QQ, TikTok, Vimeo, WISTIA, Vine, Youku, YouTube)',
      note: 'Note : Toutes les options ne sont pas disponibles avec tous les services...',
      suggested: 'Afficher des vidéos suggérées lorsque la vidéo se termine',
      controls: 'Afficher les contrôles du lecteur',
      autoplay: 'Lecture automatique',
      loop: 'Boucle',
      aspect: 'Ratio',
      captions: 'Afficher les légendes',
      quality: 'Qualité de la vidéo',
      remove: 'Supprimer'
    },
    link: {
      link: 'Lien',
      insert: 'Insérer un lien',
      unlink: 'Supprimer le lien',
      edit: 'Modifier',
      textToDisplay: 'Texte à afficher',
      url: 'URL du lien',
      title: 'Titre',
      rel: 'Choisir une option Rel à utiliser',
      openInNewWindow: 'Ouvrir dans une nouvelle fenêtre',
      useProtocol: 'Utiliser le protocole par défaut',
      linkList: 'Liens sélectionnés'
    },
    table: {
      table: 'Tableau',
      addRowAbove: 'Ajouter une ligne au-dessus',
      addRowBelow: 'Ajouter une ligne en dessous',
      addColLeft: 'Ajouter une colonne à gauche',
      addColRight: 'Ajouter une colonne à droite',
      delRow: 'Supprimer la ligne',
      delCol: 'Supprimer la colonne',
      delTable: 'Supprimer le tableau'
    },
    hr: {
      insert: 'Insérer une règle horizontale'
    },
    block: {
      style: 'Éléments de bloc',
      address: 'Adresse',
      blockquote: 'Citation',
      details: 'Détails',
      div: 'Division',
      p: 'Paragraphe',
      pre: 'Code, texte préformaté',
      h1: 'En-tête 1',
      h2: 'En-tête 2',
      h3: 'En-tête 3',
      h4: 'En-tête 4',
      h5: 'En-tête 5',
      h6: 'En-tête 6'
    },
    inline: {
      style: 'Éléments en ligne',
      abbr: 'Abréviation',
      b: 'Gras',
      cite: 'Citation',
      code: 'Code',
      del: 'Supprimé',
      em: 'Emphase',
      figure: 'Figure',
      figcaption: 'Légende de la figure',
      i: 'Italique',
      ins: 'Inséré',
      kbd: 'Clavier',
      mark: 'Marque',
      picture: 'Image',
      q: 'Citation',
      s: 'Barré',
      samp: 'Exemple',
      small: 'Petit',
      span: 'Span',
      strong: 'Fort',
      sub: 'Indice',
      sup: 'Exposant',
      time: 'Temps',
      u: 'Souligné',
      "var": 'Variable'
    },
    zoom: {
      "in": 'Zoom avant',
      value: 'Valeur de zoom',
      out: 'Zoom arrière'
    },
    lists: {
      unordered: 'Liste non ordonnée',
      ordered: 'Liste ordonnée'
    },
    options: {
      help: 'Aide',
      fullscreen: 'Plein écran',
      codeview: 'Vue du code'
    },
    paragraph: {
      paragraph: 'Paragraphe',
      outdent: 'Diminuer le retrait',
      indent: 'Augmenter le retrait',
      left: 'Aligner à gauche',
      center: 'Centrer',
      right: 'Aligner à droite',
      justify: 'Justifier'
    },
    color: {
      recent: 'Couleur récente',
      more: 'Plus de couleurs',
      background: 'Couleur d\'arrière-plan',
      foreground: 'Couleur du texte',
      transparent: 'Transparent',
      setTransparent: 'Définir comme transparent',
      reset: 'Réinitialiser',
      resetToDefault: 'Réinitialiser par défaut',
      cpSelect: 'Sélectionner'
    },
    shortcut: {
      shortcuts: 'Raccourcis clavier',
      close: 'Fermer',
      textFormatting: 'Mise en forme du texte',
      action: 'Action',
      paragraphFormatting: 'Mise en forme du paragraphe',
      documentStyle: 'Style du document',
      extraKeys: 'Touches supplémentaires'
    },
    help: {
      'escape': 'Échapper/Fermer',
      'insertParagraph': 'Paragraphe',
      'undo': 'Annuler',
      'redo': 'Rétablir',
      'tab': 'Tabulation',
      'untab': 'Retrait de tabulation',
      'bold': 'Gras',
      'italic': 'Italique',
      'underline': 'Souligné',
      'strikethrough': 'Barré',
      'removeFormat': 'Supprimer les styles',
      'justifyLeft': 'Aligner à gauche',
      'justifyCenter': 'Centrer',
      'justifyRight': 'Aligner à droite',
      'justifyFull': 'Justifier',
      'insertUnorderedList': 'Liste non ordonnée',
      'insertOrderedList': 'Liste ordonnée',
      'outdent': 'Diminuer le retrait',
      'indent': 'Augmenter le retrait',
      'formatPara': 'Paragraphe',
      'formatH1': 'En-tête 1',
      'formatH2': 'En-tête 2',
      'formatH3': 'En-tête 3',
      'formatH4': 'En-tête 4',
      'formatH5': 'En-tête 5',
      'formatH6': 'En-tête 6',
      'insertHorizontalRule': 'Règle horizontale',
      'linkDialog.show': 'Afficher la boîte de dialogue des liens',
      'imageDialog.show': 'Afficher la boîte de dialogue des images',
      'videoDialog.show': 'Afficher la boîte de dialogue des vidéos',
      'helpDialog.show': 'Afficher la boîte de dialogue d\'aide'
    },
    history: {
      undo: 'Annuler',
      redo: 'Rétablir'
    },
    specialChar: {
      specialChar: 'CARACTÈRES SPÉCIAUX',
      select: 'Sélectionner des caractères spéciaux'
    },
    output: {
      noSelection: 'Aucune sélection effectuée !'
    }
  }
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-fr-FR.js.map