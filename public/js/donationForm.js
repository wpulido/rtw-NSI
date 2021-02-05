// initialize our variables
var captchaReady = 0;
var wFORMSReady = 0;

// when wForms is loaded call this
var wformsReadyCallback = function () {
    // using this var to denote if wForms is loaded
    wFORMSReady = 1;
    // call our recaptcha function which is dependent on both
    // wForms and an async call to google
    // note the meat of this function wont fire until both
    // wFORMSReady = 1 and captchaReady = 1
    onloadCallback();
}
var gCaptchaReadyCallback = function() {
    // using this var to denote if captcha is loaded
    captchaReady = 1;
    // call our recaptcha function which is dependent on both
    // wForms and an async call to google
    // note the meat of this function wont fire until both
    // wFORMSReady = 1 and captchaReady = 1
    onloadCallback();
};

// add event listener to fire when wForms is fully loaded
document.addEventListener("wFORMSLoaded", wformsReadyCallback);

var enableSubmitButton = function() {
    var submitButton = document.getElementById('submit_button');
    var explanation = document.getElementById('disabled-explanation');
    if (submitButton != null) {
        submitButton.removeAttribute('disabled');
        if (explanation != null) {
            explanation.style.display = 'none';
        }
    }
};
var disableSubmitButton = function() {
    var submitButton = document.getElementById('submit_button');
    var explanation = document.getElementById('disabled-explanation');
    if (submitButton != null) {
        submitButton.disabled = true;
        if (explanation != null) {
            explanation.style.display = 'block';
        }
    }
};

// call this on both captcha async complete and wforms fully
// initialized since we can't be sure which will complete first
// and we need both done for this to function just check that they are
// done to fire the functionality
var onloadCallback = function () {
    // if our captcha is ready (async call completed)
    // and wFORMS is completely loaded then we are ready to add
    // the captcha to the page
    if (captchaReady && wFORMSReady) {
        grecaptcha.render('g-recaptcha-render-div', {
            'sitekey': '6LeISQ8UAAAAAL-Qe-lDcy4OIElnii__H_cEGV0C',
            'theme': 'light',
            'size': 'normal',
            'callback': 'enableSubmitButton',
            'expired-callback': 'disableSubmitButton'
        });
        var oldRecaptchaCheck = parseInt('1');
        if (oldRecaptchaCheck === -1) {
            var standardCaptcha = document.getElementById("tfa_captcha_text");
            standardCaptcha = standardCaptcha.parentNode.parentNode.parentNode;
            standardCaptcha.parentNode.removeChild(standardCaptcha);
        }

        if (!wFORMS.instances['paging']) {
            document.getElementById("g-recaptcha-render-div").parentNode.parentNode.parentNode.style.display = "block";
            //document.getElementById("g-recaptcha-render-div").parentNode.parentNode.parentNode.removeAttribute("hidden");
        }
        document.getElementById("g-recaptcha-render-div").getAttributeNode('id').value = 'tfa_captcha_text';

        var captchaError = '';
        if (captchaError == '1') {
            var errMsgText = 'The CAPTCHA was not completed successfully.';
            var errMsgDiv = document.createElement('div');
            errMsgDiv.id = "tfa_captcha_text-E";
            errMsgDiv.className = "err errMsg";
            errMsgDiv.innerText = errMsgText;
            var loc = document.querySelector('.g-captcha-error');
            loc.insertBefore(errMsgDiv, loc.childNodes[0]);

            /* See wFORMS.behaviors.paging.applyTo for origin of this code */
            if (wFORMS.instances['paging']) {
                var b = wFORMS.instances['paging'][0];
                var pp = base2.DOM.Element.querySelector(document, wFORMS.behaviors.paging.CAPTCHA_ERROR);
                if (pp) {
                    var lastPage = 1;
                    for (var i = 1; i < 100; i++) {
                        if (b.behavior.isLastPageIndex(i)) {
                            lastPage = i;
                            break;
                        }
                    }
                    b.jumpTo(lastPage);
                }
            }
        }
    }
};

document.addEventListener("DOMContentLoaded", function() {
    var warning = document.getElementById("javascript-warning");
    if (warning != null) {
        warning.parentNode.removeChild(warning);
    }
    var oldRecaptchaCheck = parseInt('1');
    if (oldRecaptchaCheck !== -1) {
        var explanation = document.getElementById('disabled-explanation');
        var submitButton = document.getElementById('submit_button');
        if (submitButton != null) {
            submitButton.disabled = true;
            if (explanation != null) {
                explanation.style.display = 'block';
            }
        }
    }
});


document.addEventListener("DOMContentLoaded", function(){
    const FORM_TIME_START = Math.floor((new Date).getTime()/1000);
    let formElement = document.getElementById("tfa_0");
    if (null === formElement) {
        formElement = document.getElementById("0");
    }
    let appendJsTimerElement = function(){
        let formTimeDiff = Math.floor((new Date).getTime()/1000) - FORM_TIME_START;
        let cumulatedTimeElement = document.getElementById("tfa_dbCumulatedTime");
        if (null !== cumulatedTimeElement) {
            let cumulatedTime = parseInt(cumulatedTimeElement.value);
            if (null !== cumulatedTime && cumulatedTime > 0) {
                formTimeDiff += cumulatedTime;
            }
        }
        let jsTimeInput = document.createElement("input");
        jsTimeInput.setAttribute("type", "hidden");
        jsTimeInput.setAttribute("value", formTimeDiff.toString());
        jsTimeInput.setAttribute("name", "tfa_dbElapsedJsTime");
        jsTimeInput.setAttribute("id", "tfa_dbElapsedJsTime");
        jsTimeInput.setAttribute("autocomplete", "off");
        if (null !== formElement) {
            formElement.appendChild(jsTimeInput);
        }
    };
    if (null !== formElement) {
        if(formElement.addEventListener){
            formElement.addEventListener('submit', appendJsTimerElement, false);
        } else if(formElement.attachEvent){
            formElement.attachEvent('onsubmit', appendJsTimerElement);
        }
    }
});