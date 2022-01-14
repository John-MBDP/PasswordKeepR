$(document).ready(function () {
  //rendering all dashboard on the page  // fetching tweets from the http://localhost:8080/dashboard page

  const loadDashboard = function () {
    let url = $(location).attr("href");
    url = url.split("dashboard");
    if (url.length === 1) {
      url = "/api/users/dashboards";
    } else {
      url = url[url.length - 1];
      url = url.split("?")[0];
      url = `/api/users/dashboard/json${url}`;
    }

    console.log("URL", url);
    $.ajax({
      url,
      method: "GET",
      dataType: "json",
      success: (organizations) => {
        //render dashboard
        renderOrganizations(organizations.users);
      },
      error: (err) => {
        console.log("error:", err);
      },
    });
  };
  loadDashboard();

  //rendering all organizations on the page
  const renderOrganizations = function (organizations) {
    $("#org-card").empty();
    for (const organization of organizations) {
      const $organization = createOrganizationElement(organization);
      console.log($organization);
      //brings the organization to the top
      $("#org-card").prepend($organization);
    }
  };

  //Add an Event Listener and Prevent the Default Behaviour
  $("#submit-organization").submit(function (event) {
    event.preventDefault();
    let data = $(this).serialize();
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
      },
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
            <img class="meal-img" src="//logo.clearbit.com/${escape(
              organization.name
            )}.com" alt=""/>

          <div class="meal-content">
            <ul class="meal-attributes">
              <li class="meal-attribute">
              <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
              <a href="http://www.${escape(
                organization.domain
              )}.com" target="_blank">${escape(organization.name)}</a>
              </li>
              <li class="meal-attribute">
              <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
              <span> <strong data-testid=${organization.id}>${escape(
      organization.username
    )}: </strong >
              <strong data-testid=${organization.id}>${escape(
      organization.site_password
    )} </strong >
               </span>
            </li>
              <li class="meal-attribute">
              <form method="GET" action="/api/users/dashboard/edit/${escape(
                organization.id
              )}" >
                <button type="submit" class="btn btn--outline" data-testid=${
                  organization.id
                }
                  id="edit-${escape(organization.id)}">Edit</button></form>
                <form method="POST" action="/api/users/dashboard/${escape(
                  organization.id
                )}" >
                <button  type="submit" class="btn btn--outline" data-testid=${
                  organization.id
                }
                 id="delete-${escape(organization.id)}">Delete</button></form>
              </li>
            </ul>
          </div>
          </div>
              `;
    return $organization;
  };

  // Filtering category wise

  let filterForm = $("#filter-form");
  $("#select-where").change(function () {
    let value = $(this).val();
    filterForm.attr("action", `/api/users/dashboard/${value}`);
    filterForm.submit();
  });
});
