import React, { Component } from 'react'
import Head from 'next/head'

export default class SearchLinks extends Component {

// This file contains all the necesary link to make the search form for the events to Work. 

// *** IMPORTANT ***

// Please add this component above the Search component to call the necesary FileList.

componentDidMount(){
    const script = document.createElement("script");
    script.src = "/js/main.js";
    script.async = true;
    document.body.appendChild(script);
}

render() {
    return (
        <>
            <Head>
                {/* Dependency to add custom styles to select fields */}
                <link rel="stylesheet" href="https://stm.raxo.dev/wp-content/themes/littlebot-wordpress-api-master/assets/css/nice-select.css" />
                
                {/* Library that allow us to create a field for date picking */}
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
                
                {/* CSS for the Flickity slider library  */}
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />

                {/* Jquery CDN code */}
                <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossOrigin="anonymous"></script>

                {/* Moment js library */}
                <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>

                {/* Library for the date picking select */}
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>

                {/* Fontawesome Kit */}
                <script src="https://kit.fontawesome.com/841603387b.js" crossOrigin="anonymous"></script>

                {/* Flickity library javascript */}
                <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

                {/* Library for custom select fields */}
                <script src="https://stm.raxo.dev/wp-content/themes/littlebot-wordpress-api-master/assets/js/jquery.nice-select.min.js"></script>
            </Head>
        </>
    )
    }
}
