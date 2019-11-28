;(function  (){

    function jQuery(select) {
        return new Init(select);
    }
    //构造
    function Init(select) {
        let elements =document.querySelectorAll(select);

        for(let i = 0 ; i<elements.length; i++){
            this[i]=elements[i];
        }
        this.length=elements.length;
    }
})