# Kaibo - 建築士の相棒

<details>
<summary>Table of Contents</summary>
<br>
 <ol> 
    <li> <a href="#about"> Description </a></li>
    <li> <a href="#features"> Features </a></li>
    <li> <a href="#built-with"> Built With </a></li>
    <li> <a href="#rationale"> Rationale for Technologies </a></li>
    <li> <a href="#repo-links"> Repo Links </a></li>
    <li> <a href="#prerequisites"> Pre-requisites </a></li>
    <li> <a href="#installation"> Installation </a></li>
    <li> <a href="#start"> Starting the Application </a></li>
  </ol>
</details>

<div id="about">
 <h2> Description </h2>
  <h3> An intuitive assistant for architects that aids them with building regulations </h3>
Kaibo is an app that serves as an assistant to architects, helping architects to navigate through the multiple intractable webs of building regulations.  
 <br/> <br/>
It will provide checklists for monitoring compliances with regulations from different technical agencies, provide an interactive 3D display for architects to intuitively understand the context of the regulation, and answer any ad-hoc questions regarding regulations that architects may have - i.e. questions that the authorities cannot give a clear answer for quickly. 
 <br/> <br/>
A community of architects will be engendered in this platform - i.e. architects will have a platform to ask their questions, under the guidance of officers from the different technical agencies. 
</div>

<div id="features">
 <h2> Features </h2>
  <h4> 1. Authentication </h4>
Users are authenticated either via their emails or google accounts. 
 <br/> <br/>
 
 ![Gif - Part 2](https://user-images.githubusercontent.com/105143904/234800303-96a89973-730c-430b-b1fe-19dee4cf9a3c.gif)
 
  <h4> 2. 3D Model Display </h4>
Users can view reference 3D models of different building types with annotations to understand the contexts of various regulatory clauses with visual aids. 
 <br/> <br/>
 
![Gif - Part 3](https://user-images.githubusercontent.com/105143904/234802074-469222bc-c7ac-48ff-a796-cc71367f9884.gif)

  <h4> 3. Checklist </h4>
By entering the details of a building profile, users can generate checklists of relevant regulatory clauses that pertains to the building profile, and monitor the progress on complying with the clauses. 
 <br/> <br/>
 
![Gif - Part 1](https://user-images.githubusercontent.com/105143904/234799185-b45ff128-3d06-47b6-b9cb-c49a33a2c4b3.gif)

  <h4> 4. Chat Bot </h4>
A chat bot integrated with ChatGPT provides a platform for the users to ask ad-hoc questions about any regulatory clause that they may need urgent clarification for.  
  <br/> <br/>
 
 ![Git - Part 4](https://user-images.githubusercontent.com/105143904/234805371-69418cd6-b557-4817-abd0-f3a15d73be06.gif)
 
  <h4> 5. Forum </h4>
The forums provide users with a medium to form a community to assist each other on the understanding of any regulatory clause that they may have questions about. Officers from the technical agencies may also use this platform to answer the users' queries. 
  <br/> <br/>
 
 ![Git - Part 5](https://user-images.githubusercontent.com/105143904/234806786-aa93bfe7-a0b6-45d9-99ff-0954f6a6c61a.gif)

  <h4> 6. Profile </h4>
Users can update their personal details and these details would be propagated to other components of the app. 
  <br/> <br/>
 
 ![Git - Part 6](https://user-images.githubusercontent.com/105143904/234807640-e3bcff72-4e39-42cc-9f06-a19e16730e07.gif)

  <h4> 7. Support </h4>
Users can enter the relevant queries in the contact form and the submission of the form would send an email to the system administrators or officers from the relevant technical agencies. 
  <br/> <br/>
 
 ![Gif - Part 7](https://user-images.githubusercontent.com/105143904/234808566-212ef2ad-b543-4487-90ee-09e3220cf6da.gif)

  <h4> 8. Circulars </h4>
Users can view a summary of the lists of the latest circulars from different technical agencies to be up to date on the newest regulations. 
  <br/> <br/>
 
 ![Gif - Part 8](https://user-images.githubusercontent.com/105143904/234809315-c03ddbda-d876-44e1-98c3-fe2849b90b42.gif)

  <h4> 8. Map </h4>
By entering the postal code of any address, users will be able to obtain the planning parameters for the searched address. 
  <br/> <br/>
 
 ![Gif - Part 9](https://user-images.githubusercontent.com/105143904/234810105-e241aedc-d367-4854-9902-a90cdf61f2ee.gif)
 
</div>

<div id="built-with">
 <h2> Built With </h2>
  <ol>
    <li>ReactJS</li>
    <li>Auth0</li>
    <li>Three.js</li>
    <li>ChatGPT</li>
    <li>Three.js</li>
    <li>Tailwind CSS</li>
    <li>Cheerio.js</li>
    <li>Firebase Storage</li>
    <li>Express.js</li>
    <li>Sequelize/ PostgreSQL</li>
  </ol>
</div>

<div id="rationale">
 <h2> Rationale for Technologies </h2>
 <h3> Three.js </h3>
Three.js, along with React Three Fiber and React Three/ Drei, were used to render and visualize the 3D models. These libraries tailored to React allow 3D models to be scalable, rotatable, zoomable, and annotatable. 
 <h3> Cheerio.js </h3>
This library/ npm package allows easy real-time web scraping of target sites. 
 <h3> Sequelize/ PostgreSQL </h3>
A SQL database was used, due to the complexity of the datasets and the multiple relations that each dataset had to have with the other datasets. With relations made via multiple junction tables, data can be queried easily in the desired format. 
 <br /> <br />
 
 ![DB Schema - Capstone - Project 4_Page_2](https://user-images.githubusercontent.com/105143904/234817825-556df4d4-e613-4a4f-9762-e0d8eff40f30.png)

</div>

<div id="repo-links">
 <h2> Repo Links </h2>
 <ul>
  <li><a href="https://github.com/yuj8fuj6/capstone-frontend-bootcamp" target="_blank" rel="noopener noreferrer"> Frontend<a/></li>
   <li><a href="https://github.com/yuj8fuj6/capstone-backend-bootcamp" target="_blank" rel="noopener noreferrer"> Backend<a/></li>
 </ul>
</div>

<div id="prerequisites">
 <h2> Pre-Requisites </h2>
In order to run this application, you will need to install PostgreSQL and Sequelize in your terminal. 
 <br /> <br />
You will need to obtain the following APIs and include the keys in the .env files for the frontend and backend repos: - 
 <br /> <br />
 <ul>
  <li>Auth0</li>
  <li>Formspree</li>
  <li>Firebase</li>
  <li>ChatGPT</li>
 </ul>
 Refer to the .env sample files for the desired formats. 
 <br /> <br />
3D models are not included in these repositories, hence you will have to obtain your own 3D models in .glb format and place them in the public - "models" folder.  
</div>

<div id="installation">
 <h2> Installation </h2>
 <h3>`npm i`</h3>

Once you have forked both the frontend and backend repos, run "npm i" in the respective terminals to download all the relevant dependencies. 
 
 <h3>`npx sequelize db:migrate`</h3>

Create a new database in your PostgreSQL terminal, and run "npx sequelize db:migrate" in the backend repo directory in the backend terminal to migrate the relevant tables. 
 
 <h3>`npx sequelize db:seed:all`</h3>

Once all the tables have been migrated successfully, run "npx sequelize db:seed:all" in the backend repo directory in the backend terminal to seed all seeded data from the seeded files. 

</div>

<div id="start">
 <h2> Starting the Application </h2>
 <h3>`npm start`</h3>

Run "npm start" for both frontend and backend repos in separate terminals. 
 
The backend server will run in [http://localhost:3000](http://localhost:3000), while the frontend display will run in [http://localhost:3001](http://localhost:3001). 
 
 <h3>`node webscraper.js`</h3>

Run "node webscraper.js" in the backend repo directory in a separate backend terminal to run the web scrapper for the Circulars page. 

The page will reload when you make changes.\
You may also see any lint errors in the console.
</div>
