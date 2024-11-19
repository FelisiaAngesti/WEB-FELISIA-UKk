document.querySelectorAll('a[href=^"#"]a').forEach(anchor=>{
    anchor.addEventListener('click',function(e){

        document.querySelector(this.getAtribute ('href')).ScrollIntoview()
    })
})

)