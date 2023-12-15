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
  'ru-RU': {
    font: {
      bold: 'Жирный',
      italic: 'Курсив',
      underline: 'Подчеркнутый',
      clear: 'Удалить стиль шрифта',
      height: 'Высота строки',
      name: 'Семейство шрифтов',
      strikethrough: 'Зачеркнутый',
      subscript: 'Подстрочный',
      superscript: 'Надстрочный',
      size: 'Размер шрифта',
      sizeunit: 'Единица измерения размера шрифта'
    },
    image: {
      image: 'Изображение',
      insert: 'Вставить изображение',
      resizeFull: 'Увеличить до полного размера',
      resizeHalf: 'Уменьшить до половины',
      resizeQuarter: 'Уменьшить до четверти',
      resizeNone: 'Оригинальный размер',
      floatLeft: 'Выровнять по левому краю',
      floatRight: 'Выровнять по правому краю',
      floatNone: 'Убрать выравнивание',
      shapeRounded: 'Форма: закругленная',
      shapeCircle: 'Форма: круг',
      shapeThumbnail: 'Форма: эскиз',
      shapeNone: 'Форма: без',
      dragImageHere: 'Перетащите изображение или текст сюда',
      dropImage: 'Перетащите изображение или текст',
      selectFromFiles: 'Выбрать из файлов',
      fileNote: 'Выберите изображение из файлов после заполнения полей ниже.',
      maximumFileSize: 'Максимальный размер файла',
      maximumFileSizeError: 'Превышен максимальный размер файла.',
      url: 'URL изображения',
      remove: 'Удалить',
      original: 'Оригинал',
      fileBrowser: 'Проводник файлов',
      title: 'Заголовок',
      alt: 'Альтернативный текст',
      "class": 'Класс'
    },
    video: {
      video: 'Видео',
      videoLink: 'Ссылка на видео',
      insert: 'Вставить видео',
      url: 'URL видео',
      providers: '(Bilibi, Dailymotion, Facebook, Google, Instagram, Peertube, QQ, TikTok, Vimeo, WISTIA, Vine, Youku, YouTube)',
      note: 'Примечание: Не все параметры доступны на всех сервисах...',
      suggested: 'Показывать рекомендуемые видео после окончания',
      controls: 'Показывать элементы управления плеером',
      autoplay: 'Автоматическое воспроизведение',
      loop: 'Зациклить',
      aspect: 'Соотношение сторон',
      captions: 'Показывать субтитры',
      quality: 'Качество видео',
      remove: 'Удалить'
    },
    link: {
      link: 'Ссылка',
      insert: 'Вставить ссылку',
      unlink: 'Удалить ссылку',
      edit: 'Редактировать',
      textToDisplay: 'Отображаемый текст',
      url: 'URL ссылки',
      title: 'Заголовок',
      rel: 'Выберите значение для атрибута rel',
      openInNewWindow: 'Открыть в новом окне',
      useProtocol: 'Использовать стандартный протокол',
      linkList: 'Список ссылок'
    },
    table: {
      table: 'Таблица',
      addRowAbove: 'Добавить строку выше',
      addRowBelow: 'Добавить строку ниже',
      addColLeft: 'Добавить столбец слева',
      addColRight: 'Добавить столбец справа',
      delRow: 'Удалить строку',
      delCol: 'Удалить столбец',
      delTable: 'Удалить таблицу'
    },
    hr: {
      insert: 'Вставить горизонтальную линию'
    },
    block: {
      style: 'Блочные элементы',
      address: 'Адрес',
      blockquote: 'Цитата',
      details: 'Детали',
      div: 'Дивизион',
      p: 'Параграф',
      pre: 'Код, предварительно отформатированный текст',
      h1: 'Заголовок 1',
      h2: 'Заголовок 2',
      h3: 'Заголовок 3',
      h4: 'Заголовок 4',
      h5: 'Заголовок 5',
      h6: 'Заголовок 6'
    },
    inline: {
      style: 'Встроенные элементы',
      abbr: 'Аббревиатура',
      b: 'Жирный',
      cite: 'Цитата',
      code: 'Код',
      del: 'Зачеркнутый',
      em: 'Выделение',
      figure: 'Фигура',
      figcaption: 'Подпись к фигуре',
      i: 'Курсив',
      ins: 'Вставленный',
      kbd: 'Клавиатура',
      mark: 'Выделение',
      picture: 'Изображение',
      q: 'Цитата',
      s: 'Зачеркнутый',
      samp: 'Образец',
      small: 'Маленький',
      span: 'Span',
      strong: 'Полужирный',
      sub: 'Подстрочный',
      sup: 'Надстрочный',
      time: 'Время',
      u: 'Подчеркнутый',
      "var": 'Переменная'
    },
    zoom: {
      "in": 'Увеличить масштаб',
      value: 'Значение масштаба',
      out: 'Уменьшить масштаб'
    },
    lists: {
      unordered: 'Неупорядоченный список',
      ordered: 'Упорядоченный список'
    },
    options: {
      help: 'Помощь',
      fullscreen: 'Полноэкранный режим',
      codeview: 'Просмотр кода'
    },
    paragraph: {
      paragraph: 'Параграф',
      outdent: 'Уменьшить отступ',
      indent: 'Увеличить отступ',
      left: 'Выровнять по левому краю',
      center: 'Выровнять по центру',
      right: 'Выровнять по правому краю',
      justify: 'Выровнять по ширине'
    },
    color: {
      recent: 'Последний цвет',
      more: 'Больше цветов',
      background: 'Цвет фона',
      foreground: 'Цвет текста',
      transparent: 'Прозрачный',
      setTransparent: 'Установить прозрачность',
      reset: 'Сбросить',
      resetToDefault: 'Сбросить настройки по умолчанию',
      cpSelect: 'Выбрать'
    },
    shortcut: {
      shortcuts: 'Горячие клавиши',
      close: 'Закрыть',
      textFormatting: 'Форматирование текста',
      action: 'Действие',
      paragraphFormatting: 'Форматирование параграфа',
      documentStyle: 'Стиль документа',
      extraKeys: 'Дополнительные клавиши'
    },
    help: {
      'escape': 'Esc/Закрыть',
      'insertParagraph': 'Параграф',
      'undo': 'Отменить',
      'redo': 'Повторить',
      'tab': 'Табуляция',
      'untab': 'Убрать табуляцию',
      'bold': 'Жирный',
      'italic': 'Курсив',
      'underline': 'Подчеркнутый',
      'strikethrough': 'Зачеркнутый',
      'removeFormat': 'Удалить стили',
      'justifyLeft': 'Выровнять по левому краю',
      'justifyCenter': 'Выровнять по центру',
      'justifyRight': 'Выровнять по правому краю',
      'justifyFull': 'Выровнять по ширине',
      'insertUnorderedList': 'Неупорядоченный список',
      'insertOrderedList': 'Упорядоченный список',
      'outdent': 'Уменьшить отступ',
      'indent': 'Увеличить отступ',
      'formatPara': 'Параграф',
      'formatH1': 'Заголовок 1',
      'formatH2': 'Заголовок 2',
      'formatH3': 'Заголовок 3',
      'formatH4': 'Заголовок 4',
      'formatH5': 'Заголовок 5',
      'formatH6': 'Заголовок 6',
      'insertHorizontalRule': 'Горизонтальная линия',
      'linkDialog.show': 'Показать диалоговое окно ссылки',
      'imageDialog.show': 'Показать диалоговое окно изображения',
      'videoDialog.show': 'Показать диалоговое окно видео',
      'helpDialog.show': 'Показать диалоговое окно помощи'
    },
    history: {
      undo: 'Отменить',
      redo: 'Повторить'
    },
    specialChar: {
      specialChar: 'СПЕЦИАЛЬНЫЕ СИМВОЛЫ',
      select: 'Выбрать специальные символы'
    },
    output: {
      noSelection: 'Нет выделенного текста!'
    }
  }
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-ru-RU.js.map