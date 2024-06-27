import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.scss';

export const Sidebar = () => {
  const [menu, setMenu] = useState('');

  return (
    <div className="sidebar">
      <div className="sidebar__home">
        <Link onClick={() => { setMenu(''); }} to="/">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Logo_Hust.png/800px-Logo_Hust.png' style={{width: '50px',height: '75px'}}/>
        </Link>
      </div>
      <ul className="sidebar__menu">
        <li>
          <Link className={menu === "bai1va7" ? "active" : ""} onClick={() => { setMenu("bai1va7"); }} to="/bai1_7">
            Bài 1 và 7
          </Link>
        </li>
        <li>
          <Link className={menu === "bai2" ? "active" : ""} onClick={() => { setMenu("bai2"); }} to="/bai2">
            Bài 2
          </Link>
        </li>
        <li>
          <Link className={menu === "bai3va4" ? "active" : ""} onClick={() => { setMenu("bai3va4"); }} to="/bai3_4">
            Bài 3 và 4
          </Link>
        </li>
        <li>
          <Link className={menu === "bai5" ? "active" : ""} onClick={() => { setMenu("bai5"); }} to="/bai5">
            Bài 5
          </Link>
        </li>
        <li>
          <Link className={menu === "bai6" ? "active" : ""} onClick={() => { setMenu("bai6"); }} to="/bai6">
            Bài 6
          </Link>
        </li>
      </ul>
    </div>
  );
};
