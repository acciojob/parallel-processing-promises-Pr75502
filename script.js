//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const err= document.getElementById("error")
const loading= document.getElementById("loading")

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url){
	return new Promise((resolve, reject)=>{
		let img=new Image();
		img.onload=()=>resolve(img);
		img.onerror=()=>reject(`Download Failed:${url}`)
		img.src= url
	})
}
function downloadImages(){
	loading.style.display="block";
	err.textContent="";
	output.innerText="";

const downloadPromises=images.map(url=>downloadImage(url.url))

Promise.all(downloadPromises)
	.then(images=>{
		images.forEach(img=>output.append(img))
	})
	.catch(error => {
		err.textContent = error || "An unknown error occurred";
	})
.finally(()=>{
	loading.style.display="none";
})
}
btn.addEventListener("click", downloadImages)





