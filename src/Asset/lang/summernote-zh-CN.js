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
  'zh-CN': {
    font: {
      bold: '粗体',
      italic: '斜体',
      underline: '下划线',
      clear: '清除字体样式',
      height: '行高',
      name: '字体',
      strikethrough: '删除线',
      subscript: '下标',
      superscript: '上标',
      size: '字号',
      sizeunit: '字号单位'
    },
    image: {
      image: '图片',
      insert: '插入图片',
      resizeFull: '调整为原始尺寸',
      resizeHalf: '调整为一半尺寸',
      resizeQuarter: '调整为四分之一尺寸',
      resizeNone: '原始尺寸',
      floatLeft: '左浮动',
      floatRight: '右浮动',
      floatNone: '取消浮动',
      shapeRounded: '形状：圆角',
      shapeCircle: '形状：圆形',
      shapeThumbnail: '形状：缩略图',
      shapeNone: '形状：无',
      dragImageHere: '拖拽图片或文本到这里',
      dropImage: '拖拽图片或文本',
      selectFromFiles: '从文件中选择',
      fileNote: '完成以下字段后，从文件中选择。',
      maximumFileSize: '文件大小上限',
      maximumFileSizeError: '超过文件大小上限。',
      url: '图片链接',
      remove: '删除',
      original: '原始',
      fileBrowser: '文件浏览器',
      title: '标题',
      alt: '替代文本',
      "class": '类'
    },
    video: {
      video: '视频',
      videoLink: '视频链接',
      insert: '插入视频',
      url: '视频链接',
      providers: '(Bilibi, Dailymotion, Facebook, Google, Instagram, Peertube, QQ, TikTok, Vimeo, WISTIA, Vine, Youku, YouTube)',
      note: '注意：不是所有选项在所有服务中都可用...',
      suggested: '视频结束后显示推荐视频',
      controls: '显示播放器控件',
      autoplay: '自动播放',
      loop: '循环播放',
      aspect: '宽高比',
      captions: '显示字幕',
      quality: '视频质量',
      remove: '删除'
    },
    link: {
      link: '链接',
      insert: '插入链接',
      unlink: '取消链接',
      edit: '编辑',
      textToDisplay: '显示文本',
      url: '链接地址',
      title: '标题',
      rel: '选择一个 Rel 选项',
      openInNewWindow: '在新窗口中打开',
      useProtocol: '使用默认协议',
      linkList: '链接列表'
    },
    table: {
      table: '表格',
      addRowAbove: '在上方添加行',
      addRowBelow: '在下方添加行',
      addColLeft: '在左侧添加列',
      addColRight: '在右侧添加列',
      delRow: '删除行',
      delCol: '删除列',
      delTable: '删除表格'
    },
    hr: {
      insert: '插入水平线'
    },
    block: {
      style: '块级元素',
      address: '地址',
      blockquote: '引用',
      details: '详情',
      div: '分割',
      p: '段落',
      pre: '代码，预格式文本',
      h1: '标题 1',
      h2: '标题 2',
      h3: '标题 3',
      h4: '标题 4',
      h5: '标题 5',
      h6: '标题 6'
    },
    inline: {
      style: '行内元素',
      abbr: '缩写',
      b: '粗体',
      cite: '引用',
      code: '代码',
      del: '删除',
      em: '强调',
      figure: '图像',
      figcaption: '图像说明',
      i: '斜体',
      ins: '插入',
      kbd: '键盘',
      mark: '标记',
      picture: '图片',
      q: '引用',
      s: '删除线',
      samp: '样本',
      small: '小号',
      span: 'Span',
      strong: '加粗',
      sub: '下标',
      sup: '上标',
      time: '时间',
      u: '下划线',
      "var": '变量'
    },
    zoom: {
      "in": '放大',
      value: '缩放值',
      out: '缩小'
    },
    lists: {
      unordered: '无序列表',
      ordered: '有序列表'
    },
    options: {
      help: '帮助',
      fullscreen: '全屏',
      codeview: '代码视图'
    },
    paragraph: {
      paragraph: '段落',
      outdent: '减少缩进',
      indent: '增加缩进',
      left: '左对齐',
      center: '居中对齐',
      right: '右对齐',
      justify: '两端对齐'
    },
    color: {
      recent: '最近使用',
      more: '更多颜色',
      background: '背景颜色',
      foreground: '文本颜色',
      transparent: '透明',
      setTransparent: '设置透明',
      reset: '重置',
      resetToDefault: '恢复默认',
      cpSelect: '选择'
    },
    shortcut: {
      shortcuts: '快捷键',
      close: '关闭',
      textFormatting: '文本格式',
      action: '操作',
      paragraphFormatting: '段落格式',
      documentStyle: '文档样式',
      extraKeys: '额外按键'
    },
    help: {
      'escape': 'Esc/关闭',
      'insertParagraph': '段落',
      'undo': '撤销',
      'redo': '重做',
      'tab': '制表符',
      'untab': '取消制表符',
      'bold': '粗体',
      'italic': '斜体',
      'underline': '下划线',
      'strikethrough': '删除线',
      'removeFormat': '清除样式',
      'justifyLeft': '左对齐',
      'justifyCenter': '居中对齐',
      'justifyRight': '右对齐',
      'justifyFull': '两端对齐',
      'insertUnorderedList': '无序列表',
      'insertOrderedList': '有序列表',
      'outdent': '减少缩进',
      'indent': '增加缩进',
      'formatPara': '段落',
      'formatH1': '标题 1',
      'formatH2': '标题 2',
      'formatH3': '标题 3',
      'formatH4': '标题 4',
      'formatH5': '标题 5',
      'formatH6': '标题 6',
      'insertHorizontalRule': '插入水平线',
      'linkDialog.show': '显示链接对话框',
      'imageDialog.show': '显示图片对话框',
      'videoDialog.show': '显示视频对话框',
      'helpDialog.show': '显示帮助对话框'
    },
    history: {
      undo: '撤销',
      redo: '重做'
    },
    specialChar: {
      specialChar: '特殊字符',
      select: '选择特殊字符'
    },
    output: {
      noSelection: '未选择任何内容！'
    }
  }
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-zh-CN.js.map