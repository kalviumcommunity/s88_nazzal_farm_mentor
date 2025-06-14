FarmMentor


FarmMentor: Farmer-Guided Home Gardening


Name:- Nazzal Ahammed
Reg no:- 38653
Course:SPE


Description
FarmMentor is an application based on the MERN stack, with the help of which the home and apartment dwellers can grow plants by the assistance of the farmer-led video tutorials, plant care dashboard, and the inventory shop for seeds, fertilizers, and equipment. The service is oriented towards the inexperienced people and the mentors are actually farmers.


Problem Statement
Urban gardeners are in need of reliable and cohesive guidance as well as easy access to supplies for planting in small spaces. The newcomers require an all-in-one solution, which would be complemented with expert advice on the specificities of their locational constraints.


Existing Applications
- From Seed to Spoon: Planting of guides, tracking; omitted are videos or shops.
- GardenTags: social platform, care info; skipped are farmer videos or sales.
- Planta: reminders of care; missing are tutorials or shops.
- SmartPlant Home: chat with a professional, tracking; left apart are the videos or the inventory.
- Farmizen: Farm produce sales; DIY videos or gardening supplies are without them.


Uniqueness
- Farmer-guided video tutorials as a source of true and expert guidance.
- Shop that is connected to the videos that might be related to seeds and / or equipment.
- Dealing with problems in home / apartment gardening by the novices.
- It is an app that infuses teaching, tracing and shopping altogether.


Tools & Software Used
- MongoDB: User and plant details, the inventory for the garden.
- Express.js: APIs for shop and other interactions.
- React: User interface that is interactive and the video/dashboard.
- Node.js: server at the backend, managing payments.
- AWS S3: Place where the videos will be saved.
- Stripe API++: Making transactions with the bank.
- VS Code, Git: Aids for development.




Conclusion
Thanks to a farmer-guided platform, FarmMentor opens up the path for city gardeners to connect with nature. MERN has inspired a new resource as of April 7, 2025 that renovates the idea of mentorship and relief in the sphere of urban agriculture.






References
- From Seed to Spoon: (https://www.seedtospoon.net/) 
- Planta: (https://getplanta.com/)
- GardenTags: (https://www.gardentags.com/)
- Smart Plant Home: (https://smartplanthome.com/)
- Farmizen: (https://www.farmizen.com/




 Week 1: The Project Set-up and Backend Implementation
 Aim: To set up the project and construct authentication + core APIs. 
Day 1: Define the targets (auth, videos, dashboard, shop), make the Git set-up, switch on MERN stack (Node.js, React, MongoDB Atlas). 
 Day 2: Prepare schemes (users, videos, inventory), generate an Express server, hook up a MongoDB, and do the basic API testing (GET /test). -
Day 3: Realize the auth APIs (POST /register, POST /login) using JWT and bcrypt, and check with Postman. 
Day 4: Configure an AWS S3 bucket, use multer-s3 to write a video upload API (POST /videos), and upload a file to the server. 
Day 5: Develop inventory APIs (POST /inventory, GET /inventory), and generate a basic Stripe payment intent API (POST /payment).
 Weekend: Do backend API testing, bug fixing, write a summary of the endpoints. 


Week 2: Backend Finalization and Frontend Development with React 
Goal: Close the backend and begin working on React frontend.
Day 1: The video fetch API has to be included (GET /videos), connect Stripe with the middle-order database, test buyings. 
Day 2: Create the React app (npx create-react-app or Vite), add the necessary stuff (axios, react-router-dom), and form the basic layout.
Day 3: Design login/register forms, establish a connection with the auth APIs, put the JWT in localStorage, and test the login flow.
Day 4: Set up protected routes (e.g., farmer dashboard), create a list of videos component, fetch some of the backend videos. 
Day 5: Utilize ReactPlayer as a means for video playback, test the streaming. from AWS S3.
 Weekend: Work on finishing the integration, confirm that the whole project is real. 


Week 3: Frontend — Video Tutorials and Dashboard 
Goal: Finish the video section and start on plant care dashboard.
Day 1: Create a farmer
video upload form (title, file input), link upload-API, test end-to-end.
Day 2: Create a DB table
for plants (name, care notes),
 build API (POST/GET /plants), create dashboard UI (plant list).
Day 3: Prepare a
dashboard with basic features like (add plant, view details), and check the connection to the backend, test syncing.
Day 4: Minimally design
both video and dashboard sections (CSS, Tailwind), make sure both are responsive.
Day 5: Check by uploading a video and playing it as well as looking at dashboard functionality, fix major bugs.
Weekend: Speed up and optimize
(e.g., reduce load time), get ready for shop.


Week 4: Frontend - Shop and Payment
Goal: Setup the online shop and integrate the Stripe payment system.
Day 1: Develop the shop UI (item cards: name, price), request and pick up the supplies from the back, and render them out.
Day 2: Through I’ll Have What Zen’s Got shop
app, add the “Add to Cart” functionality with basic state management (useContext), and pair items with videos by message (e.g. “buy seeds from this video”).
Day 3: Use Stripe React library to include the checkout form (cart summary, payment fields), link with the payment API.
Day 4: Deal with both the successful and the failed payment options, display the confirmation page, check everything from the cart till the payment made.
Day 5: Testing the shop's error and payment processes, ensure that the cart is still there and the payment goes through smoothly.
Weekend: As well as the provision of basic messages
 and vanishing status of shop, multitest across the board.
 Week 5: Testing and Deployment 
Goal: Complete, examine and kick off the app.
 - Day 1: Perform end-to-end tests: auth [authentication], video upload/play, dashboard, shops, payment. Correct critical bugs. Day 2: Initialize environment variables, build React app (npm run build), ready backend for deployment.
Day 3: Heroku for backend, Netlify/Vercel for frontend, secure AWS S3 access. 
Day 4: Check all features of the deployed app, make sure Stripe works in production mode (live keys). - Day 5: A brief user guide (e.g., README) should be written, the app should be launched, and the link should be shared (e.g., on X). 
Weekend: Check for problems, decide what can be done in the future (if there is a want).
 Total Timeline: 5 Weeks 
