new Vue({
    el: '#tabs',
    data: { activetab: 1 },
});



new Vue({
  el: '#app',
  data() {
    return {
      timeline_data: [
        {
          "level":"College",
          "school":"University of Missouri",
          "address":"Columbia, Missouri",
          "course":"BS in Information Technology",
          "gpa": "3.11 GPA",
          "yearStart":"2016",
          "yearEnd":"2020"
        },
        {
            "level":"High School",
          "school":"Christian Brothers College High School",
          "address":"St. Louis, Missouri",
          "course":"",
          "gpa": "4.21 GPA",
          "yearStart":"2012",
          "yearEnd":"2016"
            
        },
       
      ]
    }
  }
})