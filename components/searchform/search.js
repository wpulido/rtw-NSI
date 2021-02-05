import React, { Component } from 'react'
import LoadingCard from "../loading-card/loading-card";
export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterData: "",
        };
  
    }

    createParamsElements(paramsArray){
        var cityParam = "";
        var issueParam = "";
        var partnerParam = "";
        var startDate = "";
        var type = "";
        var endDate = "";


        paramsArray.map((theParam) => {
            if(theParam[0] === "location" && theParam[1].length > 0 ){
                cityParam = 
                `
                    <div class="location_get">
                        ${theParam[1]}
                    </div>
                `;
            }
            if(theParam[0] === "type" && theParam[1].length > 0 ){
                type = 
                `
                    <div class="type_get">
                        ${theParam[1]}
                    </div>
                `;
            }
            if(theParam[0] === "issue" && theParam[1].length > 0 ){
                issueParam = 
                `
                    <div class="issue_get">
                        ${theParam[1]}
                    </div>
                `;
            }

            if(theParam[0] === "partner" && theParam[1].length > 0 ){
                partnerParam = 
                `
                    <div class="partner_get">
                        ${theParam[1]}
                    </div>
                `;
            }

            if(theParam[0] === "startDate" && theParam[1].length > 0 ){
                startDate = 
                `
                    <div class="start">
                        ${theParam[1]}
                    </div>
                `;
            }

            if(theParam[0] === "endDate" && theParam[1].length > 0 ){
                endDate = 
                `
                    <div class="end">
                        ${theParam[1]}
                    </div>
                `;
            }

            var dateElement = 
            `
            <div class="date_get">
                ${startDate}

                ${endDate}
            </div> 
            `;

            var finalDiv =
            `
            <div id="get_info" className="get_info">
                ${cityParam}
                ${issueParam}
                ${partnerParam}
                ${dateElement}
                ${type}
            </div>
            `;

            this.setState({
                filterData: finalDiv,
            });

            return true; 
        })
    }

    componentDidMount(){
        const script = document.createElement("script");
        script.src = "/js/main.js";
        script.async = true;
        document.body.appendChild(script);

        // Values from url Params
        var queryString = window.location.search;
        var paramsArray = []; 

        if(queryString.length > 0){           
            
            queryString = queryString.replace(/\?/g, '').split("&");

            queryString.map((param) => {
                paramsArray.push(param.split("="));

                return true; 
            })

            this.createParamsElements(paramsArray);
        }
    }

    render() {
        return (
            <>
                <div id="search__form" >
                    {/* Get info div contains values in case the GET variables are used for different fields */}
                    <div
                        className="info__wrapper" 
                        dangerouslySetInnerHTML={{ __html: this.state.filterData }}
                    />

                    {/* This div will let us hold some invisble data we need to re-use */ }
                    <div id="hidden__block__popup" style={{"display":"none"}}></div>

                    <div className={`search__module volunteer__header page__header`}>
                        <div className="container">
                            <div className="header__container">
                                {/* Form Title */}
                                <div className="search__module">
                                    {/* This is the FORM and the FORM fields */}
                                    <form action="#" className="form">
                                        <div className="row center__row justify-content-evenly align-items-center">
                                            <div className=" interest__input input__wrapper text-uppercase arrow-down">
                                                <select  name="interest" id="interest" >
                                                    <option value="-1" id="interest_first" selected={true} disabled="disabled">Issue</option>
                                                </select>
                                            </div>
                                            <div className=" city__input input__wrapper text-uppercase arrow-down" >
                                                <select  name="cities" id="cities">
                                                    <option value="-1" id="city_first" selected={true} disabled="disabled">Location</option>
                                                    <option id="atlanta-0" data-option-count="0" value="atlanta" class="atlanta atlanta-0">Atlanta</option>

                                                    <option id="bayarea-1" data-option-count="0" value="bayarea" class="bayarea bayarea-1">Bay Area</option>

                                                    <option id="boston-2" data-option-count="2" value="boston" class="boston boston-2">Boston</option>

                                                    {/* <option id="brooklyn-3" data-option-count="3" value="brooklyn" class="brooklyn brooklyn-3">Brooklyn</option> */}

                                                    <option id="chicago-4" data-option-count="4" value="chicago" class="chicago chicago-4">Chicago</option>

                                                    <option id="cleveland-5" data-option-count="5" value="cleveland" class="cleveland cleveland-5">Cleveland</option>

                                                    <option id="denver-6" data-option-count="6" value="denver" class="denver denver-6">Denver</option>

                                                    <option id="detroit-7" data-option-count="7" value="detroit" class="detroit detroit-7">Detroit</option>

                                                   
                                                    <option id="losangeles-9" data-option-count="9" value="losangeles" class="losangeles losangeles-9">Los Angeles</option>

                                                    <option id="miami-10" data-option-count="10" value="miami" class="miami miami-10">Miami</option>

                                                    <option id="nyc-8" data-option-count="8" value="nyc" class="nyc nyc-8">New York</option>

                                                    <option id="pittsburgh-11" data-option-count="11" value="pittsburgh" class="pittsburgh pittsburgh-11">Pittsburgh</option>

                                                    <option id="other-12" data-option-count="12" value="other" class="other other-12">Other</option>
                                                </select>
                                            </div>
                                            {/* <div className=" partner__input input__wrapper text-uppercase arrow-down">
                                                <select  name="partner" id="partner" >
                                                    <option value="-1" id="partner_first" selected={true} disabled="disabled">Partner</option>
                                                </select>
                                            </div> */}
                                           

                                            <div className=" type__input input__wrapper text-uppercase arrow-down" >
                                                <select name="types" id="types" >
                                                    <option value="-1" id="type_first" selected={true} disabled="disabled">Type</option>
                                                    <option data-option-count="1" value="inperson" className="inperson">In Person</option>
                                                    <option data-option-count="2" value="ongoing" className="ongoing">Ongoing</option>
                                                    <option data-option-count="3" value="virtual" className="virtual">Virtual</option>
                                                </select>
                                            </div>

                                            <div className=" input__wrapper text-uppercase arrow-down calendar-input">
                                                <input type="text" name="daterange" value="Date" className="calendar__input" />
                                            </div>
                                            {/* <div className=" appropriate__input input__wrapper text-uppercase arrow-down" >
                                                <div className="issues__wrapper">
                                                    <div className="select_simulator">
                                                        <p>Under 18?</p>
                                                        <div className="select_options" className="open_drop"></div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="searchFormButton">
                                                <button className="btn btn-primary" id="search-events">Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page__section opportunities" id="opportunities">
                        <div className="container-fluid">
                            <div className="searchTagsWrapper" >
                                <div className="search__sub__wrapper container">
                                </div>
                            </div>
                        </div>

                        {/* **DONT REMOVE** */}
                        {/* This empty divs are being used to hold content for the JS code  */}
                        <div id="end-list" style={{"display": "none"}}></div>
                        <div id="initial_list" style={{"display": "none"}}></div>
                        <div id="backup_list" style={{"display": "none"}}></div>

                        {/* Main opportunities are shownd here */}
                        <div className="container events__container" id="full_ops">

                            <div className="row" id="list">
                                {/* This initials divs are holding placeholder for the cards -- PLEASE CONVERT INTO CSS CARDS ON DEVELOPMENT */}
                                <LoadingCard />
                                <LoadingCard />
                                <LoadingCard />
                                <LoadingCard />
                                <LoadingCard />
                                <LoadingCard />
                            </div>
                            {/* This div contains the pagination of the search results */}
                            <div className="row">
                                <div className="event__pagination" >
                                    <ul  id="list_controller" ></ul>
                                </div>
                                <div id="hidden_list" style={{"display": "none"}}></div>
                            </div>
                        </div>



                    </div>
                </div>
            </>
        )
        }
}

    // This gets called on every request
export async function getServerSideProps() {
  
    const resDataCities = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/cities?per_page=100`)
    const cityData = await resDataCities.json()

    return {
        props: {
          cityData,
        },
    }
  }