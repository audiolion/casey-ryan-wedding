!function t(e,n,o){function r(i,a){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var f=n[i]={exports:{}};e[i][0].call(f.exports,function(t){var n=e[i][1][t];return r(n?n:t)},f,f.exports,t,e,n,o)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(t,e,n){var o=t("countdown-js"),r=new Date(2016,8,17);o.timer(r,function(t){document.getElementById("days").textContent=t.days,document.getElementById("hours").textContent=t.hours,document.getElementById("minutes").textContent=t.minutes,document.getElementById("seconds").textContent=t.seconds},function(){document.getElementById("countdown-end").setAttribute("display","block")});$(document).ready(function(){$(".countdown-section").each(function(){$(this).css("font-size",.18*$(this).width())})})},{"countdown-js":2}],2:[function(t,e,n){"use strict";var o=function(){};o.timer=function(t,e,n){var o=t-new Date,r={DAYS:864e5,HOURS:36e5,MINUTES:6e4,SECONDS:1e3},u=function(){if(o>-1){var t=o,u=Math.floor(t/r.DAYS);t%=r.DAYS;var a=Math.floor(t/r.HOURS);t%=r.HOURS;var c=Math.floor(t/r.MINUTES);t%=r.MINUTES;var s=Math.floor(t/r.SECONDS),f={days:u,hours:a,minutes:c,seconds:s};e(f),o-=1e3}else clearInterval(i),n()},i=setInterval(function(t){return function(){u.call(t)}}(this),1e3),a=function(){var t=o,e=Math.floor(t/r.DAYS);t%=r.DAYS;var n=Math.floor(t/r.HOURS);t%=r.HOURS;var u=Math.floor(t/r.MINUTES);t%=r.MINUTES;var i=Math.floor(t/r.SECONDS);return{days:e,hours:n,minutes:u,seconds:i}};return u.call(this),{abort:function(){clearInterval(i)},getTimeRemaining:a}},e.exports=o},{}]},{},[1]);