var all_magic__box = document.querySelectorAll('.magic__box')

all_magic__box.forEach(magic__box => {
    
    var boxs = document.querySelectorAll('.box')
    
    boxs.forEach(box => {
        var before = box.querySelector('.box__before')
        var after = box.querySelector('.box__after')
    

        before.addEventListener('mouseenter',function(e){
            var relatedTarget = e.relatedTarget;

            while(relatedTarget != before && (relatedTarget!= null  && relatedTarget.nodeName != "BODY") && relatedTarget != document){
                relatedTarget = relatedTarget.parentNode;
            }
            if(relatedTarget != before){
                
                after.style.zIndex = 1;
                before.style.zIndex = -1;
            }
            
        
        
        }); 

        
        after.addEventListener('mouseout', function(e) {

            var relatedTarget = e.relatedTarget;

            while (relatedTarget != after && (relatedTarget != null && relatedTarget.nodeName != 'BODY') && relatedTarget != document) {
                relatedTarget = relatedTarget.parentNode;
            }

            if (relatedTarget != after) {
        
                after.style.zIndex = -1;
                before.style.zIndex = 1;
            }

        });

    });
});