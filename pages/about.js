import React, { Component } from 'react'
import Slider from "react-slick";
import Head from 'next/head'

export default class WhoWeAre extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityArray: [],
        };
  
        this.createCities = this.createCities.bind(this);
  
    }

    componentWillMount(){
        this.createCities();
    }

    componentDidMount(){
        var queryString = window.location.search;

        if(queryString.length > 0){           
            
            queryString = queryString.replace(/\?/g, '').split("&");
            queryString =  queryString[0].split("=")[1].replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase();
            
            this.displayCityContent(queryString);
        }

    }

    displayCityContent(city){

        let partners = [...document.querySelectorAll(".the__partner")];
        let teamMembers = [...document.querySelectorAll("#team  .team__member")];
        let boardTeamMembers = [...document.querySelectorAll(".board .team__member")];

        partners.map((partner) => {
            if(partner.getAttribute("data-city") !== city){
                partner.remove();
            }

            return true; 
        })

        if([...document.querySelectorAll(".the__partner")].length < 1){
            document.getElementById("partners").remove();
        }

        teamMembers.map((teamMember) => {
            if(teamMember.getAttribute("data-city") !== city){
                teamMember.remove();
            }

            return true; 
        })

        if([...document.querySelectorAll("#team  .team__member")].length < 1){
            document.getElementById("team").remove();
        }

        boardTeamMembers.map((boardTeamMember) => {
            if(boardTeamMember.getAttribute("data-city") !== city){
                boardTeamMember.remove();
            }

            return true; 
        })

        if([...document.querySelectorAll(".board .team__member")].length < 1){
            document.querySelectorAll(".board")[0].remove();
        }
    }

    showBio(event){


        var targetEl = document.getElementById(event.target.getAttribute("data-member")); 
        var targetClass = document.querySelectorAll(`.${event.target.getAttribute("data-member")}`)[0]; 

        if(targetEl.classList.contains("closed")){
            targetEl.classList.remove("closed")
            event.target.innerHTML = "-"
        }else{
            targetEl.classList.add("closed");
            event.target.innerHTML = "+"
        }
        
        if(targetClass.classList.contains("closed")){
            targetClass.classList.remove("closed")
        }else{
            targetClass.classList.add("closed")
        }

        
    }

    createCities(){
        var perChunk = 100 // items per chunk    

        var inputArray = this.props.cityData;
        
        var result = inputArray.reduce((resultArray, item, index) => { 
          const chunkIndex = Math.floor(index/perChunk)
        
          if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
          }
        
          resultArray[chunkIndex].push(item)
        
          return resultArray
        }, [])

        var citiesArray = []; 
        var cityFinal = "";

        result.map((city_wrapper, index) => {


            var cityTop = 
            `
                <div class="city__container__${index}">
            `
            var cityInternal = ""

            city_wrapper.map((inner_city) => {
                cityInternal = cityInternal + 
                `
                    <div class="city__slider" data-city="${inner_city.title.rendered.replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase()}">
                        <a href="/volunteer?location=${inner_city.title.rendered.replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase()}#search__form">
                            <div class="city__image">
                                <img loading="lazy" src="${inner_city.better_featured_image.source_url}" alt="${inner_city.title.rendered} city photo"/>
                            </div>
                            <div class="city__name">
                                <h3 class="poppins bold slg white-text">
                                    ${inner_city.title.rendered}
                                </h3>
                            </div>
                        </a>
                    </div>
                `;
            })
            
            var cityBottom = `
            </div>
            `;

            cityFinal = cityTop + cityInternal + cityBottom;
            
            citiesArray.push(cityFinal);
            
        })
 
        this.setState({
            cityArray: citiesArray,
        });
    }

    render() {
        
        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        var cityGridSize = ""; 
        var citySize = Math.ceil(this.props.cityData.length);

        if(citySize % 2 === 0){

                citySize = 4;
            
        }else{
   
                citySize = 5;
            
        }

        cityGridSize = `
            .city__slider {
                width: calc(100% / ${citySize});
            }
        `

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
            <main className="who__page">
                <style>
                    {cityGridSize}
                </style>
                <section className="hero__container">
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
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 hero__content__image">
                                <img loading="lazy" src={this.props.acfData.acf.image} alt="The Experience Image"/>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section className="" id="jewish__sercive__alliance">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div
                                    className={`poppins bold xsmd white-text`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.description_two }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="partners">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 partners__wrapper d-flex justify-content-between align-items-center flex-wrap">
                                {
                                    this.props.partnerData.map((partner, index) => (
                                        <div className="the__partner" key={index} 
                                        data-city={`${partner.acf.city.value.replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase()}`}>
                                            {
                                                partner.acf.partner_website.length > 0
                                                ?
                                                <a href={partner.acf.partner_website}>
                                                    {
                                                        partner.better_featured_image
                                                        ?
                                                        <img loading="lazy" src={`${partner.better_featured_image.source_url}`} alt={ `${partner.title.rendered} logo`}/>
                                                        : <span>{partner.title.rendered}</span>
                                                    }
                                                </a>
                                                :
                                                <>
                                                    {
                                                        partner.better_featured_image
                                                        ?
                                                        <img loading="lazy" src={`${partner.better_featured_image.source_url}`} alt={ `${partner.title.rendered} logo`}/>
                                                        : <span>{partner.title.rendered}</span>
                                                    }
                                                </>
                                            }
                                            
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </section>

                <section id="cities__background">
                    <div className="container-fluid no__padding">
                        <div className="row">
                            <div className="col-lg-12 no__padding">
                                <img loading="lazy" src={this.props.acfData.acf.cities_section_background} alt="Cities Section Background"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="cities">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-12 title">
                                <h2
                                    className={`poppins bold white-text text-center`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_fourth }}
                                />
                                <div
                                    className={`md xl poppins regular white-text text-center`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.description_fourth }}
                                />
                            </div>
                        </div>
                        <div className="row city__holder">
                            <div className="col-lg-12 cities__slider">
                                <Slider {...settings}>
                                    {
                                        this.state.cityArray.map((cityInfo, index) => (
                                            <div
                                                className="city__cluster" key={index}
                                                dangerouslySetInnerHTML={{ __html: cityInfo }}
                                            />
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 title">
                                <h2
                                    className={`poppins bold teal-text text-left`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_fifth }}
                                />
                            </div>
                        </div>
                        <div className="row team__members">
                            {
                                this.props.teamData.map((team_member, index) => (
                                    <div className="team__member col-sm-12 col-md-4 col-lg-3" data-city={team_member.acf.city.value.replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase()} key={index}>
                                        <a href={`mailto:${team_member.acf.email}`}>
                                            <div className="team__avatar d-flex justify-content-center align-items-center">
                                                {
                                                    team_member.better_featured_image
                                                    ? <img loading="lazy" src={team_member.better_featured_image.source_url} alt={`${team_member.title.rendered} member avatar`}/>
                                                    : ""
                                                }
                                                
                                            </div>
                                            <div className="team__title text-center">
                                                <h3 class="poppins bold slg teal-text text-uppercase">
                                                    {team_member.title.rendered}
                                                </h3>
                                                <p class="poppins bold sm teal-text text-uppercase">{team_member.acf.positioncharge}</p>
                                            </div>
                                        </a>
                                            <div className="team__description closed" id={`member-1${index}`}>
                                                <div
                                                    className={`poppins medium sm gray-text text-center`}
                                                    dangerouslySetInnerHTML={{ __html: team_member.content.rendered }}
                                                />
                                                <a href={`mailto:${team_member.acf.email}`}  className={`email__link member-1${index} closed`}>
                                                    <div className="email__button">
                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 107.7 71.8"><style></style><circle class="st0" cx="1082.4" cy="-60.7" r="16.8"/><path class="st0" d="M1125.5-52.3l-22.6 22.6c-1.7 1.7-2.7 4-2.7 6.5v79h-11.9v-47h-11.9v46.9h-11.9v-79c0-2.4-1-4.7-2.6-6.5l-22.6-22.5 8.4-8.4 26.1 26 7 7c.9.9 2.3.9 3.2 0l7-7 26-26 8.5 8.4zM1142 86.3l-24.3 16.2c-.6.4-1.4 0-1.4-.8V91.5h-28v28h10.2c.7 0 1.2.8.8 1.4l-16.2 24.2c-.4.5-1.1.5-1.5 0l-16.2-24.2c-.4-.6 0-1.4.8-1.4h10.2v-28h-28v10.2c0 .7-.8 1.2-1.4.8l-24.2-16.2c-.5-.3-.5-1.1 0-1.5l24.2-16.2c.6-.4 1.4 0 1.4.7v10.2h16.1V67.6h11.9v17.9c0 3.3 2.7 6 6 6s5.9-2.7 5.9-6V67.6h11.9v11.9h16.1V69.3c0-.7.8-1.1 1.4-.7l24.3 16.2c.6.3.6 1.1 0 1.5zM852.3-7.1c2.5-2.5 4.3-5.8 4.6-9.4.4-4.4-1.1-8.7-4.2-11.8-3.1-3-7.2-4.6-11.6-4.2-3.6.3-6.9 2.1-9.5 4.6L816-12.3c-.4.4-1 .4-1.4 0l-15.5-15.5c-2.6-2.6-5.9-4.3-9.5-4.6-4.4-.4-8.6 1.2-11.6 4.2-3.1 3.1-4.6 7.3-4.2 11.8.3 3.6 2.1 6.8 4.6 9.4l10.9 10.9v32.3c0 1.1.4 2.1 1.2 2.8l8.7 8.7c.7.8 1.2 1.8 1.2 2.8v50.2h28.8V16l23.1-23.1zM824 95.4h-18.4V48.3c0-1.1-.4-2.1-1.2-2.8l-8.7-8.7c-.8-.8-1.2-1.8-1.2-2.8V6.5h5.2v14.6c0 .6.4 1 1 1h8.4c.6 0 1 .4 1 1v9.5c0 .9 1.1 1.3 1.7.7l3.5-3.5 8.7-8.6v74.2zM764.3 6.1c-.4 0-.9 0-1.3.1-3.6.3-6.9 2.1-9.5 4.6l-8.9 8.9-8.9-8.9c-2.6-2.5-5.9-4.3-9.5-4.6-.4 0-.9-.1-1.3-.1-3.9 0-7.6 1.5-10.3 4.3-3.1 3.1-4.6 7.4-4.2 11.8.3 3.6 2.1 6.8 4.6 9.4l3.6 3.6v32.3c0 1.1.4 2.1 1.2 2.8l8.7 8.7c.7.8 1.2 1.8 1.2 2.8v19h28.8V47.2l15.7-15.7c2.5-2.5 4.3-5.8 4.6-9.4.4-4.4-1.1-8.7-4.2-11.8-2.8-2.7-6.4-4.2-10.3-4.2zm-11 89.3h-18.4V79.5c0-1.1-.4-2.1-1.2-2.8L725 68c-.8-.8-1.2-1.8-1.2-2.8V37.7h5.2v14.6c0 .6.5 1 1 1h8.4c.6 0 1 .4 1 1v9.5c0 .9 1.1 1.3 1.7.7l3.5-3.5 8.6-8.6v43z"/><path class="st0" d="M903.8 10.3C901 7.5 897.4 6 893.5 6c-.4 0-.9 0-1.3.1-3.6.3-6.9 2.1-9.5 4.6l-8.9 8.9-8.9-8.9c-2.6-2.5-5.9-4.3-9.5-4.6-.4 0-.9-.1-1.3-.1-3.9 0-7.6 1.5-10.3 4.3-3.1 3.1-4.6 7.4-4.2 11.8.3 3.6 2.1 6.8 4.6 9.4l3.6 3.6v32.3c0 1.1.4 2.1 1.2 2.8l8.7 8.7c.7.8 1.2 1.8 1.2 2.8v19h28.8V47.2l15.7-15.7c2.5-2.5 4.3-5.8 4.6-9.4.4-4.4-1.1-8.7-4.2-11.8zm-21.3 85.1h-18.4V79.5c0-1.1-.4-2.1-1.2-2.8l-8.7-8.7c-.8-.8-1.2-1.8-1.2-2.8V37.7h5.2v14.6c0 .6.5 1 1 1h8.4c.6 0 1 .4 1 1v9.5c0 .9 1.1 1.3 1.7.7l3.5-3.5 8.6-8.6v43zM1370.4-13c-26-26-68.1-26-94.1 0s-26 68.1 0 94.1 68.1 26 94.1 0 26-68.1 0-94.1zm14.3 31.4c.5 1.8.9 3.6 1.2 5.4-.4.2-.8.3-1.2.3-1.6 0-2.8-1.3-2.8-2.8s1.2-2.9 2.8-2.9zm0 11.4c.7 0 1.4.3 1.9.8.1 1.4.1 2.7.1 4.1-.5.5-1.2.8-2 .8-1.6 0-2.8-1.3-2.8-2.8s1.2-2.9 2.8-2.9zm-7-28.3c.9 1.6 1.8 3.2 2.6 4.8-.5.5-1.2.8-1.9.8-1.6 0-2.8-1.3-2.8-2.8-.1-1.4.9-2.5 2.1-2.8zm-5-5.7c.5 0 1 .2 1.4.4.5.6.9 1.2 1.3 1.9 0 .2.1.4.1.6 0 1.6-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8 1.2-2.9 2.8-2.9zm0 11.3c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8c0-1.5 1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.2-2.8 2.8-2.8zm0 11.4c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.2-2.8 2.8-2.8zm-12-67.9c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8-1.6 0-2.8-1.3-2.8-2.8 0-1.5 1.3-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8zm0 11.4c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8-1.6 0-2.8-1.3-2.8-2.8 0-1.5 1.3-2.8 2.8-2.8zm-14.6-88.8c1.8.7 3.5 1.4 5.2 2.3-.5 1-1.4 1.6-2.6 1.6-1.6 0-2.8-1.3-2.8-2.8 0-.4.1-.8.2-1.1zm2.7 20.9c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8-1.6 0-2.8-1.3-2.8-2.8-.1-1.5 1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8zm0 11.4c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8zm0 34c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8zm-12-56.7c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.2-2.8 2.8-2.8zm0 11.4c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.2-2.8 2.8-2.8zm-12-45.3c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8c0-1.6 1.2-2.8 2.8-2.8zm-12-11.4c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8c0-1.5 1.3-2.8 2.8-2.8zm0 11.4c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8c0-1.6 1.3-2.8 2.8-2.8zm0 67.9c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.3-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8c0-1.5 1.3-2.8 2.8-2.8zm0 11.4c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.3-2.8 2.8-2.8zm-11.9-90.6c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8-1.6 0-2.8-1.3-2.8-2.8-.1-1.6 1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8zm0 45.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8-1.6 0-2.8-1.3-2.8-2.8-.1-1.5 1.2-2.8 2.8-2.8zm-11.7-79.2c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8c-.1-1.6 1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8c-.1-1.5 1.2-2.8 2.8-2.8zm0 34c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.2-2.8 2.8-2.8zm-11.7-56.6c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8-1.6 0-2.8-1.3-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8zm0 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8zm0 22.7c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8zm-11.6-34c1.5 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8-.8 0-1.4-.3-2-.8.6-1.6 1.2-3.2 2-4.8zm-.1 11.3c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.2-2.8 2.8-2.8zm0 17c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm5.7 5.7c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm0-11.4c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c0 1.6-1.3 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c0 1.5-1.3 2.8-2.8 2.8zm6 51c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm5.6 5.6c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8.1 1.6-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm0-22.7c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8.1 1.6-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8.1 1.5-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm6.1 73.6c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c0 1.5-1.3 2.8-2.8 2.8zm5.6 5.7c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm0-11.4c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c.1 1.6-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm0-34c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c.1 1.5-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm6.1 96.2c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8zm5.6 5.7c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8.1 1.5-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm0-11.4c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8.1 1.6-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm0-56.6c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm6.3 107.5c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm7 5.4c-1-.1-2-.1-3-.2-.7-.5-1.1-1.3-1.1-2.3 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c0 1.1-.6 2-1.5 2.5zm-1.3-11c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c0 1.5-1.2 2.8-2.8 2.8zm0-22.7c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c0 1.6-1.2 2.8-2.8 2.8zm0-67.9c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm6.3 107.5c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm5.7-50.9c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm0-34c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm6.3 62.2c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm5.6-5.6c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm0-11.4c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8.1 1.6-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8.1 1.5-1.2 2.8-2.8 2.8zm8.4 84.1c-.6.3-1.1.5-1.7.8h-.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8 0 .8-.3 1.5-.8 2zm3.6-4.8c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c.1 1.5-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm0-11.4c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c.1 1.6-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm0-11.4c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c.1 1.6-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c.1 1.5-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8.8.5 1.7 1 2.5 1.5.2.4.4.9.4 1.3 0 1.5-1.3 2.8-2.9 2.8zm6.3 96.2c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm5.7-5.6c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm0-11.4c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm0-11.4c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8 0 1.5-1.2 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8zm6.3 73.6c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c0 1.5-1.2 2.8-2.8 2.8zm6.8-5.9c-.3.1-.7.2-1.1.2-1.6 0-2.8-1.3-2.8-2.8a2.795 2.795 0 015.5-.7c-.5 1.1-1.1 2.2-1.6 3.3zm-1.1-11.1c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm0-11.3c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm0-11.4c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c0 1.6-1.3 2.8-2.8 2.8zm4 38.5c-.4-.5-.6-1.1-.6-1.7 0-1.3.9-2.4 2.1-2.7-.4 1.5-.9 3-1.5 4.4zm3-10.3c-.2.1-.5.1-.8.1-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c.6 0 1.1.2 1.6.5-.2 1.7-.4 3.4-.8 5zM0 10v61.8h107.7V10c0-5.5-4.5-10-10-10H10C4.5 0 0 4.5 0 10zm102.6 5.2L53.8 37.3 5.1 15.2V9.6l48.7 22.1 48.7-22.1v5.6zM352.1-39.7V98.5c0 2.8-2.2 5-5 5s-5-2.2-5-5V-29.7h-92.7c-2.8 0-5-2.2-5-5s2.2-5 5-5h102.7z"/><path class="st0" d="M337.1-24.7v143.2H234.5c-2.8 0-5-2.2-5-5s2.2-5 5-5h92.7V26.9h-97.7v-51.6h107.6z"/><path class="st0" d="M238.7 64.8c0 1-.5 1.7-1.8 1.7h-1.6v-3.4h1.6c1.3 0 1.8.7 1.8 1.7z"/><path class="st0" d="M265.2 63.6h-1.4v8.2h1.4c2.5 0 4.2-1.4 4.2-4.1 0-2.7-1.6-4.1-4.2-4.1zm0 0h-1.4v8.2h1.4c2.5 0 4.2-1.4 4.2-4.1 0-2.7-1.6-4.1-4.2-4.1zm-50.7-21.7v51.6c0 5.5 4.5 10 10 10h97.7V31.9h-97.7c-5.5 0-10 4.5-10 10zm23 29.2h-2.3V77h-5.8V58.5h8.1c4.6 0 7 2.6 7 6.3 0 3.4-2.3 6.3-7 6.3zm28.2 5.8H258V58.5h7.7c5.9 0 9.6 3.8 9.6 9.1s-3.7 9.3-9.6 9.3zm36.4-13.8h-7.2v2.5h5.2V70h-5.2v6.9h-5.8V58.5h13v4.6zm-36.9.5h-1.4v8.2h1.4c2.5 0 4.2-1.4 4.2-4.1 0-2.7-1.6-4.1-4.2-4.1z"/><g><path class="st0" d="M596.6-26.2v64.3c0 2.8-2.2 5-5 5s-5-2.2-5-5v-54.3H494c-2.8 0-5-2.2-5-5s2.2-5 5-5h102.6z"/><path class="st0" d="M581.6-11.2v64.3c0 2.8-2.2 5-5 5s-5-2.2-5-5V-1.2H479c-2.8 0-5-2.2-5-5s2.2-5 5-5h102.6z"/><path class="st0" d="M469 58.1h97.7V3.8H459v69.3h102.7c2.8 0 5-2.2 5-5s-2.2-5-5-5h-5v.1H469v-5.1zm20-44.4h67.7v5H489v-5zm0 14.9h67.7v5H489v-5zm67.6 14.8v5H469v-5h87.6z"/><path class="st0" d="M469 63.1h87.7v.1H469z"/><g><path class="st0" d="M469 63.1h87.7v.1H469z"/></g></g><path class="st0" d="M-160.7-16.5c-29.7 0-53.8 24.1-53.8 53.8 0 29.7 24.1 53.8 53.8 53.8s53.8-24.1 53.8-53.8c.1-29.7-24-53.8-53.8-53.8zm-2.5 58.9v-53.8h5.1v48.7h46.2v5.1h-51.3z"/><g><path class="st0" d="M-411.4 42.3l-2 1-2.1-.9-52-21.4v46.9h107.7V16.3l-51.6 26z"/><path class="st0" d="M-329.8-4.3v82.2c0 2.8-2.2 5-5 5s-5-2.2-5-5V.7l-20 10.1-53.8 27.1-53.8-22.3-30-12.4 83.8-34.7 83.8 27.2z"/><path class="st0" d="M-324.8 77.8c0 5.5-4.5 10-10 10s-10-4.5-10-10c0-3.7 2-6.9 5-8.7 1.5-.9 3.2-1.3 5-1.3 1.8 0 3.5.5 5 1.3 3 1.8 5 5 5 8.7z"/></g><g><path class="st0" d="M-666.1-17v55h-16.7v42c0 3.2-2.6 5.8-5.8 5.8-3.2 0-5.8-2.6-5.8-5.8V38h-16.8v-55c0-2.8 2.2-5 5-5h6.7v45.8c0 1.4 1.1 2.5 2.5 2.5h.1c1.4 0 2.5-1.1 2.5-2.5V-22h11.7v45.8c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V-22h6.7c2.7 0 4.9 2.2 4.9 5zM-626-22V80c0 3.2-2.6 5.8-5.8 5.8-3.2 0-5.8-2.6-5.8-5.8V38h-16.8V6.4c0-15.7 12.7-28.4 28.4-28.4z"/></g><g><path class="st0" d="M-843.3 25.1l-32 31.9-38.9-38.9 8.3-8.2 32.4 32.4c.5.5 1.1.7 1.8.7.6 0 1.3-.2 1.8-.7 1-1 1-2.6 0-3.5l-32.4-32.4 8.3-8.3 32.4 32.4c1 1 2.6 1 3.6 0s1-2.6 0-3.6l-32.4-32.4 8.2-8.2 38.9 38.8zM-820.2 74.3c0 1.5-.6 3-1.7 4.1-2.3 2.3-6 2.3-8.3 0l-17.9-17.9 8.3-8.3 17.9 17.9c1.1 1.2 1.7 2.7 1.7 4.2z"/><g><path class="st0" d="M-799.4 28.5l-22.3 22.3-11.9-11.8-9.8 9.8-8.3 8.3-21.4 21.4c-1.1 1.1-2.6 1.7-4.1 1.7-1.5 0-3-.6-4.1-1.7-2.3-2.3-2.3-6 0-8.3l9.6-9.6 11.8-11.8 8.3-8.3 11.8-11.8 40.4-40.4c11.1 11 11.1 29 0 40.2z"/></g></g><g><path class="st0" d="M-1054.7 67.6v15.5h-63.6v-1.9c0-6 0-12.1-.1-18.1-.3-8.3-2.8-16-7.3-23-2.8-4.5-5.8-8.9-8.3-13.6-4.5-8.4-6.2-17.5-5.2-27 1-9.6 3.6-18.6 8.8-26.8 6-9.4 14.4-15.8 24.9-19.3 14.4-4.8 29-5 43.5-.6 13.3 4.1 23.1 12.6 29.1 25.2 2.7 5.7 4.3 11.7 5.3 17.9.1.8.5 1.7.9 2.4 4.2 6.7 8.4 13.5 12.8 20.1 3.4 5.1 1.3 10.3-3.1 12.4-2 .9-3.9 2.2-5.9 3.2-1.1.5-1.4 1.2-1.3 2.4.1 3.2.2 6.4-.1 9.5-.7 10.5-6.5 17.1-16.1 20.7-3.1 1.2-6.4 1.5-9.7 1.2-1.5 0-2.9-.1-4.6-.2zm-57.5-63.2c.1 15.1 12.3 27.3 27.3 27.2 15 0 27.2-12.4 27.1-27.4-.1-15.1-12.2-27.2-27.2-27.1-15.1 0-27.3 12.3-27.2 27.3z"/><path class="st0" d="M-1067.9 0l-8 8-10 10-10-10-8-8c-2.8-2.8-2.8-7.3 0-10 2.8-2.8 7.3-2.8 10 0l8 8 8-8c2.8-2.8 7.3-2.8 10 0 2.8 2.7 2.8 7.2 0 10z"/></g></svg>
                                                    </div>
                                                </a>
                                                <div className={`read__more__button `} data-member={`member-1${index}`} onClick={this.showBio}>
                                                    +
                                                </div>
                                            </div>
                                       
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                {/* <section id="team" className="board">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 title">
                                <h2
                                    className={`poppins bold white-text text-left`}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_sixth }}
                                />
                            </div>
                        </div>
                        <div className="row team__members">
                            {
                                this.props.boardData.map((team_member, index) => (
                                    <div className="team__member col-sm-12 col-md-4 col-lg-3" data-city={team_member.acf.city.value.replace(/ /g, '').replace(/,/g, '') .replace(/-/g, '') .replace(/!/g, '').replace(/ /g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').toLowerCase()} key={index}>
                                        <div className="team__avatar d-flex justify-content-center align-items-center">
                                            {
                                                team_member.better_featured_image
                                                ? <img loading="lazy" src={team_member.better_featured_image.source_url} alt={`${team_member.title.rendered} member avatar`}/>
                                                : ""
                                            }
                                        </div>
                                        <div className="team__title text-center">
                                            <h3 class="poppins bold slg white-text text-uppercase">
                                                {team_member.title.rendered}
                                            </h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section> */}

                <section id="serve__the__moment">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2
                                    className={`poppins bold teal-text `}
                                    dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_seventh }}
                                />
                            </div>
                        </div>
                        <div className="row serve__buttons">
                            {
                                this.props.acfData.acf.serve_buttons.map((button, index) => (
                                    <div className="serve__button__element" key={index}>
                                        <a href={button.button_file} target="_BLANK">
                                            <div className="serve__button__icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="137.656" height="158.2" viewBox="0 0 137.656 158.2" title={button.button_text}>
                                                
                                                <g id="Grupo_9" data-name="Grupo 9" transform="translate(-2354.607 -503.002)">
                                                    <path id="Trazado_8" data-name="Trazado 8" d="M2492.263,503V641.2a5,5,0,0,1-5,5h0a5,5,0,0,1-5-5V513H2389.6a5,5,0,0,1-5-5h0a5,5,0,0,1,5-5Z" fill="#005f5e"/>
                                                    <g id="Grupo_6" data-name="Grupo 6">
                                                    <path id="Trazado_9" data-name="Trazado 9" d="M2477.263,518V661.2H2374.6a5,5,0,0,1-5-5h0a5,5,0,0,1,5-5h92.66V569.6H2369.6V518Z" fill="#005f5e"/>
                                                    </g>
                                                    <g id="Grupo_8" data-name="Grupo 8">
                                                    <g id="Grupo_7" data-name="Grupo 7">
                                                        <path id="Trazado_10" data-name="Trazado 10" d="M2378.806,607.518c0,1.011-.489,1.69-1.79,1.69h-1.639v-3.38h1.639C2378.317,605.828,2378.806,606.5,2378.806,607.518Z" fill="#005f5e"/>
                                                        <path id="Trazado_11" data-name="Trazado 11" d="M2405.327,606.239h-1.381v8.219h1.381c2.55,0,4.24-1.429,4.24-4.11S2407.877,606.239,2405.327,606.239Zm0,0h-1.381v8.219h1.381c2.55,0,4.24-1.429,4.24-4.11S2407.877,606.239,2405.327,606.239Zm-50.72-21.641v51.6a10,10,0,0,0,10,10h97.659V574.6h-97.659A10,10,0,0,0,2354.607,584.6Zm23.06,29.16h-2.29v5.851h-5.77V601.2h8.06c4.62,0,6.989,2.6,6.989,6.32C2384.656,610.918,2382.287,613.758,2377.667,613.758Zm28.179,5.851h-7.67V601.2h7.67c5.881,0,9.571,3.85,9.571,9.15C2415.417,615.609,2411.727,619.609,2405.846,619.609Zm36.35-13.83h-7.23v2.54h5.2v4.349h-5.2v6.941h-5.77V601.2h13Zm-36.869.46h-1.381v8.219h1.381c2.55,0,4.24-1.429,4.24-4.11S2407.877,606.239,2405.327,606.239Z" fill="#005f5e"/>
                                                    </g>
                                                    </g>
                                                </g>
                                                </svg>
                                            </div>
                                            <div className="serve__button__text">
                                                <p className={`poppins bold white-text text-uppercase`}>
                                                    {button.button_text}
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                {/* <section className="hero__container bottom__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 hero__content">
                                <div className="hero__content__title">
                                    <h2
                                        className={`poppins bold xxmd teal-text`}
                                        dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.title_eight }}
                                    />
                                </div>
                                <div className="hero__content__description">
                                    <div
                                        className={`md poppins medium teal-text`}
                                        dangerouslySetInnerHTML={{ __html: this.props.acfData.acf.description_eight }}
                                    />
                                </div>
                                <div className="hero__content__button">
                                    <a href={this.props.acfData.acf.button_link} tabIndex="0">
                                        <button className={`btn main-btn clear-teal`} tabIndex="-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="107.66" height="71.77" viewBox="0 0 107.66 71.77" title={this.props.acfData.acf.button_text}>
                                                <g id="Grupo_5" data-name="Grupo 5" transform="translate(-2140.12 -542.688)">
                                                <g id="Grupo_4" data-name="Grupo 4">
                                                <path id="Trazado_7" data-name="Trazado 7" d="M2140.12,552.688v61.77h107.66v-61.77a10,10,0,0,0-10-10h-87.66A10,10,0,0,0,2140.12,552.688Zm102.56,5.23L2193.95,580l-48.73-22.08v-5.63l48.73,22.08,48.73-22.08Z" fill="#005f5e"/>
                                                </g>
                                            </g>
                                            </svg>


                                            <strong>
                                                {this.props.acfData.acf.button_text}
                                            </strong>
                                        </button>
                                    </a>
                                </div> 
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 hero__content__image">
                                <img loading="lazy" src={this.props.acfData.acf.image_eight} alt="The Experience Image"/>
                            </div>
                        </div>
                    </div>
                </section> */}


            </main>
            </>
        )
    }
}

// This gets called on every request
export async function getServerSideProps() {
    const res = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/pages/188`)
    const acfData = await res.json()
  
    const resData = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/pages/188`)
    const pageData = await resData.json()
  
    const resDataCities = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/cities?per_page=100`)
    const cityData = await resDataCities.json()

    const resDataTeam = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/team?per_page=100`)
    const teamData = await resDataTeam.json()

    const resDataBoard = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/board?per_page=100`)
    const boardData = await resDataBoard.json()

    const resDataPartners = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/partners?per_page=100`)
    const partnerData = await resDataPartners.json()

    return {
        props: {
          acfData,
          pageData,
          cityData,
          teamData,
          boardData,
          partnerData,
        },
    }
  }
  