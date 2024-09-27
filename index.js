 
 
 function Login(){
     var username=document.getElementById("inputUsername").value;
     var password=document.getElementById("inputPassword").value;
     var token="bearer ";
    if (username!="" && password!="") {
        const url='https://localhost:7093/api/Auth/login';
        const body = {
            "username": username,
            "password": password
        }
        $.ajax({
            type: "POST",
            url: url,
            contentType: 'application/json',
            data: JSON.stringify(body)
        })
        .done(function(data){
            //console.log(data);
            //alert("SUCCESS");
            token+=data;
            const url2='https://localhost:7093/api/Cities/1';
        $.ajax({
            type: "GET",
            url: url2,
            contentType: 'application/json',
            data: JSON.stringify(body),
            headers: {
                "Authorization": token 
            }
        })
        .done(function(data){
            console.log(data);
            data.forEach(function(city) {
                // Create a new table row with the city data
                const row = `
                    <tr>
                        <td>${city.id}</td>
                        <td>${city.name}</td>
                        <td>${city.photoUrl ? `<a href="${city.photoUrl}">View Photo</a>` : 'No Photo'}</td>
                        <td>${city.description}</td>
                    </tr>
                `;

                // Append the row to the table body
                $("#cityTable tbody").append(row);
            });
           // alert("SUCCESS");
        })
        .fail(function(msg){
            alert("ERROR");
        })
        })
        .fail(function(msg){
            alert("ERROR");
        })
        
        
       
    }
 }
 function Signup(){
    var username=document.getElementById("inputUsername").value;
    var password=document.getElementById("inputPassword").value;
    if (username!="" &&password!="") {
        const url='https://localhost:7093/api/Auth/register';
        const body = {
            "username": username,
            "password": password
        }
        $.ajax({
            type: "POST",
            url: url,
            contentType: 'application/json',
            data: JSON.stringify(body)
        })
        .done(function(data){
            console.log(data);
            alert("You have signed up successfully !");
        })
        .fail(function(msg){
            alert("ERROR");
        })
    }
 }