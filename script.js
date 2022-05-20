const projects=[
    {
        "title": "404 Page",
        "img": "https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252F404PageThumbnail.png%3Falt%3Dmedia%26token%3D81f7c567-c0bc-446f-a549-07eeda31c5ef&w=750&q=75",
        "description": "Created a 404 not found page following the design. The page is responsive.",
        "demoLink": "https://cloudberries27.github.io/DevChallenge-404Page/",
        "codeLink": "https://github.com/cloudberries27/DevChallenge-404Page",
        "tags": ["All", "Beginner", "Responsive"]
    },
    {
        "title": "Team Page",
        "img": "https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FmyTeamThumbnail.png%3Falt%3Dmedia%26token%3D3dc1bba0-52b9-440d-8a54-fa31ec7c84d8&w=750&q=75",
        "description": "Created a my team page following the design. The page is responsive.",
        "demoLink": "https://cloudberries27.github.io/DevChallenge-TeamPage/",
        "codeLink": "https://github.com/cloudberries27/DevChallenge-TeamPage",
        "tags": ["All", "Beginner", "Responsive"]
    },
    {
        "title": "Interior Consultant",
        "img": "https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FinteriorConsultantThumbnail.png%3Falt%3Dmedia%26token%3Dfb5f8229-8eb9-4d70-b0d4-fbd2829a0cf0&w=750&q=75",
        "description": "Created an interior consultant landing page following the design. The page is responsive.",
        "demoLink": "https://cloudberries27.github.io/DevChallenge-InteriorConsultant/",
        "codeLink": "https://github.com/cloudberries27/DevChallenge-InteriorConsultant",
        "tags": ["All", "Beginner", "Responsive"]
    },
    {
        "title": "Recipe Page",
        "img": "https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FrecipeBlogThumbnail.png%3Falt%3Dmedia%26token%3D2d696d3c-a8cb-4c7c-907b-561ae1144cc9&w=750&q=75",
        "description": "Created a recipe page following the design. The page is responsive.",
        "demoLink": "https://cloudberries27.github.io/DevChallenge-RecipeBlog/",
        "codeLink": "https://github.com/cloudberries27/DevChallenge-RecipeBlog",
        "tags": ["All", "Beginner", "Responsive"]
    },
    {
        "title": "My Gallery",
        "img": "https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FGalleryThumbnail.png%3Falt%3Dmedia%26token%3D92894792-41d1-4d99-8cbb-e828322c87fd&w=750&q=75",
        "description": "Created a gallery page following the design. Inspired by Instagram. The page is responsive.",
        "demoLink": "https://cloudberries27.github.io/DevChallenge-MyGallery/",
        "codeLink": "https://github.com/cloudberries27/DevChallenge-MyGallery",
        "tags": ["All", "Beginner", "Responsive"]
    },
    {
        "title": "Checkout Page",
        "img": "https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FCheckoutThumbnail.png%3Falt%3Dmedia%26token%3Dc7ffdbe3-7206-44f2-b1e6-a6b99bf81901&w=750&q=75",
        "description": "Created a checkout page following the design. The page is responsive.",
        "demoLink": "https://cloudberries27.github.io/DevChallenge-Checkout/",
        "codeLink": "https://github.com/cloudberries27/DevChallenge-Checkout",
        "tags": ["All", "Beginner", "Responsive"]
    },
    {
        "title": "Edie Homepage",
        "img": "https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FEdieHomageThumbnail.png%3Falt%3Dmedia%26token%3D72c573b5-6389-425c-b947-de63f0f5b2ef&w=750&q=75",
        "description": "Created a home page following the design. Incorporates all previous projects The page is responsive.",
        "demoLink": "https://cloudberries27.github.io/DevChallenge-EdieHomepage/",
        "codeLink": "https://github.com/cloudberries27/DevChallenge-EdieHomepage",
        "tags": ["All", "Intermediate", "Responsive"]
    }
]
const projectElement = document.getElementById("projectList");
const tagElement = document.getElementById("tagList");
let tagsList = new Set();
var currentPage = 1;

// Creates project divs and add them to the document
for (let item of projects){
    item.tags.forEach(e => {
        tagsList.add(e);
    });
    const divElem = document.createElement("div");
    const imgElem = document.createElement("img");
    const title = document.createElement("p");
    const description = document.createElement("p");
    const buttons = document.createElement("div");
    const demoButton = document.createElement("a");
    const codeButton = document.createElement("a");
    imgElem.src = item.img;
    divElem.appendChild(imgElem);
    divElem.classList.add("project");
    item.tags.forEach(e => {
        divElem.classList.add(e)
    })
    title.innerHTML = item.title;
    description.innerHTML = item.description;
    demoButton.href = item.demoLink;
    demoButton.innerHTML = "Demo";
    codeButton.classList.add("border")
    codeButton.href = item.codeLink;
    codeButton.innerHTML = "Code";
    buttons.classList.add("buttons")
    buttons.appendChild(demoButton);
    buttons.appendChild(codeButton);
    divElem.appendChild(title);
    divElem.appendChild(description);
    divElem.appendChild(buttons);
    projectElement.appendChild(divElem);
}

// Creates the tags and adds them to the document
for (let item of tagsList){
    const tag = document.createElement("button");
    tag.innerHTML = item;
    tag.onclick = function(e){
        tagElement.childNodes.forEach(child=>child.classList.remove("active"))
        e.target.classList.add("active")
        const projects = document.querySelectorAll(".project");
        let filter = e.target.innerHTML;
        projects.forEach(project => {
            project.classList.contains(filter) ? 
            project.classList.remove('hidden') : 
            project.classList.add('hidden');
        });
        makePages()
    };
    tagElement.appendChild(tag)
}
tagElement.childNodes[0].classList.add("active")

function nextPage(){
    console.log(currentPage)
    const numberOfPages = getNumberOfPages();
    if (currentPage+1 <= numberOfPages){
        currentPage = currentPage + 1;
        document.getElementById("pagecontrols").childNodes.forEach(child=>child.classList.remove("active"))
        document.getElementById("pagecontrols").childNodes.forEach(child=>{
            if (child.innerHTML == currentPage){
                child.classList.add("active")
            }
        })
        showPage(currentPage)
    }
}
function backPage(){
    if (currentPage-1 >= 1){
        currentPage = currentPage - 1;
        document.getElementById("pagecontrols").childNodes.forEach(child=>child.classList.remove("active"))
        document.getElementById("pagecontrols").childNodes.forEach(child=>{
            if (child.innerHTML == currentPage){
                child.classList.add("active")
            }
        })
        showPage(currentPage)
    }
}
// Creates the page controls
function makePages(){
    const numberOfPages = getNumberOfPages();
    const controls = document.getElementById("pagecontrols");
    currentPage = 1
    controls.innerHTML = "";
    for(var p=1;p<=numberOfPages;p++){
        const pageLink = document.createElement("button");
        pageLink.innerHTML = p;
        pageLink.onclick = function(e){
            document.getElementById("pagecontrols").childNodes.forEach(child=>child.classList.remove("active"))
            e.target.classList.add("active")
            currentPage = parseInt(e.target.innerHTML)
            console.log(currentPage)
            showPage(e.target.innerHTML)
        }
        controls.appendChild(pageLink);
    }
    controls.childNodes[0].classList.add("active")
    showPage(1);
}

// Displays the current page elements
function showPage(page){
    var currentList = projectElement.querySelectorAll(".project:not(.hidden)");
    const numberPerPage = 3
    const trimStart = (page-1)*numberPerPage
    const trimEnd = trimStart + numberPerPage
    currentList.forEach(project=>project.classList.add('hiddenPage'))
    for (var i = trimStart; i<trimEnd; i++){
        currentList[i].classList.remove('hiddenPage')
    }
}
function getNumberOfPages(){
    var currentList = projectElement.querySelectorAll(".project:not(.hidden)");
    const numberOfItems = currentList.length
    const numberPerPage = 3
    const numberOfPages = Math.ceil(numberOfItems/numberPerPage);
    return numberOfPages;
}

makePages()
