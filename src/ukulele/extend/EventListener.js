function EventListener(){

}
EventListener.addEventListener = function(element,eventType,handler) {
    if(typeof jQuery !== "undefined"){
        return jQuery(element).on(eventType,handler);
    }else{
        element.addEventListener(eventType,handler);
    }
};
