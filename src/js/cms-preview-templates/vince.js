import React from "react";
import ReactMarkdown from "react-markdown";
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

    const subType = entry.getIn(["data", "subtype"]);
    const buttonLinkTopUrl = entry.getIn(["data", "buttonLinkTop", "url"]);
    const buttonLinkTopLabel = entry.getIn(["data", "buttonLinkTop", "label"]);
    const buttonLinkBottomUrl = entry.getIn(["data", "buttonLinkBottom", "url"]);
    const buttonLinkBottomLabel = entry.getIn(["data", "buttonLinkBottom", "label"]);

    const buttonInfosBookmarkletUrl = entry.getIn(["data", "infosBookmarklet", "link", "url"]);
    const buttonInfosBookmarkletLabel = entry.getIn(["data", "infosBookmarklet", "link", "label"]);

    const showBookmarklet = entry.getIn(["data", "showBookmarklet"]);
    const showCTA = false; entry.getIn(["data", "showCTA"]);
    const ctaTitle = entry.getIn(["site", "cta", "title"]);
    const ctaSubtitle = entry.getIn(["data", "cta", "subtitle"]);
    const ctaDescription = entry.getIn(["data", "cta", "description"]);
    const ctaLinkLabel = entry.getIn(["data", "cta", "link", "label"]);
    const ctaLinkUrl = entry.getIn(["data", "cta", "link", "url"]);

    const subTitle = entry.getIn(["data", "subtitle"]);
    
    let panelBeforeTitle = subTitle + " by ";
    let panelAfterTitle = "" ;
    if (subType === "trello") {
      panelBeforeTitle = "";
      panelAfterTitle = " " + subTitle;
    }

    return <div className={subType} >
      <div id="wrap">
      <section id={subType}>
        <div className="header">
				  <div className="title">
            {panelBeforeTitle}
            <a href="https://vince.run" target="_blank" rel="noreferrer noopener">
						  <img alt="" src="https://static.vince.run/vince-logo.png" width="114" height="47"/>
					  </a>
            {panelAfterTitle}
          </div>
          { buttonLinkTopLabel && <a  disabled={!buttonLinkTopUrl} href={buttonLinkTopUrl} rel="noreferrer noopener" className="link link-trello">
				  	<svg viewBox="0 0 20 20" height="20px" width="20px" fill="#ffffff">
						  <use href="#icon-rocket"></use>
					  </svg>&nbsp;&nbsp;<span>{buttonLinkTopLabel}</span>
				  </a>}

          <div className="highlight">
				    { widgetFor("headermd") }
				  </div>
          { entry.getIn(["data", "headerimagetop", "src"]) && < Utils.Img entry={entry} field="headerimagetop" />}
        </div>
        <div className="content">
          { entry.getIn(["data", "headerimagebottom", "src"]) && < Utils.Img entry={entry} field="headerimagebottom" />}
          <div className="emoji">{entry.getIn(["data", "emoji"])}</div>
          <div className="content-description">
            {widgetFor("description")}
          </div>
          
          { entry.getIn(["data", "features"]) && <div className="timeline-content">
          {(entry.getIn(["data", "features"]) || []).map((feature, index) =>
             <div className="panel-timeline" key={index}>
              <div>
                { feature.get("contentmd") && <ReactMarkdown source={feature.get("contentmd")} />}
              </div>
              <div>
                {feature.get("image") && <img src={feature.get("image") + ".png"}/>}
                </div>
            </div>)}
          </div>}

          <div className="content-more">
            { widgetFor("more")}
            { widgetFor("moredescription")}
          </div>
          {buttonLinkBottomLabel && <a disabled={!buttonLinkBottomUrl} href={buttonLinkBottomUrl} rel="noreferrer noopener" className="link link-trello">
            	<svg viewBox="0 0 20 20" height="20px" width="20px" fill="#ffffff">
						  <use href="#icon-rocket"></use>
					  </svg>&nbsp;&nbsp;<span>{buttonLinkBottomLabel}</span>
            </a>}
        </div>
        { showBookmarklet && <div className="infos">
            {<ReactMarkdown source={entry.getIn(["data","infosbookmarklet", "contentmd"])} />}
            {buttonInfosBookmarkletLabel && <a href={buttonInfosBookmarkletUrl} rel="noreferrer noopener" className="link link-trello">
            	<svg viewBox="0 0 20 20" height="20px" width="20px" fill="#ffffff">
						  <use href="#icon-rocket"></use>
					  </svg>&nbsp;&nbsp;<span>{buttonInfosBookmarkletLabel}</span>
            </a>}
          </div>
          }
          { showCTA && <div className="vince-cta">
            
    <div>
  <h1>
    {ctaTitle}&nbsp;
    <div className="switch-feeling">
      <span>💩</span>
      <span>😱</span>
      <span>😠</span>
      <span>💀</span>
      <span>😤</span>
      <span>😬</span>
    </div>
    <span>&nbsp;?</span>
    <br/>{ctaSubtitle}<br/>
  </h1>
  <h2>
     {ctaDescription}
  </h2>
  <a href={ctaLinkUrl} target="_blank" rel="noreferrer noopener" className="link link-vince">
    <span>{ctaLinkLabel}</span>
  </a>
  </div>
          </div>}
      </section>
      </div>
    </div>;
  }
}
