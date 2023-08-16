
//Create update select
function ShowAllNotes()
{
    
    let allNotes;
   let notes=localStorage.getItem('notes');
   if(allNotes===null)
   {
      allNotes=[];
   }
   else
   {
    allNotes=JSON.parse(notes);

   }

   let notesContainer=document.getElementById('notes');
    //  [
    //      {title:
    //     Desc:
    // },
    // {title:
    //     Desc:
    // }

    //  ]
    notesContainer.innerHTML='';
   
   allNotes.forEach((note,index) => {
        notestobeshown=`<div class="card mr-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${note.title}</h5>
          <p class="card-text">${note.descrip}</p>
          <h6 class="card-subtitle mb-2 text-muted">Note</h6>
          <button  class="btn btn-primary a-btn-slide-text" onclick="editNote(${index})">
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          <span><strong>Edit</strong></span>            
        </button>
        
        <button onclick="deleteNote(${index})" class="btn btn-warning a-btn-slide-text">
            <i class="fa fa-trash" aria-hidden="true"></i>
            <span><strong>Delete</strong></span>            
        </button>
        
        </div>
      </div>`
        notesContainer.innerHTML=notesContainer.innerHTML+notestobeshown;
    });

  
}
ShowAllNotes();
// let showAddNoteDiv=document.querySelector('.FormBorder');
// // console.log(showAddNoteDiv);
// showAddNoteDiv.style.display='none';


// let getNavAddNoteBtn=document.getElementById("NavAddBtn");
// console.log(getNavAddNoteBtn);
// getNavAddNoteBtn.addEventListener('click', () => {
    
//     showAddNoteDiv.style.display = 'block';
    
// });
// $('#NavAddBtn').on('click',function(){
// alert("hi");
// showAddNoteDiv.style.display = 'block';
// });


//Add Note

const addNoteBtn=document.getElementById('btnAddNote');

addNoteBtn.addEventListener('click',()=>
{

    let allNotes=[];
    let notes=localStorage.getItem('notes');
    if(allNotes===null)
    {
       allNotes=[];
    }
    else
    {
     allNotes=JSON.parse(notes);
 
    }
    let title=document.getElementById('takeNote');
    let descrip=document.getElementById('description');

    let noteObj={
        title:title.value,
        descrip:descrip.value
    }
    allNotes.push(noteObj);
    localStorage.setItem("notes", JSON.stringify(allNotes));
    ShowAllNotes();
    let showAddNoteDiv=document.querySelector('.FormBorder');
// console.log(showAddNoteDiv);
showAddNoteDiv.style.display="none";
})

function deleteNote(index)
{
   alert(index);
   
   const deleteData=JSON.parse(localStorage.getItem('notes'));
   console.log(deleteData)
   deleteData.splice(index,1);
   localStorage.setItem('notes',JSON.stringify(deleteData));
   ShowAllNotes();

}

var search=document.getElementById('Search');

search.addEventListener('input',()=>
{
 
    const searchInput=search.value;
  const AllCards=document.getElementsByClassName('card');
//    console.log(AllCards);
   Array.from(AllCards).forEach((ele)=>
   {
     let cardText=ele.getElementByTagName('p')[0].innerText;
     console.log(cardText);
     if(cardText.toLowerCase().includes(searchInput))
     {
        ele.style.display='block';
     }
     else{
        ele.style.display='none';
     }
   });

    
});
function editNote(index)
{
   

}