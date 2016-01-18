import React, { Component, PropTypes } from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router';
import classNames from 'classnames';

class Aside extends Component {
  render() {
    const { user, repoInfo, tree } = this.props;
    const yearNow = new Date().getFullYear();
    const logoCls = classNames({
      'head-logo': true,
      'head-logo-loading': user.loading | repoInfo.loading | tree.loading,
    });

    return (
      <div className="leaf-desktop-aside">
        <div className="head">
          <div className={logoCls}></div>
        </div>
        <div className="body">
          <div className="body-project">
            { repoInfo.loading &&
              <div className="body-project-title">
                <Icon type="loading" />
              </div>
            }
            { !repoInfo.loading &&
              <a href={repoInfo.data.html_url} target="_blank" className="body-project-title">{repoInfo.data.name}</a>
            }
          </div>
          <ul className="body-menu">
            <li className="body-menu-item">
              <Link to={`_posts`} className="link" activeClassName="link-active">
                <Row>
                  <Col span="4">
                    <Icon type="folder"/>
                    <Icon type="folder-open" />
                  </Col>
                  <Col span="20">
                     文章
                  </Col>
                </Row>
              </Link>
            </li>
            {/*
              <li className="body-menu-item">
                <Link to={`_drafts`} className="link" activeClassName="link-active">
                  <Row>
                    <Col span="4">
                      <Icon type="folder" />
                      <Icon type="folder-open" />
                    </Col>
                    <Col span="20">
                       草稿
                    </Col>
                  </Row>
                </Link>
              </li>
            */}
          </ul>
        </div>

        <div className="foot">
          { !user.loading &&
          <Row className="foot-user">
            <Col span="4">
              <img className="foot-user-avatar" src={user.data.avatar_url} />
            </Col>
            <Col span="20" className="foot-user-info">
              <p className="name">{user.data.name || user.data.login}</p>
              <p className="email">{user.data.email}</p>
            </Col>
          </Row>
          }
          {/*
          <Row className="foot-copyright">
            <p className="text">Code & Design by <a href="http://pizn.net">PIZn</a></p>
          </Row>
          */}
        </div>
      </div>
    )
  }
}

export default Aside;
