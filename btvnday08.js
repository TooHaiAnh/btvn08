document.getElementById('myBtn').addEventListener('click', getData);
function clickl(){
let dt = fetch(https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log('success:',data.detail);
});
console.log(dt);
}