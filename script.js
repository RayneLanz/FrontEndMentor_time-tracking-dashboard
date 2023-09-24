
const daily = document.querySelector('.Daily')
const weekly = document.querySelector('.Weekly')
const monthly = document.querySelector('.Monthly')

// Work
const WorkTime = document.querySelector('.WorkTime')
const Workprev = document.querySelector('.Workprev')
// End Work 

// Play
const PlayTime = document.querySelector('.PlayTime')
const Playprev = document.querySelector('.Playprev')

// Study
const StudyTime = document.querySelector('.StudyTime')
const Studyprev = document.querySelector('.Studyprev')

// ExTime Exprev
const ExTime = document.querySelector('.ExTime')
const Exprev = document.querySelector('.Exprev')

// SocialTime Socialprev
const SocialTime = document.querySelector('.SocialTime')
const Socialprev = document.querySelector('.Socialprev')

// SelfTime Selfprev
const SelfTime = document.querySelector('.SelfTime')
const Selfprev = document.querySelector('.Selfprev')


const url = "./data.json"
async function myData(){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data[5])
    const Work = data[1].timeframes
    
}
myData()





daily.addEventListener("click", function(){
    
    

    async function myData(){
        const response = await fetch(url)
        const data = await response.json()
        
        WorkTime.textContent = data[0].timeframes.daily.current
        Workprev.textContent = data[0].timeframes.daily.previous

        PlayTime.textContent = data[1].timeframes.daily.current
        Playprev.textContent = data[1].timeframes.daily.previous

        StudyTime.textContent = data[2].timeframes.daily.current
        Studyprev.textContent = data[2].timeframes.daily.previous

        ExTime.textContent = data[3].timeframes.daily.current
        Exprev.textContent = data[3].timeframes.daily.previous

        SocialTime.textContent = data[4].timeframes.daily.current
        Socialprev.textContent = data[4].timeframes.daily.previous

        SelfTime.textContent = data[5].timeframes.daily.current
        Selfprev.textContent = data[5].timeframes.daily.previous

    }

    myData()
    
})

weekly.addEventListener("click", function(){

    async function myData(){
        const response = await fetch(url)
        const data = await response.json()

        WorkTime.textContent = data[0].timeframes.weekly.current
        Workprev.textContent = data[0].timeframes.weekly.previous

        PlayTime.textContent = data[1].timeframes.weekly.current
        Playprev.textContent = data[1].timeframes.weekly.previous

        StudyTime.textContent = data[2].timeframes.weekly.current
        Studyprev.textContent = data[2].timeframes.weekly.previous

        ExTime.textContent = data[3].timeframes.weekly.current
        Exprev.textContent = data[3].timeframes.weekly.previous

        SocialTime.textContent = data[4].timeframes.weekly.current
        Socialprev.textContent = data[4].timeframes.weekly.previous

        SelfTime.textContent = data[5].timeframes.weekly.current
        Selfprev.textContent = data[5].timeframes.weekly.previous
        
        
    }
    myData()
    
})

monthly.addEventListener("click", function(){

    async function myData(){
        const response = await fetch(url)
        const data = await response.json()
        

        
        WorkTime.textContent = data[0].timeframes.monthly.current
        Workprev.textContent = data[0].timeframes.monthly.previous

        PlayTime.textContent = data[1].timeframes.monthly.current
        Playprev.textContent = data[1].timeframes.monthly.previous

        StudyTime.textContent = data[2].timeframes.monthly.current
        Studyprev.textContent = data[2].timeframes.monthly.previous

        ExTime.textContent = data[3].timeframes.monthly.current
        Exprev.textContent = data[3].timeframes.monthly.previous

        SocialTime.textContent = data[4].timeframes.monthly.current
        Socialprev.textContent = data[4].timeframes.monthly.previous

        SelfTime.textContent = data[5].timeframes.monthly.current
        Selfprev.textContent = data[5].timeframes.monthly.previous

    }
    myData()
    

})