# react-code-editor

start by running `npm install`
this will install all dependencies, + dependencies within the `api` directory
copy `.env.default` to `.env` in the root directory and api directory

`npm run dev` should start the toy api and frontend


in your browser go to `http://localhost:8080` and you should be redirected to the landing page

`/documents`  
this page is very simple, you can upload new documents from your desktop, start a new document
and display a list of currently loaded documents to navigate to

if you have documents in memory, you can submit them all together as a 'project' to the api and get some info back

`/documents/edit?path=<document path>`  
this takes you to the editor with a few UI options:
- you can submit as before (using the button in the footer)  
- you can edit the file's name by clicking on the name in the header  
- from the file dropdown menu you can start a new document,  
- open already loaded docs (this just navigates back to the /documents page)  
- save the current doc (if you haven't supplied a filename you will be prompted to before saving)  

each page allows dragging & dropping the documents


if I spent more time on this
- I'd set up Login routes and an authorization provider component,  
together with session handling and authorization in the mini-api  
- I'd set up fetching initial project files from the server  
- I'd extend the app by saving current state in sessionStorage or localStorage  
- I'd write a few more extensive tests  
- implement key-bindings for ctrl-n (new doc), ctrl-s (save), ctrl-o (open)
