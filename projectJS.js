document.getElementById("inputButton").addEventListener('click',createPlan)

document.getElementById("verify").addEventListener('click', verifyEmail)

function verifyEmail(e){
    e.preventDefault();
    let inputValue = document.getElementById('email').value;
    let regex =   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!regex.test(inputValue)) {
        alert("Please enter a valid email");
        return false;
    } else {
        alert("Email validated");
        $("#inputButton").show();
        $("#verify").hide();
        return true;
    }
}

function createPlan(){
    breakfast1 = document.getElementById("Breakfast1").value;
    snack11 = document.getElementById("Morning Snack1").value;
    lunch1 = document.getElementById("Lunch1").value;
    snack21 = document.getElementById("Afternoon Snack1").value;
    dinner1 = document.getElementById("Dinner1").value;

    breakfast2 = document.getElementById("Breakfast2").value;
    snack12 = document.getElementById("Morning Snack2").value;
    lunch2 = document.getElementById("Lunch2").value;
    snack22 = document.getElementById("Afternoon Snack2").value;
    dinner2 = document.getElementById("Dinner2").value;

    breakfast3 = document.getElementById("Breakfast3").value;
    snack13 = document.getElementById("Morning Snack3").value;
    lunch3 = document.getElementById("Lunch3").value;
    snack23 = document.getElementById("Afternoon Snack3").value;
    dinner3 = document.getElementById("Dinner3").value;

    breakfast4 = document.getElementById("Breakfast4").value;
    snack14 = document.getElementById("Morning Snack4").value;
    lunch4 = document.getElementById("Lunch4").value;
    snack24 = document.getElementById("Afternoon Snack4").value;
    dinner4 = document.getElementById("Dinner4").value;

    breakfast5 = document.getElementById("Breakfast5").value;
    snack15 = document.getElementById("Morning Snack5").value;
    lunch5 = document.getElementById("Lunch5").value;
    snack25 = document.getElementById("Afternoon Snack5").value;
    dinner5 = document.getElementById("Dinner5").value;

    breakfast6 = document.getElementById("Breakfast6").value;
    snack16 = document.getElementById("Morning Snack6").value;
    lunch6 = document.getElementById("Lunch6").value;
    snack26 = document.getElementById("Afternoon Snack6").value;
    dinner6 = document.getElementById("Dinner6").value;

    breakfast7 = document.getElementById("Breakfast7").value;
    snack17 = document.getElementById("Morning Snack7").value;
    lunch7 = document.getElementById("Lunch7").value;
    snack27 = document.getElementById("Afternoon Snack7").value;
    dinner7 = document.getElementById("Dinner7").value;

    userName = document.getElementById("name").value;
    userGoal = document.getElementById("goal").value;
    userEMAIL = document.getElementById("email").value;

    planner = ("<!DOCTYPE html>\n<html>\n<head>\n<title>" + userName + "'s Mealplan</title>\n</head>\n")
    planner += ("<h1>" + userName + "'s Goal</h1>\n<body>\n")
    planner += (userGoal + "<br>" +  "<br><input type = 'button' id ='printButton' value = 'Print Mealplan'> </body>\n")

    planner += ("<h1>Monday</h1>\n<body>\n")
    planner += ("<br>Breakfast: " + breakfast1 + "<br>Morning Snack: " + snack11)
    planner += ("<br>Lunch: " + lunch1 + "<br>Afternoon Snack: " + snack21)
    planner += ("<br>Dinner: " + dinner1)
    planner += ("</body>\n")

    planner += "<h1>Tuesday</h1>\n<body>\n"
    planner += ("<br>Breakfast: " + breakfast2 + "<br>Morning Snack: " + snack12)
    planner += ("<br>Lunch: " + lunch2 + "<br>Lunch: " + lunch2 + "<br>Afternoon Snack: " + snack22)
    planner += ("<br>Dinner: " + dinner2)
    planner += ("</body>\n")

    planner += "<h1>Wednesday</h1>\n<body>\n"
    planner += ("<br>Breakfast: " + breakfast3 + "<br>Morning Snack: " + snack13)
    planner += ("<br>Lunch: " + lunch3 + "<br>Afternoon Snack: " + snack23)
    planner += ("<br>Dinner: " + dinner3)
    planner += ("</body>\n")

    planner += "<h1>Thursday</h1>\n<body>\n"
    planner += ("<br>Breakfast: " + breakfast4 + "<br>Morning Snack: " + snack14)
    planner += ("<br>Lunch: " + lunch4 + "<br>Afternoon Snack: " + snack24)
    planner += ("<br>Dinner: " + dinner4)
    planner += ("</body>\n")

    planner += "<h1>Friday</h1>\n<body>\n"
    planner += ("<br>Breakfast: " + breakfast5 + "<br>Morning Snack: " + snack15)
    planner += ("<br>Lunch: " + lunch5 + "<br>Afternoon Snack: " + snack25)
    planner += ("<br>Dinner: " + dinner5)
    planner += ("</body>\n")

    planner += "<h1>Saturday</h1>\n<body>\n"
    planner += ("<br>Breakfast: " + breakfast6 + "<br>Morning Snack: " + snack16)
    planner += ("<br>Lunch: " + lunch6 + "<br>Afternoon Snack: " + snack26)
    planner += ("<br>Dinner: " + dinner6)
    planner += ("</body>\n")

    planner += "<h1>Sunday</h1>\n<body>\n"
    planner += ("<br>Breakfast: " + breakfast7 + "<br>Morning Snack: " + snack17)
    planner += ("<br>Lunch: " + lunch7 + "<br>Afternoon Snack: " + snack27)
    planner += ("<br>Dinner: " + dinner7)

    planner += ("<script>")
    planner += ("document.getElementById('printButton').addEventListener('click', function() {window.print();})")
    planner +=("</script>")

    planner += ("</body>\n")


    flyWindow = window.open('about:blank','myPop','width=800,height=800,left=400,top=400');
    flyWindow.document.write(planner);
}