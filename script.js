


function tema(){

    let classe = document.body.classList.value
    let avatar = document.getElementById('img-avatar');
    let img_git = document.getElementById('img-git');
    let img_insta = document.getElementById('img-insta');
    let img_linkedin = document.getElementById('img-linkedin');
    
    if(classe === ''){
        document.body.classList.add('light');
        img_git.setAttribute('src', './assets/github-light.svg');
        img_insta.setAttribute('src', './assets/instagram-light.svg');
        img_linkedin.setAttribute('src', './assets/linkedin2-light.svg');
        avatar.setAttribute('src', './assets/avatar_light.png');
    }else{
        document.body.classList.remove('light')
        img_git.setAttribute('src', './assets/github.svg');
        img_insta.setAttribute('src', './assets/instagram.svg');
        img_linkedin.setAttribute('src', './assets/linkedin.svg');
        avatar.setAttribute('src', './assets/avatar.png');
    }

    

    

}