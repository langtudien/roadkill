/*
 * jQuery Form Extensions 1.0
 * http://code.google.com/p/jquery-form-extensions/
 *
 * Copyright (c) 2009 C.Small
 *
 * Licensed under the MIT license.
 * Date: 21:31 20/05/2009
 */
(function(a){a.fn.elementExists=function(){return jQuery(this).length>0}})(jQuery);(function(a){a.fn.formElementType=function(){if(jQuery(this).elementExists()){return jQuery(this).attr("type")}else{return""}}})(jQuery);(function(a){a.fn.isTextBox=function(){return(jQuery(this).formElementType()==="text")}})(jQuery);(function(a){a.fn.isTextArea=function(){return(jQuery(this).formElementType()==="textarea")}})(jQuery);(function(a){a.fn.isPassword=function(){return(jQuery(this).formElementType()==="password")}})(jQuery);(function(a){a.fn.isHiddenInput=function(){return(jQuery(this).formElementType()==="hidden")}})(jQuery);(function(a){a.fn.isCheckBox=function(){return(jQuery(this).formElementType()==="checkbox")}})(jQuery);(function(a){a.fn.isRadioBox=function(){return(jQuery(this).formElementType()==="radio")}})(jQuery);(function(a){a.fn.isButton=function(){return(jQuery(this).formElementType()==="button")}})(jQuery);(function(a){a.fn.isSubmitButton=function(){return(jQuery(this).formElementType()==="submit")}})(jQuery);(function(a){a.fn.isResetButton=function(){return(jQuery(this).formElementType()==="reset")}})(jQuery);(function(a){a.fn.isSelectBox=function(){var c=jQuery(this).formElementType();var b=(this).attr("size");if(c!=="select-one"){return false}else{if(typeof b==="undefined"){return false}else{return(parseInt(b)>1)}}}})(jQuery);(function(a){a.fn.isMultiSelectBox=function(){return(jQuery(this).formElementType()==="select-multiple")}})(jQuery);(function(a){a.fn.isDropDownList=function(){var c=jQuery(this).formElementType();var b=(this).attr("size");if(c!=="select-one"){return false}else{if(typeof b==="undefined"){return true}else{return(parseInt(b)<=1)}}}})(jQuery);(function(a){a.fn.isChecked=function(){var b=jQuery(this);return b.is(":checked")}})(jQuery);(function(a){a.fn.isSelected=function(){var f=jQuery(this);if(arguments.length===0){return false}var b=false;var d=arguments[0];var c=arguments;if(f.isRadioBox()){var e=jQuery("input[type='radio'][name='"+f.attr("name")+"'][checked]");if(e.length===1){return(d===e.val())}}else{if(f.isSelectBox()||f.isDropDownList()){var e=jQuery("#"+f.attr("id")+" option:selected");if(e.length===1){return(d===e.val())}}else{if(f.isMultiSelectBox()){var e=jQuery("#"+f.attr("id")+" option:selected");jQuery.each(e,function(){var h=jQuery(this);b=false;for(var g=0;g<c.length;g++){if(c[g]===h.val()){b=true;break}}})}}}return b}})(jQuery);(function(a){a.fn.selectedItem=function(b){var d=jQuery(this);if(typeof b==="undefined"||isNaN(b)){b=0}if(d.isRadioBox()){var c=jQuery("input[type='radio'][name='"+d.attr("name")+"'][checked]");if(b>c.length-1){b=c.length-1}else{if(b<0){b=0}}if(c.length>0){return jQuery(c[b])}}else{if(d.isSelectBox()||d.isMultiSelectBox()||d.isDropDownList()){var c=jQuery("#"+d.attr("id")+" option:selected");if(b>c.length-1){b=c.length-1}else{if(b<0){b=0}}if(c.length>0){return jQuery(c[b])}}}return d}})(jQuery);(function(a){a.fn.firstSelectedItem=function(){return jQuery(this).selectedItem()}})(jQuery);(function(a){a.fn.lastSelectedItem=function(){return jQuery(this).selectedItem(Number.MAX_VALUE)}})(jQuery);(function(a){a.fn.selectedValue=function(){var b=jQuery(this);return b.selectedItem(0).val()}})(jQuery);(function(a){a.fn.selectedValues=function(){var b=[];var d=jQuery(this);if(d.isMultiSelectBox()){var c=jQuery("#"+d.attr("id")+" option:selected");jQuery.each(c,function(){b.push(jQuery(this).val())})}else{b.push(d.selectedValue())}return b}})(jQuery);(function(a){a.fn.itemExists=function(e){var f=jQuery(this);var b=false;if(f.isRadioBox()){var d=jQuery("input[type='radio'][name='"+f.attr("name")+"'][value='"+e+"']");b=(d.length===1)}else{if(f.isSelectBox()||f.isMultiSelectBox()||f.isDropDownList()){var c=jQuery("#"+f.attr("id")+" option");jQuery.each(c,function(){if(jQuery(this).val()===e){b=true;return false}})}else{return(jQuery(this).val()===e)}}return b}})(jQuery);