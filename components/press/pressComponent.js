import React, { Component } from 'react'

export default class PressComponent extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            press: this.props.pressData,
            offset: 6, 
            moreposts: true,
            morepostsMessage: "SEE MORE PRESS", 
        };

        this.loadMoreArticles = this.loadMoreArticles.bind(this);

    }
    componentWillMount(){
        
    }
    componentDidMount(){
        if(this.state.press.length > 6){
            this.setState({
                moreposts: true,
            });
        }
    }

    loadMoreArticles(){
        this.setState({
            morepostsMessage: "Loading press..."
        });

        this.setState({
            offset: this.state.offset + 6,
        });

        async function getNewPress(offset){
          const resDataPost = await fetch(`${process.env.ProjectUrl}/wp-json/wp/v2/posts?per_page=6&offset=${offset}`)
          const postData = await resDataPost.json()
    
          return postData; 
        }

        getNewPress(this.state.offset).then(result => {
            if(result.length <= 0){
                this.setState({
                    moreposts: true,
                    morepostsMessage: "There is no more press to load"
                });
            }else{
                this.setState({
                    morepostsMessage: "SEE MORE PRESS"
                });
            }
            var newResult = this.state.press.concat(result)

            this.setState({
                press: newResult,
            });
        })
    }

    render() {
        var press = this.state.press; 
        return (
        <section id="in__the__press">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2
                  className={`poppins bold white-text text-center`}
                  
                >
                    In the Press
                </h2>
              </div>
              {
                press.map((post, index) => (
                  <div className={`press__post col-sm-12 col-md-6 col-lg-6 ${index < 6 ? "" : ""}`} key={index}>
                    <a href={post.acf.press_external_link} aria-label={post.title.rendered} target="_BLANK">
                      <p className="press__title title poppins teal-text bold xxl">
                        {post.title.rendered}
                      </p>
                      <p className="title poppins gray-text bold text-uppercase sm">
                        {
                          post.acf.subtitle.length > 50 
                          ? post.acf.subtitle.substr(0,50) + `...`
                          : post.acf.subtitle
                        }
                      </p>
                      <div className="press__post__arrow">
                          <span className="absolute__name">{post.title.rendered}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="29.889" height="11.96" viewBox="0 0 29.889 11.96">
                            <path title={post.title.rendered} id="Hover" d="M34.513.25A.854.854,0,1,0,33.3,1.458l3.667,3.667H10V6.835H36.972L33.3,10.5a.854.854,0,1,0,1.208,1.208l5.126-5.126a.854.854,0,0,0,0-1.208Z" transform="translate(-10)" fill="#015d5d" fillRule="evenodd"/>
                          </svg>
                      </div>
                    </a>
                  </div>
                ))
              }
              {
                  this.state.moreposts
                  ?<div className="col-lg-12 text-center">
                    <p className={`poppins bold white-text lg text-uppercase more__press`} onClick={this.loadMoreArticles}>{this.state.morepostsMessage}</p>
                    </div>
                  :""

                  
              }
              
            </div>
          </div>
        </section>
        )
    }
}
