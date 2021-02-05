import React, { Component } from 'react'
import Head from 'next/head'
import Slider from "react-slick";
import ReCAPTCHA from "react-google-recaptcha";

export default class DonationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstSwipe: false,
            oldValue: 0,
        };
        
        this.next = this.next.bind(this);
        this.togglePrice = this.togglePrice.bind(this);
        this.previous = this.previous.bind(this);
    }
    maxLengthCheck(object){
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }
    next() {
        

        setTimeout(function(){

            var currentIndex = document.querySelectorAll(".slick-current")[0].getAttribute("data-index"); 

            if(parseInt(currentIndex) === 0){
              
                if (window.innerWidth > 900) {
                    document.getElementById("hero__donation").scrollIntoView();
                }

                if(document.getElementById("tfa_13").classList.contains("is_true") ){
                    if(document.getElementById("tfa_14").value > 1){
                        if(document.getElementById("tfa_14").classList.contains("error")){
                            document.getElementById("tfa_14").classList.remove("error"); 
                            document.getElementById("tfa_14").parentNode.classList.remove("label__with__message");
                            document.getElementById("tfa_2553").value = document.getElementById("tfa_14").value;
                        }
                    }else{
                        document.getElementById("tfa_14").classList.add("error"); 
                        document.getElementById("tfa_14").parentNode.classList.add("label__with__message");
                    }
                }else{
                    document.getElementById("tfa_14").classList.remove("error"); 
                    document.getElementById("tfa_14").parentNode.classList.remove("label__with__message");
                }

                if(document.getElementById("tfa_33").classList.contains("is_true") || document.getElementById("tfa_34").classList.contains("is_true")){
                    if(document.getElementById("tfa_35").value.length < 5){
                        document.getElementById("tfa_33").parentNode.classList.add("label__with__message");
                        document.getElementById("tfa_35").classList.add("error"); 
                    }else{
                        if(document.getElementById("tfa_35").classList.contains("error")){
                            document.getElementById("tfa_35").classList.remove("error"); 
                            document.getElementById("tfa_33").parentNode.classList.remove("label__with__message");
                        }
                    }
                }else{
                    document.getElementById("tfa_33").parentNode.classList.remove("label__with__message");
                    document.getElementById("tfa_35").classList.remove("error"); 
                }

                if(document.getElementById("tfa_38").classList.contains("is_true")){
                    var innerInputs = [...document.querySelectorAll("#tfa_43 input")];
                    var innerInputsTwo = [...document.querySelectorAll("#tfa_2181 input")];
                    var innerText = [...document.querySelectorAll("#tfa_2181 textarea")];

                    innerInputs = innerInputs.concat(innerText).concat(innerInputsTwo);

                    innerInputs.map((element) => {
                        if(element.value.length < 5){
                            element.parentNode.classList.add("label__with__message");
                            element.classList.add("error"); 
                        }else{
                            if(element.classList.contains("error")){
                                element.classList.remove("error"); 
                                element.parentNode.classList.remove("label__with__message");
                            }
                        }
                    })

                }else{
                    var innerInputs = [...document.querySelectorAll("#tfa_43 input")];
                    var innerInputsTwo = [...document.querySelectorAll("#tfa_2181 input")];
                    var innerText = [...document.querySelectorAll("#tfa_2181 textarea")];

                    innerInputs = innerInputs.concat(innerText).concat(innerInputsTwo);

                    innerInputs.map((element) => {
                        element.parentNode.classList.remove("label__with__message");
                        element.classList.remove("error"); 

                        return true;
                    })                
                }

                if([...document.querySelectorAll("#tfa_2-D .is_true")].length <= 0){
                    document.querySelector("#tfa_2-D").classList.add("error");
                    document.getElementById("tfa_2-D").parentNode.classList.add("label__with__message");
                    document.querySelectorAll(".slider__message__text__amount")[0].innerHTML = "";
                    document.querySelectorAll(".slider__message__text__amount")[0].innerHTML = "Please select a donation amount";
                }else{
                    document.querySelector("#tfa_2-D").classList.remove("error");
                    document.getElementById("tfa_2-D").parentNode.classList.remove("label__with__message");
                    var selectedPrice = document.querySelectorAll("#tfa_2-D .is_true")[0].getAttribute("id"); 
                    var priceElement = parseInt(document.querySelectorAll(`.${selectedPrice}`)[0].innerHTML.replace(/\$/g, ''));

                    if(priceElement !== 0){
                        document.getElementById("tfa_2553").value = priceElement
                    }

                    document.querySelectorAll(".slider__message__text__amount")[0].innerHTML = "";
                }

                if(document.getElementById("input__heart").classList.contains("input__heart") && !document.getElementById("input__heart").classList.contains("is__toggled")){

                    [...document.querySelectorAll("#tfa_31 .error")].map((element) => {
                        element.classList.remove("error");
                    })
                }

                var checkErrors = [...document.querySelectorAll(".form__step__one .error")];

                
                if(checkErrors.length <= 0){
                    this.slider.slickNext();
                    var selectedValue = 0;

                    if(document.getElementById("tfa_13").classList.contains("is_true")){
                        var selectedValue = parseInt(document.getElementById("tfa_14").value); 
                    }else{
                        var selectedValue = parseInt(document.getElementById("tfa_2553").value);
                    }
    
                    this.setState({
                        oldValue : selectedValue,
                    });
                    
                    
                    document.querySelectorAll(".slider__message__text")[0].innerHTML = "";
                    document.querySelectorAll(".slider__message__text__amount")[0].innerHTML = "";
                }else{
                    document.querySelectorAll(".slider__message__text")[0].innerHTML = "";
                    document.querySelectorAll(".slider__message__text")[0].innerHTML = "Please complete all the fields in red";
                }

            }

            if(parseInt(currentIndex) === 1){
                if (window.innerWidth > 900) {
                    document.getElementById("hero__donation").scrollIntoView();
                }
                if(!this.state.firstSwipe){
                    this.setState({
                        firstSwipe: true,
                    });

                    document.getElementById("tfa_2637").checked = true; 
               
                }
                if(document.getElementById("tfa_2637").checked === true){

                    var mainValue = (this.state.oldValue * 2.5 / 100); 
                    var mainValue = mainValue + this.state.oldValue; 

                    document.getElementById("tfa_2553").value = mainValue.toFixed(2);
                    
                }


                var textInputs = [ 
                    "tfa_2525" ,
                    "tfa_2532",
                    "tfa_2532",
                    "tfa_2198",
                    "tfa_2200",
                    "tfa_2511",
                ]

                if(document.getElementById("tfa_2627").value === "-1"){
                    document.getElementById(`tfa_2627`).classList.add("error");
                }else{
                    document.getElementById(`tfa_2627`).classList.remove("error");
                }
                if(document.getElementById("tfa_2201").value === "-1"){
                    document.getElementById(`tfa_2201`).classList.add("error");
                }else{
                    document.getElementById(`tfa_2201`).classList.remove("error");
                }
                if(document.getElementById("tfa_2439").value === "-1"){
                    document.getElementById(`tfa_2439`).classList.add("error");
                }else{
                    document.getElementById(`tfa_2439`).classList.remove("error");
                }
                  

                textInputs.map((element) => {
                    if(document.getElementById(`${element}`).value.length >= 3){
                        document.getElementById(`${element}`).parentNode.classList.remove("label__with__message");
                        document.getElementById(`${element}`).classList.remove("error");
                    }else{
                        document.getElementById(`${element}`).parentNode.classList.add("label__with__message");
                        document.getElementById(`${element}`).classList.add("error");
                    }
                })

                if(document.getElementById("tfa_2526").value.length > 15 && document.getElementById("tfa_2526").value.length < 20 ){
                    document.getElementById("tfa_2526").classList.remove("error");
                    document.getElementById("tfa_2526").parentNode.classList.remove("label__with__message");
                }else{
                    document.getElementById("tfa_2526").classList.add("error");
                    document.getElementById("tfa_2526").parentNode.classList.add("label__with__message");
                }

                if(document.getElementById("tfa_2528").value.length > 1 && document.getElementById("tfa_2528").value.length < 3 ){
                    document.getElementById("tfa_2528").classList.remove("error");
                    document.getElementById("tfa_2528").parentNode.classList.remove("label__with__message");
                }else{
                    document.getElementById("tfa_2528").classList.add("error");
                    document.getElementById("tfa_2528").parentNode.classList.add("label__with__message");
                }

                if(document.getElementById("tfa_2529").value.length > 1 && document.getElementById("tfa_2529").value.length < 5 ){
                    document.getElementById("tfa_2529").classList.remove("error");
                    document.getElementById("tfa_2529").parentNode.classList.remove("label__with__message");
                }else{
                    document.getElementById("tfa_2529").classList.add("error");
                    document.getElementById("tfa_2529").parentNode.classList.add("label__with__message");
                }

                if(document.getElementById("tfa_2530").value.length > 1 && document.getElementById("tfa_2530").value.length < 10 ){
                    document.getElementById("tfa_2530").classList.remove("error");
                    document.getElementById("tfa_2530").parentNode.classList.remove("label__with__message");
                }else{
                    document.getElementById("tfa_2530").classList.add("error");
                    document.getElementById("tfa_2530").parentNode.classList.add("label__with__message");
                }

                if(document.getElementById("tfa_2512").value.length >= 5  ){
                    document.getElementById("tfa_2512").classList.remove("error");
                    document.getElementById("tfa_2512").parentNode.classList.remove("label__with__message");
                }else{
                    document.getElementById("tfa_2512").classList.add("error");
                    document.getElementById("tfa_2512").parentNode.classList.add("label__with__message");
                }
             
                if(document.getElementById("tfa_2516").value.length >= 8  ){
                    document.getElementById("tfa_2516").classList.remove("error");
                    document.getElementById("tfa_2516").parentNode.classList.remove("label__with__message");
                }else{
                    document.getElementById("tfa_2516").classList.add("error");
                    document.getElementById("tfa_2516").parentNode.classList.add("label__with__message");
                }

                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

                if (document.getElementById("tfa_2186").value.match(mailformat)) {
                    document.getElementById("tfa_2186").classList.remove("error");
                    document.getElementById("tfa_2186").parentNode.classList.remove("label__with__message");
                }else{
                    document.getElementById("tfa_2186").classList.add("error");
                    document.getElementById("tfa_2186").parentNode.classList.add("label__with__message");
                }
                
                if(document.getElementById("tfa_2201").value === "tfa_2425" || document.getElementById("tfa_2201").value === "tfa_2426") {    
                    document.getElementById("tfa_2511-D").classList.add("offstate");
                    document.getElementById("tfa_2512-D").classList.remove("offstate");
                    document.getElementById("tfa_2439-D").classList.remove("offstate");
                    document.getElementById("tfa_2511").classList.remove("error");
                    document.getElementById("tfa_2512").classList.remove("error");
                     
                }else{
                    document.getElementById("tfa_2511-D").classList.add("offstate");
                    document.getElementById("tfa_2511").classList.remove("error");
        
                    document.getElementById("tfa_2512-D").classList.add("offstate");
                    document.getElementById("tfa_2512").classList.remove("error");
                }

                var checkErrors = [...document.querySelectorAll(".form__step__two .error")];

                
                if(checkErrors.length <= 0){
                    this.slider.slickNext();
                    document.querySelectorAll(".slider__message__text")[0].innerHTML = "";
                }else{
                    document.querySelectorAll(".slider__message__text")[0].innerHTML = "";
                    document.querySelectorAll(".slider__message__text")[0].innerHTML = "Please complete all the fields in red";
                }
            }

            setTimeout(function(){
                var newCurrentIndex = document.querySelectorAll(".slick-current")[0].getAttribute("data-index"); 
                if(parseInt(newCurrentIndex) === 2){
                    if (window.innerWidth > 900) {
                    document.getElementById("hero__donation__two").scrollIntoView();
                    }

                    document.querySelectorAll(".slider__controller .next")[0].classList.add("hidden-element");
                    document.querySelectorAll(".slider__controller .separator")[0].classList.add("hidden-element");
                }else{
                    document.querySelectorAll(".slider__controller .next")[0].classList.remove("hidden-element");
                    document.querySelectorAll(".slider__controller .separator")[0].classList.remove("hidden-element");
                    
                }

                if(parseInt(newCurrentIndex) === 0){
                    document.querySelectorAll(".slider__controller .prev")[0].classList.add("hidden-element");
                    document.querySelectorAll(".slider__controller .separator")[0].classList.add("hidden-element");
                }else{
                    document.querySelectorAll(".slider__controller .prev")[0].classList.remove("hidden-element");
                    document.querySelectorAll(".slider__controller .separator")[0].classList.remove("hidden-element");
                    
                }
            }, 100)

        }.bind(this), 100)
    }
    previous() {
        if (window.innerWidth > 900) {
        document.getElementById("hero__donation").scrollIntoView();
        }
        this.slider.slickPrev();
        
        setTimeout(function(){
            var newCurrentIndex = document.querySelectorAll(".slick-current")[0].getAttribute("data-index"); 

            if(parseInt(newCurrentIndex) === 2){
                if (window.innerWidth > 900) {
                document.getElementById("hero__donation__two").scrollIntoView();
                }
                document.querySelectorAll(".slider__controller .next")[0].classList.add("hidden-element");
                document.querySelectorAll(".slider__controller .separator")[0].classList.add("hidden-element");
            }else{
                document.querySelectorAll(".slider__controller .next")[0].classList.remove("hidden-element");
                document.querySelectorAll(".slider__controller .separator")[0].classList.remove("hidden-element");
                
            }

            if(parseInt(newCurrentIndex) === 1){
                if (window.innerWidth > 900) {
                document.getElementById("hero__donation").scrollIntoView();
                }


            }
            if(parseInt(newCurrentIndex) === 0){
                if (window.innerWidth > 900) {
                document.getElementById("hero__donation").scrollIntoView();
                }

            }

            if(document.getElementById("tfa_30").classList.contains("is_true")){
                //document.querySelectorAll(".slick-track")[0].style.height = `700px`;
            }else{
                //document.querySelectorAll(".slick-track")[0].style.height = `300px`;
            }

            if(document.getElementById("tfa_38").classList.contains("is_true")){
                //document.querySelectorAll(".slick-track")[0].style.height = `auto`;
            }
    
            if(document.getElementById("tfa_39").classList.contains("is_true")){
                //document.querySelectorAll(".slick-track")[0].style.height = `700px`;
            }

            if(parseInt(newCurrentIndex) === 0){
                document.querySelectorAll(".slider__controller .prev")[0].classList.add("hidden-element");
                document.querySelectorAll(".slider__controller .separator")[0].classList.add("hidden-element");
            }else{
                document.querySelectorAll(".slider__controller .prev")[0].classList.remove("hidden-element");
                document.querySelectorAll(".slider__controller .separator")[0].classList.remove("hidden-element");
                
            }
        }, 100)
    }
    componentDidMount(){
        if(performance.navigation.type == 2){
            location.reload(true);
        }

        document.getElementById("donation__form__inner").addEventListener("keydown", function(e){
            if(event.which === 9){
                e.preventDefault();
            }
        })
        

        const script = document.createElement("script");
        script.src = "/js/donationForm.js";
        script.async = true;
        document.body.appendChild(script);

        //document.querySelectorAll(".slick-track")[0].style.height = `300px`;

        var newCurrentIndex = document.querySelectorAll(".slick-current")[0].getAttribute("data-index"); 
        if(parseInt(newCurrentIndex) === 0){
            document.querySelectorAll(".slider__controller .prev")[0].classList.add("hidden-element");
            document.querySelectorAll(".slider__controller .separator")[0].classList.add("hidden-element");
        }else{
            document.querySelectorAll(".slider__controller .prev")[0].classList.remove("hidden-element");
            document.querySelectorAll(".slider__controller .separator")[0].classList.remove("hidden-element");
        }      

        
    }
    enabledButton(){
        document.getElementById('submit_button').disabled = false;
        

    }
    checkCountry(e){

        if(e.target.value === "tfa_2425" || e.target.value === "tfa_2426"){    
            document.getElementById("tfa_2511-D").classList.add("offstate");
            document.getElementById("tfa_2512-D").classList.remove("offstate");
            document.getElementById("tfa_2439-D").classList.remove("offstate");
            
        }else{
            document.getElementById("tfa_2511-D").classList.add("offstate");
            document.getElementById("tfa_2511").classList.remove("error");
            document.getElementById("tfa_2511").value = "default"

            document.getElementById("tfa_2512-D").classList.add("offstate");
            document.getElementById("tfa_2512").classList.remove("error");

            document.getElementById("tfa_2512").value = "default"
        }

        
    }
    togglePrice(event){
        // var oneChoiceLabels = [...document.querySelectorAll[".oneChoice"]];

        // oneChoiceLabels.map((element) => {
        //     element.target.classList.remove("selected");
        // })

        // if(event.classList.contains("selected")){

        // }else{

        // }
        // event.target.classList.add("selected");
        
        setTimeout(function(){
            var prevHeight = //document.querySelectorAll(".slick-track")[0].style.height.replace(/px/g, '').toLowerCase();
            prevHeight = parseInt(prevHeight); 
            
            if(document.getElementById("tfa_13").classList.contains("is_true")){
                //document.querySelectorAll(".slick-track")[0].style.height = `345px`;
            }else{
                if(!document.getElementById("tfa_13").classList.contains("is_true")){
                    //document.querySelectorAll(".slick-track")[0].style.height = `300px`;
                }
            }

            if(document.getElementById("tfa_30").classList.contains("is_true")){
                //document.querySelectorAll(".slick-track")[0].style.height = `700px`;
            }

            if(document.getElementById("tfa_38").classList.contains("is_true")){
                //document.querySelectorAll(".slick-track")[0].style.height = `auto`;
            }

            if([...document.querySelectorAll("#tfa_2-D .is_true")].length > 0){
                document.querySelector("#tfa_2-D").classList.remove("error");
                document.getElementById("tfa_2-D").parentNode.classList.remove("label__with__message");
                var selectedPrice = document.querySelectorAll("#tfa_2-D .is_true")[0].getAttribute("id"); 
                var priceElement = parseInt(document.querySelectorAll(`.${selectedPrice}`)[0].innerHTML.replace(/\$/g, ''));
    
                if(priceElement !== 0){
                    document.getElementById("tfa_2553").value = priceElement
                }
    
                document.querySelectorAll(".slider__message__text__amount")[0].innerHTML = "";
            }

        }, 100)

        
    }  
    toggleSelectPrice(event){
        
        [...document.querySelectorAll("#tfa_2-D .oneChoice")].map((element) => {
            element.classList.remove("is__toggled");
        });

        [...document.querySelectorAll("#tfa_2-D input")].map((element) => {
            element.classList.remove("is_true");
        });

     
        if(event.target.parentElement.classList.contains("is__toggled")){
            event.target.parentElement.classList.remove("is__toggled");
        }else{
            event.target.parentElement.classList.add("is__toggled");
        }
    
 
        if(event.target.classList.contains("is_true")){
            event.target.classList.remove("is_true");
        }else{
            event.target.classList.add("is_true");
        }
    }
    toggleFrequency(event){
        
        [...document.querySelectorAll("#tfa_16 .oneChoice")].map((element) => {
            element.classList.remove("is__toggled");
        });

        [...document.querySelectorAll("#tfa_16 input")].map((element) => {
            element.classList.remove("is_true");
        });

     
        if(event.target.parentElement.classList.contains("is__toggled")){
            event.target.parentElement.classList.remove("is__toggled");
        }else{
            event.target.parentElement.classList.add("is__toggled");
        }
    
 
        if(event.target.classList.contains("is_true")){
            event.target.classList.remove("is_true");
        }else{
            event.target.classList.add("is_true");
        }
    }
    toggleTribute(event){
        document.getElementById("tfa_34").checked = false; 
        document.getElementById("tfa_33").checked = false; 

        [...document.querySelectorAll("#tfa_36 .oneChoice")].map((element) => {
            element.classList.remove("is__toggled");
        });

        [...document.querySelectorAll("#tfa_36 input")].map((element) => {
            element.classList.remove("is_true");
            element.checked = false; 
        });

   
        if(event.target.parentElement.classList.contains("is__toggled")){
            event.target.parentElement.classList.remove("is__toggled");
        }else{
            event.target.parentElement.classList.add("is__toggled");
        }
        
 
        if(event.target.classList.contains("is_true")){
            event.target.classList.remove("is_true");
        }else{
            event.target.classList.add("is_true");
        }

        var target = event.target;

        setTimeout(function(){
            target.checked = true; 
        }, 200)
    }
    toggleNotify(event){
        document.getElementById("tfa_38").checked = false; 
        document.getElementById("tfa_39").checked = false; 

        [...document.querySelectorAll("#tfa_37 .oneChoice")].map((element) => {
            element.classList.remove("is__toggled");
        });

        [...document.querySelectorAll("#tfa_37 input")].map((element) => {
            element.classList.remove("is_true");
            
        });

      
        if(event.target.parentElement.classList.contains("is__toggled")){
            event.target.parentElement.classList.remove("is__toggled");
        }else{
            event.target.parentElement.classList.add("is__toggled");
        }
 
        if(event.target.classList.contains("is_true")){
            event.target.classList.remove("is_true");
        }else{
            event.target.classList.add("is_true");
        }

        var target = event.target;

        setTimeout(function(){
            target.checked = true; 

            if(document.getElementById("tfa_38").classList.contains("is_true")){
                //document.querySelectorAll(".slick-track")[0].style.height = `auto`;
            }
    
            if(document.getElementById("tfa_39").classList.contains("is_true")){
                //document.querySelectorAll(".slick-track")[0].style.height = `700px`;
            }
        }, 200)

    }
    toggleSelectTrue(event){
        if(event.target.classList.contains("is_true")){
            event.target.classList.remove("is_true");
        }else{
            event.target.classList.add("is_true");
        }

        if(event.target.parentElement.classList.contains("input__heart")){
            if(event.target.parentElement.classList.contains("is__toggled")){
                event.target.parentElement.classList.remove("is__toggled");
                document.getElementById("tfa_34").classList.remove("is_true");
                //document.querySelectorAll(".slick-track")[0].style.height = `350px`;

            }else{
                event.target.parentElement.classList.add("is__toggled");
                document.getElementById("tfa_34").classList.add("is_true");
                //document.querySelectorAll(".slick-track")[0].style.height = `700px`;

            }
        }


    }

    render() {

        const settings = {
            dots: false,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: false,
            swipe: false, 
            beforeChange: function(index){
                setTimeout(function(){

                    var currentIndex = document.querySelectorAll(".slick-current")[0].getAttribute("data-index"); 
                    var currentSlideHeight = document.querySelectorAll(".slick-current")[0].offsetHeight;

                    if (window.innerWidth < 800) {
                        if(parseInt(currentIndex) === 0){
                            //document.querySelectorAll(".slick-track")[0].style.height = `auto`;
                        }else{
                            //document.querySelectorAll(".slick-track")[0].style.height = `${currentSlideHeight+50}px`;
                        }
                        if(parseInt(currentIndex) === 1){
                            //document.querySelectorAll(".slick-track")[0].style.height = `900px`;
                        }
                        if(parseInt(currentIndex) === 2){
                            //document.querySelectorAll(".slick-track")[0].style.height = `450px`;
                        }
                    }else if (window.innerWidth < 600) {
                        if(parseInt(currentIndex) === 0){
                            //document.querySelectorAll(".slick-track")[0].style.height = `auto`;
                        }else{
                            //document.querySelectorAll(".slick-track")[0].style.height = `${currentSlideHeight+50}px`;
                        }
                        if(parseInt(currentIndex) === 1){
                            //document.querySelectorAll(".slick-track")[0].style.height = `1500px`;
                        }
                        if(parseInt(currentIndex) === 2){
                            //document.querySelectorAll(".slick-track")[0].style.height = `450px`;
                        }
                    }
                    else{
                        if(parseInt(currentIndex) === 0){
                            if(document.getElementById("tfa_30").classList.contains("is_true")){
                                //document.querySelectorAll(".slick-track")[0].style.height = `700px`;
                            }
                            if(document.getElementById("tfa_38").classList.contains("is_true")){
                                //document.querySelectorAll(".slick-track")[0].style.height = `auto`;
                            }
                        }
                        if(parseInt(currentIndex) === 1){
                            //document.querySelectorAll(".slick-track")[0].style.height = `830px`;
                        }
                        if(parseInt(currentIndex) === 2){
                            //document.querySelectorAll(".slick-track")[0].style.height = `450px`;
                        }

                        
                        
                    }

                }, 100)
            }
        };

        var styles =
        `
            .floating__screen__selector{
                display:none!important;
            }
        `
        return (
            <>
                <Head>
                    <style>
                        {styles}
                    </style>
                    <script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/TPiWapjoyMdQOtxLT9_b4n2W/recaptcha__en.js"></script>
                    <script src='https://www.google.com/recaptcha/api.js?onload=gCaptchaReadyCallback&render=explicit&hl=en_US' async
                        defer></script>
                    <script type="text/javascript" src="https://www.tfaforms.com/wForms/3.11/js/wforms.js?v=6815167f43cb13d1c4221d1d55861ccaa68f614e"></script>
                    <script type="text/javascript">
                        wFORMS.behaviors.prefill.skip = false;
                    </script>
                    <script type="text/javascript" src="https://www.tfaforms.com/wForms/3.11/js/localization-en_US.js?v=6815167f43cb13d1c4221d1d55861ccaa68f614e"></script>
                    
                </Head>
                <main id="donation__form">
                    
                    <div id="donation__form__inner" className="wFormContainer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="wFormHeader">
                                    </div>
                                    
                                    <div className>

                                        <div className="wForm" id="4696781-WRPR" dir="ltr">
                                        <div class="codesection" id="code-4696781">
                                            <form method="post" action="https://www.tfaforms.com/responses/processor" className="hintsBelow labelsAbove form__element" id={4696781} role="form">
                                                <Slider {...settings} ref={c => (this.slider = c)}>
                                                    <div className="form__step form__step__one">
                                                        <fieldset id="tfa_2562" className="section">
                                                            <legend id="tfa_2562-L"><b>Your Gift</b></legend>
                                                            <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_16-D" role="radiogroup" aria-labelledby="tfa_16-L" data-tfa-labelledby="-L tfa_16-L">
                                                                    <label id="tfa_16-L" className="label preField reqMark">Frequency</label>
                                                                    <div className="inputWrapper">
                                                                        <span id="tfa_16" className="choices horizontal required">
                                                                            <span className="oneChoice is__toggled">
                                                                                <input onClick={this.toggleFrequency} type="radio" value="tfa_17" class="calc-payments calcval-1" checked data-default-value="true" id="tfa_17" name="tfa_16" aria-required="true" data-conditionals="#tfa_2720" aria-labelledby="tfa_17-L" data-tfa-labelledby="tfa_16-L tfa_17-L"  />
                                                                                <label className="label postField" id="tfa_17-L" htmlFor="tfa_17">
                                                                                    <span className="input-radio-faux" />One time
                                                                                </label>
                                                                            </span>
                                                                            <span className="oneChoice">
                                                                                <input type="radio" value="tfa_18" class="calc-payments calcval-9999" id="tfa_18" name="tfa_16" aria-required="true" data-conditionals="#tfa_2555" aria-labelledby="tfa_18-L" data-tfa-labelledby="tfa_16-L tfa_18-L" onClick={this.toggleFrequency} />
                                                                                <label className="label postField" id="tfa_18-L" htmlFor="tfa_18">
                                                                                    <span className="input-radio-faux" />Monthly
                                                                                </label>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            <div className="oneField field-container-D  labelsRemoved  " id="tfa_2-D" role="radiogroup" aria-labelledby="tfa_2-L" data-tfa-labelledby="-L tfa_2-L">
                                                                <div className="inputWrapper">
                                                                    <table id="tfa_2" className="choices columns3 required">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="oneChoice maskControl" onClick={this.togglePrice}>
                                                                                        <input  onChange={this.toggleSelectPrice} type="radio" defaultValue="tfa_6" className="calc-amt calcval-36" id="tfa_6" name="tfa_2" aria-required="true" aria-labelledby="tfa_6-L" data-tfa-labelledby="tfa_2-L tfa_6-L" />
                                                                                        <label className="label postField" id="tfa_6-L" htmlFor="tfa_6">
                                                                                            <span className="price__label tfa_6">
                                                                                                $36
                                                                                            </span>
                                                                                            <span className="input-radio-faux" />
                                                                                            <img loading="lazy" style={{maxWidth: '100%'}} alt="$36" src="https://stm.raxo.dev/wp-content/uploads/2020/08/STMbotones-01.png" />
                                                                                        </label>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="oneChoice maskControl" onClick={this.togglePrice}>
                                                                                        <input  onChange={this.toggleSelectPrice} type="radio" defaultValue="tfa_7" className="calc-amt calcval-54" id="tfa_7" name="tfa_2" aria-required="true" aria-labelledby="tfa_7-L" data-tfa-labelledby="tfa_2-L tfa_7-L" />
                                                                                        <label className="label postField" id="tfa_7-L" htmlFor="tfa_7">
                                                                                            <span className="price__label tfa_7">
                                                                                                $54
                                                                                            </span>
                                                                                            <span className="input-radio-faux" />
                                                                                            <img loading="lazy" style={{maxWidth: '100%'}} alt="$54" src="https://stm.raxo.dev/wp-content/uploads/2020/08/STMbotones-02.png" />
                                                                                        </label>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="oneChoice maskControl" onClick={this.togglePrice}>
                                                                                        <input  onChange={this.toggleSelectPrice} type="radio" defaultValue="tfa_8" className="calc-amt calcval-98" id="tfa_8" name="tfa_2" aria-required="true" aria-labelledby="tfa_8-L" data-tfa-labelledby="tfa_2-L tfa_8-L" />
                                                                                        <label className="label postField" id="tfa_8-L" htmlFor="tfa_8">
                                                                                            <span className="price__label tfa_8">
                                                                                                $98
                                                                                            </span>
                                                                                            <span className="input-radio-faux" />
                                                                                            <img loading="lazy" style={{maxWidth: '100%'}} alt="$98" src="https://stm.raxo.dev/wp-content/uploads/2020/08/STMbotones-03.png" />
                                                                                        </label>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <span className="oneChoice maskControl" onClick={this.togglePrice}>
                                                                                        <input  onChange={this.toggleSelectPrice} type="radio" defaultValue="tfa_9" className="calc-amt calcval-180" id="tfa_9" name="tfa_2" aria-required="true" aria-labelledby="tfa_9-L" data-tfa-labelledby="tfa_2-L tfa_9-L" />
                                                                                        <label className="label postField" id="tfa_9-L" htmlFor="tfa_9">
                                                                                            <span className="price__label tfa_9">
                                                                                                $180
                                                                                            </span>
                                                                                            <span className="input-radio-faux" />
                                                                                            <img loading="lazy" style={{maxWidth: '100%'}} alt="$180" src="https://stm.raxo.dev/wp-content/uploads/2020/08/STMbotones-04.png" />
                                                                                        </label>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="oneChoice maskControl" onClick={this.togglePrice} >
                                                                                        <input  onChange={this.toggleSelectPrice} type="radio" defaultValue="tfa_10" className="calc-amt calcval-360" id="tfa_10" name="tfa_2" aria-required="true" aria-labelledby="tfa_10-L" data-tfa-labelledby="tfa_2-L tfa_10-L" />
                                                                                        <label className="label postField" id="tfa_10-L" htmlFor="tfa_10">
                                                                                            <span className="price__label tfa_10">
                                                                                                $360
                                                                                            </span>
                                                                                            <span className="input-radio-faux" />
                                                                                            <img loading="lazy" style={{maxWidth: '100%'}} alt="$360" src="https://stm.raxo.dev/wp-content/uploads/2020/08/STMbotones-05.png" />
                                                                                        </label>
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="oneChoice maskControl" onClick={this.togglePrice}>
                                                                                        <input  onChange={this.toggleSelectPrice} type="radio" defaultValue="tfa_13" className="calc-amt calcval-0" id="tfa_13" name="tfa_2" aria-required="true" data-conditionals="#tfa_14" aria-labelledby="tfa_13-L" data-tfa-labelledby="tfa_2-L tfa_13-L" />
                                                                                        <label className="label postField" id="tfa_13-L" htmlFor="tfa_13">
                                                                                            <span className="price__label tfa_13">
                                                                                                $0
                                                                                            </span>
                                                                                            <span className="input-radio-faux" />
                                                                                            <img loading="lazy" style={{maxWidth: '100%'}} alt="Other" src="https://stm.raxo.dev/wp-content/uploads/2020/08/STMbotones-06.png" />
                                                                                        </label>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        
                                                            <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_14-D">
                                                                <label id="tfa_14-L" className="label preField reqMark" htmlFor="tfa_14">$</label>
                                                                <div className="inputWrapper">
                                                                    <input  type="number" id="tfa_14" name="tfa_14" defaultValue aria-required="true" data-condition="`#tfa_13`" title="Amount:" className="validate-float calc-otheramt required" />
                                                                </div>
                                                            </div>

                                                            <div id="tfa_2605" className="section inline group">
                                                                
                                                                <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_2188-D">
                                                                    <label id="tfa_2188-L" className="label preField reqMark" htmlFor="tfa_2188">Direct my donation to</label>
                                                                    <div className="inputWrapper">
                                                                        <select id="tfa_2188" name="tfa_2188" title="Direct my donation to" aria-required="true" className="calc-gau required select__field">
                                                                            <option value="tfa_2196" id="tfa_2196" className="calcval-a0e6A000002BPwzQAG" >Where it is needed most</option>
                                                                            <option value="tfa_2572" id="tfa_2572" data-conditionals="#tfa_2584" className>A Repair the World Community</option>
                                                                            <option value="tfa_2195" id="tfa_2195" className="calcval-a0e6A000002BPx4QAG">One America Movement</option>
                                                                            <option value="tfa_2719" id="tfa_2719" className="calcval-a0e3s00000HVMl9AAH" selected data-default-value="true">Serve the Moment</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="oneField field-container-D  labelsLeftAligned   wf-acl-hidden" id="tfa_2571-D">
                                                                    <label id="tfa_2571-L" className="label preField " htmlFor="tfa_2571">Other Designation</label>
                                                                    <div className="inputWrapper">
                                                                        <input  type="text" id="tfa_2571" name="tfa_2571" defaultValue title="Other Designation" className />
                                                                    </div>
                                                                </div>
                                                                <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_2584-D">
                                                                        <label id="tfa_2584-L" className="label preField reqMark" htmlFor="tfa_2584">Which community?</label><div className="inputWrapper select__field">
                                                                        <select id="tfa_2584" name="tfa_2584" data-condition="`#tfa_2572`" title="Which community?" aria-required="true" className="calc-gau required">
                                                                            <option value="tfa_2595" id="tfa_2595" className="calcval-a0e6A000002Q14zQAC" selected>Atlanta</option>
                                                                            <option value="tfa_2596" id="tfa_2596" className="calcval-a0e6A000002BPxZQAW">Baltimore</option>
                                                                            <option value="tfa_2640" id="tfa_2640" className="calcval-a0e6A000007TEd2QAG">Brooklyn</option>
                                                                            <option value="tfa_2597" id="tfa_2597" className="calcval-a0e6A000002Q16HQAS">Chicago</option>
                                                                            <option value="tfa_2598" id="tfa_2598" data-conditionals="#tfa_2603" className="calcval-a0e6A000002BPxTQAW">Detroit</option>
                                                                            <option value="tfa_2641" id="tfa_2641" className="calcval-a0e6A000007TEdHQAW">Harlem</option>
                                                                            <option value="tfa_2601" id="tfa_2601" className="calcval-a0e6A000002BPxOQAW">Miami</option>
                                                                            <option value="tfa_2600" id="tfa_2600" data-conditionals="#tfa_2603" className="calcval-a0e6A000002BPxJQAW">Pittsburgh</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="oneField field-container-D  labelsRemoved  " id="tfa_2603-D" role="group" aria-labelledby="tfa_2603-L" data-tfa-labelledby="-L tfa_2603-L">
                                                                    <div className="inputWrapper">
                                                                        <span id="tfa_2603" className="choices horizontal " data-condition="`#tfa_2598` OR `#tfa_2600`">
                                                                            <span className="oneChoice">
                                                                                <input  onChange={this.toggleSelectTrue} type="checkbox" defaultValue="tfa_2604" className id="tfa_2604" name="tfa_2604" aria-labelledby="tfa_2604-L" data-tfa-labelledby="tfa_2603-L tfa_2604-L" />
                                                                                <span class="checkmark"><div class="line__one"></div><div class="line__two"></div></span>
                                                                                <label className="label postField" id="tfa_2604-L" htmlFor="tfa_2604">
                                                                                    <span className="input-checkbox-faux" />This donation is for PeerCorps
                                                                                </label>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <fieldset id="tfa_28" className="section">
                                                            <div className="oneField field-container-D  labelsRemoved  " id="tfa_29-D" role="group" aria-labelledby="tfa_29-L" data-tfa-labelledby="-L tfa_29-L">
                                                                <div className="inputWrapper">
                                                                    <span id="tfa_29" className="choices vertical ">
                                                                        <span className="oneChoice">
                                                                            <div className="input__heart" id="input__heart">
                                                                                <input  type="checkbox" defaultValue="tfa_30" className id="tfa_30" name="tfa_30" data-conditionals="#tfa_31" aria-labelledby="tfa_30-L" data-tfa-labelledby="tfa_29-L tfa_30-L" onChange={this.toggleSelectTrue}/>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="30.502" height="26.8" viewBox="0 0 30.502 26.8">
                                                                                    <path id="Trazado_2413" data-name="Trazado 2413" d="M911.834,506.176c-4.363-2.952-8.572-6-11.821-10.163a9.5,9.5,0,0,1-2.231-7.916,7.558,7.558,0,0,1,5.534-6.108,7.758,7.758,0,0,1,7.939,1.929c.189.175.374.353.611.576a8.386,8.386,0,0,1,4.715-2.737,8.052,8.052,0,0,1,9.3,9.608,13.37,13.37,0,0,1-3.306,5.97A55.119,55.119,0,0,1,911.834,506.176Z" transform="translate(-896.613 -480.581)" fill="none" stroke="#fff" stroke-width="2"/>
                                                                                </svg>

                                                                            </div>
                                                                            <label className="label postField" id="tfa_30-L" htmlFor="tfa_30">
                                                                                <span className="input-checkbox-faux" />I would like to dedicate my donation in honor or memory of...
                                                                            </label>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <fieldset id="tfa_31" className="section" data-condition="`#tfa_30`">
                                                            <legend id="tfa_31-L">
                                                                <b>Tribute Details</b>
                                                            </legend>
                                                            <div id="tfa_36" className="section inline group">
                                                                <div className="oneField field-container-D  labelsRemoved  " id="tfa_32-D" role="radiogroup" aria-labelledby="tfa_32-L" data-tfa-labelledby="-L tfa_32-L">
                                                                    <div className="inputWrapper">
                                                                        <span id="tfa_32" className="choices horizontal required">
                                                                            <span className="oneChoice">
                                                                                <input  type="radio" onClick={this.toggleTribute}  defaultValue="tfa_34"  id="tfa_34" name="tfa_32" aria-required="true" aria-labelledby="tfa_34-L" data-tfa-labelledby="tfa_32-L tfa_34-L" checked />
                                                                                <span class="checkmark">
                                                                                    <div className="line__one"></div>
                                                                                    <div className="line__two"></div>
                                                                                </span>
                                                                                <label className="label postField" id="tfa_34-L" htmlFor="tfa_34">
                                                                                    <span className="input-radio-faux" />In honor of
                                                                                </label>
                                                                            </span>
                                                                            <span className="oneChoice">
                                                                                <input  type="radio" onClick={this.toggleTribute} defaultValue="tfa_33" className id="tfa_33" name="tfa_32" aria-required="true" aria-labelledby="tfa_33-L" data-tfa-labelledby="tfa_32-L tfa_33-L" />
                                                                                <span class="checkmark">
                                                                                    <div className="line__one"></div>
                                                                                    <div className="line__two"></div>
                                                                                </span>
                                                                                <label className="label postField" id="tfa_33-L" htmlFor="tfa_33"><span className="input-radio-faux" />In memory of</label>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="oneField field-container-D  labelsRemoved  " id="tfa_35-D">
                                                                    <div className="inputWrapper">
                                                                        <input type="text" id="tfa_35" name="tfa_35" defaultValue aria-required="true" title="Honoree Name" className="required" placeholder="First and Last Name"/>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="oneField field-container-D    " id="tfa_37-D" role="radiogroup" aria-labelledby="tfa_37-L" data-tfa-labelledby="-L tfa_37-L">
                                                                <label id="tfa_37-L" className="label preField reqMark">Would you like us to notify someone of this donation?</label>
                                                                <br />
                                                                <div className="inputWrapper">
                                                                    <span id="tfa_37" className="choices vertical required">
                                                                        <span className="oneChoice">
                                                                            <input  type="radio" defaultValue="tfa_38" onClick={this.toggleNotify} className id="tfa_38" name="tfa_37" aria-required="true" data-conditionals="#tfa_2181,#tfa_43" aria-labelledby="tfa_38-L" data-tfa-labelledby="tfa_37-L tfa_38-L" />
                                                                            <span class="checkmark">
                                                                                <div className="line__one"></div>
                                                                                <div className="line__two"></div>
                                                                            </span>
                                                                            <label className="label postField" id="tfa_38-L" htmlFor="tfa_38"><span className="input-radio-faux" />Yes</label></span><span className="oneChoice"><input  onClick={this.toggleNotify}  type="radio" defaultValue="tfa_39" className id="tfa_39" name="tfa_37" aria-required="true" aria-labelledby="tfa_39-L" data-tfa-labelledby="tfa_37-L tfa_39-L" checked />
                                                                            <span class="checkmark">
                                                                                    <div className="line__one"></div>
                                                                                    <div className="line__two"></div>
                                                                                </span>
                                                                            <label className="label postField" id="tfa_39-L" htmlFor="tfa_39">
                                                                                <span className="input-radio-faux" />No
                                                                            </label>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div id="tfa_43" className="section inline group" data-condition="`#tfa_38`">
                                                                <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_41-D">
                                                                    <label id="tfa_41-L" className="label preField reqMark" htmlFor="tfa_41">To:</label>
                                                                <div className="inputWrapper">
                                                                <input  type="text" id="tfa_41" name="tfa_41" defaultValue   aria-required="true" placeholder="first Name" title="To:" className="required" />
                                                                </div>
                                                            </div>
                                                            <div className="oneField field-container-D  labelsRemoved  " id="tfa_2635-D"><div className="inputWrapper"><input type="text" id="tfa_2635" name="tfa_2635" defaultValue  aria-required="true" title="To:" placeholder="last Name"  className="required" /></div></div>
                                                            <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_42-D">
                                                                <label id="tfa_42-L" className="label preField reqMark" htmlFor="tfa_42">From:</label><div className="inputWrapper"><input  type="text" id="tfa_42" placeholder="Your Name"  name="tfa_42" defaultValue aria-required="true"  title="From:" className="required" /></div>
                                                            </div>
                                                            </div>
                                                            <div id="tfa_2181" className="section group" data-condition="`#tfa_38`"><div id="tfa_2178" className="section inline group">
                                                                <div className="oneField field-container-D    " id="tfa_44-D">
                                                                <label id="tfa_44-L" className="label preField " htmlFor="tfa_44">Personal message:</label><br /><div className="inputWrapper"><textarea id="tfa_44" name="tfa_44" title="Personal message:"  className defaultValue={""} /></div>
                                                                </div>
                                                                <div className="htmlSection" id="tfa_45"><div className="htmlContent" id="tfa_45-HTML"><i >This is the contact information for the person(s) being acknowledged for this tribute gift; this should not be the donor's information.</i><br /></div></div>
                                                                <div className="oneField field-container-D    " id="tfa_2633-D">
                                                                <label id="tfa_2633-L" className="label preField reqMark" htmlFor="tfa_2633">Recipient's Email Address</label><br /><div className="inputWrapper"><input   type="text" id="tfa_2633" name="tfa_2633" defaultValue aria-required="true" title="Recipient's Email Address" className="validate-email required" /></div>
                                                                </div>
                                                            </div></div>
                                                        </fieldset>
                                                    </div>
                                                    <div className="form__step form__step__two">
                                                        <fieldset id="tfa_2524" className="section">
                                                        <legend id="tfa_2524-L"><b>Payment Information</b></legend>
                                                        <div className="oneField field-container-D     wf-acl-hidden" id="tfa_2720-D" role="radiogroup" aria-labelledby="tfa_2720-L" data-tfa-labelledby="-L tfa_2720-L">
                                                            <label id="tfa_2720-L" className="label preField ">How would you like to pay?</label><br /><div className="inputWrapper"><span id="tfa_2720" className="choices vertical " data-condition="`#tfa_17`"><span className="oneChoice"><input  type="radio" defaultValue="tfa_2721" className="calc-method calcval-1" defaultChecked data-default-value="true" id="tfa_2721" name="tfa_2720" aria-labelledby="tfa_2721-L" data-tfa-labelledby="tfa_2720-L tfa_2721-L" /><label className="label postField" id="tfa_2721-L" htmlFor="tfa_2721"><span className="input-radio-faux" />Credit Card</label></span><span className="oneChoice"><input  type="radio" defaultValue="tfa_2722" className="calc-method calcval-2" id="tfa_2722" name="tfa_2720" aria-labelledby="tfa_2722-L" data-tfa-labelledby="tfa_2720-L tfa_2722-L" /><label className="label postField" id="tfa_2722-L" htmlFor="tfa_2722"><span className="input-radio-faux" />PayPal</label></span></span></div>
                                                        </div>
                                                        <div id="tfa_2716" className="section inline group">
                                                            <div className="oneField field-container-D    " id="tfa_2627-D">
                                                            <label id="tfa_2627-L" className="label preField reqMark" htmlFor="tfa_2627">Credit Card Type</label><br /><div className="inputWrapper select__field"><select id="tfa_2627" name="tfa_2627" title="Credit Card Type" aria-required="true" className="required">
                                                                <option value="-1" selected>Please Select...</option>
                                                                <option value="tfa_2628" id="tfa_2628" className >Visa</option>
                                                                <option value="tfa_2629" id="tfa_2629" className>Mastercard</option>
                                                                <option value="tfa_2630" id="tfa_2630" className>Discover</option>
                                                                <option value="tfa_2631" id="tfa_2631" className>Amex</option>
                                                                <option value="tfa_2632" id="tfa_2632" className>Other</option></select></div>
                                                            </div>
                                                            <div className="oneField field-container-D    " id="tfa_2526-D">
                                                            <label id="tfa_2526-L" className="label preField reqMark" htmlFor="tfa_2526">Card Number</label><br /><div className="inputWrapper"><input  type="number" id="tfa_2526" name="tfa_2526" defaultValue aria-required="true" title="Card Number" className="validate-custom /^\d+$/g required" /></div>
                                                            </div>
                                                            <div className="oneField field-container-D    " id="tfa_2528-D">
                                                            <label id="tfa_2528-L" className="label preField reqMark" htmlFor="tfa_2528">MM</label><br /><div className="inputWrapper select__field">
                                                                
                                                                <select type="number" id="tfa_2528" name="tfa_2528" defaultValue  aria-required="true" min={1} max={12} maxLength="2" onInput={this.maxLengthCheck} title="MM" className="validate-integer required reqMark " >
                                                                    <option value="01" selected >Jan</option>
                                                                    <option value="02" >Feb</option>
                                                                    <option value="03" >Mar</option>
                                                                    <option value="04" >Apr</option>
                                                                    <option value="05" >May</option>
                                                                    <option value="06" >Jun</option>
                                                                    <option value="07" >Jul</option>
                                                                    <option value="08" >Aug</option>
                                                                    <option value="09" >Sep</option>
                                                                    <option value="10" >Oct</option>
                                                                    <option value="11" >Nov</option>
                                                                    <option value="12" >Dec</option>
                                                                    
                                                                </select>

                                                                {/* <input  type="number" id="tfa_2528" name="tfa_2528" defaultValue  aria-required="true" min={1} max={12} maxLength="2" onInput={this.maxLengthCheck} title="MM" className="validate-integer required" /> */}
                                                                
                                                                </div>
                                                            </div>
                                                            <div className="oneField field-container-D    " id="tfa_2529-D">
                                                            <label id="tfa_2529-L" className="label preField reqMark" htmlFor="tfa_2529">YY</label><br /><div className="inputWrapper select__field">
                                                                
                                                                <select type="number" id="tfa_2529" name="tfa_2529" defaultValue maxLength="2" onInput={this.maxLengthCheck}  aria-required="true" max={99} title="YY" className="validate-integer required reqMark"  >
                                                                    <option value="20" selected >2020</option>
                                                                    <option value="21" >2021</option>
                                                                    <option value="22" >2022</option>
                                                                    <option value="23" >2023</option>
                                                                    <option value="24" >2024</option>
                                                                    <option value="25" >2025</option>
                                                                    <option value="26" >2026</option>
                                                                    <option value="27" >2027</option>
                                                                    <option value="28" >2028</option>
                                                                    <option value="29" >2029</option>
                                                                    <option value="30" >2030</option>
                                                                    <option value="31" >2031</option>
                                                                </select>

                                                                {/* <input  type="number" id="tfa_2529" name="tfa_2529" defaultValue maxLength="2" onInput={this.maxLengthCheck}  aria-required="true" max={99} title="YY" className="validate-integer required" /> */}
                                                            
                                                            </div>
                                                            </div>
                                                            <div className="oneField field-container-D    " id="tfa_2530-D">
                                                            <label id="tfa_2530-L" className="label preField reqMark" htmlFor="tfa_2530">Code</label><br /><div className="inputWrapper"><input maxLength="10" onInput={this.maxLengthCheck}   type="number" id="tfa_2530" name="tfa_2530" defaultValue aria-required="true" title="Code" className="required" /></div>
                                                            </div>
                                                            <div id="tfa_2717" className="section inline group">
                                                            <div className="oneField field-container-D    " id="tfa_2525-D">
                                                                <label id="tfa_2525-L" className="label preField reqMark" htmlFor="tfa_2525">First Name</label><br /><div className="inputWrapper"><input type="text" id="tfa_2525" name="tfa_2525" defaultValue aria-required="true" title="First Name" className="calc-cardfirstname required" /></div>
                                                            </div>
                                                            <div className="oneField field-container-D    " id="tfa_2532-D">
                                                                <label id="tfa_2532-L" className="label preField reqMark" htmlFor="tfa_2532">Last Name</label><br /><div className="inputWrapper"><input  type="text"  id="tfa_2532" name="tfa_2532" defaultValue aria-required="true" title="Last Name" className="calc-cardlastname required" /></div>
                                                            </div>
                                                            </div>
                                                            <div id="tfa_2513" className="section inline group">
                                                            <div className="oneField field-container-D    " id="tfa_2198-D">
                                                                <label id="tfa_2198-L" className="label preField reqMark" htmlFor="tfa_2198">Street Address</label><br /><div className="inputWrapper"><input  type="text" id="tfa_2198" name="tfa_2198" defaultValue aria-required="true" title="Street Address" className="required" /></div>
                                                            </div>
                                                            <div className="oneField field-container-D    " id="tfa_2200-D">
                                                                <label id="tfa_2200-L" className="label preField reqMark" htmlFor="tfa_2200">City</label><br /><div className="inputWrapper"><input   type="text" id="tfa_2200" name="tfa_2200" defaultValue aria-required="true" title="City" className="required" /></div>
                                                            </div>
                                                            </div>
                                                            <div id="tfa_2514" className="section inline group">
                                                            <div className="oneField field-container-D    " id="tfa_2201-D">
                                                                <label id="tfa_2201-L" className="label preField reqMark" htmlFor="tfa_2201">Country</label><br /><div className="inputWrapper select__field"><select id="tfa_2201" name="tfa_2201" onChange={this.checkCountry} title="Country" aria-required="true" className="required"><option value="-1" selected>Please select...</option>
                                                                    <option value="tfa_2202" id="tfa_2202" className>Afghanistan</option>
                                                                    <option value="tfa_2203" id="tfa_2203" className>Albania</option>
                                                                    <option value="tfa_2204" id="tfa_2204" className>Algeria</option>
                                                                    <option value="tfa_2205" id="tfa_2205" className>American Samoa</option>
                                                                    <option value="tfa_2206" id="tfa_2206" className>Andorra</option>
                                                                    <option value="tfa_2207" id="tfa_2207" className>Angola</option>
                                                                    <option value="tfa_2208" id="tfa_2208" className>Anguilla</option>
                                                                    <option value="tfa_2209" id="tfa_2209" className>Antarctica</option>
                                                                    <option value="tfa_2210" id="tfa_2210" className>Antigua and Barbuda</option>
                                                                    <option value="tfa_2211" id="tfa_2211" className>Argentina</option>
                                                                    <option value="tfa_2212" id="tfa_2212" className>Armenia</option>
                                                                    <option value="tfa_2213" id="tfa_2213" className>Aruba</option>
                                                                    <option value="tfa_2214" id="tfa_2214" className>Australia</option>
                                                                    <option value="tfa_2215" id="tfa_2215" className>Austria</option>
                                                                    <option value="tfa_2216" id="tfa_2216" className>Azerbaijan</option>
                                                                    <option value="tfa_2217" id="tfa_2217" className>Bahamas</option>
                                                                    <option value="tfa_2218" id="tfa_2218" className>Bahrain</option>
                                                                    <option value="tfa_2219" id="tfa_2219" className>Bangladesh</option>
                                                                    <option value="tfa_2220" id="tfa_2220" className>Barbados</option>
                                                                    <option value="tfa_2221" id="tfa_2221" className>Belarus</option>
                                                                    <option value="tfa_2222" id="tfa_2222" className>Belgium</option>
                                                                    <option value="tfa_2223" id="tfa_2223" className>Belize</option>
                                                                    <option value="tfa_2224" id="tfa_2224" className>Benin</option>
                                                                    <option value="tfa_2225" id="tfa_2225" className>Bermuda</option>
                                                                    <option value="tfa_2226" id="tfa_2226" className>Bhutan</option>
                                                                    <option value="tfa_2227" id="tfa_2227" className>Bolivia</option>
                                                                    <option value="tfa_2228" id="tfa_2228" className>Bosnia and Herzegovina</option>
                                                                    <option value="tfa_2229" id="tfa_2229" className>Botswana</option>
                                                                    <option value="tfa_2230" id="tfa_2230" className>Bouvet Island</option>
                                                                    <option value="tfa_2231" id="tfa_2231" className>Brazil</option>
                                                                    <option value="tfa_2232" id="tfa_2232" className>British Indian Ocean Territory</option>
                                                                    <option value="tfa_2233" id="tfa_2233" className>Brunei</option>
                                                                    <option value="tfa_2234" id="tfa_2234" className>Bulgaria</option>
                                                                    <option value="tfa_2235" id="tfa_2235" className>Burkina Faso</option>
                                                                    <option value="tfa_2236" id="tfa_2236" className>Burundi</option>
                                                                    <option value="tfa_2237" id="tfa_2237" className>Cambodia</option>
                                                                    <option value="tfa_2238" id="tfa_2238" className>Cameroon</option>
                                                                    <option value="tfa_2239" id="tfa_2239" data-conditionals="#tfa_2497,#tfa_2511" className>Canada</option>
                                                                    <option value="tfa_2240" id="tfa_2240" className>Cape Verde</option>
                                                                    <option value="tfa_2241" id="tfa_2241" className>Cayman Islands</option>
                                                                    <option value="tfa_2242" id="tfa_2242" className>Central African Republic</option>
                                                                    <option value="tfa_2243" id="tfa_2243" className>Chad</option>
                                                                    <option value="tfa_2244" id="tfa_2244" className>Chile</option>
                                                                    <option value="tfa_2245" id="tfa_2245" className>China</option>
                                                                    <option value="tfa_2246" id="tfa_2246" className>Christmas Island</option>
                                                                    <option value="tfa_2247" id="tfa_2247" className>Cocos ( Keeling ) Islands</option>
                                                                    <option value="tfa_2248" id="tfa_2248" className>Colombia</option>
                                                                    <option value="tfa_2249" id="tfa_2249" className>Comoros</option>
                                                                    <option value="tfa_2250" id="tfa_2250" className>Congo</option>
                                                                    <option value="tfa_2251" id="tfa_2251" className>Cook Islands</option>
                                                                    <option value="tfa_2252" id="tfa_2252" className>Costa Rica</option>
                                                                    <option value="tfa_2253" id="tfa_2253" className>Côte d ' Ivoire</option>
                                                                    <option value="tfa_2254" id="tfa_2254" className>Croatia ( Hrvatska )</option>
                                                                    <option value="tfa_2255" id="tfa_2255" className>Cuba</option>
                                                                    <option value="tfa_2256" id="tfa_2256" className>Cyprus</option>
                                                                    <option value="tfa_2257" id="tfa_2257" className>Czech Republic</option>
                                                                    <option value="tfa_2258" id="tfa_2258" className>Congo ( DRC )</option>
                                                                    <option value="tfa_2259" id="tfa_2259" className>Denmark</option>
                                                                    <option value="tfa_2260" id="tfa_2260" className>Djibouti</option>
                                                                    <option value="tfa_2261" id="tfa_2261" className>Dominica</option>
                                                                    <option value="tfa_2262" id="tfa_2262" className>Dominican Republic</option>
                                                                    <option value="tfa_2263" id="tfa_2263" className>East Timor</option>
                                                                    <option value="tfa_2264" id="tfa_2264" className>Ecuador</option>
                                                                    <option value="tfa_2265" id="tfa_2265" className>Egypt</option>
                                                                    <option value="tfa_2266" id="tfa_2266" className>El Salvador</option>
                                                                    <option value="tfa_2267" id="tfa_2267" className>Equatorial Guinea</option>
                                                                    <option value="tfa_2268" id="tfa_2268" className>Eritrea</option>
                                                                    <option value="tfa_2269" id="tfa_2269" className>Estonia</option>
                                                                    <option value="tfa_2270" id="tfa_2270" className>Ethiopia</option>
                                                                    <option value="tfa_2271" id="tfa_2271" className>Falkland Islands ( Islas Malvinas )</option>
                                                                    <option value="tfa_2272" id="tfa_2272" className>Faroe Islands</option>
                                                                    <option value="tfa_2273" id="tfa_2273" className>Fiji Islands</option>
                                                                    <option value="tfa_2274" id="tfa_2274" className>Finland</option>
                                                                    <option value="tfa_2275" id="tfa_2275" className>France</option>
                                                                    <option value="tfa_2276" id="tfa_2276" className>French Guiana</option>
                                                                    <option value="tfa_2277" id="tfa_2277" className>French Polynesia</option>
                                                                    <option value="tfa_2278" id="tfa_2278" className>French Southern and Antarctic Lands</option>
                                                                    <option value="tfa_2279" id="tfa_2279" className>Gabon</option>
                                                                    <option value="tfa_2280" id="tfa_2280" className>Gambia</option>
                                                                    <option value="tfa_2281" id="tfa_2281" className>Georgia</option>
                                                                    <option value="tfa_2282" id="tfa_2282" className>Germany</option>
                                                                    <option value="tfa_2283" id="tfa_2283" className>Ghana</option>
                                                                    <option value="tfa_2284" id="tfa_2284" className>Gibraltar</option>
                                                                    <option value="tfa_2285" id="tfa_2285" className>Greece</option>
                                                                    <option value="tfa_2286" id="tfa_2286" className>Greenland</option>
                                                                    <option value="tfa_2287" id="tfa_2287" className>Grenada</option>
                                                                    <option value="tfa_2288" id="tfa_2288" className>Guadeloupe</option>
                                                                    <option value="tfa_2289" id="tfa_2289" className>Guam</option>
                                                                    <option value="tfa_2290" id="tfa_2290" className>Guatemala</option>
                                                                    <option value="tfa_2291" id="tfa_2291" className>Guinea</option>
                                                                    <option value="tfa_2292" id="tfa_2292" className>Guinea-Bissau</option>
                                                                    <option value="tfa_2293" id="tfa_2293" className>Guyana</option>
                                                                    <option value="tfa_2294" id="tfa_2294" className>Haiti</option>
                                                                    <option value="tfa_2295" id="tfa_2295" className>Heard Island and McDonald Islands</option>
                                                                    <option value="tfa_2296" id="tfa_2296" className>Honduras</option>
                                                                    <option value="tfa_2297" id="tfa_2297" className>Hong Kong SAR</option>
                                                                    <option value="tfa_2298" id="tfa_2298" className>Hungary</option>
                                                                    <option value="tfa_2299" id="tfa_2299" className>Iceland</option>
                                                                    <option value="tfa_2300" id="tfa_2300" className>India</option>
                                                                    <option value="tfa_2301" id="tfa_2301" className>Indonesia</option>
                                                                    <option value="tfa_2302" id="tfa_2302" className>Iran</option>
                                                                    <option value="tfa_2303" id="tfa_2303" className>Iraq</option>
                                                                    <option value="tfa_2304" id="tfa_2304" className>Ireland</option>
                                                                    <option value="tfa_2305" id="tfa_2305" className>Israel</option>
                                                                    <option value="tfa_2306" id="tfa_2306" className>Italy</option>
                                                                    <option value="tfa_2307" id="tfa_2307" className>Jamaica</option>
                                                                    <option value="tfa_2308" id="tfa_2308" className>Japan</option>
                                                                    <option value="tfa_2309" id="tfa_2309" className>Jordan</option>
                                                                    <option value="tfa_2310" id="tfa_2310" className>Kazakhstan</option>
                                                                    <option value="tfa_2311" id="tfa_2311" className>Kenya</option>
                                                                    <option value="tfa_2312" id="tfa_2312" className>Kiribati</option>
                                                                    <option value="tfa_2313" id="tfa_2313" className>Korea</option>
                                                                    <option value="tfa_2314" id="tfa_2314" className>Kuwait</option>
                                                                    <option value="tfa_2315" id="tfa_2315" className>Kyrgyzstan</option>
                                                                    <option value="tfa_2316" id="tfa_2316" className>Laos</option>
                                                                    <option value="tfa_2317" id="tfa_2317" className>Latvia</option>
                                                                    <option value="tfa_2318" id="tfa_2318" className>Lebanon</option>
                                                                    <option value="tfa_2319" id="tfa_2319" className>Lesotho</option>
                                                                    <option value="tfa_2320" id="tfa_2320" className>Liberia</option>
                                                                    <option value="tfa_2321" id="tfa_2321" className>Libya</option>
                                                                    <option value="tfa_2322" id="tfa_2322" className>Liechtenstein</option>
                                                                    <option value="tfa_2323" id="tfa_2323" className>Lithuania</option>
                                                                    <option value="tfa_2324" id="tfa_2324" className>Luxembourg</option>
                                                                    <option value="tfa_2325" id="tfa_2325" className>Macao SAR</option>
                                                                    <option value="tfa_2326" id="tfa_2326" className>Macedonia, Former Yugoslav Republic of</option>
                                                                    <option value="tfa_2327" id="tfa_2327" className>Madagascar</option>
                                                                    <option value="tfa_2328" id="tfa_2328" className>Malawi</option>
                                                                    <option value="tfa_2329" id="tfa_2329" className>Malaysia</option>
                                                                    <option value="tfa_2330" id="tfa_2330" className>Maldives</option>
                                                                    <option value="tfa_2331" id="tfa_2331" className>Mali</option>
                                                                    <option value="tfa_2332" id="tfa_2332" className>Malta</option>
                                                                    <option value="tfa_2333" id="tfa_2333" className>Marshall Islands</option>
                                                                    <option value="tfa_2334" id="tfa_2334" className>Martinique</option>
                                                                    <option value="tfa_2335" id="tfa_2335" className>Mauritania</option>
                                                                    <option value="tfa_2336" id="tfa_2336" className>Mauritius</option>
                                                                    <option value="tfa_2337" id="tfa_2337" className>Mayotte</option>
                                                                    <option value="tfa_2338" id="tfa_2338" className>Mexico</option>
                                                                    <option value="tfa_2339" id="tfa_2339" className>Micronesia</option>
                                                                    <option value="tfa_2340" id="tfa_2340" className>Moldova</option>
                                                                    <option value="tfa_2341" id="tfa_2341" className>Monaco</option>
                                                                    <option value="tfa_2342" id="tfa_2342" className>Mongolia</option>
                                                                    <option value="tfa_2343" id="tfa_2343" className>Montserrat</option>
                                                                    <option value="tfa_2344" id="tfa_2344" className>Morocco</option>
                                                                    <option value="tfa_2345" id="tfa_2345" className>Mozambique</option>
                                                                    <option value="tfa_2346" id="tfa_2346" className>Myanmar</option>
                                                                    <option value="tfa_2347" id="tfa_2347" className>Namibia</option>
                                                                    <option value="tfa_2348" id="tfa_2348" className>Nauru</option>
                                                                    <option value="tfa_2349" id="tfa_2349" className>Nepal</option>
                                                                    <option value="tfa_2350" id="tfa_2350" className>Netherlands</option>
                                                                    <option value="tfa_2351" id="tfa_2351" className>Netherlands Antilles</option>
                                                                    <option value="tfa_2352" id="tfa_2352" className>New Caledonia</option>
                                                                    <option value="tfa_2353" id="tfa_2353" className>New Zealand</option>
                                                                    <option value="tfa_2354" id="tfa_2354" className>Nicaragua</option>
                                                                    <option value="tfa_2355" id="tfa_2355" className>Niger</option>
                                                                    <option value="tfa_2356" id="tfa_2356" className>Nigeria</option>
                                                                    <option value="tfa_2357" id="tfa_2357" className>Niue</option>
                                                                    <option value="tfa_2358" id="tfa_2358" className>Norfolk Island</option>
                                                                    <option value="tfa_2359" id="tfa_2359" className>North Korea</option>
                                                                    <option value="tfa_2360" id="tfa_2360" className>Northern Mariana Islands</option>
                                                                    <option value="tfa_2361" id="tfa_2361" className>Norway</option>
                                                                    <option value="tfa_2362" id="tfa_2362" className>Oman</option>
                                                                    <option value="tfa_2363" id="tfa_2363" className>Pakistan</option>
                                                                    <option value="tfa_2364" id="tfa_2364" className>Palau</option>
                                                                    <option value="tfa_2365" id="tfa_2365" className>Panama</option>
                                                                    <option value="tfa_2366" id="tfa_2366" className>Papua New Guinea</option>
                                                                    <option value="tfa_2367" id="tfa_2367" className>Paraguay</option>
                                                                    <option value="tfa_2368" id="tfa_2368" className>Peru</option>
                                                                    <option value="tfa_2369" id="tfa_2369" className>Philippines</option>
                                                                    <option value="tfa_2370" id="tfa_2370" className>Pitcairn Islands</option>
                                                                    <option value="tfa_2371" id="tfa_2371" className>Poland</option>
                                                                    <option value="tfa_2372" id="tfa_2372" className>Portugal</option>
                                                                    <option value="tfa_2373" id="tfa_2373" className>Puerto Rico</option>
                                                                    <option value="tfa_2374" id="tfa_2374" className>Qatar</option>
                                                                    <option value="tfa_2375" id="tfa_2375" className>Reunion</option>
                                                                    <option value="tfa_2376" id="tfa_2376" className>Romania</option>
                                                                    <option value="tfa_2377" id="tfa_2377" className>Russia</option>
                                                                    <option value="tfa_2378" id="tfa_2378" className>Rwanda</option>
                                                                    <option value="tfa_2379" id="tfa_2379" className>Samoa</option>
                                                                    <option value="tfa_2380" id="tfa_2380" className>San Marino</option>
                                                                    <option value="tfa_2381" id="tfa_2381" className>São Tomé and Prìncipe</option>
                                                                    <option value="tfa_2382" id="tfa_2382" className>Saudi Arabia</option>
                                                                    <option value="tfa_2383" id="tfa_2383" className>Senegal</option>
                                                                    <option value="tfa_2384" id="tfa_2384" className>Serbia and Montenegro</option>
                                                                    <option value="tfa_2385" id="tfa_2385" className>Seychelles</option>
                                                                    <option value="tfa_2386" id="tfa_2386" className>Sierra Leone</option>
                                                                    <option value="tfa_2387" id="tfa_2387" className>Singapore</option>
                                                                    <option value="tfa_2388" id="tfa_2388" className>Slovakia</option>
                                                                    <option value="tfa_2389" id="tfa_2389" className>Slovenia</option>
                                                                    <option value="tfa_2390" id="tfa_2390" className>Solomon Islands</option>
                                                                    <option value="tfa_2391" id="tfa_2391" className>Somalia</option>
                                                                    <option value="tfa_2392" id="tfa_2392" className>South Africa</option>
                                                                    <option value="tfa_2393" id="tfa_2393" className>South Georgia and the South Sandwich Islands</option>
                                                                    <option value="tfa_2394" id="tfa_2394" className>Spain</option>
                                                                    <option value="tfa_2395" id="tfa_2395" className>Sri Lanka</option>
                                                                    <option value="tfa_2396" id="tfa_2396" className>St. Helena</option>
                                                                    <option value="tfa_2397" id="tfa_2397" className>St. Kitts and Nevis</option>
                                                                    <option value="tfa_2398" id="tfa_2398" className>St. Lucia</option>
                                                                    <option value="tfa_2399" id="tfa_2399" className>St. Pierre and Miquelon</option>
                                                                    <option value="tfa_2400" id="tfa_2400" className>St. Vincent and the Grenadines</option>
                                                                    <option value="tfa_2401" id="tfa_2401" className>Sudan</option>
                                                                    <option value="tfa_2402" id="tfa_2402" className>Suriname</option>
                                                                    <option value="tfa_2403" id="tfa_2403" className>Svalbard and Jan Mayen</option>
                                                                    <option value="tfa_2404" id="tfa_2404" className>Swaziland</option>
                                                                    <option value="tfa_2405" id="tfa_2405" className>Sweden</option>
                                                                    <option value="tfa_2406" id="tfa_2406" className>Switzerland</option>
                                                                    <option value="tfa_2407" id="tfa_2407" className>Syria</option>
                                                                    <option value="tfa_2408" id="tfa_2408" className>Taiwan</option>
                                                                    <option value="tfa_2409" id="tfa_2409" className>Tajikistan</option>
                                                                    <option value="tfa_2410" id="tfa_2410" className>Tanzania</option>
                                                                    <option value="tfa_2411" id="tfa_2411" className>Thailand</option>
                                                                    <option value="tfa_2412" id="tfa_2412" className>Togo</option>
                                                                    <option value="tfa_2413" id="tfa_2413" className>Tokelau</option>
                                                                    <option value="tfa_2414" id="tfa_2414" className>Tonga</option>
                                                                    <option value="tfa_2415" id="tfa_2415" className>Trinidad and Tobago</option>
                                                                    <option value="tfa_2416" id="tfa_2416" className>Tunisia</option>
                                                                    <option value="tfa_2417" id="tfa_2417" className>Turkey</option>
                                                                    <option value="tfa_2418" id="tfa_2418" className>Turkmenistan</option>
                                                                    <option value="tfa_2419" id="tfa_2419" className>Turks and Caicos Islands</option>
                                                                    <option value="tfa_2420" id="tfa_2420" className>Tuvalu</option>
                                                                    <option value="tfa_2421" id="tfa_2421" className>Uganda</option>
                                                                    <option value="tfa_2422" id="tfa_2422" className>Ukraine</option>
                                                                    <option value="tfa_2423" id="tfa_2423" className>United Arab Emirates</option>
                                                                    <option value="tfa_2424" id="tfa_2424" className>United Kingdom</option>
                                                                    <option value="tfa_2425" id="tfa_2425" data-conditionals="#tfa_2439,#tfa_2511" className selected data-default-value="true">United States</option>
                                                                    <option value="tfa_2426" id="tfa_2426" data-conditionals="#tfa_2439,#tfa_2511" className>United States Minor Outlying Islands</option>
                                                                    <option value="tfa_2427" id="tfa_2427" className>Uruguay</option>
                                                                    <option value="tfa_2428" id="tfa_2428" className>Uzbekistan</option>
                                                                    <option value="tfa_2429" id="tfa_2429" className>Vanuatu</option>
                                                                    <option value="tfa_2430" id="tfa_2430" className>Vatican City</option>
                                                                    <option value="tfa_2431" id="tfa_2431" className>Venezuela</option>
                                                                    <option value="tfa_2432" id="tfa_2432" className>Viet Nam</option>
                                                                    <option value="tfa_2433" id="tfa_2433" className>Virgin Islands ( British )</option>
                                                                    <option value="tfa_2434" id="tfa_2434" className>Virgin Islands</option>
                                                                    <option value="tfa_2435" id="tfa_2435" className>Wallis and Futuna</option>
                                                                    <option value="tfa_2436" id="tfa_2436" className>Yemen</option>
                                                                    <option value="tfa_2437" id="tfa_2437" className>Zambia</option>
                                                                    <option value="tfa_2438" id="tfa_2438" className>Zimbabwe</option></select></div>
                                                            </div> 
                                                            <div className="oneField field-container-D    " id="tfa_2439-D">
                                                                <label id="tfa_2439-L" className="label preField reqMark" htmlFor="tfa_2439">State</label><br /><div className="inputWrapper select__field"><select id="tfa_2439" name="tfa_2439" data-condition="`#tfa_2425` OR `#tfa_2426`" title="State" aria-required="true" className="required">
                                                                    <option value="-1" selected>Please Select...</option>
                                                                    <option value="tfa_2440" id="tfa_2440" className >Alabama</option>
                                                                    <option value="tfa_2441" id="tfa_2441" className>Alaska</option>
                                                                    <option value="tfa_2442" id="tfa_2442" className>Arizona</option>
                                                                    <option value="tfa_2443" id="tfa_2443" className>Arkansas</option>
                                                                    <option value="tfa_2444" id="tfa_2444" className>California</option>
                                                                    <option value="tfa_2445" id="tfa_2445" className>Colorado</option>
                                                                    <option value="tfa_2446" id="tfa_2446" className>Connecticut</option>
                                                                    <option value="tfa_2447" id="tfa_2447" className>Delaware</option>
                                                                    <option value="tfa_2448" id="tfa_2448" className>District Of Columbia</option>
                                                                    <option value="tfa_2449" id="tfa_2449" className>Florida</option>
                                                                    <option value="tfa_2450" id="tfa_2450" className>Georgia</option>
                                                                    <option value="tfa_2451" id="tfa_2451" className>Hawaii</option>
                                                                    <option value="tfa_2452" id="tfa_2452" className>Idaho</option>
                                                                    <option value="tfa_2453" id="tfa_2453" className>Illinois</option>
                                                                    <option value="tfa_2454" id="tfa_2454" className>Indiana</option>
                                                                    <option value="tfa_2455" id="tfa_2455" className>Iowa</option>
                                                                    <option value="tfa_2456" id="tfa_2456" className>Kansas</option>
                                                                    <option value="tfa_2457" id="tfa_2457" className>Kentucky</option>
                                                                    <option value="tfa_2458" id="tfa_2458" className>Louisiana</option>
                                                                    <option value="tfa_2459" id="tfa_2459" className>Maine</option>
                                                                    <option value="tfa_2460" id="tfa_2460" className>Maryland</option>
                                                                    <option value="tfa_2461" id="tfa_2461" className>Massachusetts</option>
                                                                    <option value="tfa_2462" id="tfa_2462" className>Michigan</option>
                                                                    <option value="tfa_2463" id="tfa_2463" className>Minnesota</option>
                                                                    <option value="tfa_2464" id="tfa_2464" className>Mississippi</option>
                                                                    <option value="tfa_2465" id="tfa_2465" className>Missouri</option>
                                                                    <option value="tfa_2466" id="tfa_2466" className>Montana</option>
                                                                    <option value="tfa_2467" id="tfa_2467" className>Nebraska</option>
                                                                    <option value="tfa_2468" id="tfa_2468" className>Nevada</option>
                                                                    <option value="tfa_2469" id="tfa_2469" className>New Hampshire</option>
                                                                    <option value="tfa_2470" id="tfa_2470" className>New Jersey</option>
                                                                    <option value="tfa_2471" id="tfa_2471" className>New Mexico</option>
                                                                    <option value="tfa_2472" id="tfa_2472" className>New York</option>
                                                                    <option value="tfa_2473" id="tfa_2473" className>North Carolina</option>
                                                                    <option value="tfa_2474" id="tfa_2474" className>North Dakota</option>
                                                                    <option value="tfa_2475" id="tfa_2475" className>Ohio</option>
                                                                    <option value="tfa_2476" id="tfa_2476" className>Oklahoma</option>
                                                                    <option value="tfa_2477" id="tfa_2477" className>Oregon</option>
                                                                    <option value="tfa_2478" id="tfa_2478" className>Pennsylvania</option>
                                                                    <option value="tfa_2479" id="tfa_2479" className>Rhode Island</option>
                                                                    <option value="tfa_2480" id="tfa_2480" className>South Carolina</option>
                                                                    <option value="tfa_2481" id="tfa_2481" className>South Dakota</option>
                                                                    <option value="tfa_2482" id="tfa_2482" className>Tennessee</option>
                                                                    <option value="tfa_2483" id="tfa_2483" className>Texas</option>
                                                                    <option value="tfa_2484" id="tfa_2484" className>Utah</option>
                                                                    <option value="tfa_2485" id="tfa_2485" className>Vermont</option>
                                                                    <option value="tfa_2486" id="tfa_2486" className>Virginia</option>
                                                                    <option value="tfa_2487" id="tfa_2487" className>Washington</option>
                                                                    <option value="tfa_2488" id="tfa_2488" className>West Virginia</option>
                                                                    <option value="tfa_2489" id="tfa_2489" className>Wisconsin</option>
                                                                    <option value="tfa_2490" id="tfa_2490" className>Wyoming</option>
                                                                    <option value="tfa_2491" id="tfa_2491" className>Puerto Rico</option>
                                                                    <option value="tfa_2492" id="tfa_2492" className>Virgin Island</option>
                                                                    <option value="tfa_2493" id="tfa_2493" className>Northern Mariana Islands</option>
                                                                    <option value="tfa_2494" id="tfa_2494" className>Guam</option>
                                                                    <option value="tfa_2495" id="tfa_2495" className>American Samoa</option>
                                                                    <option value="tfa_2496" id="tfa_2496" className>Palau</option></select></div>
                                                            </div>
                                                            </div>
                                                            <div id="tfa_2515" className="section inline group">
                                                            <div className="oneField field-container-D    " id="tfa_2497-D">
                                                                <label id="tfa_2497-L" className="label preField reqMark" htmlFor="tfa_2497">Provinces</label><br /><div className="inputWrapper select__field"><select id="tfa_2497" name="tfa_2497" data-condition="`#tfa_2239`" title="Provinces" aria-required="true" className="calc-province required">
                                                                    <option value="tfa_2498" id="tfa_2498" className="calcval-AB" selected>Alberta</option>
                                                                    <option value="tfa_2499" id="tfa_2499" className="calcval-BC">British Columbia</option>
                                                                    <option value="tfa_2500" id="tfa_2500" className="calcval-MB">Manitoba</option>
                                                                    <option value="tfa_2501" id="tfa_2501" className="calcval-NB">New Brunswick</option>
                                                                    <option value="tfa_2502" id="tfa_2502" className="calcval-NL">Newfoundland</option>
                                                                    <option value="tfa_2503" id="tfa_2503" className="calcval-NT">Northwest Territories</option>
                                                                    <option value="tfa_2504" id="tfa_2504" className="calcval-NS">Nova Scotia</option>
                                                                    <option value="tfa_2505" id="tfa_2505" className="calcval-NU">Nunavut</option>
                                                                    <option value="tfa_2506" id="tfa_2506" className="calcval-ON">Ontario</option>
                                                                    <option value="tfa_2507" id="tfa_2507" className="calcval-PE">Prince Edward Island</option>
                                                                    <option value="tfa_2508" id="tfa_2508" className="calcval-QC">Quebec</option>
                                                                    <option value="tfa_2509" id="tfa_2509" className="calcval-SK">Saskatchewan</option>
                                                                    <option value="tfa_2510" id="tfa_2510" className="calcval-YT">Yukon</option></select></div>
                                                            </div>
                                                            <div className="oneField field-container-D    " id="tfa_2511-D">
                                                                <label id="tfa_2511-L" className="label preField reqMark" htmlFor="tfa_2511">State/Province</label><br /><div className="inputWrapper"><input  type="text" id="tfa_2511" name="tfa_2511" defaultValue aria-required="true" data-condition="NOT (`#tfa_2425`) AND NOT (`#tfa_2426`) AND NOT (`#tfa_2239`)" title="State/Province" className="required" /></div>
                                                            </div>
                                                            <div className="oneField field-container-D    " id="tfa_2512-D">
                                                                <label id="tfa_2512-L" className="label preField reqMark" htmlFor="tfa_2512">Postal Code</label><br /><div className="inputWrapper"><input   type="text" id="tfa_2512" name="tfa_2512" defaultValue aria-required="true" title="Postal Code" className="validate-alphanum required" /></div>
                                                            </div>
                                                            </div>
                                                            <div id="tfa_2718" className="section inline group">
                                                            <div className="oneField field-container-D    " id="tfa_2186-D">
                                                                <label id="tfa_2186-L" className="label preField reqMark" htmlFor="tfa_2186">Email</label><br /><div className="inputWrapper">
                                                                <input   type="text" id="tfa_2186" name="tfa_2186" defaultValue aria-required="true" aria-describedby="tfa_2186-HH" title="Email" className="validate-email calc-cardemail required" /><span className="field-hint-inactive" id="tfa_2186-H"><span id="tfa_2186-HH" className="hint">You'll receive emails from Repair the World. You may unsubscribe at any time.</span></span>
                                                                </div>
                                                            </div>
                                                            <div className="oneField field-container-D    " id="tfa_2516-D">
                                                                <label id="tfa_2516-L" className="label preField reqMark" htmlFor="tfa_2516">Phone Number</label><br /><div className="inputWrapper"><input  type="text" id="tfa_2516"  name="tfa_2516" defaultValue title="Phone Number" className /></div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div id="tfa_2551" className="section inline group">
                                                            <input  type="hidden" id="tfa_2548" name="tfa_2548" defaultValue className="formula=cardfirstname+space+cardlastname" /><input  type="hidden" id="tfa_2549" name="tfa_2549" defaultValue className="formula=cardemail" /><input  type="hidden" id="tfa_2564" name="tfa_2564" defaultValue=" " className="calc-space" />
                                                        </div>
                                                        </fieldset>
                                                    </div>
                                                    <div className="form__step form__step__three">
                                                        <fieldset id="tfa_2552" className="section">
                                                        <legend id="tfa_2552-L"><b>Total Gift</b></legend>
                                                        <div className="oneField field-container-D     wf-acl-hidden" id="tfa_2639-D">
                                                            <label id="tfa_2639-L" className="label preField " htmlFor="tfa_2639">Credit Card Processing Fee</label><br /><div className="inputWrapper"><input  type="text" id="tfa_2639" name="tfa_2639" defaultValue readOnly title="Credit Card Processing Fee" className="formula=(ProcessingFee*0.025*(amt+otheramt)) readonly" /></div>
                                                        </div>
                                                        <div className="oneField field-container-D  labelsLeftAligned  " id="tfa_2553-D">
                                                            <label id="tfa_2553-L" className="label preField reqMark" htmlFor="tfa_2553">$</label><div className="inputWrapper"><input type="text" id="tfa_2553" name="tfa_2553" value="" readonly="" aria-required="true" title="$" class="validate-float formula=(((amt+otheramt)+(ProcessingFee*0.025*(amt+otheramt)))).toFixed(2) calc-total readonly required" /></div>
                                                        </div>
                                                        <div id="tfa_2555" className="section group" data-condition="`#tfa_18`"><div className="htmlSection" id="tfa_2554"><div className="htmlContent" id="tfa_2554-HTML">donated monthly</div></div></div>
                                                        <div className="oneField field-container-D  labelsRemoved   wf-acl-hidden" id="tfa_2623-D" role="group" aria-labelledby="tfa_2623-L" data-tfa-labelledby="-L tfa_2623-L"><div className="inputWrapper"><span id="tfa_2623" className="choices vertical "><span className="oneChoice"><input  type="checkbox" defaultValue="tfa_2624" className id="tfa_2624" name="tfa_2624" aria-labelledby="tfa_2624-L" data-tfa-labelledby="tfa_2623-L tfa_2624-L" /><label className="label postField" id="tfa_2624-L" htmlFor="tfa_2624"><span className="input-checkbox-faux" />I would like this donation to be listed as anonymous</label></span></span></div></div>
                                                        <div className="oneField field-container-D  labelsRemoved  " id="tfa_2636-D" role="group" aria-labelledby="tfa_2636-L" data-tfa-labelledby="-L tfa_2636-L"><div className="inputWrapper"><span id="tfa_2636" className="choices vertical "><span className="oneChoice">
                                                            <input  type="checkbox" defaultValue="tfa_2637" className="calc-ProcessingFee calcval-1"  data-default-value="false" id="tfa_2637" name="tfa_2637" aria-labelledby="tfa_2637-L" data-tfa-labelledby="tfa_2636-L tfa_2637-L" /><span class="checkmark"><div class="line__one"></div><div class="line__two"></div></span><label className="label postField" id="tfa_2637-L" htmlFor="tfa_2637"><span className="input-checkbox-faux" />I would like to maximize my impact by covering the 2.5% transaction fee on my donation.</label></span></span></div></div>
                                                        </fieldset>

                                                        <input type="hidden" id="tfa_2621" name="tfa_2621" value="a0e6A000002BPwzQAG" class="formula=gau" />
                                                        <input type="hidden" id="tfa_2622" name="tfa_2622" value="1" class="formula=payments" />
                                                        
                                                        <div className="oneField field-container-D     wf-acl-hidden" id="tfa_2723-D">
                                                        <label id="tfa_2723-L" className="label preField " htmlFor="tfa_2723">PayPal Quantity</label><br /><div className="inputWrapper"><input  type="text" id="tfa_2723" name="tfa_2723" defaultValue readOnly title="PayPal Quantity" className="formula=if(method==2){payments}else{0} readonly" /></div>
                                                        </div>

                                                       <input type="hidden" id="tfa_2625" name="tfa_2625" value="0" class="formula=100*total" />
                                                        
                                                       <input type="hidden" id="STRIPE_CUSTOMER_274127" name="STRIPE_CUSTOMER_274127" value="" class="" />
                                                        
                                                       <input type="hidden" id="STRIPE_SUBSCR_274127" name="STRIPE_SUBSCR_274127" value="" class="" />
                                                        
                                                       <input type="hidden" id="STRIPE_CHARGE_274127" name="STRIPE_CHARGE_274127" value="" class="" />
                                                        
                                                       <input type="hidden" id="tfa_2626" name="tfa_2626" class="" />
                                                        
                                                        <div id="Paypal_Hidden_Fields" className="section column group wf-acl-hidden">
                                                        <label className="label preField" id="Paypal_Hidden_Fields-L">Paypal_Hidden_Fields</label><br /><table className="columnLayout">
                                                            <tbody><tr>
                                                                <td><input  type="hidden" id="PayPal_Transaction_Amount" name="PayPal_Transaction_Amount" defaultValue className /></td>
                                                                <td><input  type="hidden" id="PayPal_Buyer_Information" name="PayPal_Buyer_Information" defaultValue className /></td>
                                                                <td><input  type="hidden" id="PayPal_Transaction_Id" name="PayPal_Transaction_Id" defaultValue className /></td>
                                                            </tr>
                                                            <tr>
                                                                <td><input  type="hidden" id="PayPal_Transaction_Status" name="PayPal_Transaction_Status" defaultValue className /></td>
                                                                <td><input  type="hidden" id="PayPal_Buyer_Notes" name="PayPal_Buyer_Notes" defaultValue className /></td>
                                                            </tr>
                                                            </tbody></table>
                                                        </div>
                                                        <div className="actions" id="4696781-A">
                                                        <ReCAPTCHA
                                                            sitekey="6LeISQ8UAAAAAL-Qe-lDcy4OIElnii__H_cEGV0C"
                                                            onChange={this.enabledButton}
                                                        />
                                                        <input value="DONATE"  type="submit" data-label="Donate"  className="primaryAction" id="submit_button" defaultValue="Donate" disabled />
                                                         </div>
                                                        <div style={{clear: 'both'}} />

                                                        <input type="hidden" value="4846172" name="tfa_dbFormId" id="tfa_dbFormId" />
                                                        <input type="hidden" value="" name="tfa_dbResponseId" id="tfa_dbResponseId" />
                                                        <input type="hidden" value="99cb493bf9c3f231a2287c142f0edcb2" name="tfa_dbControl" id="tfa_dbControl" />
                                                        <input type="hidden" value="132" name="tfa_dbVersionId" id="tfa_dbVersionId"/>
                                                        <input type="hidden" value="tfa_2555,tfa_2181,tfa_43,tfa_31,tfa_14,tfa_2603,tfa_2584,tfa_2497,tfa_2439" name="tfa_switchedoff" id="tfa_switchedoff" />
                                                        
                                                    </div>
                                                </Slider>

                                                
                                                <div className="slider__message">
                                                    <p className="slider__message__text"></p>
                                                    <p className="slider__message__text__amount"></p>
                                                </div>
                                                
                                                
                                                <div className="slider__controller">
                                                    <div className="prev" onClick={this.previous}>
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.27" height="12.722" viewBox="0 0 7.27 12.722">
                                                            <path id="Hover" d="M102.219,29.952l-4.887,4.739a.909.909,0,1,0,1.285,1.285l5.453-5.453a.907.907,0,0,0,0-1.284h0l-5.447-5.45a.91.91,0,0,0-1.29,1.285l4.887,4.879" transform="translate(104.336 36.242) rotate(180)" fill="#00a99e" fillRule="evenodd"/>
                                                            </svg>
                                                        </span>
                                                        BACK
                                                    </div>
                                                    <div className="separator"></div>
                                                    <div className="next" onClick={this.next}>
                                                        NEXT
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.27" height="12.722" viewBox="0 0 7.27 12.722">
                                                                <path id="Hover" d="M102.219,29.952l-4.887,4.739a.909.909,0,1,0,1.285,1.285l5.453-5.453a.907.907,0,0,0,0-1.284h0l-5.447-5.45a.91.91,0,0,0-1.29,1.285l4.887,4.879" transform="translate(-97.066 -23.52)" fill="#00a99e" fillRule="evenodd"/>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </form>
                                            </div>
                                            </div>
                                            
                                            <div className="wFormFooter"><p className="supportInfo"><a target="new" className="contactInfoLink" href="https://www.tfaforms.com/forms/help/4670930">Contact Information</a><br /></p></div>
                                            <p className="supportInfo">
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}
