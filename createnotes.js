


function updateLS(){
    const ar=[];
    const textarea=document.querySelectorAll('textarea');
    
    textarea.forEach(element => {
        return ar.push(element.value);
    });
    localStorage.setItem('ar',JSON.stringify(ar));
}



const add=(text)=>{
  let note=document.createElement('div');
  note.classList.add('note');
  let htmlData='';
  htmlData+=`
  <div class="operation">
        <button class="edit"> <i class="fas fa-edit"></i> </button>
        <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
    </div> `; 
  if(text=='')
    htmlData+=`<div class=hidden></div><textarea></textarea>`;
  else
    htmlData+=`<div class=main></div><textarea class=hidden></textarea>`;
    
  
  note.insertAdjacentHTML('afterbegin',htmlData);
  document.body.appendChild(note);
  let edit=note.querySelector('.edit');
let del=note.querySelector('.delete');
let div=note.querySelector('.main');
let textarea=note.querySelector('textarea');

textarea.innerHTML=text;

div.innerHTML=text;
del.addEventListener('click',()=>{note.remove()});

edit.addEventListener('click',()=>{

    div.classList.toggle('hidden');
    textarea.classList.toggle('hidden')});
    textarea.addEventListener("change", () => {
        div.innerHTML=textarea.value;
        updateLS();
      });
   

}


const btn=document.querySelector('#add');
btn.addEventListener('click',()=>{
  let p="";
  add(p);
});

const ans=JSON.parse(localStorage.getItem('ar'));
if(ans!=null){
ans.forEach(element => {
    add(element);
});
}





