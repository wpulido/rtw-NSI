import React, { Component } from 'react'
import DonationForm from '../components/donation-form/donation-form'
import Head from 'next/head'

export default class MakeDonation extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            donation: false,
        };

    }

    
    componentDidMount(){
        // Values from url Params
        var queryStringCampaign = window.location.search;
        var paramsArrayCampaign = []; 

        if(queryStringCampaign.length > 0){           
            
            queryStringCampaign = queryStringCampaign.replace(/\?/g, '').split("&");

            queryStringCampaign.map((param) => {
                paramsArrayCampaign.push(param.split("="));

                return true; 
            })
        }


        paramsArrayCampaign.map((theParam) => {
            if(theParam[0] === "donation" && theParam[1].length > 0  && theParam[1] === "true"){
                this.setState({
                    donation: true,
                }); 

            }

            setTimeout(() => {
                // Prefill amount selected
                if(theParam[0] === "tfa_16" && theParam[1].length > 0  && theParam[1].length > 0 ){
                    if(document.getElementById(`${theParam[1]}`)){
                        document.getElementById(`${theParam[1]}`).click();
                    }
                }
        
                if(theParam[0] === "tfa_2" && theParam[1].length > 0  && theParam[1].length > 0 ){
                    if(document.getElementById(`${theParam[1]}`)){
                        var selfSelectedElement = document.getElementById(`${theParam[1]}`);
                        selfSelectedElement.click();
                        
                        var event = new Event('change');
                        selfSelectedElement.dispatchEvent(event);

                        var selectedElement = document.getElementById(`${theParam[1]}`);
                        selectedElement = selectedElement.parentNode;

                        selectedElement.click();

                        selectedElement.classList.add("is__toggled");
                    }
                }
        
                if(theParam[0] === "tfa_14" && theParam[1].length > 0  && Number.isInteger(theParam[1]) ){
                    document.getElementById("tfa_14").value = theParam[1]; 
                }
       
                if(theParam[0] === "tfa_2188" && theParam[1].length > 0  && theParam[1].length > 0 ){
                    var selectedElement = document.getElementById(`${theParam[0]}`);
                    var selectedOption = document.getElementById(`${theParam[1]}`);
        
                    selectedElement.value = selectedOption.value;
        
                    var event = new Event('change');
                    selectedElement.dispatchEvent(event);
                }
       
                if(theParam[0] === "tfa_2584" && theParam[1].length > 0  && theParam[1].length > 0 ){
                   var selectedElement = document.getElementById(`${theParam[0]}`);
                   var selectedOption = document.getElementById(`${theParam[1]}`);
       
                   selectedElement.value = selectedOption.value;
       
                   var event = new Event('change');
                   selectedElement.dispatchEvent(event);
                }
       
                if(theParam[0] === "tfa_30" && theParam[1].length > 0  && theParam[1] === "true" ){
                    document.getElementById("tfa_30").click();
                }
                if(theParam[0] === "tfa_29" && theParam[1].length > 0  && theParam[1] === "tfa_30" ){
                    document.getElementById("tfa_30").click();
                }

                if(theParam[0] === "tfa_38" && theParam[1].length > 0  && theParam[1] === "true" ){
                   document.getElementById("tfa_38").click();
                }

                if(theParam[0] === "app" && theParam[1].length > 0  && theParam[1].length > 0 ){
                   document.getElementById("tfa_2626").value = theParam[1];
                }
               
            }, 1000);
        })
       
        var allInputs = [...document.querySelectorAll("input")];
        
        allInputs.map((input) => {

            if(input.value === "true" || input.value === "TRUE" || input.value === true){
                input.value = "";
            }
            
            return true; 
        })

        setTimeout(function(){
            if(document.getElementById("submit_button")){
                document.getElementById("submit_button").value = "DONATE";
            }
        }, 1000)
    }

    render() {
        return (
           <>
           <Head>
                <title>{this.props.pageData.yoast_title}</title>
                {
                this.props.pageData.yoast_meta.map((meta) => (
                    Object.keys(meta)[0] === "name"
                    ?<meta name={meta.name}  content={meta.content}  />
                    : Object.keys(meta)[0] === "property" 
                    ? <meta property={meta.property} content={meta.content} />
                    : ""
                ))
                }
           </Head>
           <main className="donation__page">

                <div className="hero__container hero__donation" >
                    <div className="stm__background">
                        <svg xmlns="http://www.w3.org/2000/svg" width="768" height="561.153" viewBox="0 0 768 561.153">
                            <g id="Grupo_1933" data-name="Grupo 1933" transform="translate(-1034.838 -263.064)">
                                <g id="Grupo_1934" data-name="Grupo 1934" transform="translate(1034.838 263.064)">
                                <path id="Trazado_2304" data-name="Trazado 2304" d="M1134.227,645.159l-125.69-125.513-86.07,86.3a8.808,8.808,0,0,1-12.455.033l-.032-.033-55.332-55.129a8.833,8.833,0,0,1,0-12.488l93.074-92.821L807.248,305.152q-3.132-3.354-6.491-6.486l-.782-.781-.126-.064A132.538,132.538,0,0,0,620.7,493.193q20.263,21.662,42.574,41.277L947.75,818.948a17.918,17.918,0,0,0,25.342.04l.04-.04,22.718-22.59L899.22,699.7l19.645-19.366,89.851,90.08a8.959,8.959,0,0,0,12.67.02l.021-.02,16.32-16.347a8.934,8.934,0,0,0,.056-12.635l-.056-.056L947.648,651.5l19.391-19.417,89.927,90.105a8.934,8.934,0,0,0,12.635.056l.056-.056L1085.928,706a8.961,8.961,0,0,0,.02-12.671l-.02-.02-90-90,19.088-19.7,90.511,90.333a8.934,8.934,0,0,0,12.635.056l.056-.056,16.015-16.092a8.935,8.935,0,0,0,.056-12.635Z" transform="translate(-577.838 -263.064)" fill="#f7f7f7"/>
                                <path id="Trazado_2305" data-name="Trazado 2305" d="M1317.328,478.3a132.539,132.539,0,0,0-205.044-167.964L897.694,538.76a8.96,8.96,0,0,0-.021,12.671l.021.02,16.117,16.143a8.96,8.96,0,0,0,12.671.02l.02-.02,85.969-86.3,138.912,138.636a17.9,17.9,0,0,0,25.306.076c.025-.026.051-.051.076-.076l127.709-127.71q3.035-2.85,5.886-5.887l7.551-7.551Z" transform="translate(-578.291 -263.064)" fill="#f7f7f7"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="container-fluid donate__container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6 hero__content">
                                <div className="hero__content__description" id="hero__donation">
                                    <div
                                        className={`md poppins medium teal-text`}
                                        dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.description }}
                                    />
                                </div>
                                <div id="hero__donation__two"></div>
                                <div id="donation__message"></div>
                                {
                                    this.state.donation 
                                    ? 
                                    <div className="donation__message">
                                        <p className={`poppins md white-text bold`}>
                                            Thank you so much for your generous investment in our work. 
                                        </p>
                                        <p className={`poppins sm white-text`}>
                                            Your donation helps our volunteers and partners meet the vital needs of the communities they serve. With your support, we will continue to build a network of partnerships and programs that mobilize people of all backgrounds to help repair the world.

                                        </p>
                                        <p className={`poppins sm white-text`}>
                                            If you're also interested in donating your time, please click <a className={`bold`}href="https://servethemoment.org/volunteer" >here</a>.
                                        </p>
                                    </div>
                                    : <DonationForm />
                                }
                                {/* <div className="donation__form">
                                    <img loading="lazy" src={this.props.acfData.acf.donation_image} alt="GIVE IN HONOUR OF SOMEONE"/>
                                </div> */}
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 hero__content__image">
                                <img className={'donate__image'} loading="lazy" src={this.props.pageData.better_featured_image.source_url} alt="The Experience Image"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__donation">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="first__donation__text text-center">
                                <div
                                    className={`md poppins medium gray-text`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.footer_text }}
                                />
                            </div>
                            <div className="donation__separator">

                            </div>
                            <div className="second__donation__text text-center">
                                <div
                                    className={` md poppins medium gray-text`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.quote_text }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
           </main>
           </>
            
    )
    }
}

// This gets called on every request
export async function getServerSideProps() {
    const res = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/pages/192`)
    const acfData = await res.json()
  
    const resData = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/pages/192`)
    const pageData = await resData.json()

    return {
        props: {
          acfData,
          pageData,
        },
    }
  }
  
  
  