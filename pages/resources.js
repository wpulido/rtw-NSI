import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'


export default function TheExperience(props) {

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
    <main className="resources__page">
        <div className="hero__container">
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
                    </div>
                </div>
            </div>
        </div>

        <section id="resources__categories">
            <div className="container">
                <div className="category__row row">
                    {
                        props.acfData.acf.resource_category.map((category, index) => (
                            <div className="col-sm-12 col-md-6 col-lg-6 resource__category">
                                <a href={`/all-resources?resource_cat=${category.category[0].slug}`} key={index}>
                                    <div className="resource__category__internal">
                                        <img loading="lazy" className={`category__image`} src={`${category.image}`} alt={`${category.category[0].name} image resource`}/>
                                        <div className="resource__category__internal__meta">
                                            <img loading="lazy" className={`category__icon`} src={category.category_icon} alt={`${category.category[0].name} icon`}/>
                                            <p className={`lg poppins teal-text bold text-uppercase`}>{category.category[0].name}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="view__resources ">
                        <a href={props.acfData.acf.view_resources_link}>
                            <p className={`poppins bold teal-text lg text-uppercase`}>{props.acfData.acf.view_resources_text}</p>
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
    const res = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/pages/298`)
    const acfData = await res.json()
  
    const resData = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/pages/298`)
    const pageData = await resData.json()

    return {
        props: {
          acfData,
          pageData,
        },
    }
  }
  
  
  
