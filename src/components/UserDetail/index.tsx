import * as React from 'react';
import "./style.scss";
import { Col, Form, Input, Row } from "antd";

export interface IUserDetailProps {
}

export function UserDetail (props: IUserDetailProps) {
  return (
    <div className="userdetail">
       <div className="userdetail__container">
            <div className="userdetail__panel">
                <div className="userdetail__panel--left">
                    <img 
                        src={require('../../configs/images/avatar.png')}
                        className="userdetail__panel--left-avatar"
                        alt="Noti"/>
                    <button className="userdetail__panel--left-avatar-upload" >
                        <img 
                            src={require('../../configs/icons/upload.png')}
                            className="userdetail__panel--left-avatar-uploadimg"
                            alt="Noti"/>
                    </button>
                    <div className="userdetail__panel--left-name" >
                        <span className="userdetail__panel--left-name-user">Nguyễn Võ Minh Khang</span>
                    </div>
                </div>
                <Form className="userdetail__panel--form">
                  <section  className="userdetail__panel--form-left">
                    <Form.Item>
                        <p className="userdetail__panel--form-title">Tên người dùng</p>
                        <Input  placeholder={"Nguyễn Võ Minh Khang"} className="userdetail__panel--form-input"/>
                    </Form.Item>
                    <Form.Item>
                        <p className="userdetail__panel--form-title">Số điện thoại</p>
                        <Input  placeholder={"0336069719"} className="userdetail__panel--form-input"/>
                    </Form.Item>
                    <Form.Item>
                        <p className="userdetail__panel--form-title">Email</p>
                        <Input  placeholder={"nguyenvominhkhang0509@gmail.com"} className="userdetail__panel--form-input"/>
                    </Form.Item>
                  </section>
                  <section  className="userdetail__panel--form-right" >
                    <Form.Item>
                        <p className="userdetail__panel--form-title">Tên đăng nhập</p>
                        <Input  placeholder={"minhkhang0509"} className="userdetail__panel--form-input"/>
                    </Form.Item>
                    <Form.Item>
                        <p className="userdetail__panel--form-title">Mật khẩu</p>
                        <Input  placeholder={"123456"} className="userdetail__panel--form-input"/>
                    </Form.Item>
                    <Form.Item>
                        <p className="userdetail__panel--form-title">Vai trò</p>
                        <Input  placeholder={"Front end Developer"} className="userdetail__panel--form-input"/>
                    </Form.Item>
                  </section>
                </Form>
            </div>
      </div>
    </div>
  );
}
