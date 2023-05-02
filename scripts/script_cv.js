// TODO #4.0: Change this IP address to EC2 instance public IP address when you are going to deploy this web application
const backendIPAddress = "44.215.179.163:3000";

const authorizeApplication = () => {
  window.location.href = `http://${backendIPAddress}/courseville/auth_app`;
};

// Example: Send Get user profile ("GET") request to backend server and show the response on the webpage
const getUserProfile = async () => {
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Set-Cookie": "cross-site-cookie=name; samesite=none; secure",
    },
  };
  await fetch(
    `http://${backendIPAddress}/courseville/get_profile_info`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      data = data.data;

      console.log(data.account.profile_pic);
      $(
        "user-name"
      ).innerHTML = `${data.student.firstname_en} ${data.student.lastname_en}`;
      $("user-studentId").innerHTML = `${data.student.id} `;
      $("user-profile").src = `${data.account.profile_pict}`;
      // deleteAllCookies();
    })
    .catch((error) => console.error(error));
};

const logout = async () => {
  window.location.href = `http://${backendIPAddress}/courseville/logout`;
};

const getUserCourses = async () => {
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Set-Cookie": "cross-site-cookie=name; samesite=none; secure",
    },
  };
  await fetch(`http://${backendIPAddress}/courseville/get_courses`, options)
    .then((response) => response.json())
    .then((data) => {
      data = data.data;
      console.log(data);
      for (var i = 0; i < data.student.length; ++i) {
        var course = data.student[i];
        if (course.semester == 2) {
          console.log(course.cv_cid);
          filter_genre = course.cv_cid;
          genres.push({
            genre_id: course.cv_cid,
            profile: course.course_icon,
            name: course.title,
            description: course.course_no,
          });
          getCourseAssignments(course.cv_cid);
        }
      }
      
      renderPage();
      setGenres();
    })
    .catch((error) => console.error(error));
};

// const getCourseInfo = async (cv_cid) => {
//   const options = {
//     method: "GET",
//     credentials: "include",
//   };
//   await fetch(
//     `http://${backendIPAddress}/courseville/get_course_info`,
//     options
//   )
//     .then((response) => response.json())
//     .then((data) => {
//           return  {
//             genre_id: data.cv_cid,
//             student_id: $("user-id").value,
//             profile: data.course_icon,
//             name: data.title,
//             description: data.course_no,
//           };

//     })
//     .catch((error) => console.error(error));
// };

const getCourseAssignments = async (cv_cid) => {
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Set-Cookie": "cross-site-cookie=name; samesite=none; secure",
    },
  };
  await fetch(
    `http://${backendIPAddress}/courseville/get_course_assignments/` + cv_cid,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("succeed")
      data = data.data;
      for (var i = 0; i < data.length; ++i) {
        
        var assignment = data[i];
      
    //   for (const assignment in data) {
    //     // assignment.push(getAssignmentInfo(assignment.itemid,cv_cid));
        todo = {
          todo_id: assignment.itemid,
          student_id: $("user-name").value,
          name: assignment.title,
          duedate: assignment.duedate,
          status: assignment.status,
          genre: cv_cid,
          description: (!("undefined"))? "" : '<a href="https://www.mycourseville.com/?q=courseville/worksheet/'+ cv_cid +'/'+assignment.itemid +'" target="new">Go to My Course Ville</a>',
          type: assignment.type,
        };
        console.log(todo.name+" "+todo.genre);
        todos.push(todo);
          // {
        //   todo_id: assignment.itemid,
        //   student_id: $("user-name").value,
        //   name: assignment.title,
        //   duedate: assignment.duedate,
        //   status: assignment.status,
        //   genre: filter_genre,
        //   description: !assignment.instruction ? "" : assignment.instruction,
        //   type: assignment.type,
        // });
      }
      renderPage();
    })
    .catch((error) => console.error(error));
};
