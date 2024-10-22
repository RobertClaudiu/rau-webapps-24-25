const openCameraBtn = document.getElementById('openCameraBtn');
const takePhotoBtn = document.getElementById('takePhotoBtn');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let stream = null;

openCameraBtn.addEventListener('click', function() {
    if (!stream) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(mediaStream) {
            stream = mediaStream;
            video.srcObject = stream;
            video.style.display = 'block';
            takePhotoBtn.style.display = 'inline-block';
            openCameraBtn.textContent = 'Close Camera';
        })
        .catch(function(err) {
            console.error("Error accessing camera: ", err);
            alert("Camera access denied or not available.");
        });
    } else {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        stream = null;
        video.style.display = 'none';
        takePhotoBtn.style.display = 'none';
        openCameraBtn.textContent = 'Open Camera';
    }
});

takePhotoBtn.addEventListener('click', function() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.style.display = 'block';
});
