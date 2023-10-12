function myFunction(x) {
    x.classList.toggle("change");
 }
 




async function callAPi(){
let result = await fetch('./fetch.json');
result = await result.json();
console.warn(result.Course_Detail);
document.getElementById('userdata').innerHTML = result.Course_Detail.map((user) => 
    `<tr>
    <td>${user.serialno}</td>
    <td>${user.date}</td>
    <td>${user.time}</td>
    <td>${user.courseID}</td>
    <td>${user.coursetittle}</td>
    <td>${user.credithours}</td>
    <td>${user.amount}</td>
    <td>${user.registeredby}</td>
    </tr>`
).join("")
    


}
callAPi()