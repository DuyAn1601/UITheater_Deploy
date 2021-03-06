import React from 'react';
import './SignUp.css';
import Logo from '../Assets/Images/logo.png';
import SignInImg from '../Assets/Images/SignInImg.png';

function SignUp({handleShowSignUp2}) {
  const handleShow = () => {   
    handleShowSignUp2(false);
  }

  return (
    <div className="signUpWrap" onClick={handleShow}>
      <div className="signUp" onClick={e => e.stopPropagation()}>

        <img src={SignInImg} alt="Movie Time" />

        <div className="signUp_form">
          <div className="triangle"></div>
          <i className="fas fa-times-circle" onClick={handleShow}></i><br />
          <img src={Logo} alt="Logo" />
          <h1>ĐĂNG KÍ THÀNH VIÊN</h1>
          <input type="text" placeholder="Họ và tên (*)" name="userName"/>
          {/*<input type="date" name="dob" />*/}
          <input type="text" placeholder="Ngày sinh (*)" name="dob" />
          <input type="email" placeholder="Email hoặc số điện thoại (*)" name="userEmail"/>
          <input type="password" placeholder="Mật khẩu (*)" name="userPassword"/>
          <input type="password" placeholder="Nhập lại mật khẩu (*)" name="userPasswordAgain"/>
          <div className="signUp_check">
            <input type="checkbox" name="remember" />
            <label htmlFor="remember">Khách hành đồng ý với các <a href="#">điều khoản</a> thành viên của UITheater</label>
          </div>
          <button>Đăng ký</button>
          <div className="signUp_toSignUp">
            <span>Đã có tài khoản?</span>
            <button>Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
