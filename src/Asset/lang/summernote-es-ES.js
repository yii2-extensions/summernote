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
  'es-ES': {
    font: {
      bold: 'Negrita',
      italic: 'Cursiva',
      underline: 'Subrayado',
      clear: 'Eliminar Estilo de Fuente',
      height: 'Altura de Línea',
      name: 'Familia de Fuentes',
      strikethrough: 'Tachado',
      subscript: 'Subíndice',
      superscript: 'Superíndice',
      size: 'Tamaño de Fuente',
      sizeunit: 'Unidad de Tamaño de Fuente'
    },
    image: {
      image: 'Imagen',
      insert: 'Insertar Imagen',
      resizeFull: 'Redimensionar a tamaño completo',
      resizeHalf: 'Redimensionar a la mitad',
      resizeQuarter: 'Redimensionar a un cuarto',
      resizeNone: 'Tamaño original',
      floatLeft: 'Flotar a la izquierda',
      floatRight: 'Flotar a la derecha',
      floatNone: 'Eliminar flotado',
      shapeRounded: 'Forma: Redondeado',
      shapeCircle: 'Forma: Círculo',
      shapeThumbnail: 'Forma: Miniatura',
      shapeNone: 'Forma: Ninguna',
      dragImageHere: 'Arrastra imagen o texto aquí',
      dropImage: 'Suelta imagen o texto',
      selectFromFiles: 'Seleccionar desde archivos',
      fileNote: 'Seleccionar desde archivos después de completar los campos a continuación.',
      maximumFileSize: 'Tamaño máximo del archivo',
      maximumFileSizeError: 'Se excedió el tamaño máximo del archivo.',
      url: 'URL de la imagen',
      remove: 'Eliminar',
      original: 'Original',
      fileBrowser: 'Explorador de archivos',
      title: 'Título',
      alt: 'Texto Alternativo',
      "class": 'Clase'
    },
    video: {
      video: 'Video',
      videoLink: 'Enlace de Video',
      insert: 'Insertar Video',
      url: 'URL del Video',
      providers: '(Bilibi, Dailymotion, Facebook, Google, Instagram, Peertube, QQ, TikTok, Vimeo, WISTIA, Vine, Youku, YouTube)',
      note: 'Nota: No todas las opciones están disponibles en todos los servicios...',
      suggested: 'Mostrar videos sugeridos cuando termine el video',
      controls: 'Mostrar controles del reproductor',
      autoplay: 'Reproducción automática',
      loop: 'Repetir',
      aspect: 'Relación de Aspecto',
      captions: 'Mostrar Subtítulos',
      quality: 'Calidad del Video',
      remove: 'Eliminar'
    },
    link: {
      link: 'Enlace',
      insert: 'Insertar Enlace',
      unlink: 'Desvincular',
      edit: 'Editar',
      textToDisplay: 'Texto a mostrar',
      url: 'URL del Enlace',
      title: 'Título',
      rel: 'Elegir una opción de Rel a usar',
      openInNewWindow: 'Abrir en una nueva ventana',
      useProtocol: 'Usar protocolo predeterminado',
      linkList: 'Enlaces Curados'
    },
    table: {
      table: 'Tabla',
      addRowAbove: 'Agregar fila arriba',
      addRowBelow: 'Agregar fila abajo',
      addColLeft: 'Agregar columna a la izquierda',
      addColRight: 'Agregar columna a la derecha',
      delRow: 'Eliminar fila',
      delCol: 'Eliminar columna',
      delTable: 'Eliminar tabla'
    },
    hr: {
      insert: 'Insertar Regla Horizontal'
    },
    block: {
      style: 'Elementos de Bloque',
      address: 'Dirección',
      blockquote: 'Cita en bloque',
      details: 'Detalles',
      div: 'División',
      p: 'Párrafo',
      pre: 'Código, texto preformateado',
      h1: 'Encabezado 1',
      h2: 'Encabezado 2',
      h3: 'Encabezado 3',
      h4: 'Encabezado 4',
      h5: 'Encabezado 5',
      h6: 'Encabezado 6'
    },
    inline: {
      style: 'Elementos en línea',
      abbr: 'Abreviatura',
      b: 'Negrita',
      cite: 'Cita',
      code: 'Código',
      del: 'Eliminado',
      em: 'Énfasis',
      figure: 'Figura',
      figcaption: 'Pie de Figura',
      i: 'Cursiva',
      ins: 'Insertar',
      kbd: 'Teclado',
      mark: 'Marca',
      picture: 'Imagen',
      q: 'Cita',
      s: 'Tachado',
      samp: 'Muestra',
      small: 'Pequeño',
      span: 'Span',
      strong: 'Fuerte',
      sub: 'Subíndice',
      sup: 'Superíndice',
      time: 'Tiempo',
      u: 'Subrayado',
      "var": 'Variable'
    },
    zoom: {
      "in": 'Acercar',
      value: 'Valor de Zoom',
      out: 'Alejar'
    },
    lists: {
      unordered: 'Lista no ordenada',
      ordered: 'Lista ordenada'
    },
    options: {
      help: 'Ayuda',
      fullscreen: 'Pantalla Completa',
      codeview: 'Vista de Código'
    },
    paragraph: {
      paragraph: 'Párrafo',
      outdent: 'Disminuir Sangría',
      indent: 'Aumentar Sangría',
      left: 'Alinear a la izquierda',
      center: 'Alinear al centro',
      right: 'Alinear a la derecha',
      justify: 'Justificar'
    },
    color: {
      recent: 'Color Reciente',
      more: 'Más Colores',
      background: 'Color de Fondo',
      foreground: 'Color de Texto',
      transparent: 'Transparente',
      setTransparent: 'Establecer transparente',
      reset: 'Restablecer',
      resetToDefault: 'Restablecer a predeterminado',
      cpSelect: 'Seleccionar'
    },
    shortcut: {
      shortcuts: 'Atajos de teclado',
      close: 'Cerrar',
      textFormatting: 'Formato de texto',
      action: 'Acción',
      paragraphFormatting: 'Formato de párrafo',
      documentStyle: 'Estilo del documento',
      extraKeys: 'Teclas adicionales'
    },
    help: {
      'escape': 'Escape/Cerrar',
      'insertParagraph': 'Párrafo',
      'undo': 'Deshacer',
      'redo': 'Rehacer',
      'tab': 'Tabulación',
      'untab': 'Retirar tabulación',
      'bold': 'Negrita',
      'italic': 'Cursiva',
      'underline': 'Subrayado',
      'strikethrough': 'Tachado',
      'removeFormat': 'Limpiar Estilos',
      'justifyLeft': 'Alinear a la izquierda',
      'justifyCenter': 'Alinear al centro',
      'justifyRight': 'Alinear a la derecha',
      'justifyFull': 'Alinear justificado',
      'insertUnorderedList': 'Lista no ordenada',
      'insertOrderedList': 'Lista ordenada',
      'outdent': 'Disminuir sangría',
      'indent': 'Aumentar sangría',
      'formatPara': 'Párrafo',
      'formatH1': 'Encabezado H1',
      'formatH2': 'Encabezado H2',
      'formatH3': 'Encabezado H3',
      'formatH4': 'Encabezado H4',
      'formatH5': 'Encabezado H5',
      'formatH6': 'Encabezado H6',
      'insertHorizontalRule': 'Insertar Regla Horizontal',
      'linkDialog.show': 'Mostrar cuadro de diálogo de enlace',
      'imageDialog.show': 'Mostrar cuadro de diálogo de imagen',
      'videoDialog.show': 'Mostrar cuadro de diálogo de video',
      'helpDialog.show': 'Mostrar cuadro de diálogo de ayuda'
    },
    history: {
      undo: 'Deshacer',
      redo: 'Rehacer'
    },
    specialChar: {
      specialChar: 'CARACTERES ESPECIALES',
      select: 'Seleccionar caracteres especiales'
    },
    output: {
      noSelection: '¡No se ha realizado ninguna selección!'
    }
  }
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-es-ES.js.map