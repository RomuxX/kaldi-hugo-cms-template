import React from "react";

export default class Page404Preview extends React.Component {
  render() {
    const { widgetFor} = this.props;
    
    return <div className="page-404" >
      <div id="wrap">
      <section id="page-404">
        <div className="header">
				  <div className="title">
            <a href="https://vince.run" target="_blank" rel="noreferrer noopener">
						  <img alt="" src="https://static.vince.run/vince-logo.png" width="114" height="47"/>
					  </a>
          </div>
    
          <div className="highlight">
				    { widgetFor("body") }
				  </div>
          
        </div>
        </section>
      </div>
    </div>;
  }
}
