function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('.file-upload').hide();
			$('#loading').show();
			$('.file-upload-image').attr('src', e.target.result);
			$('.file-upload-content').show();
		};

		reader.readAsDataURL(input.files[0]);
		init().then(function () {
			console.log('hello');
			predict();
			createNumbers();
			$('#loading').hide();
			$('.face-content').show();
		});
	} else {
		removeUpload();
	}
}

function removeUpload() {
	$('.file-upload-input').replaceWith($('.file-upload-input').clone());
	$('.file-upload-content').hide();
	$('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
	$('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
	$('.image-upload-wrap').removeClass('image-dropping');
});

const urlMale = "https://teachablemachine.withgoogle.com/models/g2TUfSkAe/";
const urlFemale = "https://teachablemachine.withgoogle.com/models/xzu0goRRv/";

const urlMaleFace = 'https://teachablemachine.withgoogle.com/models/o9alrpU5P/'
const urlFemaleFace = 'https://teachablemachine.withgoogle.com/models/oOS0Uy5ni/'

const urlSmailFace = 'https://teachablemachine.withgoogle.com/models/fPNKIm2IP/'

let model, webcam, labelContainer1, labelContainer2, maxPredictions1, maxPredictions2;

// Load the image model and setup the webcam
async function init() {
	if (document.getElementById('gender').checked) {
		URL1 = urlMale;
		URL2 = urlMaleFace;
	} else {
		URL1 = urlFemale;
		URL2 = urlFemaleFace;
	}
	const modelURL1 = URL1 + 'model.json';
	const metadataURL1 = URL1 + 'metadata.json';

	const modelURL2 = URL2 + 'model.json';
	const metadataURL2 = URL2 + 'metadata.json';

	const modelURL3 = urlSmailFace + 'model.json';
	const metadataURL3 = urlSmailFace + 'metadata.json';

	model1 = await tmImage.load(modelURL1, metadataURL1);
	model2 = await tmImage.load(modelURL2, metadataURL2);
	model3 = await tmImage.load(modelURL3, metadataURL3);
	maxPredictions1 = model1.getTotalClasses();
	labelContainer1 = document.getElementById('label-container1');
	labelContainer2 = document.getElementById('label-container2');
	for (let i = 0; i < maxPredictions1; i++) {
		labelContainer1.appendChild(document.createElement('div'));
	}
	for (let i = 0; i < 5; i++) {
		var createFaceDiv = document.createElement("div");
		createFaceDiv.setAttribute("style", "width: 20%");
		labelContainer2.appendChild(createFaceDiv);
	}
}

// run the webcam image through the image model
async function predict() {
	// predict can take in an image, video or canvas html element
	var image = document.getElementById('face-image');
	var gender = document.getElementById('gender').checked;

	const prediction1 = await model1.predict(image, false);
	const prediction2 = await model2.predict(image, false);
	const prediction3 = await model3.predict(image, false);
	prediction1.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
	prediction2.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
	prediction3.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));

	var title = "<div class='card-header'><h4 class='card-title '" + prediction1[0].className + "'>["+prediction3[0].className+"] " + getFaceData(prediction1[0].className, gender)[0] +'</h4></div>';
	var explain = "<div class='card-body'><p class='card-text'>" + getFaceData(prediction1[0].className, gender)[1] + '</p></div>';
	var celeb = "<div class='" + prediction1[0].className + "-animal-celeb pt-2 pb-2'>" + getFaceData(prediction1[0].className, gender)[2] + '</div>';
	$('#result-message').html(title + explain + celeb);

	if(prediction3[0].className == "울상"){
		$("#face-icon").attr("src", "./img/ico/"+getFaceData(prediction1[0].className, gender)[3]+"2.png");
	}else{
		$("#face-icon").attr("src", "./img/ico/"+getFaceData(prediction1[0].className, gender)[3]+"1.png");
	}

	var barWidth;
	for (let i = 0; i < maxPredictions1; i++) {
		if (prediction1[i].probability.toFixed(2) > 0.1) {
			barWidth = Math.round(prediction1[i].probability.toFixed(2) * 100) + '%';
		} else if (prediction1[i].probability.toFixed(2) >= 0.01) {
			barWidth = '4%';
		} else {
			barWidth = '2%';
		}
		var label = "<li class='list-group-item border-0 d-flex align-items-center'><div class='feather feather-facebook me-2'>" + prediction1[i].className + "</div>";
		var bar = "<span class='progress w-100'><div class='progress-bar progress-bar-striped progress-bar-animated bg-"+i+" " +
			prediction1[i].className +
			"' style='width: "+barWidth+"' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'>"+Math.round(prediction1[i].probability.toFixed(2) * 100)+"%</div></span>"
		labelContainer1.childNodes[i].innerHTML = label + bar;
	}

	for (let i = 0; i < 6; i++) {

		var label = "<div class='swiper-slide text-center swiper-slide-active' style='margin: 0 auto;'><figure class='avatar avatar-60 m-1 rounded-circle'><img src='"+getFaceImg(prediction2[i].className)+"' style='width: 100%;'></figure><p class='mt-2 mb-0'>"+prediction2[i].className+" <p class='tx-"+i+"'>"+Math.round(prediction2[i].probability.toFixed(2) * 100)+"%</p></p></div>"
		labelContainer2.childNodes[i].innerHTML = label;
	}
}

document.write("<script src='./js/researchData.js'></script>");
document.write("<script src='./js/lottoData.js'></script>");