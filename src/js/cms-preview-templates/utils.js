import React from "react";

export class Img extends React.Component {

  render() {
    let src = "test";
    let id = "";
    let className = "";
    let srcSet = "";
    
    if (this.props.field && this.props.entry) {
      className = this.props.entry.getIn(["data", this.props.field, "class"]);
      id = this.props.entry.getIn(["data", this.props.field, "id"]);
      src = this.props.entry.getIn(["data", this.props.field, "src"]) + "." + this.props.entry.getIn(["data", this.props.field, "type"]);
      srcSet = this.props.entry.getIn(["data", this.props.field, "src"]) + "x2." + this.props.entry.getIn(["data", this.props.field, "type"]) + " 2x " + this.props.entry.getIn(["data", this.props.field, "src"]) + "x3." + this.props.entry.getIn(["data", this.props.field, "type"]) + " 3x";
    }
    return (
        <img className={className} id={id} src={src} srcset={srcSet} />
    );
  }
}

