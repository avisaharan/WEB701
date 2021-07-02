## Project Brief

The web app will let the restaurants in Nelson register with the charity, and help them donate everydays excess food to the people in need. 

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
2. Learned about web frameworks (collection of HTML, CSS and Javascript files that speed up site development by providing a foundation for structure, layout and functionality for web apps).
3. Learned about information architecture (Organising information to fit project needs and provide flexibility.)

Pros of using web frameworks:
- Speeds up development time by reuse of components
-Many Libraries are included to do usual tasks (like HTTP Requests, Session Management)
- Cross browser compatibility
- Building on what's already done. 


Cons:
- We don't need most of the code the framework offers.
- Size of the project will become big.
- Modifying the framework to fit the project needs can be time-consuming. 
- Need to pay close attention to formal documentation to make changes.

We also practised creating a MEAN (MongoDB, Express, Angular & Node) stack application using this guide: https://www.linkedin.com/learning/mongodb-for-mean-stack-developers/install-mongodb



## Week 2 Journal

This week I continued on the Linkedin tutorial for MEAN stack web app, where we use Mongoose which makes making changes and connecting to MongoDB through Express easy, by making the format easy to understand and help with data validation by creating Models for defined Schema (which can contain the data values validation) 

Even though I found following the guide easy, I also read the official angular documentation.

The neat separation of logic and presentation in Angular is useful to create scalable web apps which can be easily edited at any stage. 

While practising creating web apps the important thing I've realised is it is better to spend time reading the documentation than spend hours debugging the code. 

*ngIf and *ngFor directives made me appreciate Angular even more, and I most probably will be using these to sort and display the content on my food bank web app. 

The injectables help to declare the dependencies of the TypeScript classes without having to instantiate them every time.

## Week 3

This week I learned about Angular routes (which helps do routing based on components and even subcomponents), and Import and Export in Angular. and template variables.

Template variables can be used just like functions (but within an HTML file)- to avoid writing the same HTML twice or to get data from other HTML fields, like <input> in forms- another layer to organise information in Angular.


## Week 4

Getting Used to TypeScript:

Typescript matches the elements of C# with Javascript, like classes and type checking. 
Instead of having to use Object literals to define the Object types, Typescript has Interfaces which can be used to create Object prototype. 

Other than that classes can be defined just like C# which makes Javascript have features of Object Oriented language. 


## Week 5

Angular VS the Rest

This week I compared Angular with other frameworks, like Vue and React. I’ve created a web-app using React in the last semester but only after looking at other frameworks I have started to understand state and hooks in React. 

I followed the tutorials on the Angular website and learned how the componenting the web-app actually works- i.e how different components have encapsulated data and passing the data from Child to Parent components using @input and @ output directives. 

Comparing the frameworks for me until this point has been about which framework makes the code easier to write- i,e which framework allows separation of data and putting it all together. But now the movement of data between from and to components is the important thing for me to decide on the framework for this project. 

## Week 6

More practice with Angular

This week started with me giving me the gift of learning Git. Git makes it so easy to undo the mistakes and reset the app to its previous state, even though deleted files cannot be recovered.

Git Branching allows for working on different features of the app at the same time without worrying about breaking the code. Before this point I must’ve recreated my Angular app at least twice a week, and started all over again. Using Git have improved productivity and less repetition. 

## Week 7 

While the rest of class was busy practicing working on Vue, I diverted from this point and started working on my basics. I watched a lot of online content about programming in general. COmpleted the CS50’s Web Programming with Python and JavaScript, and many more. But skipped their exercises and just watched the content, and made me believe myself that I’ve understood it all. But when I transitioned to writing the code myself I had to refer to those same videos or the documentation multiple times. This made me learn that practicing is the way to learn programming and the concepts keep getting clearer as I practice them instead of getting all the information about the code. 

## Week 8 

This week I worked on creating the design for my Charity App and created prototypes using mockups.com. The designs I have created are general on most websites and I believe that to take full advantage of what web frameworks have to offer means to create intensive data based apps. And use less static content. Therefore, my design (even though directed at the end user) is more about taking full use of components and creating dynamic data for users and providing insights with graphs and user intractable ui widgets. Hope I can live up to my expectations of my prototypes and design. 


## Week 9

This week I continued on my learning of backend web frameworks - Django- built on Flask. Python make me want to use Django even more because of easy syntax and 
Django adds a lot of power to Flask with many libraries, and template features (python with HTML) like ‘for’ and ‘if’ just like Angular’s ngFor and ngIf directives.

{% if youngest_teams %}
    <ul>
      {% for team in youngest_teams %}
        <li>{{ team.team_name }}</li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No teams are available.</p>
  {% endif %}
 The data can also be rendered from the database much easily using simple SQL like syntax using raw() method.  
Person.objects.raw('SELECT id, first_name, last_name, birth_date FROM myapp_person')



## Week 10 

This week I started thinking it would be best to stick to Express for its intensive collection of libraries, APIs and popularity of Node and Javascript for backend.

Plenty of resources, help and libraries are available for Express than Flask/Django. 

Therefore I switched to Express and Angular Framework, for the sake of completing this course and not deviating from the rest of class, and finding it hard to find equivalent express libraries for Django (eg- mongoose).

This week I compared Vue and Angular. Vue is much more simpler and easy to start with whereas Angular looks good for large scale applications. I found Angular not hard to use but the documentation is a little overwhelming if I’m not an expert in Javascript.

I believe Angular is a better option to create applications but I would still choose Vue because I’m just transitioning to using Frameworks, and also our app for this project does not need the many amazing libraries included in Angular Framework. 

## Week 11 

This week I checked out Svelte- back to where I started when I used to put HTML, CSS and Javascript into one file, but Svelte gives me the flexibility to include javascript in HTML, not just with HTML. The documentation for Svelte and the online examples have made me choose Svelte for this application. The functions like bind: to bind value in one component to another and if and else as if I’m not limited to my choice of either HTML or javascript. Svelte just simply puts the HTML and Javascript together very nicely, and easiest to learn. 

## More Svelte

I believe Svelte has most of the requirements for this project and will make it quicker and simpler. The lifecycle hooks like onMount, onDestroy (similar to ngOninit and onDestroy in Angular) are easier to use just like normal functions- anywhere in HTML, instead of declaring them in Angular, then having to declare the Injectable library. 

