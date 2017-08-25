import React from "react";
import format from "date-fns/format";
import * as Utils from "../cms-preview-templates/utils";

export default class VincePreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    let pathImg =  window.parent.location.protocol + "//" + window.parent.location.host;
    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = pathImg + image;
    }

    let subType = entry.getIn(["data", "intro", "subtype"]);
    subType = "sbv";
    //const subTitle = entry.getIn(["data", "intro", "subtitle"]);
    return <div class={subType}>
      <div id="wrap">
      <section id={subType}>
        <div class="header">
				<div class="title">
        </div>
        <div class="highlight">
				{ widgetFor("headermd") }
				</div>
        < Utils.Img entry={entry} field="headerimagetop" />
        </div>
      </section>
      </div>
    </div>;
  }
}
