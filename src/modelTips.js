    app.models
          .initModel({
            id: Clarifai.FACE_DETECT_MODEL,
          })
          .then((faceDetectModel) => {
            return faceDetectModel.predict(
              "https://samples.clarifai.com/face-det.jpg"
            );
          })
          .then((response) => {
            console.log(response);
          });



    onBtnSubmit = () => {
    // image example  https://buffer.com/library/content/images/size/w300/2020/05/Frame-9.png 
    this.setState({imageUrl: this.state.input});
    console.log(this.state.input);
 
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    })
    .catch(error => {
      console.log(error);
    });
  }