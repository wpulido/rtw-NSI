import React, { useEffect} from 'react';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Head from 'next/head'
import FloatingScreen from '../components/floating-screen/floating-screen'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/header/header.css'
import '../components/footer/footer.css'
import "./css/master.css"
import "./css/landing.css"
import "./css/home.css"
import "./css/experience.css"
import "./css/impact.css"
import "./css/who-we-are.css"
import "./css/getting-started.css"
import "./css/heroComponent.css"
import "./css/searchForm.css"
import "./css/resources.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>

                <link rel="icon" href="/touch.png" />
                <meta httpEquiv="Content-Language" content="en"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>
            <Header landingMenu={pageProps.landingMenu} menuItems={pageProps.mainMenu} masterElements={pageProps.masterElements} />
            {
                pageProps.masterElements.acf.show_window
                ? <FloatingScreen screenData={pageProps.masterElements} />
                : ""
            }
            <Component {...pageProps} />
            <Footer partners={pageProps.partnerData} customClass={'bottom'} landingMenu={pageProps.landingMenu} menuItems={pageProps.mainMenu} masterElements={pageProps.masterElements} />
                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-169919029-1"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                      
                        gtag('config', 'UA-169919029-1');
                        `,
                    }}
                />

                <script>
                    {`
                        var _ss = _ss || [];
                        _ss.push(['_setDomain', 'https://koi-3QNMWRHCZE.marketingautomation.services/net']);
                        _ss.push(['_setAccount', 'KOI-4A7OKQL26G']);
                        _ss.push(['_trackPageView']);
                    (function() {
                        var ss = document.createElement('script');
                        ss.type = 'text/javascript'; ss.async = true;
                        ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'koi-3QNMWRHCZE.marketingautomation.services/client/ss.js?ver=2.4.0';
                        var scr = document.getElementsByTagName('script')[0];
                        scr.parentNode.insertBefore(ss, scr);
                    })();
                    `
                    }
                </script>


        </>
    )
}

MyApp.getInitialProps = async (ctx) => {
    const res = await fetch(`${process.env.ProjectUrl}/wp-json/menus/v1/menus/main-menu`)
    const mainMenu = await res.json()

    // const resLand = await fetch(`${process.env.ProjectUrl}/wp-json/menus/v1/menus/landing-menu`)
    // const landingMenu = await resLand.json()

    const optionRes = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/options/options-page`)
    const masterElements = await optionRes.json()

    const resDataPartners = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/partners?per_page=100`)
    const partnerData = await resDataPartners.json()

    return {
        pageProps: {
          mainMenu,
          masterElements,
          partnerData,
          //   landingMenu,
        },
    }
}

export default MyApp