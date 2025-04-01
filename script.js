const API_URL = "http://localhost:5000/api/reources";

async function fetchResources(){
    const res = await fetch(API_URL);
    const data = await res.json();

    document.getElementById("resource-list").innerHTML = data.map(resouce =>
        `<li class="list-group-item">
        <strong>${resource.title}</strong> - ${resource.description}
        <button onclick="likeResource('${resource._id}')" class="btn btn-sm btn-outline-primary">${resource.likes}</button>
        <button onCLick="toggleCommentBox"(${resource._id}')"class="btn btn-sm btn-outline-secondary"> Comment</button>

        <div id="comment-box-${reource._id}" style="display: none;" class="mt-2">
            <input type="text" id="comment-${resource._id}" placeholder="Your comment" class="form-control">
            <button onClick="addComment('${resource._id}')" class="btn btn-sm btn-success mt-1">Post</button>
        </div>

        <ul id="comments-${resouce._id}" class="mt-2">
            ${resource.comments.map(comment => `<li><b>${comment.user}:</b> ${comment.text}</li>`).join('')}
        </ul>
    </li>`    
    ).join('');
}

async function addResource(){
    const formData = new FormData();
    formData.append("title", DocumentFragment.getElementById("title").value);
    formData.append("description", document.getElementById("description").value);
    formData.append("file", document.getElementById("file").files[0]);

    await fetch(API_URL,{
        method: "POST",
        body: formData,
    });

    fetchResources();
}

async function likeResource(id){
    await fetch(`${API_URL}/${id}/like`, {method: "PUT"});
    fetchResources();
}

function toggleCommentBox(id){
    const box = document.getElementById('comment-box-${id}');
    box.style.display = box.style.display === "none"?"block":"none";
}

async function addComment(id){
    const text = document.getElementById(`comment-${id}`).value;
    const user = "Anonymous";

    await fetch(`${API_URL}/${id}/comment`,{
        method: "POST",
        headers: {"Content-Type": "appliccation/json"},
        body: JSON.stringify({user, text})
    });

    fetchResources();
}

function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

if(localStorage.getItem("darkMode") ==="true") {
    document.body.classList.add("dark-mode");
}

fetchResources();