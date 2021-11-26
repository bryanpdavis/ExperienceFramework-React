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
      }
    ]
  }
};

export default data;