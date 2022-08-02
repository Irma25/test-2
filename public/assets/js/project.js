

let projects = []; // Variabel Global



function addProject () {
    // get data from
    let projectName = document.getElementById('add-project-name').value;
    let description = document.getElementById ('description').value; 
    // let checkboxx   = document.getElementById('checkboxx').value;
    // let checkboxSatu = document.getElementById ('nodejs').value;
    // let checkboxdua  = document.getElementById ('reactjs').value;
    // let checkboxtiga = document.getElementById ('nextjs').value;
    // let checkboxEmpat = document.getElementById('typescript').value;
    let image       = document.getElementById ('input-project-image').files[0];

   alert('halo');

    image = URL.createObjectURL(image)

    // console.log(projectName);
    // console.log(description);
    // console.log(image);

    // // Grouping By Object
    let project = {
        projectName : projectName,
        description : description,
        image       : image,
        // checkboxx   : checkboxx,
        // checkboxSatu : checkboxSatu,
        // checkboxdua  : checkboxdua,
        // checkboxtiga : checkboxtiga,
        // checkboxEmpat : checkboxEmpat,
        Author      : 'Irma Damaiyanti',
        postAT      : new Date (),
        // currentTime : new Date (time)

    }

    console.log(project);

    // // store to array
    projects.push(project)

    // console.log(projects);
     renderProject()
     }



    //   memunculkan data checkbox
    // function resultCheckbox (){
    //     let checklis = "";
    //     for ( i = 0; i > checklis.length; i++){
    //         if (checklis[i].checked){
    //             resultCheckbox += checklis[i].value + ", ";
    //         }
    //     }

    //     // document.getElementById('checkboxx').value=selectedbuah;
    // }


    function renderProject (){
        let projectWrapper = document.getElementById('project-list');

        
        projectWrapper.innerHTML = ''

        for ( let i = 0; i < projects.length; i++){

            projectWrapper.innerHTML += 

            ` <div class="project-list-item">
            <div class="card-list-item">
                <div class="item-list-1">
                    <img src="${projects[i].image}" alt="">
                </div>
                <div class="time-project-list">
                    <a href="project-detail.html" target="_blank"><h2>${projects[i].projectName}</h2></a>
                    <p>Durasi 3 Bulan</p>
                </div>
                <div class="notes-list-item-project">
                    <p>${projects[i].description}
                    </p>
                </div>
                <div class="media-sosial-list-item">
                    <div class="img-1">
                        <a href=""><img src="assets/img/playstore.png" alt=""></a>
                    </div>
                    <div class="img-2">
                        <a href=""><img src="assets/img/android-logo.png" alt=""></a>
                    </div>
                    <div class="img-3">
                        <a href=""><img src="assets/img/java.png" alt=""></a>
                    </div>
                </div>
                <div class="button-group">
                    <button class ="edit-btn" type="button">Edit</button>
                    <button class ="delete-btn" type="button">Delete</button>
                </div>
            </div> 
        </div>

            `
        }

    }

    //  1. Convert Format Time
   // 2. Count Duration

    function getFullTime (time){
        let month = [
            'January',
            'February',
            'Maret',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember',
        ]


        // tanggal => getDate()
        // bulan => getMonth()
        // tahun => getFullYear()
        // jam => getHours()
        // menit => getMinutes()

        let date = time.getDate();
        let monthIndex = time.getMonth();
        let year = time.getFullYear();
        let hours = time.getHours();
        let minutes = time.getMinutes();

        let result = `${date} ${month[monthIndex]} ${year} ${hours}:${mininutes} WIB`;

         // console.log(time);
        // console.log(result);

        return result;

    }

    // 1. Hari = milisecondInSecond * secondsInMinute * minuteInHour * hoursInDay
    // 2. jam = milisecondInSecond * secondsInMinute * minuteInHour
    // 3. menit = milisecondInSecond * secondsInMinute
    // 4. detik = milisecondInSecond

    function getDistanceTime (){
        let projectPostAT = new Date (time); //waktu project di upload
        let currentTime = new Date (); // waktu saat ini

        let distance = currentTime - projectPostAT;

        //convert to day
        let dayDistance = Math.floor( distance / (1000 * 60 * 60 *24) )

        if (dayDistance > 0){
            return `$ {dayDistance} day ago`;
        }else{
            // convert to hour
            let hourDistance = Math.floor ( distance / (1000 * 60 * 60) )

            if ( hourDistance > 0){
                return `$ {hourDistance} Hour ago`;
            } else {
                // convert to minute
                let minuteDistance = Math.floor ( distance / (1000 * 60))
            if ( minuteDistance > 0){
                return `$ {minuteDistance} Minute ago`;
            } else {
                // convert to second
                let secondDistance = Math.Floor ( distance / (1000))
                return `$ {secondDistance} Second ago`;
            }
            }


        }
    }

    // Eksekusi code selama interval (second,minute,etc) yang ditentukan
    // #1

    setInterval(function(){
        renderProject()
    }, 1000)

    // // #2
    // setInterval(intervalFunction, 1000)

    // function intervalFunction() {
    //     renderBlog()
    // }











