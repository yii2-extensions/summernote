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
  'pt-BR': {
    font: {
      bold: 'Negrito',
      italic: 'Itálico',
      underline: 'Sublinhado',
      clear: 'Remover Estilo da Fonte',
      height: 'Altura da Linha',
      name: 'Família da Fonte',
      strikethrough: 'Riscado',
      subscript: 'Subscrito',
      superscript: 'Sobrescrito',
      size: 'Tamanho da Fonte',
      sizeunit: 'Unidade de Tamanho da Fonte'
    },
    image: {
      image: 'Imagem',
      insert: 'Inserir Imagem',
      resizeFull: 'Redimensionar para Tamanho Completo',
      resizeHalf: 'Redimensionar para Metade',
      resizeQuarter: 'Redimensionar para um Quarto',
      resizeNone: 'Tamanho Original',
      floatLeft: 'Flutuar para Esquerda',
      floatRight: 'Flutuar para Direita',
      floatNone: 'Remover Flutuação',
      shapeRounded: 'Forma: Arredondada',
      shapeCircle: 'Forma: Círculo',
      shapeThumbnail: 'Forma: Miniatura',
      shapeNone: 'Forma: Nenhuma',
      dragImageHere: 'Arraste a imagem ou texto aqui',
      dropImage: 'Solte a imagem ou texto',
      selectFromFiles: 'Selecionar dos Arquivos',
      fileNote: 'Selecionar dos arquivos após preencher os campos abaixo.',
      maximumFileSize: 'Tamanho máximo do arquivo',
      maximumFileSizeError: 'Tamanho máximo do arquivo excedido.',
      url: 'URL da Imagem',
      remove: 'Remover',
      original: 'Original',
      fileBrowser: 'Navegador de Arquivos',
      title: 'Título',
      alt: 'Texto Alternativo',
      "class": 'Classe'
    },
    video: {
      video: 'Vídeo',
      videoLink: 'Link do Vídeo',
      insert: 'Inserir Vídeo',
      url: 'URL do Vídeo',
      providers: '(Bilibi, Dailymotion, Facebook, Google, Instagram, Peertube, QQ, TikTok, Vimeo, WISTIA, Vine, Youku, YouTube)',
      note: 'Nota: Nem todas as opções estão disponíveis em todos os serviços...',
      suggested: 'Mostrar vídeos sugeridos quando o vídeo terminar',
      controls: 'Mostrar controles do player',
      autoplay: 'Reprodução automática',
      loop: 'Loop',
      aspect: 'Proporção',
      captions: 'Mostrar Legendas',
      quality: 'Qualidade do Vídeo',
      remove: 'Remover'
    },
    link: {
      link: 'Link',
      insert: 'Inserir Link',
      unlink: 'Remover Link',
      edit: 'Editar',
      textToDisplay: 'Texto a ser exibido',
      url: 'URL do Link',
      title: 'Título',
      rel: 'Escolha uma opção Rel para usar',
      openInNewWindow: 'Abrir em uma nova janela',
      useProtocol: 'Usar protocolo padrão',
      linkList: 'Links Curados'
    },
    table: {
      table: 'Tabela',
      addRowAbove: 'Adicionar linha acima',
      addRowBelow: 'Adicionar linha abaixo',
      addColLeft: 'Adicionar coluna à esquerda',
      addColRight: 'Adicionar coluna à direita',
      delRow: 'Excluir linha',
      delCol: 'Excluir coluna',
      delTable: 'Excluir tabela'
    },
    hr: {
      insert: 'Inserir Linha Horizontal'
    },
    block: {
      style: 'Elementos de Bloco',
      address: 'Endereço',
      blockquote: 'Citação',
      details: 'Detalhes',
      div: 'Divisão',
      p: 'Parágrafo',
      pre: 'Código, texto pré-formatado',
      h1: 'Título 1',
      h2: 'Título 2',
      h3: 'Título 3',
      h4: 'Título 4',
      h5: 'Título 5',
      h6: 'Título 6'
    },
    inline: {
      style: 'Elementos em Linha',
      abbr: 'Abreviação',
      b: 'Negrito',
      cite: 'Citação',
      code: 'Código',
      del: 'Excluído',
      em: 'Ênfase',
      figure: 'Figura',
      figcaption: 'Legenda da Figura',
      i: 'Itálico',
      ins: 'Inserido',
      kbd: 'Teclado',
      mark: 'Marcação',
      picture: 'Imagem',
      q: 'Citação',
      s: 'Riscado',
      samp: 'Amostra',
      small: 'Pequeno',
      span: 'Span',
      strong: 'Forte',
      sub: 'Sub',
      sup: 'Sup',
      time: 'Tempo',
      u: 'Sublinhado',
      "var": 'Variável'
    },
    zoom: {
      "in": 'Aumentar zoom',
      value: 'Valor do zoom',
      out: 'Diminuir zoom'
    },
    lists: {
      unordered: 'Lista não ordenada',
      ordered: 'Lista ordenada'
    },
    options: {
      help: 'Ajuda',
      fullscreen: 'Tela Cheia',
      codeview: 'Visualizar Código'
    },
    paragraph: {
      paragraph: 'Parágrafo',
      outdent: 'Diminuir recuo',
      indent: 'Aumentar recuo',
      left: 'Alinhar à esquerda',
      center: 'Centralizar',
      right: 'Alinhar à direita',
      justify: 'Justificar'
    },
    color: {
      recent: 'Cor recente',
      more: 'Mais cores',
      background: 'Cor de fundo',
      foreground: 'Cor do texto',
      transparent: 'Transparente',
      setTransparent: 'Definir como transparente',
      reset: 'Redefinir',
      resetToDefault: 'Redefinir para o padrão',
      cpSelect: 'Selecionar'
    },
    shortcut: {
      shortcuts: 'Atalhos do teclado',
      close: 'Fechar',
      textFormatting: 'Formatação de texto',
      action: 'Ação',
      paragraphFormatting: 'Formatação de parágrafo',
      documentStyle: 'Estilo do documento',
      extraKeys: 'Teclas extras'
    },
    help: {
      'escape': 'Esc/Fechar',
      'insertParagraph': 'Parágrafo',
      'undo': 'Desfazer',
      'redo': 'Refazer',
      'tab': 'Tabulação',
      'untab': 'Desfazer tabulação',
      'bold': 'Negrito',
      'italic': 'Itálico',
      'underline': 'Sublinhado',
      'strikethrough': 'Riscado',
      'removeFormat': 'Remover Estilos',
      'justifyLeft': 'Alinhar à esquerda',
      'justifyCenter': 'Centralizar',
      'justifyRight': 'Alinhar à direita',
      'justifyFull': 'Justificar',
      'insertUnorderedList': 'Lista não ordenada',
      'insertOrderedList': 'Lista ordenada',
      'outdent': 'Diminuir recuo',
      'indent': 'Aumentar recuo',
      'formatPara': 'Parágrafo',
      'formatH1': 'Título 1',
      'formatH2': 'Título 2',
      'formatH3': 'Título 3',
      'formatH4': 'Título 4',
      'formatH5': 'Título 5',
      'formatH6': 'Título 6',
      'insertHorizontalRule': 'Régua horizontal',
      'linkDialog.show': 'Mostrar caixa de diálogo de link',
      'imageDialog.show': 'Mostrar caixa de diálogo de imagem',
      'videoDialog.show': 'Mostrar caixa de diálogo de vídeo',
      'helpDialog.show': 'Mostrar caixa de diálogo de ajuda'
    },
    history: {
      undo: 'Desfazer',
      redo: 'Refazer'
    },
    specialChar: {
      specialChar: 'CARACTERES ESPECIAIS',
      select: 'Selecionar caracteres especiais'
    },
    output: {
      noSelection: 'Nenhuma seleção feita!'
    }
  }
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-pt-BR.js.map