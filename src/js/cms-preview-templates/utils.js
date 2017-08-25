import React from 'react';

export class Img extends React.Component {

  render() {
    const className = this.props.entry.getIn(["data", this.props.field, "class"]);
    const id = this.props.entry.getIn(["data", this.props.field, "id"]);
    const src = this.props.entry.getIn(["data", this.props.field, "src"]) + "." + this.props.entry.getIn(["data", this.props.field, "type"]);
    const srcSet = this.props.entry.getIn(["data", this.props.field, "src"]) + "x2." + this.props.entry.getIn(["data", this.props.field, "type"]) + " 2x " + this.props.entry.getIn(["data", this.props.field, "src"]) + "x3." + this.props.entry.getIn(["data", this.props.field, "type"]) + " 3x";
    return (
      <div>
        {this.props.field}
        {this.props.entry}
     <img class={className} id={id} src={src} srcset={srcSet} />
     </div>
    );
  }
}

