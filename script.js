filter = {
    setDisplayNone: function(index){
        for(var i=0; i< index.length; i++){
            index[i].style.display = "none";
        }
    },
    setDisplayVisions: function(index){
        for(var i=0; i< index.length; i++){
            index[i].style.display = "";
        }
    },
    switching: function(names){
        this.setDisplayNone(this.init("all"));
        this.setDisplayVisions(this.init(names));
    },
    init: function(index){
        return document.getElementsByClassName(index);
    }
}

function setFilter (arg) {
    $('.b_gallery__item').hide();
    $(arg).show();
}
