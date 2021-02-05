import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import axios from "axios"
import PressComponent from "../components/press/pressComponent"
export default function Home(props) {
  const customStyles = 
  `
  .header{
    background: black;
  }
  `;

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [lname, setlName] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  const [nameStatus, setNameStatus] = useState("")
  const [nameMessage, setNameMessage] = useState("")
  const [lnameStatus, setlNameStatus] = useState("")
  const [lnameMessage, setlNameMessage] = useState("")
  const [formStatus, setformStatus] = useState(false)
  const [press, setPressArticles] = useState([]); 
  const [offset, setOffset] = useState(0); 
  const [postMessage, setpostMessage] = useState(""); 


  function submitForm(e) {
    handleSubmit(e)
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        	c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
	}
    return "";
  }

  function handleSubmit(e) {
    var SharpSpringTracking = getCookie('__ss_tk')

    e.preventDefault()
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if (email.length === 0) {
      setStatus("invalid")
      setMessage("Please, add a valid email address")
    }else{
      setStatus("invalid")
      setMessage("")
    }

    if (name.length === 0 && name.length < 4) {
      setNameStatus("invalid")
      setNameMessage("Please, add your first name")
    }else{
      setNameStatus("invalid")
      setNameMessage("")
    }

    if (lname.length === 0 && lname.length < 4) {
      setlNameStatus("invalid")
      setlNameMessage("Please, add your last name")
    }else{
      setlNameStatus("invalid")
      setlNameMessage("")
    }

    if (email && email.length > 0 && name && name.length) {
      
      if (email.match(mailformat)) {
        const form = new FormData()

        var fullName = `${name} ${lname}`

        form.set('your-name', fullName)
        form.set('your-email', email)

        var sharpName = name;
        var sharpLastName = lname;

        // Add Lead to SharpSpring
        var xhr = new XMLHttpRequest()
        xhr.open('POST', `https://app-3QNMWRHCZE.marketingautomation.services/webforms/receivePostback/MzawMLEwMjM1BQA/2634af05-920a-4055-9b6a-e4592ec85d29/jsonp/?firstName=${sharpName}&LastName=${sharpLastName}&email=${email}&trackingid__sb=${SharpSpringTracking}`);
        xhr.send()

        axios.post('https://stm.raxo.dev/wp-json/contact-form-7/v1/contact-forms/7/feedback', form, {
          headers: { 'Content-Type': 'multipart/form-data' },
        }).then(response => {
            setStatus("success")
            setMessage("Thanks for subscribing") 
            setName("");
            setlName("");
            setEmail("");
            setformStatus(true)
        }).catch(err => {
          setStatus("error")
          setMessage("We could not subscribed you at the moment, please try again later")
        })

      } else {
          setStatus("invalid")
          setMessage("Please, add a valid email address")
          setNameStatus("invalid")
          setNameMessage("Please, add your first name")
          setlNameStatus("invalid")
          setlNameMessage("Please, add your last name")
      }
    }
  }
  function handlelnameChange(e){
    setlName(e.currentTarget.value)
  }
  function handleEmailChange(e) {
    setEmail(e.currentTarget.value)
  }
  function handleNameChange(e) {
    setName(e.currentTarget.value)
  }

  useEffect(() => {
    setPressArticles(props.postData);

    console.log(props.pageData)
  });


  

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
        <style>{customStyles}</style>
      </Head>
      <main className="home__page">
        <section id="main" style={{"background" : `url(${props.pageData.better_featured_image.source_url})`}}>
          <div className="floating__svg">
            <img loading="lazy" src="/landing/images/scroll.svg" alt="Scroll"/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <h1
                    className={`poppins bold`}
                    dangerouslySetInnerHTML={{ __html: props.acfData.acf.title }}
                  />
                  <h2
                    className={` poppins  sub__p xxl semibold` }
                    dangerouslySetInnerHTML={{ __html: props.acfData.acf.subtitle }}
                  />
              </div>
            </div>
          </div>
        </section>

        <section id="cause">
        <div className="container cause__one">
          <div className="row">
            
            <div className="col-lg-12 title">
              <h2
                className={`poppins bold teal-text text-left`}
                dangerouslySetInnerHTML={{ __html: props.acfData.acf.title_two }}
              />
            </div>
            <div className="col-md-12 col-lg-5 text">
              <div
                className={`md poppins medium teal-text`}
                dangerouslySetInnerHTML={{ __html: props.acfData.acf.subtitle_two }}
              />
            </div>
            <div className="col-md-12 col-lg-1"></div>
            <div className="col-md-12 col-lg-5 image">
              
              <img loading="lazy" src={props.acfData.acf.image_two} alt=""/>  
            </div>
          </div>
        </div>
      </section>

        <section id="extraordinary__moment">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 title">
                <h2
                  className={`poppins bold white-text text-center`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.title_third }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="movement__steps">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {
                  props.acfData.acf.work_steps.map((step, index ) => 
                    (
                      <div className="movement__step" key={index}>
                        <img loading="lazy" className={'icon'} src={step.icon} alt={`${step.title}`}/>
                        <div className="line__divider"></div>
                        <h3 className={`title poppins bold  xmd teal-text text-uppercase`}>{step.title}</h3>
                        <div
                          className={`description poppins medium teal-text slg text-center`}
                          dangerouslySetInnerHTML={{ __html: step.description }}
                        />
                      </div>
                    )
                  )
                }
              </div>
            </div>
          </div>
        </section>



        <section id="we__serve__because">
          <div className="container">
            {/* <div className="row">
              <div className="col-lg-12 d-flex title justify-content-center align-items-center flex-column">
                <h2
                  className={`poppins bold teal-text text-center`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.title_five }}
                />
                <div
                  className={`description poppins medium teal-text slg text-center`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.description }}
                />
                <div className="divider__line"></div>
              </div>
            </div> */}
            <div className="row reasons__we__serve d-flex justify-content-center align-items-center">
                {
                  props.acfData.acf.we_serve_reasons.map((reason, index) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 reason__we__serve" key={index}>
                      <a href={reason.link}  target={ reason.link.includes("https") ? "_blank" : "_self" }>
                        <img loading="lazy" src={reason.image} alt={reason.reason}/>
                        <p
                          className={`xl poppins text-uppercase teal-text bold text-center`}
                          dangerouslySetInnerHTML={{ __html: reason.reason }}
                        />
                      </a>
                    </div>
                  ))
                }
            </div>
          </div>
        </section>

        <section id="join__us">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex title justify-content-center align-items-center flex-column">
                <h2
                  className={`poppins bold teal-text text-center`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.title_four }}
                />
                <div
                  className={`description poppins medium teal-text slg text-center`}
                  dangerouslySetInnerHTML={{ __html: props.acfData.acf.description_four }}
                />
              </div>
            </div>
            <div className="row form__home">
              <div className="col-md-12">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email" style={{ display: "none" }}></label>
                  <div className="name__wrapper">
                    <div className="form__input">
                      <label htmlFor="name">First Name</label>
                      <input
                        type="text"
                        className="ab__font dark__font bold__font name__input"
                        name="name"
                        onChange={handleNameChange}
                        value={name}
                      />
                    </div>
                    <div className="form__messages">

                      {nameStatus === "error" ? (
                        <div
                          className={`form__${status} form__message sm__font bold__font`}
                          dangerouslySetInnerHTML={{ __html: nameMessage }}
                        />
                      ) : (
                        ""
                      )}
                      {nameStatus === "invalid" ? (
                        <div
                          className={`form__email__wrong form__message sm__font bold__font`}
                        >
                          {nameMessage}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="name__wrapper">
                    <div className="form__input">
                      <label htmlFor="lastname">Last name</label>
                      <input
                        type="text"
                        className="ab__font dark__font bold__font name__input"
                        name="lastname"
                        onChange={handlelnameChange}
                        value={lname}
                      />
                    </div>
                    <div className="form__messages">

                      {lnameStatus === "error" ? (
                        <div
                          className={`form__${status} form__message sm__font bold__font`}
                          dangerouslySetInnerHTML={{ __html: lnameMessage }}
                        />
                      ) : (
                        ""
                      )}
                      {lnameStatus === "invalid" ? (
                        <div
                          className={`form__email__wrong form__message sm__font bold__font`}
                        >
                          {lnameMessage}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="email__wrapper">
                    <div className="form__input">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="ab__font dark__font bold__font email__input"
                        name="email"
                        onChange={handleEmailChange}
                        value={email}
                      />
                    </div>

                    <div className="form__messages">
                      {status === "success" ? (
                        <div
                          className={`form__${status} form__message sm__font bold__font form__is__sent`}
                          dangerouslySetInnerHTML={{ __html: message }}
                        />
                      ) : (
                        ""
                      )}
                      {status === "error" ? (
                        <div
                          className={`form__${status} form__message sm__font bold__font`}
                          dangerouslySetInnerHTML={{ __html: message }}
                        />
                      ) : (
                        ""
                      )}
                      {status === "invalid" ? (
                        <div
                          className={`form__email__wrong form__message sm__font bold__font`}
                        >
                          {message}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  
                  <p className="poppins sm teal-text text-center">Thank you for joining us. Serve the Moment is powered by Repair the World. <br></br> By submitting your email, you'll be opted in to Repair the World's marketing emails.</p> <br/>

                  {
                    formStatus
                    ? ""
                    : <button onClick={submitForm} class="btn main-btn teal" tabindex="-1"><strong>SUBMIT</strong></button>
                  }
                  
                  
                </form>
              </div>
            </div>
          </div>
        </section>
        <PressComponent pressData={props.postData}></PressComponent>
        

      </main>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(`${process.env.ProjectUrl}/wp-json/acf/v3/pages/184`)
  const acfData = await res.json()

  const resData = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/pages/184`)
  const pageData = await resData.json()

  const resDataPost = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/posts?per_page=6`)
  const postData = await resDataPost.json()

  return {
      props: {
        acfData,
        pageData,
        postData,
      },
  }
}


