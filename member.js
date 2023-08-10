function skillsMember() {
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("memberSkills");
  var memberSkillsList = document.getElementById("memberSkillsList");
  var memberSkillsListItems = document.querySelectorAll(
    "#memberSkillsList > li"
  );
  var memberSkillsListItemsArray = Array.prototype.slice.call(
    memberSkillsListItems
  );
  var memberSkillsListItemsArrayLength = memberSkillsListItemsArray.length;

  // toggle member skills
  memberSkills.addEventListener("click", function() {
    memberSkillsList.classList.toggle("active");
    member.classList.toggle("active");
  });

  // close member skills when clicking outside
  document.addEventListener("click", function(event) {
    if (
      !memberSkills.contains(event.target) &&
      !member.contains(event.target)
    ) {
      memberSkillsList.classList.remove("active");
      member.classList.remove("active");
    }
  });

  // close member skills when pressing escape key
  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      memberSkillsList.classList.remove("active");
      member.classList.remove("active");
    }
  });

  // close member skills when pressing tab key
  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 9) {
      if (memberSkillsList.classList.contains("active")) {
        memberSkillsList.classList.remove("active");
        member.classList.remove("active");
      }
    }
  });

  // close member skills when pressing enter key
  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      if (memberSkillsList.classList.contains("active")) {
        memberSkillsList.classList.remove("active");
        member.classList.remove("active");
      }
    }
  });

  // close member skills when clicking on a skill
  for (var i = 0; i < memberSkillsListItemsArrayLength; i++) {
    memberSkillsListItemsArray[i].addEventListener("click", function() {
      memberSkillsList.classList.remove("active");
      member.classList.remove("active");
    });
  }
}