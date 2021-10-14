@material-ui/core
@material-ui/icons
react-quill
firebase

functional is presentational component 
whereas class is stateful component

withStyles is a special function it wraps around the current component as a layer and passes the class names from styles as props
Only works with Class components
wont work with functional component

So, thats why hooks are there to introduce class member functions variables features into functional components
to make them look class components

closure -> takes input as function and output as function



First did minimum styling for sidebar 
then did intermediate styling for editor component
then sidebaritem as much as i could because it would be frequently clicked 
so this makes it a prime importance component where easy of use is highly valued


First connected with Firebase database to establish a sense of accomplishment 
and hence more confidence and enthusiasm to complete the app

Then saw the notes in console to view what they were

Then created 3 basic components sidebar sidebaritem and editor components

Coded basic react components its like basic boiler plate code to show all components via App.js

Then since the editor was minly quill only so I placed it first in editor component and the whole editor showed up !!
More confidence and enthusiasm

Now I had to create a sort of parallel div but then I realized lets just restrict the width of the div with no restriction on height of both the components 
namely editor and sidebar 

Then I thought styling is enough, lets try to save notes in firebase

so created state variables in EDITOR component

Then tried to stop too many calls by using a delay function
Also a function to remove html tags from the text of quill editor to show as desc on left side in sidebaritem's 
like desc...


Then placed a addNewNote button on sideBar Component

styled it

then upon creation of that button changed the state and hence showed up a input button to enable
user to enter the name of the todo

then created a list of todo's which shows up in sidebar component

================= Mapping todo's with desc? ===============
Well each is created and saved directly in firebase and each todo has 3 attributes 
- name (aka Title given by us)
- id (given by firebase as it doesnt trust us with a primary key | same like Mongodb)
- desc (Given by us)
- timestamp (from firebase but created by us)


Then delete Icon, delete functionality

Called delete and update functions from parent Component 
3 reasons 
- to make it more readable 
- basically reduce the complexity 
- ease the debugging process


============= ...this.state.notes ?? what is this?? =============
... basically uncouples the items 
like here for example this.state.notes which is a list becomes broken down into individual items by ...this.state.notes
so [note1,note2, ...this.state.notes] is basically a single list and not a nested list


