import React from "react";
import "../../css/widget.css";
import InfoIcon from "@material-ui/icons/Info";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget_top">
        <div className="widget_header">
          <h4>Linkedin News</h4>
          <InfoIcon />
        </div>
        <div className="widget_body">
          <ul className="widget_option"> 
            <li>
              <h4>Tech and startup news roundup</h4>
              <p>4d ago * 2,22 readers</p>
            </li>
            <li>
              <h4>High demand for skilled manpower</h4>
              <p>3d ago * 1,92 readers</p>
            </li>
            <li>
              <h4>Infosys gives out lower bonuses</h4>
              <p>1d ago * 3,92 readers</p>
            </li>
            <li>
              <h4>Less work visas for US, more for UK</h4>
              <p>2h ago * 5,92 readers</p>
            </li>
          </ul>
        </div>
      </div>
      {/* bottom */}
      <div className="widget_top">
        <div className="widget_header">
          <h4>Today's Top Courses</h4>
          <InfoIcon />
        </div>
        <div className="widget_body">
          <ul className="widget_option">
            <li>
              <h4>Learning with a heavy Heat</h4>
              <p>Key Coly</p>
            </li>
            <li>
              <h4>Learning with a heavy Heat</h4>
              <p>Key Coly</p>
            </li>
            <li>
              <h4>Learning with a heavy Heat</h4>
              <p>Key Coly</p>
            </li>
            <li>
              <h4>Learning with a heavy Heat</h4>
              <p>Key Coly</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Widget;
