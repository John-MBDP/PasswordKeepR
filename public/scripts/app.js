
$(document).ready(function () {
  //rendering all dashboard on the page  // fetching tweets from the http://localhost:8080/dashboard page
  const loadDashboard = function () {
    $.ajax({
      url: "http://localhost:8080/dashboard",
      method: "GET",
      dataType: "json",
      success: (organizations) => {
        //render dashboard
        renderOrganizations(organizations);
      },
      error: (err) => {
        console.log(err);
      },
    });
  };
  loadDashboard();

  //rendering all organizations on the page
  const renderOrganizations = function (organizations) {
    $(".meal").empty();
    for (const organization of organizations) {
      const $organization = $(createOrganizationElement(organization));
      //brings the organization to the top
      $(".meal").prepend($organization);
    }
  };

  //Add an Event Listener and Prevent the Default Behaviour
  $("#submit-organization").submit(function (event) {
    event.preventDefault();
    let data = $(this).serialize();
    console.log("running");

    $.ajax({
      url: "/api/users/dashboard",
      method: "POST",
      data: data,
      success: (data) => {
        const dataHtml = createOrganizationElement(data);
        $("#org-card").prepend(dataHtml);
      },
      error: (err) => {
        console.log(err);
      }
    });
  });

  //creating organization with user and content infor
  const createOrganizationElement = function (organization) {
    //Preventing XSS with Escaping(Attacks)
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    let $organization = `
          <div class="meal">
          <img
            <img src=${escape(organization.photo_url)} alt="">
            class="meal-img"
            alt="Amazon image"
          />
          <div class="meal-content">
            <ul class="meal-attributes">
              <li class="meal-attribute">
                <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                <span><strong>${escape(organization.username)}: </strong>${escape(organization.site_password)}</span>
              </li>
              <li class="meal-attribute">
                <button class=btn btn--outline" id="edit">Edit</button>
                <button class=btn btn--outline" id="Delete">Delete</button>
              </li>
            </ul>
          </div>
          </div>
              `
    return $organization;
  };
});
