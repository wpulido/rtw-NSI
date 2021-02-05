import React, { Component } from 'react'
import Head from 'next/head'
import SearchLinks from '../components/searchform/searchLinks'
import Search from '../components/searchform/search'

export default class form extends Component {

openWindow(event){
    event.preventDefault() 
    if(document.querySelectorAll(".floating__screen__selector")[0].classList.contains("fs__opened")){
        document.querySelectorAll(".floating__screen__selector")[0].classList.remove("fs__opened");
        document.querySelectorAll(".floating__screen__selector")[0].classList.add("fs__closed");
        document.getElementById("fsc_open").focus();
        document.getElementById("fsc_b1").tabIndex = -1;
        document.getElementById("fsc_b2").tabIndex = -1;
        document.getElementById("fsc_close").tabIndex = -1;

        
    }else{
        document.querySelectorAll(".floating__screen__selector")[0].classList.remove("fs__closed");
        document.querySelectorAll(".floating__screen__selector")[0].classList.add("fs__opened");
        document.querySelectorAll(".close__popup")[0].focus();
        document.getElementById("fsc_b1").tabIndex = 0;
        document.getElementById("fsc_b2").tabIndex = 0;
        document.getElementById("fsc_close").tabIndex = 0;

        var element = document.getElementById("fsc")
        var focusableEls = document.querySelectorAll('#fsc #fsc_close, #fsc a');

        var firstFocusableEl = focusableEls[0],  
            lastFocusableEl = focusableEls[focusableEls.length - 1],
            KEYCODE_TAB = 9;
            
        element.addEventListener('keydown', function(e) {
              var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
              if (!isTabPressed) { 
                  return; 
              }

              if ( e.shiftKey ) /* shift + tab */ {
                  if (document.activeElement === firstFocusableEl) {
                      lastFocusableEl.focus();
                      e.preventDefault();
                  }
              } else /* tab */ {
                  if (document.activeElement === lastFocusableEl) {
                      firstFocusableEl.focus();
                      e.preventDefault();
                  }
              }
        });


    }  
}

keyOpen(e){
    e.preventDefault() 
    if (e.type === 'keypress'){
        if(e.which === 32 || e.which === 13){
            if(document.querySelectorAll(".floating__screen__selector")[0].classList.contains("fs__opened")){
                document.querySelectorAll(".floating__screen__selector")[0].classList.remove("fs__opened");
                document.querySelectorAll(".floating__screen__selector")[0].classList.add("fs__closed");
                document.getElementById("fsc_open").focus();
                document.getElementById("fsc_b1").tabIndex = -1;
                document.getElementById("fsc_b2").tabIndex = -1;
                document.getElementById("fsc_close").tabIndex = -1;
            }else{
                document.querySelectorAll(".floating__screen__selector")[0].classList.remove("fs__closed");
                document.querySelectorAll(".floating__screen__selector")[0].classList.add("fs__opened");
                document.querySelectorAll(".close__popup")[0].focus();
                document.getElementById("fsc_b1").tabIndex = 0;
                document.getElementById("fsc_b2").tabIndex = 0;
                document.getElementById("fsc_close").tabIndex = 0;

                var element = document.getElementById("fsc")
                var focusableEls = document.querySelectorAll('#fsc #fsc_close, #fsc a');
        
                var firstFocusableEl = focusableEls[0],  
                    lastFocusableEl = focusableEls[focusableEls.length - 1],
                    KEYCODE_TAB = 9;
                    
                element.addEventListener('keydown', function(e) {
                      var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
                      if (!isTabPressed) { 
                          return; 
                      }
        
                      if ( e.shiftKey ) /* shift + tab */ {
                          if (document.activeElement === firstFocusableEl) {
                              lastFocusableEl.focus();
                              e.preventDefault();
                          }
                      } else /* tab */ {
                          if (document.activeElement === lastFocusableEl) {
                              firstFocusableEl.focus();
                              e.preventDefault();
                          }
                      }
                });
            }  
        }
    }else{
        if(document.querySelectorAll(".floating__screen__selector")[0].classList.contains("fs__opened")){
            document.querySelectorAll(".floating__screen__selector")[0].classList.remove("fs__opened");
            document.querySelectorAll(".floating__screen__selector")[0].classList.add("fs__closed");
            document.getElementById("fsc_open").focus();
            document.getElementById("fsc_b1").tabIndex = -1;
            document.getElementById("fsc_b2").tabIndex = -1;
            document.getElementById("fsc_close").tabIndex = -1;
        }else{
            document.querySelectorAll(".floating__screen__selector")[0].classList.remove("fs__closed");
            document.querySelectorAll(".floating__screen__selector")[0].classList.add("fs__opened");
            document.querySelectorAll(".close__popup")[0].focus();
            document.getElementById("fsc_b1").tabIndex = 0;
            document.getElementById("fsc_b2").tabIndex = 0;
            document.getElementById("fsc_close").tabIndex = 0;

            var element = document.getElementById("fsc")
            var focusableEls = document.querySelectorAll('#fsc #fsc_close, #fsc a');
    
            var firstFocusableEl = focusableEls[0],  
                lastFocusableEl = focusableEls[focusableEls.length - 1],
                KEYCODE_TAB = 9;
                
            element.addEventListener('keydown', function(e) {
                  var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
                  if (!isTabPressed) { 
                      return; 
                  }
    
                  if ( e.shiftKey ) /* shift + tab */ {
                      if (document.activeElement === firstFocusableEl) {
                          lastFocusableEl.focus();
                          e.preventDefault();
                      }
                  } else /* tab */ {
                      if (document.activeElement === lastFocusableEl) {
                          firstFocusableEl.focus();
                          e.preventDefault();
                      }
                  }
            });
        }  
    }
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
            <meta property="og:image" content="https://cms.servethemoment.org/wp-content/uploads/2020/08/DSC_1859.jpg"></meta>
            <meta property="og:image:width" content="828"></meta>
            <meta property="og:image:height" content="679"></meta>
        </Head>
        <main className="page__contain__search impact__page">
            <div className="hero__container">
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
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 hero__content">
                            <div className="hero__content__title">
                                <h2
                                    className={`poppins bold xxmd teal-text`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title }}
                                />
                            </div>
                            <div className="hero__content__description">
                                <div
                                    className={`md poppins medium teal-text`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.body }}
                                />
                            </div>
                            {
                                this.props.acfData.acf.serve_as_buttons.map((button, index) => (
                                    <div className="hero__content__button" key={index}>
                                        {
                                            index < 2
                                            ?  <a href={button.link} tabindex="0"  >
                                                    <button className={`btn main-btn teal`} tabindex="-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10.393" height="18.188" viewBox="0 0 10.393 18.188">
                                                            <path id="Hover" d="M104.432,32.715,97.446,39.49a1.3,1.3,0,0,0,1.837,1.837l7.795-7.795a1.3,1.3,0,0,0,0-1.835v0L99.291,23.9a1.3,1.3,0,0,0-1.845,1.837l6.986,6.975" transform="translate(-97.066 -23.52)" fill="#00a99e" fillRule="evenodd"/>
                                                        </svg>
                                                        <strong>
                                                            {button.button_text}
                                                        </strong>
                                                    </button>
                                                </a>
                                            :""
                                        }
                                        {
                                            index === 2 && this.props.masterElements.acf.show_window
                                            ?<a href={button.link} tabindex="0"  onKeyPress={index === 2 ? this.keyOpen : ""} onClick={index === 2 ? this.openWindow : ""}>
                                                <button className={`btn main-btn teal`} tabindex="-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10.393" height="18.188" viewBox="0 0 10.393 18.188">
                                                        <path id="Hover" d="M104.432,32.715,97.446,39.49a1.3,1.3,0,0,0,1.837,1.837l7.795-7.795a1.3,1.3,0,0,0,0-1.835v0L99.291,23.9a1.3,1.3,0,0,0-1.845,1.837l6.986,6.975" transform="translate(-97.066 -23.52)" fill="#00a99e" fillRule="evenodd"/>
                                                    </svg>
                                                    <strong>
                                                        {button.button_text}
                                                    </strong>
                                                </button>
                                            </a>
                                            : ""
                                        }
                                        
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 hero__content__image">
                            <img loading="lazy" src={this.props.acfData.acf.image} alt="The Experience Image"/>
                        </div>
                    </div>
                </div>
            </div>

            <section id="act-now">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 title">
                            <h2
                                className={`poppins bold xxmd white-text`}
                                dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_two }}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-8 body">
                            <div
                                className={`lg poppins regular white-text`}
                                dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.description_two }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="opportunities__title">
                <div className="container">
                    <div className="row text-center">
                        <h2
                            className={`poppins  bold teal-text `}
                            dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_three }}
                        />
                    </div>
                </div>
            </section>

            <section id="search__form" className="sf__wrapper">
                {/* Always includ SearchLinks component to load the files for the Search component */}
                <SearchLinks />
                <Search />
            </section>

            <section id="additional__opportunities">
                <div className="container">
                    <div className="row text-left">
                        <div className="col-lg-12">
                            <h2
                                className={`poppins  bold teal-text `}
                                dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_four }}
                            />
                        </div>
                    </div>
                    <div className="row additional__opportunities__wrapper">
                        {
                            this.props.acfData.acf.additional_opportunities.map((oppotunity, index) => (
                                <div className="col-sm-12 col-md-6 col-lg-6  text-center">
                                    <div className="additional__opportunity">
                                        <a href={oppotunity.link} target="_BLANK" key={index}>
                                            <h4 className={`poppins teal-text bold`}>{oppotunity.description}</h4>
                                            <p className={`poppins bold sm gray-text text-uppercase`}>{oppotunity.partner}</p>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
        </>
    )
    }
}

// This gets called on every request
export async function getServerSideProps() {
    const res = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/pages/186`)
    const acfData = await res.json()
  
    const resData = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/pages/186`)
    const pageData = await resData.json()

    return {
        props: {
          acfData,
          pageData,
        },
    }
  }
  
  
  
