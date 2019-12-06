jQuery(function($){

    var launch = new Date()

    setDate();
    function setDate() {
        var now = new Date();
        console.log(now.toLocaleDateString());
    }
});