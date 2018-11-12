/*eslint-disable */
import React from 'react';

class SideBar extends React.Component{
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className="leftside-nav" id="Leftside-nav">
            <aside className="sidebar sidebar-left" id="sidebar-left">
                <div className="mini-logo">
                    <a href="https://www.tutorialspoint.com/assets/videos/courses/251/images/course_251_image.png">
                        <img src={data.logo} alt={data.title} />
                        <div className="crs-left-title" style={{ background: "#02b6d7" }}>
                            <div>{data.title}</div>
                        </div>
                        <div className="crs-left-tagline">{data.tagline}</div>
                    </a>
                </div>
                {data.section.map((e, i) => {
                    return (
                        <div className="main-scroll" key={e.id}>
                            <div className="scroller">
                                <ul className="nav left-menu">
                                    <li>
                                        <a href="javascript:void(0);" className="clsSection">{e.name}</a>
                                        <ul className="submenu">
                                            {e.posts.map((e, i) => { return (
                                            <li className={`clsLecture ${i ? '' : 'activebar'}`} id={i} key={e.id}>
                                                <a href="https://www.tutorialspoint.com/reactjs_online_training/index.asp">
                                                    <i className={`${i ? 'fa fa-play-circle-o' : 'fa fa-home'}`}></i> {e.title}
                                                </a>
                                            </li>
                                            ) })}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>                 
                    )
                })}
                <div className="clear"></div>
            </aside>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;