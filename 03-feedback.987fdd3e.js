!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},r=t.parcelRequire4c75;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequire4c75=r);var l=r("1WSnx"),n=document.querySelector(".feedback-form"),f=document.querySelector(".feedback-form").elements.email,i=document.querySelector(".feedback-form").elements.message;n.addEventListener("input",e(l).throttle((function(){var e={};e.email=n.elements.email.value,e.message=n.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));var s=localStorage.getItem("feedback-form-state");if(s){var u=JSON.parse(s);f.value=u.email,i.value=u.message}n.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),f.value="",i.value="",localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.987fdd3e.js.map
