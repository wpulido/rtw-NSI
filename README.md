<h1 style="text-align: center;">Next.js + Wordpress</h1>
<h3>How to pull data in different states for wordpress</h3>
<p>With next.js we can pull the data in different states based on the user needs (SEO, speed, data tha should be loaded when the user gets into the website)</p>
<p>We can user:</p>
<p><strong> getInitialProps();</strong></p>
<p>Let you pull initial data from the _app.js file, this one will be server side generated on each request.&nbsp;</p>
<p><strong>getStaticProps();</strong></p>
<p>This method can be used only on pages files not on components or app.js file, this data will be statically generated on <strong>next build</strong> to improve the loading speed of this data.</p>
<p><strong>getServerSideProps();</strong></p>
<p>This method will call the data on <strong>next build</strong> and the data will be server side rendered on each request.</p>
<p>More info on data fecthing <strong><a href="https://nextjs.org/docs/basic-features/data-fetching">here</a></strong></p>
<p>&nbsp;</p>
<h3><strong>How to call data using the wordpress API</strong></h3>
<h4>Fetch a collection of categories</h4>
<p>http://yourwebsite.com/wp-json/wp/v2/categories</p>
<h4>Fetch a collection of categories by slug</h4>
<p>http://yourwebsite.com/wp-json/wp/v2/categories?slug={slug}</p>
<h4>Fetch a collection of categories by ID</h4>
<p>http://yourwebsite.com/wp-json/wp/v2/categories/{id}</p>
<h4>Fetch a collection posts</h4>
<p>http://yourwebsite.com/wp-json/wp/v2/posts</p>
<h4>Fetch a collection posts by ID</h4>
<p>http://yourwebsite.com/wp-json/wp/v2/posts/{id}</p>
<h4>Fetch a collection of custom post type</h4>
<p>http://yourwebsite.com/wp-json/wp/v2/{CTP}</p>
<h4>Fetch a collection of custom post type by ID</h4>
<p>http://yourwebsite.com/wp-json/wp/v2/{CTP}/{id}</p>
<h4>Fetch a collection of pages</h4>
<p>http://yourwebsite.com/wp-json/wp/v2/pages</p>
<h4>Fetch a collection of pages by ID</h4>
<p>http://yourwebsite.com/wp-json/wp/v2/pages/{id}</p>
<h4>&nbsp;</h4>
<p>&nbsp;</p>
<p>&nbsp;</p>