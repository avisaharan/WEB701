## Project Brief

The web app at “FoodForNeedy.org.nz” will let the restaurants in Nelson register with the charity, and help them donate everydays excess food to the people in need. 

It will have following features:

### For donors:
1. Homepage: Showcasing the charities work, services offered, and guide on how future members can join.
2. Register: Let donors register with the charity.
3. DonateSpace: Let restaurants enter everydays excess food details (free or at reduced price) 
4. On backend- Linking the data of food entered by donors to the food ordered/received by the beneficiaries to keep track.

### For beneficiaries:
1. Homepage: Showing the charities work, services offered, and guide on how they can benefit. 
2. Token system on backend: The system will generate a specific number of tokens based on details entered by beneficiaries. The details could include financial statements or proof of govt financial support.
3. Backend: Let beneficiaries place orders from the restaurants and keep track of token usage and restaurants available food.

### For General public
1. Homepage: Same for all
2. DonateSpace: System to donate money to generate new tokens, which can be distributed to beneficiaries to purchase food which is not listed as free by the restaurants. 
3. Page showing other ways they can help the charity. 

## Week 1 Journal

This week we :

1. Overviewed the course outline and project requirements. 
2. Learned about web frameworks (collection of HTML, CSS and Javascript files that speed up site development by providing a foundation for structure, layout and functionality for web app).
3. Learned about information architecture (Organising information to fit project needs and provide flexibility.)

Pros of using web frameworks:
- Speeds up development time
- Cross browser compatiability
- Building on what's already done. 

Cons:
- We don't need most of the code the framework offers.
- Size of project will become big.
- Modifying the framework to fit the project needs can be time-consuming. 
- Need to pay close attention to formal documentation to make changes.

We also practised creating a MEAN (MongoDB, Express, Angular & Node) stack application using this guide: https://www.linkedin.com/learning/mongodb-for-mean-stack-developers/install-mongodb

## Week 2 Journal

This week I continued on the Linkedin tutorial for MEAN stack web app. 

Because I was using MacOS using MongoDB was different from MongoDB installation in windows (even though it was easier)- The mongo files were downloaded directly from MongoDB website and no installation was required. I just have to navigate to the downloaded folder and access MongoDb from there.

Using angular material in the current version of Angular was different from the version shown in the tutorial- which lead me to experiment different ways (some much easier- eg- finding angular bootstrap websites) to use in my web app. 

Even though I found following the guide easy, I also read the official angular documentation guide and followed there guide as well. I learned a lot in event the first page of documentation and the whole thing about the importance of using framework beacame to to me (i.e to create scalable web apps and organisation of information). 

The neat seperation of logic and preseation in Angular is indeed very neat and useful to create scalable web apps which can be easily edited at any stage. 

While practising creating web app the important thing I've realised is it is better to spend five minutes reading the documentation than spend 5 hours debugging the code. Eg: just because I did not read that square brackets are used to bind the property or attribute to a value in the component class, I spent half an hour figuring out what is wrong with my code. 

*ngIf and *ngFor directives made me appreciate Angular even more, and I most probably will be using these to sort and display the content on my food bank web app. 

Th injectables helps to declare the dependencies of the TypeScript classes without having to instantiate them every time- which helps organize the data even more and write less code & avoid errors. 

## Week 3

This week I learned about Angular routes (which helps do routing based on components and even subcomponents), and Import and Export in Angular. and template variables.

Template variables can be used just like functions (but within single HTML file)- so as to avoid writing the same HTML twice or to get data from other HTML fields, like <input> in forms- another layer to organise information in Angular. Interesting!




