import React from "react";
import "../styles/Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";


function Widgets() {


    const newsArticle = (heading, subtitle) => (
        <div className="widgets-article">
        <div className="widgets-article-left">
        <FiberManualRecordIcon />
        </div>
        <div className="widgets-article-right">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
        </div>
    )



  return (
    <div className="widgets">
      <div className="widgets-header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
      </div>
      {newsArticle("Nil Feinstein cotrols React", "80%")}
      {newsArticle("Coronavirus: Israel Updates ", "Top news - 126")}
      {newsArticle("Tesla hits: Israel Updates ", "Cars news - 529")}
      {newsArticle("Nil Feinstein cotrols React", "80%")}
      {newsArticle("Coronavirus: Israel Updates ", "Top news - 126")}
      {newsArticle("Tesla hits: Israel Updates ", "Cars news - 529")}
      
    </div>
  );
}

export default Widgets;
