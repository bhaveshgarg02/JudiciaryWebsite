var WPForms=window.WPForms||{};WPForms.FrontendModern=WPForms.FrontendModern||function(i,o){const a={init(){o(a.ready),a.bindOptinMonster()},ready(){a.updateGBBlockAccentColors(),a.initPageBreakButtons(),a.initButtonStyle(),a.events()},events(){o(i).on("wpforms_elementor_form_fields_initialized",a.initPageBreakButtons),o("form.wpforms-form").on("wpformsCombinedUploadsSizeError",a.combinedUploadsSizeError).on("wpformsFormSubmitButtonDisable",a.formSubmitButtonDisable).on("wpformsFormSubmitButtonRestore",a.formSubmitButtonRestore).on("wpformsPageChange",a.pageChange),o("form.wpforms-form .wpforms-submit").on("keydown click",a.disabledButtonPress),o(i).on("focus",".wpforms-render-modern .wpforms-timepicker",a.updateTimepickerDropdown),o(i).on("focusout",".wpforms-render-modern .wpforms-timepicker",a.resetTimepickerDropdown)},bindOptinMonster(){i.addEventListener("om.Campaign.load",function(){a.ready()}),o(i).on("OptinMonsterOnShow",function(){a.ready()})},updateTimepickerDropdown(){const e=a.getCssVars(o(this));setTimeout(function(){var r=o(".ui-timepicker-wrapper .ui-timepicker-list");r.css("background",e["field-menu-color"]),r.find("li").css("color",e["field-text-color"]),r.find(".ui-timepicker-selected").css("background",e["button-background-color"]).css("color",e["button-text-color"])},0)},resetTimepickerDropdown(){setTimeout(function(){o(".ui-timepicker-wrapper .ui-timepicker-list").find(":not(.ui-timepicker-selected)").attr("style","")},0)},initButtonStyle(){o(".wpforms-block.wpforms-container-full, .elementor-widget-wpforms .wpforms-container-full").each(function(){var r=o(this),e=getComputedStyle(r.get(0)),e=a.getCssVar(e,"--wpforms-button-background-color-alt");a.isTransparentColor(e)&&r.find("button.wpforms-submit").addClass("wpforms-opacity-hover")})},isTransparentColor(r){r=a.getColorAsRGBArray(r);return Number(r?.[3])<=.33},updateGBBlockAccentColors(){o(".wpforms-block.wpforms-container-full, .elementor-widget-wpforms .wpforms-container-full").each(function(){var r=o(this);a.updateGBBlockPageIndicatorColor(r),a.updateGBBlockIconChoicesColor(r),a.updateGBBlockRatingColor(r)})},updateGBBlockPageIndicatorColor(r){var r=r.find(".wpforms-page-indicator"),e=r.find(".wpforms-page-indicator-page-progress, .wpforms-page-indicator-page.active .wpforms-page-indicator-page-number"),o=e.find(".wpforms-page-indicator-page-triangle");r.data("indicator-color","var( --wpforms-page-break-color )"),e.css("background-color","var( --wpforms-page-break-color )"),o.css("border-top-color","var( --wpforms-page-break-color )")},updateGBBlockIconChoicesColor(r){r.find(".wpforms-icon-choices").css("--wpforms-icon-choices-color","var( --wpforms-button-background-color )")},updateGBBlockRatingColor(r){r.find(".wpforms-field-rating-item svg").css("color","var( --wpforms-page-break-color, var( --wpforms-button-background-color ) )")},initPageBreakButtons(){o(".wpforms-page-button").removeClass("wpforms-disabled").attr("aria-disabled","false").attr("aria-describedby","")},combinedUploadsSizeError(r,e,o){var t=e.data("formid"),s=e.attr("aria-errormessage")||"",t=`wpforms-${t}-footer-error`,i=e.find(".wpforms-submit");e.attr({"aria-invalid":"true","aria-errormessage":s+" "+t}),o.attr({role:"alert",id:t}),o.find("> .wpforms-hidden:first-child").remove(),o.prepend(`<span class="wpforms-hidden">${wpforms_settings.formErrorMessagePrefix}</span>`),i.attr("aria-describedby",t)},combinedUploadsSizeOk(r,e,o){console.warn('WARNING! Function "WPForms.FrontendModern( e, $form, $errorCnt )" has been deprecated, please use the new "formSubmitButtonDisable: function( e, $form, $submitBtn )" function instead!'),e.find(".wpforms-submit").removeClass("wpforms-disabled").attr("aria-disabled","false").attr("aria-describedby","")},formSubmitButtonDisable(r,e,o){e=e.attr("id")+"-submit-btn-disabled";o.before(`<div class="wpforms-hidden" id="${e}">${wpforms_settings.submitBtnDisabled}</div>`),o.prop("disabled",!1).addClass("wpforms-disabled").attr("aria-disabled","true").attr("aria-describedby",e)},formSubmitButtonRestore(r,e,o){var t=e.attr("id")+"-submit-btn-disabled";e.find("#"+t).remove(),o.removeClass("wpforms-disabled").attr("aria-disabled","false").attr("aria-describedby","")},disabledButtonPress(r){!o(this).hasClass("wpforms-disabled")||"Enter"!==r.key&&"click"!==r.type||(r.preventDefault(),r.stopPropagation())},pageChange(r,o,t){var s=t.find(".wpforms-page-indicator");if(wpforms_settings.indicatorStepsPattern&&s.length){t=t.find(".wpforms-page").length;let r=wpforms_settings.indicatorStepsPattern,e;r=r.replace("{current}",o).replace("{total}",t),e=s.hasClass("progress")?s.find(".wpforms-page-indicator-page-title").data(`page-${o}-title`):s.find(`.wpforms-page-indicator-page-${o} .wpforms-page-indicator-page-title`).text(),r=e?e+". "+r:r,s.attr("aria-valuenow",o),a.screenReaderAnnounce(r,"polite")}},screenReaderAnnounce(r,e){var o=i.createElement("div"),t="wpforms-screen-reader-announce-"+Date.now();o.setAttribute("id",t),o.setAttribute("aria-live",e||"polite"),o.classList.add("wpforms-screen-reader-announce");const s=i.body.appendChild(o);setTimeout(function(){s.innerHTML=r},100),setTimeout(function(){i.body.removeChild(s)},1e3)},getColorWithOpacity(r,e){return WPFormsUtils.cssColorsUtils.getColorWithOpacity(r,e)},getSolidColor(r){r=r.trim();var e=a.getColorAsRGBArray(r);return e?`rgb(${e[0]},${e[1]},${e[2]})`:r},isValidColor(r){return WPFormsUtils.cssColorsUtils.isValidColor(r)},getColorAsRGBArray(r){return WPFormsUtils.cssColorsUtils.getColorAsRGBArray(r)},getCssVar(r,e){if(!r||"function"!=typeof r.getPropertyValue)return null;let o=r.getPropertyValue(e).trim();return o=e.includes("color")?o.replace(/\s/g,""):o},getCssVars(r){if(!r||!r.length)return null;var r=r.hasClass("wpforms-container")?r:r.closest(".wpforms-container"),e=getComputedStyle(r.get(0)),o=wpforms_settings.css_vars,t={};for(let r=0;r<o.length;r++)t[o[r]]=a.getCssVar(e,"--wpforms-"+o[r]);return t}};return a}(document,(window,jQuery)),WPForms.FrontendModern.init();