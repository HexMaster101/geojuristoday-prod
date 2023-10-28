// FOR NAVBAR

const navEl = document.getElementById("nav");
const navBtn = document.getElementById("nav-btn");

navBtn.addEventListener("click", () => {
	navEl.classList.toggle("show");
});

// FOR BLOGS

const blogsCon = document.getElementById("blogsCon");

const blogListArray = [
	{
		blogImageLink: "/images/SOUTH CHINA SEA DISPUTE (1).png",
		blogHeading: "South China Sea Dispute",
		blogBy: "Rudraksh Aneja",
		blogDescription:
			"bsfhsh cjsdvw vnowsiv ljeowvnwv kviwhvwe jsvbiu jbv kvjbwv eviuh svbe dhjs vjsbvs  vsvdksjvsd vsdjvksbvs",
	},
];

function elementFromHtml(html) {
	const template = document.createElement("template");
	template.innerHTML = html.trim();
	return template.content.firstElementChild;
}

function createAndAppendBlog(item) {
	let myHtml = elementFromHtml(`
    <div class="blog2">
        <div class="blog-img-con">
          <div class="blog-img" style="background-image: url('${item.blogImageLink}')"></div>
        </div>
        <div class="blog-description">
          <h1 class="blog-des-head">${item.blogHeading}</h1>
          <p class="blog-des-para">${item.blogDescription}</p>
        </div>
    </div>
  `);

	blogsCon.appendChild(myHtml);
}

for (let item of blogListArray) {
	createAndAppendBlog(item);
}
