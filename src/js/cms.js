import React from "react";
import CMS from "netlify-cms";

import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import VincePreview from "./cms-preview-templates/vince";



// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("vinceen", VincePreview);
CMS.registerPreviewTemplate("vincefr", VincePreview);
CMS.registerPreviewTemplate("scrumen", VincePreview);
CMS.registerPreviewTemplate("scrumfr", VincePreview);
CMS.registerPreviewTemplate("bookleten", VincePreview);
CMS.registerPreviewTemplate("bookletfr", VincePreview);
CMS.registerPreviewTemplate("projecten", VincePreview);
CMS.registerPreviewTemplate("projectfr", VincePreview);
CMS.registerWidget("color", ColorControl);
