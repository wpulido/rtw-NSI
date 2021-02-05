import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";


export default function TheExperience(props) {

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  function openFaq(event){
    if(event.target.classList.contains("open")){
        event.target.classList.remove("open");
    }else{
        event.target.classList.add("open");
    }
  }

  function showFaqs(event){
    var moreFaqs = [...document.querySelectorAll(".more__faqs")];

    if(event.target.classList.contains("open__resource")){
        event.target.classList.remove("open__resource"); 

        moreFaqs.map((element) => {
            element.classList.add("hidden__faq");

            return true; 
        })

        document.querySelectorAll(".view__resources p")[0].innerHTML = "VIEW ALL FAQS";
    }else{
        event.target.classList.add("open__resource"); 

        moreFaqs.map((element) => {
            element.classList.remove("hidden__faq");

            return true; 
        })

        document.querySelectorAll(".view__resources p")[0].innerHTML = "HIDE FAQS";
    }
    
  }


  return (
    <>
    <Head>
        <title>{props.pageData.yoast_title}</title>
        {
        props.pageData.yoast_meta.map((meta) => (
            Object.keys(meta)[0] === "name"
            ?<meta name={meta.name}  content={meta.content}  />
            : Object.keys(meta)[0] === "property" 
            ? <meta property={meta.property} content={meta.content} />
            : ""
        ))
        }
    </Head>
    <main className="experience__page">
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
                                dangerouslySetInnerHTML={{ __html: props.acfData.acf.title }}
                            />
                        </div>
                        <div className="hero__content__description">
                            <div
                                className={`md poppins medium teal-text`}
                                dangerouslySetInnerHTML={{ __html: props.acfData.acf.description }}
                            />
                        </div>
                        <div className="hero__content__button">
                            <a href={props.acfData.acf.button_link} tabIndex="0" target="_BLANK">
                                <button className={`btn main-btn clear-teal`} tabIndex="-1">
                                    <strong>
                                        {props.acfData.acf.button_text}
                                    </strong>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 hero__content__image">
                        <img loading="lazy" src={props.acfData.acf.image} alt="The Experience Image"/>
                    </div>
                </div>
            </div>
        </div>

        <section id="experience__members">
            <div className="container-fluid no__padding">
                <div className="row">
                    <div className="col-lg-12 no__padding experience__background">
                        <img loading="lazy" src={props.acfData.acf.section_image} alt="Moment Corps Members"/>
                    </div>
                </div>
            </div>

            <div className="container experience__member__square">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="experience__ms__wrapper">
                            <div className="experience__ms__description">
                                <div
                                    className={`md poppins medium white-text`}
                                    dangerouslySetInnerHTML={{ __html: props.acfData.acf.description_two }}
                                />
                            </div>
                            <div className="experience__ms__button">
                                {
                                    props.acfData.acf.section_buttons.map((button, index)=> (
                                        <a href={button.button_link} target="_BLANK" key={index} tabIndex="0">
                                            <button className={`btn main-btn white-btn`} tabIndex="-1">
                                                <strong>
                                                    {button.button_text}
                                                </strong>
                                            </button>
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="experience__slider">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 slides__title">
                        <h2
                            className={`poppins bold teal-text text-center faqs__title`}
                            dangerouslySetInnerHTML={{ __html: props.acfData.acf.slide_title }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 slides">
                        <Slider {...settings}>
                                {
                                    props.acfData.acf.slide_content.map((slide, index) => (
                                        <div className="the__slide" key={index}>
                                            <div className="slide__image">
                                                <img loading="lazy" src={slide.image} alt="person photo"/>
                                            </div>
                                            <div className="slide__content">
                                                <div className="slide__quote__icon">
                                                    <p className={`poppins`}>"</p>
                                                </div>
                                                <div className="slide__quote">
                                                    <div
                                                        className={`md poppins medium teal-text`}
                                                        dangerouslySetInnerHTML={{ __html: slide.quote }}
                                                    />
                                                </div>
                                                <div className="slide__quote__icon">
                                                    <p className={`poppins`}>"</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>

        <section id="faqs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 ">
                        <h2
                            className={`poppins bold teal-text text-center faqs__title`}
                            dangerouslySetInnerHTML={{ __html: props.acfData.acf.title_three }}
                        />
                        <div className="faqs__wrapper">
                            {
                                props.faqsData.map((faq, index) => (
                                    <div className={`the__faq ${index > 2 ? "more__faqs hidden__faq": ""}
                                    `} key={index} onClick={openFaq}>
                                        <div className="title">
                                            <h4
                                                className={`bold teal-text`}
                                                dangerouslySetInnerHTML={{ __html: faq.title.rendered }}
                                            />

                                            <div className="arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18.188" height="10.393" viewBox="0 0 18.188 10.393">
                                                    <path id="Hover" d="M104.432,32.715,97.446,39.49a1.3,1.3,0,0,0,1.837,1.837l7.795-7.795a1.3,1.3,0,0,0,0-1.835v0L99.291,23.9a1.3,1.3,0,0,0-1.845,1.837l6.986,6.975" transform="translate(-23.52 107.459) rotate(-90)" fill="#015d5d" fillRule="evenodd"/>
                                                </svg>
                                            </div>
                                        </div>
                                        
                                        <div
                                            className={`description md poppins medium teal-text`}
                                            dangerouslySetInnerHTML={{ __html: faq.content.rendered }}
                                        />
                                        
                                    </div>
                                ))
                            }
                        </div>
                    
                        <div className="view__resources">
                            <p onClick={showFaqs} className={`poppins bold teal-text lg text-uppercase`}>{props.acfData.acf.resource_button_text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="apply__today">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center">
                       
                        <a href={props.acfData.acf.link} target="_BLANK">
                        <button className={`btn main-btn clear-teal`} tabIndex="-1">
                            <strong>
                                <h4
                                    className={`poppins bold  text-center `}
                                    dangerouslySetInnerHTML={{ __html: props.acfData.acf.title_four }}
                                />
                            </strong>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </main>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
    const res = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/pages/190`)
    const acfData = await res.json()
  
    const resData = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/pages/190`)
    const pageData = await resData.json()
  
    const resDataFaqs = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/faqs?per_page=100`)
    const faqsData = await resDataFaqs.json()

    return {
        props: {
          acfData,
          pageData,
          faqsData,
        },
    }
  }
  
  
  
