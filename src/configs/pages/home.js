const data = {
  content: {
    body: [
      {
        id: "gJZoSLkfZV",
        component: "button",
        title: "Button Label",
        style: { 
          backgroundColor: "#000000",
          color: "White",
          width: "200px"
        },
        variant: "contained",
        onClick: "ShowText()",
        script: "/script/homepage/home.js"
      },
      {
        id: "gJasdfasdf",
        component: "checkbox",
<<<<<<< Updated upstream
        title: "Checkbox Label"
      },
      {
        id: "gJasdasdfasdf",
        component: "input",
        title: "Input Label"
      },
      {
        id: "jsklfjsklfjklsdj",
        component: "videoplayer",
        title: "Video Player",
        videoid: "e44mkrv77Dg",
        opts: {
          height: '390',
          width: '640',
          playerVars: {
            autoplay: 0
          }
        }
=======
        title: "Bar2",
        disabled: false
      },
      {
        id: "gJasdasdfasdf",
        component: "select",
        title: "Test",
        label: "test",
        items: [
          {
            label: "Which Test?",
            value: "none",
            disabled: true
          },
          {
            label: "test1",
            value: "test1"
          },
          {
            label: "test2",
            value: "test3"
          },
          {
            label: "test3",
            value: "test3"
          }
        ]
>>>>>>> Stashed changes
      }
    ]
  }
};

export default data;