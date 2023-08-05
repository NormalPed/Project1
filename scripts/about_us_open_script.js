function loadModalContent(){
    fetch('about_us_modal.html')
    .then(response => response.text())
    .then(data => {
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = data;
        document.body.appendChild(modalContainer);

        document.getElementById("about-us").addEventListener("click", function() {
            document.getElementById("about-us-modal").style.display = "block";
            console.log('open about us');
        });

        document.querySelector(".close-cross").addEventListener("click", function() {
            document.getElementById("about-us-modal").style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if(event.target === document.getElementById("about-us-modal")){
                document.getElementById("about-us-modal").style.display = "none";
            }
        });
        
    })
    .catch(error => console.log('Error to load about us page modal:', error));
}

loadModalContent();