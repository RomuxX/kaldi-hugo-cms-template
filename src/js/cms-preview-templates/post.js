import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }
    
    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
      <div className="flex justify-between grey-3">
        <div style={{
          width: "80px",
          height: "80px"
        }}></div>
        <p>{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
        <p>Read in x minutes</p>
        <img src={image} alt=""/>
      </div>
      <div className="cms mw6">
        { widgetFor("body") }
        { widgetFor("md") }
      </div>
    </div>;
  }
}
