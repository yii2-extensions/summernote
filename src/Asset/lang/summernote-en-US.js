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
  'en-US': {
    font: {
      bold: 'Bold',
      italic: 'Italic',
      underline: 'Underline',
      clear: 'Remove Font Style',
      height: 'Line Height',
      name: 'Font Family',
      strikethrough: 'Strikethrough',
      subscript: 'Subscript',
      superscript: 'Superscript',
      size: 'Font Size',
      sizeunit: 'Font Size Unit'
    },
    image: {
      image: 'Picture',
      insert: 'Insert Image',
      resizeFull: 'Resize full',
      resizeHalf: 'Resize half',
      resizeQuarter: 'Resize quarter',
      resizeNone: 'Original size',
      floatLeft: 'Float Left',
      floatRight: 'Float Right',
      floatNone: 'Remove float',
      shapeRounded: 'Shape: Rounded',
      shapeCircle: 'Shape: Circle',
      shapeThumbnail: 'Shape: Thumbnail',
      shapeNone: 'Shape: None',
      dragImageHere: 'Drag image or text here',
      dropImage: 'Drop image or Text',
      selectFromFiles: 'Select from files',
      fileNote: 'Select from files after filling in below fields.',
      maximumFileSize: 'Maximum file size',
      maximumFileSizeError: 'Maximum file size exceeded.',
      url: 'Image URL',
      remove: 'Remove',
      original: 'Original',
      fileBrowser: 'File&nbsp;Browser',
      title: 'Title',
      alt: 'Alt',
      "class": 'Class'
    },
    video: {
      video: 'Video',
      videoLink: 'Video Link',
      insert: 'Insert Video',
      url: 'Video URL',
      providers: '(Bilibi, Dailymotion, Facebook, Google, Instagram, Peertube, QQ, TikTok, Vimeo, WISTIA, Vine, Youku, YouTube)',
      note: 'Note: Not all options are available with all services...',
      suggested: 'Show Suggested videos when the video finishes',
      controls: 'Show player controls',
      autoplay: 'Autoplay',
      loop: 'Loop',
      aspect: 'Aspect Ratio',
      captions: 'Show Captions',
      quality: 'Video Quality',
      remove: 'Remove'
    },
    link: {
      link: 'Link',
      insert: 'Insert Link',
      unlink: 'Unlink',
      edit: 'Edit',
      textToDisplay: 'Text to display',
      url: 'Link URL',
      title: 'Title',
      rel: 'Choose a Rel option to use',
      openInNewWindow: 'Open in new window',
      useProtocol: 'Use default protocol',
      linkList: 'Curated Links'
    },
    table: {
      table: 'Table',
      addRowAbove: 'Add row above',
      addRowBelow: 'Add row below',
      addColLeft: 'Add column left',
      addColRight: 'Add column right',
      delRow: 'Delete row',
      delCol: 'Delete column',
      delTable: 'Delete table'
    },
    hr: {
      insert: 'Insert Horizontal Rule'
    },
    block: {
      style: 'Block Elements',
      address: 'Address',
      blockquote: 'Blockquote',
      details: 'Details',
      div: 'Division',
      p: 'Paragraph',
      pre: 'Code, preformatted text',
      h1: 'Header 1',
      h2: 'Header 2',
      h3: 'Header 3',
      h4: 'Header 4',
      h5: 'Header 5',
      h6: 'Header 6'
    },
    inline: {
      style: 'Inline Elements',
      abbr: 'Abbreviation',
      b: 'Bold',
      cite: 'Citation',
      code: 'Code',
      del: 'Deleted',
      em: 'Emphasis',
      figure: 'Figure',
      figcaption: 'Figure Caption',
      i: 'Italic',
      ins: 'Insert',
      kbd: 'Keyboard',
      mark: 'Mark',
      picture: 'Picture',
      q: 'Quotation',
      s: 'Strikethrough',
      samp: 'Sample',
      small: 'Small',
      span: 'Span',
      strong: 'Strong',
      sub: 'Sub',
      sup: 'Sup',
      time: 'Time',
      u: 'Underline',
      "var": 'Var'
    },
    zoom: {
      "in": 'Zoom in',
      value: 'Zoom value',
      out: 'Zoom out'
    },
    lists: {
      unordered: 'Unordered list',
      ordered: 'Ordered list'
    },
    options: {
      help: 'Help',
      fullscreen: 'Full Screen',
      codeview: 'Code View'
    },
    paragraph: {
      paragraph: 'Paragraph',
      outdent: 'Outdent',
      indent: 'Indent',
      left: 'Align left',
      center: 'Align center',
      right: 'Align right',
      justify: 'Justify full'
    },
    color: {
      recent: 'Recent Color',
      more: 'More Color',
      background: 'Background Color',
      foreground: 'Text Color',
      transparent: 'Transparent',
      setTransparent: 'Set transparent',
      reset: 'Reset',
      resetToDefault: 'Reset to default',
      cpSelect: 'Select'
    },
    shortcut: {
      shortcuts: 'Keyboard shortcuts',
      close: 'Close',
      textFormatting: 'Text formatting',
      action: 'Action',
      paragraphFormatting: 'Paragraph formatting',
      documentStyle: 'Document Style',
      extraKeys: 'Extra keys'
    },
    help: {
      'escape': 'Escape/Close',
      'insertParagraph': 'Paragraph',
      'undo': 'Undo',
      'redo': 'Redo',
      'tab': 'Tab',
      'untab': 'Untab',
      'bold': 'Bold',
      'italic': 'Italic',
      'underline': 'Underline',
      'strikethrough': 'Strikethrough',
      'removeFormat': 'Clean Styles',
      'justifyLeft': 'Left Align',
      'justifyCenter': 'Center Align',
      'justifyRight': 'Right Align',
      'justifyFull': 'Full Align',
      'insertUnorderedList': 'Unordered List',
      'insertOrderedList': 'Ordered List',
      'outdent': 'Outdent',
      'indent': 'Indent',
      'formatPara': 'Paragraph',
      'formatH1': 'H1 Header',
      'formatH2': 'H2 Header',
      'formatH3': 'H3 Header',
      'formatH4': 'H4 Header',
      'formatH5': 'H5 Header',
      'formatH6': 'H6 Header',
      'insertHorizontalRule': 'Horizontal Rule',
      'linkDialog.show': 'Show Link Dialog',
      'imageDialog.show': 'Show Image Dialog',
      'videoDialog.show': 'Show Video Dialog',
      'helpDialog.show': 'Show Help Dialog'
    },
    history: {
      undo: 'Undo',
      redo: 'Redo'
    },
    specialChar: {
      specialChar: 'SPECIAL CHARACTERS',
      select: 'Select Special characters'
    },
    output: {
      noSelection: 'No Selection Made!'
    }
  }
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-en-US.js.map